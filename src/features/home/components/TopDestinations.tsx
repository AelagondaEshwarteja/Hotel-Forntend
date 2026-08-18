import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "../../../shared/components/Skeleton";
import { useHorizontalScroll } from "../../../shared/hooks/useHorizontalScroll";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { Destination } from "../types/homeTypes";

type TopDestinationsProps = {
  destinations: Destination[] | undefined;
  isLoading: boolean;
  onSelect: (destination: Destination) => void;
};

export function TopDestinations({ destinations, isLoading, onSelect }: TopDestinationsProps) {
  const { scrollRef, scrollByAmount } = useHorizontalScroll();

  return (
    <section className="px-4 pt-6">
      <h2 className="px-1 text-sm font-bold text-foreground">Top travel destinations</h2>

      <div className="relative mt-3">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-40 w-28 shrink-0" />)
            : destinations?.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => onSelect(destination)}
                  className="relative h-50 w-35 shrink-0 overflow-hidden rounded-xl shadow-sm transition active:scale-[0.97]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                    role="img"
                    aria-label={destination.city}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />

                  <span className="absolute left-2.5 top-2.5 text-sm font-bold text-primary-foreground drop-shadow-sm">
                    {destination.city}
                  </span>

                  {destination.startingFrom ? (
                    <span className="absolute inset-x-0 bottom-0 p-2.5 text-left">
                      <span className="block text-[0.6rem] font-medium text-primary-foreground/80">
                        Starting from
                      </span>
                      <span className="block text-sm font-bold text-primary-foreground">
                        {formatCurrency(destination.startingFrom)}
                      </span>
                    </span>
                  ) : null}
                </button>
              ))}
        </div>

        {!isLoading && destinations && destinations.length > 0 ? (
          <>
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByAmount("left")}
              className="absolute left-0 top-1/2 hidden size-8 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:bg-secondary "
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByAmount("right")}
              className="absolute right-0 top-1/2 hidden size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:bg-secondary "
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
