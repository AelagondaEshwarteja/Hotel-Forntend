import { BottomSheet } from "../../../shared/components/BottomSheet";
import { cn } from "../../../shared/utils/cn";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { FilterOptions, FilterState } from "../types/hotelListTypes";

type FilterSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  options: FilterOptions;
  resultCount: number;
  onTogglePropertyValue: (key: "starRatings" | "amenities" | "ratePlanTypes" | "propertyTypes", value: string | number) => void;
  onPriceRangeChange: (range: [number, number] | null) => void;
  onFreeCancelOnlyChange: (value: boolean) => void;
  onMinGuestRatingChange: (value: number | null) => void;
  onReset: () => void;
};

const RATE_PLAN_LABELS: Record<string, string> = {
  BED_AND_BREAKFAST: "Breakfast included",
  ROOM_ONLY: "Room only",
  HALF_BOARD: "Half board",
  ALL_INCLUSIVE: "All inclusive",
};

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  HOTEL: "Hotel",
  RESORT: "Resort",
  APARTMENT: "Apartment",
  VILLA: "Villa",
  HOMESTAY: "Homestay",
};

const GUEST_RATING_OPTIONS = [
  { value: 9, label: "Superb 9+" },
  { value: 8, label: "Very good 8+" },
  { value: 7, label: "Good 7+" },
];

function ChipToggle({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition active:scale-95",
        isActive
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground active:bg-secondary",
      )}
    >
      {label}
    </button>
  );
}

export function FilterSheet({
  isOpen,
  onClose,
  filters,
  options,
  resultCount,
  onTogglePropertyValue,
  onPriceRangeChange,
  onFreeCancelOnlyChange,
  onMinGuestRatingChange,
  onReset,
}: FilterSheetProps) {
  const priceMin = options.priceMin;
  const priceMax = options.priceMax;
  const [selectedMin, selectedMax] = filters.priceRange ?? [priceMin, priceMax];

  function handleMinChange(next: number) {
    const clamped = Math.min(next, selectedMax);
    onPriceRangeChange([clamped, selectedMax]);
  }

  function handleMaxChange(next: number) {
    const clamped = Math.max(next, selectedMin);
    onPriceRangeChange([selectedMin, clamped]);
  }

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title="Filters"
      footer={
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="h-11 flex-1 rounded-lg border border-border text-sm font-bold text-foreground transition active:scale-[0.98]"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-11 flex-[2] rounded-lg bg-primary text-sm font-bold text-primary-foreground transition active:scale-[0.98]"
          >
            Show {resultCount} propert{resultCount === 1 ? "y" : "ies"}
          </button>
        </div>
      }
    >
      <section className="py-3">
        <p className="text-sm font-bold text-foreground">Price per night</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatCurrency(selectedMin)} – {formatCurrency(selectedMax)}
        </p>

        <div className="relative mt-4 h-1.5">
          <div className="absolute inset-0 rounded-full bg-border" />
          <div
            className="absolute h-full rounded-full bg-primary"
            style={{
              left: priceMax > priceMin ? `${((selectedMin - priceMin) / (priceMax - priceMin)) * 100}%` : "0%",
              right: priceMax > priceMin ? `${100 - ((selectedMax - priceMin) / (priceMax - priceMin)) * 100}%` : "0%",
            }}
          />
          <input
            type="range"
            aria-label="Minimum price"
            min={priceMin}
            max={priceMax}
            value={selectedMin}
            onChange={(event) => handleMinChange(Number(event.target.value))}
            className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 w-full -translate-y-1/2 appearance-none bg-transparent accent-[var(--primary)] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow"
          />
          <input
            type="range"
            aria-label="Maximum price"
            min={priceMin}
            max={priceMax}
            value={selectedMax}
            onChange={(event) => handleMaxChange(Number(event.target.value))}
            className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 w-full -translate-y-1/2 appearance-none bg-transparent accent-[var(--primary)] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow"
          />
        </div>
      </section>

      <section className="border-t border-border py-3">
        <p className="text-sm font-bold text-foreground">Star rating</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {options.starRatings.map((star) => (
            <ChipToggle
              key={star}
              label={`${star} Star`}
              isActive={filters.starRatings.includes(star)}
              onClick={() => onTogglePropertyValue("starRatings", star)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-3">
        <p className="text-sm font-bold text-foreground">Guest rating</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {GUEST_RATING_OPTIONS.map((option) => (
            <ChipToggle
              key={option.value}
              label={option.label}
              isActive={filters.minGuestRating === option.value}
              onClick={() => onMinGuestRatingChange(filters.minGuestRating === option.value ? null : option.value)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-3">
        <p className="text-sm font-bold text-foreground">Meal plan</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {options.ratePlanTypes.map((planType) => (
            <ChipToggle
              key={planType}
              label={RATE_PLAN_LABELS[planType] ?? planType}
              isActive={filters.ratePlanTypes.includes(planType)}
              onClick={() => onTogglePropertyValue("ratePlanTypes", planType)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-3">
        <p className="text-sm font-bold text-foreground">Property type</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {options.propertyTypes.map((propertyType) => (
            <ChipToggle
              key={propertyType}
              label={PROPERTY_TYPE_LABELS[propertyType] ?? propertyType}
              isActive={filters.propertyTypes.includes(propertyType)}
              onClick={() => onTogglePropertyValue("propertyTypes", propertyType)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-3">
        <p className="text-sm font-bold text-foreground">Amenities</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {options.amenities.map((amenity) => (
            <ChipToggle
              key={amenity}
              label={amenity}
              isActive={filters.amenities.includes(amenity)}
              onClick={() => onTogglePropertyValue("amenities", amenity)}
            />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between border-t border-border py-3.5">
        <div>
          <p className="text-sm font-bold text-foreground">Free cancellation</p>
          <p className="text-xs text-muted-foreground">Only show hotels with free cancellation</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={filters.freeCancelOnly}
          onClick={() => onFreeCancelOnlyChange(!filters.freeCancelOnly)}
          className={cn(
            "flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition",
            filters.freeCancelOnly ? "justify-end bg-primary" : "justify-start bg-border",
          )}
        >
          <span className="size-5 rounded-full bg-card shadow" />
        </button>
      </section>
    </BottomSheet>
  );
}
