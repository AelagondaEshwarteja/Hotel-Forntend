import type { HotelContentData } from "../../hotelDetail/types/hotelDetailTypes";
import type { RoomRatePlan } from "../../roomSelection/types/roomSelectionTypes";

export type PromoCode = {
  code: string;
  save: number;
  description: string;
  terms?: string;
  applied?: boolean;
};

/**
 * Stay context carried in from the search bar (home page) through the list
 * and room-selection pages via the query string — see useHotelSearchParams.
 */
export type ReviewStayContext = {
  checkIn: string;
  checkOut: string;
  nights: number;
  rooms: number;
  guests: number;
};

/**
 * UI-facing, flattened shape the review page renders with. Built from a
 * hotel's content payload + the specific rate plan the guest picked on the
 * room-selection page.
 */
export type ReviewSummary = {
  hotel: HotelContentData;
  stay: ReviewStayContext;
  rate: RoomRatePlan;
  roomName: string;
  ratePlanName: string;
  inclusions: string[];
  currency: string;
  roomsLeft: number;
  freeCancellation: boolean;
  freeCancelDeadline: string;
  cancellationPolicies: string[];
  baseTotal: number;
  taxTotal: number;
  chargesTotal: number;
  discountTotal: number;
  discountDesc: string;
  payableTotal: number;
  eCashEarned: number;
};
