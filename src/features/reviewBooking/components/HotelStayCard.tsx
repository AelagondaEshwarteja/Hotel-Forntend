import { format, parseISO } from "date-fns";
import { MapPin, Moon, Star } from "lucide-react";
import type { HotelContentData } from "../../hotelDetail/types/hotelDetailTypes";
import type { ReviewStayContext } from "../types/reviewTypes";

type HotelStayCardProps = {
  hotel: HotelContentData;
  stay: ReviewStayContext;
};

export function HotelStayCard({ hotel, stay }: HotelStayCardProps) {
  const checkIn = parseISO(stay.checkIn);
  const checkOut = parseISO(stay.checkOut);
  const address = [hotel.address.area, hotel.address.city, hotel.address.country].filter(Boolean).join(", ");

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-base font-bold leading-snug text-foreground">{hotel.name}</h2>

      <div className="mt-1 flex items-start gap-1 text-xs text-muted-foreground">
        <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
        <span>{address}</span>
      </div>

      <div className="mt-1.5 flex items-center gap-0.5">
        {Array.from({ length: hotel.starRating }).map((_, index) => (
          <Star key={index} aria-hidden="true" className="size-3.5 fill-primary text-primary" />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Check-In</p>
          <p className="mt-0.5 text-sm font-bold text-foreground">{format(checkIn, "EEE, d MMM")}</p>
          <p className="text-xs text-muted-foreground">{hotel.checkIn}</p>
        </div>

        <div className="flex flex-col items-center gap-1 px-2">
          <Moon aria-hidden="true" className="size-4 text-primary" />
          <span className="whitespace-nowrap text-[0.65rem] font-semibold text-muted-foreground">
            {stay.nights} {stay.nights === 1 ? "Night" : "Nights"}
          </span>
        </div>

        <div className="text-right">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Check-Out</p>
          <p className="mt-0.5 text-sm font-bold text-foreground">{format(checkOut, "EEE, d MMM")}</p>
          <p className="text-xs text-muted-foreground">{hotel.checkOut}</p>
        </div>
      </div>

      <p className="mt-3 text-xs font-medium text-muted-foreground">
        {stay.rooms} {stay.rooms === 1 ? "Room" : "Rooms"}, {stay.guests} Guests
      </p>
    </section>
  );
}
