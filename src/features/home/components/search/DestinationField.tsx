import { AnimatePresence, m } from "framer-motion";
import { Building2, Clock3, LocateFixed, MapPin, Search, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";
import type { Destination, RecentSearch, SuggestedHotel } from "../../types/homeTypes";

type DestinationFieldProps = {
  value: string;
  onSelect: (id: string, label: string) => void;
  destinations: Destination[] | undefined;
  suggestedHotels: SuggestedHotel[] | undefined;
  recentSearches: RecentSearch[] | undefined;
};

export function DestinationField({
  value,
  onSelect,
  destinations,
  suggestedHotels,
  recentSearches,
}: DestinationFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  function commitSelection(id: string, label: string) {
    setDraft(label);
    onSelect(id, label);
    setIsOpen(false);
    inputRef.current?.blur();
  }

  function useCurrentLocation() {
    commitSelection("current-location", "Current location");
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-2.5 transition focus-within:border-primary">
        <MapPin aria-hidden="true" className="size-[1.1rem] shrink-0 text-primary" />
        <div className="min-w-0 flex-1">
          <label htmlFor="destination-input" className="block text-[0.65rem] font-semibold text-muted-foreground">
            Destination
          </label>
          <input
            ref={inputRef}
            id="destination-input"
            type="text"
            value={draft}
            placeholder="Where do you want to stay?"
            onChange={(event) => setDraft(event.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            className="w-full truncate bg-transparent text-sm font-bold text-foreground outline-none placeholder:font-medium placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <m.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-20 max-h-72 overflow-y-auto rounded-xl border border-border bg-card p-3 shadow-xl"
          >
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={useCurrentLocation}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs font-bold text-primary transition active:bg-secondary"
            >
              <LocateFixed aria-hidden="true" className="size-4" />
              Use current location
            </button>

            {recentSearches && recentSearches.length > 0 ? (
              <section className="mt-2">
                <p className="flex items-center gap-1.5 px-2 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
                  <Clock3 aria-hidden="true" className="size-3" />
                  Recent searches
                </p>
                {recentSearches.map((search) => (
                  <button
                    key={search.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commitSelection(`recent-${search.id}`, search.city)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold text-foreground transition active:bg-secondary"
                  >
                    {search.city}
                    <span className="text-xs font-medium text-muted-foreground">{search.guestsSummary}</span>
                  </button>
                ))}
              </section>
            ) : null}

            {destinations && destinations.length > 0 ? (
              <section className="mt-2">
                <p className="flex items-center gap-1.5 px-2 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
                  <TrendingUp aria-hidden="true" className="size-3" />
                  Popular destinations
                </p>
                {destinations.slice(0, 4).map((destination) => (
                  <button
                    key={destination.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commitSelection(destination.id, `${destination.city}, ${destination.country}`)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold text-foreground transition active:bg-secondary"
                  >
                    {destination.city}
                    <span className="text-xs font-medium text-muted-foreground">{destination.propertyCount} hotels</span>
                  </button>
                ))}
              </section>
            ) : null}

            {suggestedHotels && suggestedHotels.length > 0 ? (
              <section className="mt-2">
                <p className="flex items-center gap-1.5 px-2 text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
                  <Building2 aria-hidden="true" className="size-3" />
                  Suggested hotels
                </p>
                {suggestedHotels.map((hotel) => (
                  <button
                    key={hotel.id}
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => commitSelection(hotel.id, hotel.city)}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-semibold text-foreground transition active:bg-secondary"
                  >
                    <Search aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" />
                    <span className="truncate">{hotel.name}</span>
                    <span className="ml-auto shrink-0 text-xs font-medium text-muted-foreground">{hotel.city}</span>
                  </button>
                ))}
              </section>
            ) : null}
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
