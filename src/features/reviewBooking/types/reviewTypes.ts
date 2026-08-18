import type { RoomRatePlan } from "../../roomSelection/types/roomSelectionTypes";

/**
 * Extra context the review page needs that doesn't live in the rates
 * response (hotel identity, stay dates, room/guest counts). This is built
 * from the hotel-content API response plus the active search params.
 */
export type ReviewHotelContext = {
  name: string;
  address: string;
  starRating: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  rooms: number;
  guests: number;
};

/**
 * Promo codes are still a placeholder: the project has no promo-code API
 * yet, so this stays mock data (see data/mockReviewData.ts) until one exists.
 */
export type PromoCode = {
  code: string;
  save: number;
  description: string;
  terms?: string;
  applied?: boolean;
};

/**
 * UI-facing, flattened shape the review page actually renders with.
 */
export type ReviewSummary = {
  hotel: ReviewHotelContext;
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

export type { RoomRatePlan };
