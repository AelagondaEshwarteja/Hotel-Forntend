import { addDays, format } from "date-fns";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { HotelSearchQueryParams } from "../types/hotelListTypes";
import { HotelSearchQueryParamsSchema } from "../validation/hotelListValidation";

const DEFAULT_PARAMS: HotelSearchQueryParams = {
  city: "Mumbai, India",
  checkIn: format(new Date(), "yyyy-MM-dd"),
  checkOut: format(addDays(new Date(), 1), "yyyy-MM-dd"),
  rooms: 1,
  adults: 2,
  children: 0,
};

/** Reads and validates the hotel search params (destination + stay details) from the URL. */
export function useHotelSearchParams(): HotelSearchQueryParams {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const raw = {
      city: searchParams.get("city") ?? DEFAULT_PARAMS.city,
      checkIn: searchParams.get("checkIn") ?? DEFAULT_PARAMS.checkIn,
      checkOut: searchParams.get("checkOut") ?? DEFAULT_PARAMS.checkOut,
      rooms: searchParams.get("rooms") ?? DEFAULT_PARAMS.rooms,
      adults: searchParams.get("adults") ?? DEFAULT_PARAMS.adults,
      children: searchParams.get("children") ?? DEFAULT_PARAMS.children,
    };

    const result = HotelSearchQueryParamsSchema.safeParse(raw);
    return result.success ? result.data : DEFAULT_PARAMS;
  }, [searchParams]);
}

/** Serializes search params into a query string for navigating to the hotel list page. */
export function buildHotelListSearch(params: HotelSearchQueryParams): string {
  return new URLSearchParams({
    city: params.city,
    checkIn: params.checkIn,
    checkOut: params.checkOut,
    rooms: String(params.rooms),
    adults: String(params.adults),
    children: String(params.children),
  }).toString();
}
