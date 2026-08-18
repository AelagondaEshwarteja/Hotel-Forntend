import { BottomSheet } from "../../../../shared/components/BottomSheet";
import { Counter } from "../../../../shared/components/Counter";
import type { GuestsConfig } from "../../types/homeTypes";

type CounterKey = "rooms" | "adults" | "children";

type GuestsSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  guests: GuestsConfig;
  counterBounds: Record<CounterKey, { min: number; max: number }>;
  guestsSummary: string;
  onUpdateCount: (key: CounterKey, delta: number) => void;
  onSetChildAge: (index: number, age: number) => void;
};

const CHILD_AGE_OPTIONS = ["Under 1", ...Array.from({ length: 17 }, (_, index) => String(index + 1))];

export function GuestsSheet({
  isOpen,
  onClose,
  guests,
  counterBounds,
  guestsSummary,
  onUpdateCount,
  onSetChildAge,
}: GuestsSheetProps) {
  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title="Rooms and guests"
      footer={
        <button
          type="button"
          onClick={onClose}
          className="h-11 w-full rounded-lg bg-primary text-sm font-bold text-primary-foreground transition active:scale-[0.98]"
        >
          Apply · {guestsSummary}
        </button>
      }
    >
      <div className="divide-y divide-border">
        <Counter
          label="Rooms"
          value={guests.rooms}
          min={counterBounds.rooms.min}
          max={counterBounds.rooms.max}
          onChange={(delta) => onUpdateCount("rooms", delta)}
        />
        <Counter
          label="Adults"
          description="Age 18+"
          value={guests.adults}
          min={counterBounds.adults.min}
          max={counterBounds.adults.max}
          onChange={(delta) => onUpdateCount("adults", delta)}
        />
        <Counter
          label="Children"
          description="Age 0-17"
          value={guests.children}
          min={counterBounds.children.min}
          max={counterBounds.children.max}
          onChange={(delta) => onUpdateCount("children", delta)}
        />
      </div>

      {guests.children > 0 ? (
        <div className="mt-3 space-y-3 border-t border-border pt-3">
          {guests.childrenAges.map((age, index) => (
            <div key={index} className="flex items-center justify-between gap-3">
              <label htmlFor={`child-age-${index}`} className="text-sm font-semibold text-foreground">
                Child {index + 1} age
              </label>
              <select
                id={`child-age-${index}`}
                value={age ?? ""}
                onChange={(event) => onSetChildAge(index, Number(event.target.value))}
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-semibold text-foreground outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Select age
                </option>
                {CHILD_AGE_OPTIONS.map((option, optionIndex) => (
                  <option key={option} value={optionIndex === 0 ? 0 : optionIndex}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      ) : null}
    </BottomSheet>
  );
}
