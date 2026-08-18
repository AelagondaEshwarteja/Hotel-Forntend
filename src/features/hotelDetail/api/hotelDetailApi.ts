import { delayedResponse } from "../../../shared/api/delay";
import { HOTEL_CONTENT_DATA } from "../data/hotelContentData";
import type { HotelContentData } from "../types/hotelDetailTypes";
import { HotelContentApiResponseSchema } from "../validation/hotelDetailValidation";

export async function fetchHotelContent(hotelId: string): Promise<HotelContentData> {
  const matched = HOTEL_CONTENT_DATA.find((hotel) => hotel.data.id === hotelId);
  if (!matched) throw new Error(`Hotel content not found for ${hotelId}`);
  const parsed = HotelContentApiResponseSchema.parse(matched);
  return delayedResponse(parsed.data, 420);
}
