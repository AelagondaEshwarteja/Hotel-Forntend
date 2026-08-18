import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BottomSheet } from "../../../../shared/components/BottomSheet";
import { cn } from "../../../../shared/utils/cn";

type DateRangeSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  checkIn: Date;
  checkOut: Date;
  onApply: (checkIn: Date, checkOut: Date) => void;
};

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

export function DateRangeSheet({ isOpen, onClose, checkIn, checkOut, onApply }: DateRangeSheetProps) {
  const today = startOfDay(new Date());
  const [rangeStart, setRangeStart] = useState(checkIn);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(checkOut);
  const [visibleMonth, setVisibleMonth] = useState(startOfMonth(checkIn));
  const [wasOpen, setWasOpen] = useState(isOpen);

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      setRangeStart(checkIn);
      setRangeEnd(checkOut);
      setVisibleMonth(startOfMonth(checkIn));
    }
  }

  const monthDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  function handleDayClick(day: Date) {
    if (isBefore(day, today)) {
      return;
    }

    if (!rangeEnd || isBefore(day, rangeStart) || isSameDay(day, rangeStart)) {
      setRangeStart(day);
      setRangeEnd(null);
      return;
    }

    setRangeEnd(day);
  }

  function handleApply() {
    if (rangeEnd) {
      onApply(rangeStart, rangeEnd);
      onClose();
    }
  }

  const nights = rangeEnd ? Math.round((rangeEnd.getTime() - rangeStart.getTime()) / 86_400_000) : 0;

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      title="Select dates"
      footer={
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {rangeEnd ? (
              <>
                <span className="font-bold text-foreground">{nights}</span> night{nights > 1 ? "s" : ""}
              </>
            ) : (
              "Select a check-out date"
            )}
          </p>
          <button
            type="button"
            disabled={!rangeEnd}
            onClick={handleApply}
            className="h-11 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground transition active:scale-[0.98] disabled:opacity-40"
          >
            Apply
          </button>
        </div>
      }
    >
      <div className="flex items-center justify-between py-2">
        <p className="text-sm font-bold text-foreground">
          {rangeStart ? format(rangeStart, "d MMM") : "Check-in"}
          {" — "}
          {rangeEnd ? format(rangeEnd, "d MMM") : "Check-out"}
        </p>
      </div>

      <div className="flex items-center justify-between pb-2">
        <button
          type="button"
          aria-label="Previous month"
          disabled={isSameMonth(visibleMonth, today) || isBefore(visibleMonth, today)}
          onClick={() => setVisibleMonth((current) => addMonths(current, -1))}
          className="flex size-8 items-center justify-center rounded-full border border-border transition active:scale-90 disabled:opacity-30"
        >
          <ChevronLeft aria-hidden="true" className="size-4" />
        </button>
        <p className="text-sm font-bold text-foreground">{format(visibleMonth, "MMMM yyyy")}</p>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setVisibleMonth((current) => addMonths(current, 1))}
          className="flex size-8 items-center justify-center rounded-full border border-border transition active:scale-90"
        >
          <ChevronRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAY_LABELS.map((day, index) => (
          <span key={`${day}-${index}`} className="text-[0.65rem] font-bold uppercase text-muted-foreground">
            {day}
          </span>
        ))}

        {monthDays.map((day) => {
          const isPast = isBefore(day, today);
          const isOutsideMonth = !isSameMonth(day, visibleMonth);
          const isStart = isSameDay(day, rangeStart);
          const isEnd = rangeEnd ? isSameDay(day, rangeEnd) : false;
          const isInRange =
            rangeEnd && isAfter(day, rangeStart) && isBefore(day, rangeEnd)
              ? isWithinInterval(day, { start: rangeStart, end: rangeEnd })
              : false;

          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={isPast || isOutsideMonth}
              onClick={() => handleDayClick(day)}
              className={cn(
                "mx-auto flex size-9 items-center justify-center rounded-full text-sm font-semibold transition",
                isOutsideMonth && "invisible",
                !isOutsideMonth && isPast && "text-muted-foreground/40",
                !isPast && !isOutsideMonth && !isStart && !isEnd && !isInRange && "text-foreground active:bg-secondary",
                isInRange && "rounded-none bg-secondary text-secondary-foreground",
                (isStart || isEnd) && "bg-primary text-primary-foreground",
              )}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}
