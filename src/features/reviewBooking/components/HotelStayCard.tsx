import { format, parseISO } from "date-fns";
import { MapPin, Moon, Star } from "lucide-react";
import type { ReviewHotelContext } from "../types/reviewTypes";

type HotelStayCardProps = {
  hotel: ReviewHotelContext;
};

export function HotelStayCard({ hotel }: HotelStayCardProps) {
  const checkIn = parseISO(hotel.checkIn);
  const checkOut = parseISO(hotel.checkOut);

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-base font-bold leading-snug text-foreground">{hotel.name}</h2>

      <div className="mt-1 flex items-start gap-1 text-xs text-muted-foreground">
        <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
        <span>{hotel.address}</span>
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
          <p className="text-xs text-muted-foreground">2:00 PM</p>
        </div>

        <div className="flex flex-col items-center gap-1 px-2">
          <Moon aria-hidden="true" className="size-4 text-primary" />
          <span className="whitespace-nowrap text-[0.65rem] font-semibold text-muted-foreground">
            {hotel.nights} {hotel.nights === 1 ? "Night" : "Nights"}
          </span>
        </div>

        <div className="text-right">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Check-Out</p>
          <p className="mt-0.5 text-sm font-bold text-foreground">{format(checkOut, "EEE, d MMM")}</p>
          <p className="text-xs text-muted-foreground">11:00 AM</p>
        </div>
      </div>

      <p className="mt-3 text-xs font-medium text-muted-foreground">
        {hotel.rooms} {hotel.rooms === 1 ? "Room" : "Rooms"}, {hotel.guests} Guests
      </p>
    </section>
  );
}
