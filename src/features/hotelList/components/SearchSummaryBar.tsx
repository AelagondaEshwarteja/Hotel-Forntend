import { format, parseISO } from "date-fns";
import { CalendarDays, ChevronLeft, MapPin, SquarePen, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { HotelSearchQueryParams } from "../types/hotelListTypes";

type SearchSummaryBarProps = {
  params: HotelSearchQueryParams;
};

export function SearchSummaryBar({ params }: SearchSummaryBarProps) {
  const navigate = useNavigate();

  const checkIn = parseISO(params.checkIn);
  const checkOut = parseISO(params.checkOut);
  const guestLabel = `${params.rooms} Room${params.rooms > 1 ? "s" : ""} · ${params.adults} Adult${params.adults > 1 ? "s" : ""}${
    params.children > 0 ? `, ${params.children} Child${params.children > 1 ? "ren" : ""}` : ""
  }`;

  return (
    <header className="relative bg-muted px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] text-foreground">

      <div className="relative z-10 flex items-center gap-3">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition active:scale-95"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <p className="text-sm font-bold">Search results</p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/home")}
        aria-label="Edit search"
        className="relative z-10 mt-4 flex w-full items-center gap-3 rounded-2xl bg-card px-4 py-3.5 text-left shadow-xl transition active:scale-[0.99]"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
          <MapPin aria-hidden="true" className="size-5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-foreground">{params.city}</span>
          <span className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1">
              <CalendarDays aria-hidden="true" className="size-3.5 shrink-0" />
              {format(checkIn, "d MMM")} – {format(checkOut, "d MMM")}
            </span>
            <span className="flex items-center gap-1">
              <Users aria-hidden="true" className="size-3.5 shrink-0" />
              {guestLabel}
            </span>
          </span>
        </span>

        <SquarePen aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
      </button>
    </header>
  );
}
