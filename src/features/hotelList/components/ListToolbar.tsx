import { ArrowUpDown, Map, SlidersHorizontal } from "lucide-react";
import { cn } from "../../../shared/utils/cn";

type ListToolbarProps = {
  resultCount: number;
  city: string;
  activeFilterCount: number;
  isMapView: boolean;
  onOpenSort: () => void;
  onOpenFilter: () => void;
  onToggleMap: () => void;
};

export function ListToolbar({
  resultCount,
  city,
  activeFilterCount,
  isMapView,
  onOpenSort,
  onOpenFilter,
  onToggleMap,
}: ListToolbarProps) {
  const shortCity = city.split(",")[0]?.trim() || city;

  return (
    <div className="sticky top-0 z-20 border-b border-border bg-muted/95 px-4 pb-2.5 pt-3 backdrop-blur">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenSort}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card py-2 text-xs font-bold text-foreground transition active:scale-[0.98] active:bg-secondary"
        >
          <ArrowUpDown aria-hidden="true" className="size-3.5" />
          Sort
        </button>

        <button
          type="button"
          onClick={onOpenFilter}
          className="relative flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card py-2 text-xs font-bold text-foreground transition active:scale-[0.98] active:bg-secondary"
        >
          <SlidersHorizontal aria-hidden="true" className="size-3.5" />
          Filter
          {activeFilterCount > 0 ? (
            <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
              {activeFilterCount}
            </span>
          ) : null}
        </button>

        <button
          type="button"
          onClick={onToggleMap}
          className={cn(
            "flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-bold transition active:scale-[0.98]",
            isMapView
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground active:bg-secondary",
          )}
        >
          <Map aria-hidden="true" className="size-3.5" />
          Map
        </button>
      </div>

      <p className="mt-2 px-0.5 text-xs font-medium text-muted-foreground">
        <span className="font-bold text-foreground">{resultCount}</span> propert{resultCount === 1 ? "y" : "ies"} found in{" "}
        {shortCity}
      </p>
    </div>
  );
}
