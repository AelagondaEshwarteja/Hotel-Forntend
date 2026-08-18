import { cn } from "../../../shared/utils/cn";
import type { QuickFilterKey } from "../types/hotelListTypes";

type QuickFilterChipsProps = {
  activeKeys: QuickFilterKey[];
  onToggle: (key: QuickFilterKey) => void;
};

const QUICK_FILTERS: { key: QuickFilterKey; label: string }[] = [
  { key: "freeCancellation", label: "Free cancellation" },
  { key: "breakfastIncluded", label: "Breakfast included" },
  { key: "ratingFourPlus", label: "Guest rating 8+" },
];

export function QuickFilterChips({ activeKeys, onToggle }: QuickFilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {QUICK_FILTERS.map((chip) => {
        const isActive = activeKeys.includes(chip.key);
        return (
          <button
            key={chip.key}
            type="button"
            onClick={() => onToggle(chip.key)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition active:scale-95",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground active:bg-secondary",
            )}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
