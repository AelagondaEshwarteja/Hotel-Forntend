import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { CalendarDays, ChevronLeft, Pencil, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { HotelSearchQueryParams } from "../../hotelList/types/hotelListTypes";

type Props = { hotelName: string; search: HotelSearchQueryParams };

export function RoomSelectionHeader({ hotelName, search }: Props) {
  const navigate = useNavigate();
  const checkIn = parseISO(search.checkIn);
  const checkOut = parseISO(search.checkOut);
  const nights = Math.max(1, differenceInCalendarDays(checkOut, checkIn));
  const guests = search.adults + search.children;

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 pb-3 pt-[calc(.75rem+env(safe-area-inset-top))]">
        <button type="button" aria-label="Go back" onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition active:scale-95">
          <ChevronLeft className="size-5" />
        </button>
        <div className="min-w-0 flex-1 text-center">
          <h1 className="text-base font-bold">Select Room</h1>
          <p className="truncate text-xs text-muted-foreground">{hotelName}</p>
        </div>
        <span className="size-10" aria-hidden="true" />
      </div>

      <div className="mx-4 mb-3 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><CalendarDays className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold">{format(checkIn, "d MMM")} – {format(checkOut, "d MMM")}</p>
          <p className="text-[11px] text-muted-foreground">{nights} Night{nights > 1 ? "s" : ""}</p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Users className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold">{guests} Guest{guests !== 1 ? "s" : ""}</p>
          <p className="text-[11px] text-muted-foreground">{search.rooms} Room{search.rooms > 1 ? "s" : ""}</p>
        </div>
        <button type="button" aria-label="Edit search" onClick={() => navigate("/home")} className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition active:scale-95"><Pencil className="size-3.5" /></button>
      </div>
    </header>
  );
}
