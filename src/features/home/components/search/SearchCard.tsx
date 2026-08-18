import { format } from "date-fns";
import { CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import { useState } from "react";
import type { Destination, RecentSearch, SuggestedHotel } from "../../types/homeTypes";
import type { useSearchForm } from "../../hooks/useSearchForm";
import { DateRangeSheet } from "./DateRangeSheet";
import { DestinationField } from "./DestinationField";
import { GuestsSheet } from "./GuestsSheet";

type SearchCardProps = {
  form: ReturnType<typeof useSearchForm>;
  destinations: Destination[] | undefined;
  suggestedHotels: SuggestedHotel[] | undefined;
  recentSearches: RecentSearch[] | undefined;
  onSearch: () => void;
};

export function SearchCard({ form, destinations, suggestedHotels, recentSearches, onSearch }: SearchCardProps) {
  const [activeSheet, setActiveSheet] = useState<"dates" | "guests" | null>(null);

  return (
    <div className="relative z-10 -mt-9 px-4">
      <div className="rounded-2xl border border-border bg-card p-3.5 shadow-xl">
        <DestinationField
          value={form.destinationLabel}
          onSelect={form.selectDestination}
          destinations={destinations}
          suggestedHotels={suggestedHotels}
          recentSearches={recentSearches}
        />

        <button
          type="button"
          onClick={() => setActiveSheet("dates")}
          className="mt-2.5 flex w-full items-stretch overflow-hidden rounded-xl border border-border bg-background text-left transition active:bg-secondary"
        >
          <span className="flex flex-1 items-center gap-2.5 px-3.5 py-2.5">
            <CalendarDays aria-hidden="true" className="size-[1.1rem] shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block text-[0.65rem] font-semibold text-muted-foreground">Check-in</span>
              <span className="block truncate text-sm font-bold text-foreground">
                {format(form.checkIn, "d MMM, EEE")}
              </span>
            </span>
          </span>

          <span aria-hidden="true" className="w-px bg-border" />

          <span className="flex flex-1 items-center gap-2.5 px-3.5 py-2.5">
            <CalendarDays aria-hidden="true" className="size-[1.1rem] shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block text-[0.65rem] font-semibold text-muted-foreground">Check-out</span>
              <span className="block truncate text-sm font-bold text-foreground">
                {format(form.checkOut, "d MMM, EEE")}
              </span>
            </span>
          </span>
        </button>

        <p className="mt-1.5 pl-1 text-xs font-bold text-primary">
          {form.nights} night{form.nights > 1 ? "s" : ""}
        </p>

        <button
          type="button"
          onClick={() => setActiveSheet("guests")}
          className="mt-1 flex w-full items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-2.5 text-left transition active:bg-secondary"
        >
          <Users aria-hidden="true" className="size-[1.1rem] shrink-0 text-primary" />
          <span className="min-w-0 flex-1">
            <span className="block text-[0.65rem] font-semibold text-muted-foreground">Rooms and guests</span>
            <span className="block truncate text-sm font-bold text-foreground">{form.guestsSummary}</span>
          </span>
          <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={onSearch}
          className="mt-3 flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm transition active:scale-[0.98]"
        >
          <Search aria-hidden="true" className="size-[1.1rem]" />
          Search hotels
        </button>
      </div>

      <DateRangeSheet
        isOpen={activeSheet === "dates"}
        onClose={() => setActiveSheet(null)}
        checkIn={form.checkIn}
        checkOut={form.checkOut}
        onApply={form.selectDates}
      />

      <GuestsSheet
        isOpen={activeSheet === "guests"}
        onClose={() => setActiveSheet(null)}
        guests={form.guests}
        counterBounds={form.counterBounds}
        guestsSummary={form.guestsSummary}
        onUpdateCount={form.updateCount}
        onSetChildAge={form.setChildAge}
      />
    </div>
  );
}
