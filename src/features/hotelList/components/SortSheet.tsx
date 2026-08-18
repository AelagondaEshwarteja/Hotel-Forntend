import { Check } from "lucide-react";
import { BottomSheet } from "../../../shared/components/BottomSheet";
import { SORT_OPTIONS } from "../hooks/useHotelListFilters";
import type { SortOptionValue } from "../types/hotelListTypes";

type SortSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  value: SortOptionValue;
  onChange: (value: SortOptionValue) => void;
};

export function SortSheet({ isOpen, onClose, value, onChange }: SortSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="Sort by">
      <div className="divide-y divide-border">
        {SORT_OPTIONS.map((option) => {
          const isSelected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                onClose();
              }}
              className="flex w-full items-center justify-between py-3.5 text-left transition active:bg-secondary"
            >
              <span className={isSelected ? "text-sm font-bold text-primary" : "text-sm font-semibold text-foreground"}>
                {option.label}
              </span>
              {isSelected ? (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
              ) : (
                <span className="size-5 shrink-0 rounded-full border border-border" />
              )}
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}
