import { delayedResponse } from "../../../shared/api/delay";
import { HOTEL_RATES_DATA } from "../data/hotelRatesData";
import type { HotelRatesApiResponse } from "../types/roomSelectionTypes";
import { HotelRatesApiResponseSchema } from "../validation/roomSelectionValidation";

export async function fetchHotelRates(hotelId: string): Promise<HotelRatesApiResponse> {
  const matched = HOTEL_RATES_DATA[hotelId];
  if (!matched) throw new Error(`Hotel rates not found for ${hotelId}`);
  return delayedResponse(HotelRatesApiResponseSchema.parse(matched), 380);
}
