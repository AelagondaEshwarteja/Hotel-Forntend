import { format, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "../../../shared/components/Skeleton";
import { useHorizontalScroll } from "../../../shared/hooks/useHorizontalScroll";
import type { RecentSearch } from "../types/homeTypes";

type RecentSearchesProps = {
  searches: RecentSearch[] | undefined;
  isLoading: boolean;
  onSelect: (search: RecentSearch) => void;
};

export function RecentSearches({ searches, isLoading, onSelect }: RecentSearchesProps) {
  const { scrollRef, scrollByAmount } = useHorizontalScroll();

  if (!isLoading && (!searches || searches.length === 0)) {
    return null;
  }

  return (
    <section className="px-4 pt-6">
      <h2 className="px-1 text-sm font-bold text-foreground">Recent searches</h2>

      <div className="relative mt-3">
        <div
          ref={scrollRef}
          className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} className="h-[4.5rem] w-40 shrink-0" />)
            : searches?.map((search) => (
                <button
                  key={search.id}
                  type="button"
                  onClick={() => onSelect(search)}
                  className="shrink-0 rounded-xl border border-border bg-card px-3.5 py-2.5 text-left transition active:scale-[0.98] active:bg-secondary"
                >
                  <p className="text-sm font-bold text-foreground">{search.city}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {format(parseISO(search.checkIn), "d MMM")} – {format(parseISO(search.checkOut), "d MMM")}
                  </p>
                  <p className="text-xs text-muted-foreground">{search.guestsSummary}</p>
                </button>
              ))}
        </div>

        {!isLoading && searches && searches.length > 0 ? (
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
              className="absolute right-0 top-1/2 hidden size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:bg-secondary"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}