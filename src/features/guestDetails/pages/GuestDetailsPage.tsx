import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { CURRENT_USER_PROFILE } from "../../profile/data/profileData";
import { AppHeader } from "../../../shared/components/AppHeader";
import { ErrorState } from "../../../shared/components/ErrorState";
import { PageTransition } from "../../../shared/components/PageTransition";

import { ContactDetailsSection } from "../components/ContactDetailsSection";
import { GstDetailsRow } from "../components/GstDetailsRow";
import { GuestDetailsFooterBar } from "../components/GuestDetailsFooterBar";
import { RoomGuestForm } from "../components/RoomGuestForm";
import { MAX_ROOMS_PER_BOOKING } from "../types/guestDetailsTypes";
import type { ContactDetails, GstDetails, RoomGuest } from "../types/guestDetailsTypes";
import { GuestDetailsFormSchema } from "../validation/guestDetailsValidation";

const GuestDetailsRouteStateSchema = z.object({
  rooms: z.number().int().min(1),
  nights: z.number().int().min(1),
  amount: z.number().nonnegative(),
  hotelName: z.string().trim().min(1).optional(),
  hotelEmail: z.string().trim().email().optional(),
});


function buildInitialRooms(count: number): RoomGuest[] {
  return Array.from({ length: count }, (_, index) => ({
    roomNumber: index + 1,
    title: "Mr",
    firstName: index === 0 ? CURRENT_USER_PROFILE.firstName : "",
    lastName: index === 0 ? CURRENT_USER_PROFILE.lastName : "",
  }));
}

type FieldErrors = {
  rooms: Record<number, { firstName?: string; lastName?: string }>;
  contact: { email?: string; phone?: string };
  gst: { gstNumber?: string; companyName?: string };
};

const NO_ERRORS: FieldErrors = { rooms: {}, contact: {}, gst: {} };

export default function GuestDetailsPage() {
  const { hotelId = "" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const contextResult = GuestDetailsRouteStateSchema.safeParse(location.state);

  const roomCount = contextResult.success
    ? Math.min(Math.max(contextResult.data.rooms, 1), MAX_ROOMS_PER_BOOKING)
    : 0;

  const [rooms, setRooms] = useState<RoomGuest[]>(() => buildInitialRooms(roomCount));
  const [activeRoomNumber, setActiveRoomNumber] = useState<number>(1);
  const [contact, setContact] = useState<ContactDetails>({
    email: CURRENT_USER_PROFILE.email,
    countryCode: CURRENT_USER_PROFILE.countryCode,
    phone: CURRENT_USER_PROFILE.phone,
  });
  const [gst, setGst] = useState<GstDetails | undefined>(undefined);
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS);

  if (!contextResult.success) {
    return (
      <PageTransition>
        <ErrorState
          title="Missing booking details"
          description="We couldn't find a room selection to collect guest details for. Please choose a room again."
          actionLabel="Back to room selection"
          onAction={() => navigate(hotelId ? `/hotels/${hotelId}/rooms` : "/home")}
        />
      </PageTransition>
    );
  }

  const context = contextResult.data;
  const suggestedCompanyName = `${context.hotelName ?? "Hotel Booking"} - ${roomCount} ${roomCount === 1 ? "Room" : "Rooms"}`;

  function updateRoom(roomNumber: number, patch: Partial<Omit<RoomGuest, "roomNumber">>) {
    setRooms((current) =>
      current.map((room) => (room.roomNumber === roomNumber ? { ...room, ...patch } : room)),
    );
  }

  function handleProceed() {
    const parsed = GuestDetailsFormSchema.safeParse({ rooms, contact, gst });

    if (!parsed.success) {
      const nextErrors: FieldErrors = { rooms: {}, contact: {}, gst: {} };

      for (const issue of parsed.error.issues) {
        const [section, indexOrField, field] = issue.path;

        if (section === "rooms" && typeof indexOrField === "number" && typeof field === "string") {
          const roomNumber = rooms[indexOrField]?.roomNumber;
          if (roomNumber === undefined) continue;
          nextErrors.rooms[roomNumber] = { ...nextErrors.rooms[roomNumber], [field]: issue.message };
        } else if (section === "contact" && typeof indexOrField === "string") {
          nextErrors.contact = { ...nextErrors.contact, [indexOrField]: issue.message };
        } else if (section === "gst" && typeof indexOrField === "string") {
          nextErrors.gst = { ...nextErrors.gst, [indexOrField]: issue.message };
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors(NO_ERRORS);

  }

  return (
    <PageTransition>
      <AppHeader title="Guest Details" />

      <div className="flex flex-col gap-5 bg-linear-to-b from-secondary/30 to-background px-4 pb-5 pt-2">
        {rooms.map((room) => (
          <RoomGuestForm
            key={room.roomNumber}
            room={room}
            errors={errors.rooms[room.roomNumber]}
            isActive={activeRoomNumber === room.roomNumber}
            onActivate={() => setActiveRoomNumber(room.roomNumber)}
            onChange={(patch) => updateRoom(room.roomNumber, patch)}
          />
        ))}

        <ContactDetailsSection
          contact={contact}
          errors={errors.contact}
          onChange={(patch) => setContact((current) => ({ ...current, ...patch }))}
        />

        <GstDetailsRow
          gst={gst}
          errors={errors.gst}
          suggestedCompanyName={suggestedCompanyName}
          onChange={(patch) =>
            setGst((current) => ({
              gstNumber: current?.gstNumber ?? "",
              companyName: current?.companyName ?? "",
              ...current,
              ...patch,
            }))
          }
          onClear={() => setGst(undefined)}
        />
      </div>

      <GuestDetailsFooterBar
        rooms={roomCount}
        nights={context.nights}
        amount={context.amount}
        onProceed={handleProceed}
      />
    </PageTransition>
  );
}