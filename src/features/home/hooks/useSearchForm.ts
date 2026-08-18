import { addDays, differenceInCalendarDays } from "date-fns";
import { useMemo, useState } from "react";
import type { GuestsConfig } from "../types/homeTypes";

const MIN_ROOMS = 1;
const MAX_ROOMS = 8;
const MIN_ADULTS = 1;
const MAX_ADULTS = 12;
const MIN_CHILDREN = 0;
const MAX_CHILDREN = 6;

const DEFAULT_GUESTS: GuestsConfig = {
  rooms: 1,
  adults: 2,
  children: 1,
  childrenAges: [null],
};

type CounterKey = "rooms" | "adults" | "children";

const COUNTER_BOUNDS: Record<CounterKey, { min: number; max: number }> = {
  rooms: { min: MIN_ROOMS, max: MAX_ROOMS },
  adults: { min: MIN_ADULTS, max: MAX_ADULTS },
  children: { min: MIN_CHILDREN, max: MAX_CHILDREN },
};

export function useSearchForm() {
  const [destinationId, setDestinationId] = useState<string | null>("dest-goa");
  const [destinationLabel, setDestinationLabel] = useState("Goa, India");
  const [checkIn, setCheckIn] = useState<Date>(() => addDays(new Date(), 3));
  const [checkOut, setCheckOut] = useState<Date>(() => addDays(new Date(), 5));
  const [guests, setGuests] = useState<GuestsConfig>(DEFAULT_GUESTS);

  const nights = Math.max(1, differenceInCalendarDays(checkOut, checkIn));

  function selectDestination(id: string, label: string) {
    setDestinationId(id);
    setDestinationLabel(label);
  }

  function selectDates(nextCheckIn: Date, nextCheckOut: Date) {
    setCheckIn(nextCheckIn);
    setCheckOut(nextCheckOut);
  }

  function updateCount(key: CounterKey, delta: number) {
    setGuests((prev) => {
      const bounds = COUNTER_BOUNDS[key];
      const nextValue = Math.min(bounds.max, Math.max(bounds.min, prev[key] + delta));

      if (key !== "children") {
        return { ...prev, [key]: nextValue };
      }

      const nextAges = Array.from({ length: nextValue }, (_, index) => prev.childrenAges[index] ?? null);
      return { ...prev, children: nextValue, childrenAges: nextAges };
    });
  }

  function setChildAge(index: number, age: number) {
    setGuests((prev) => {
      const nextAges = [...prev.childrenAges];
      nextAges[index] = age;
      return { ...prev, childrenAges: nextAges };
    });
  }

  const guestsSummary = useMemo(() => {
    const roomLabel = `${guests.rooms} Room${guests.rooms > 1 ? "s" : ""}`;
    const adultLabel = `${guests.adults} Adult${guests.adults > 1 ? "s" : ""}`;
    const childLabel = guests.children > 0 ? `, ${guests.children} Child${guests.children > 1 ? "ren" : ""}` : "";
    return `${roomLabel}, ${adultLabel}${childLabel}`;
  }, [guests]);

  return {
    destinationId,
    destinationLabel,
    checkIn,
    checkOut,
    nights,
    guests,
    guestsSummary,
    selectDestination,
    selectDates,
    updateCount,
    setChildAge,
    counterBounds: COUNTER_BOUNDS,
  };
}
