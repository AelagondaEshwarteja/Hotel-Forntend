import type { HotelContentData } from "../../hotelDetail/types/hotelDetailTypes";
import type { HotelSearchQueryParams } from "../../hotelList/types/hotelListTypes";
import type { RoomRatePlan } from "../../roomSelection/types/roomSelectionTypes";
import type { ReviewStayContext, ReviewSummary } from "../types/reviewTypes";

const ECASH_RATE = 0.15;

function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}

export function toStayContext(search: HotelSearchQueryParams, nights: number): ReviewStayContext {
  return {
    checkIn: search.checkIn,
    checkOut: search.checkOut,
    nights,
    rooms: search.rooms,
    guests: search.adults + search.children,
  };
}

export function toReviewSummary(hotel: HotelContentData, rate: RoomRatePlan, stay: ReviewStayContext): ReviewSummary {
  const { total } = rate.pricing;

  const discountTotal = sum(total.discounts.map((discount) => discount.amount));
  const taxTotal = sum(total.taxes.map((tax) => tax.amount));
  const chargesTotal = sum(total.charges.map((charge) => charge.amount));

  return {
    hotel,
    stay,
    rate,
    roomName: rate.roomName,
    ratePlanName: rate.ratePlanName,
    inclusions: rate.inclusions,
    currency: rate.currency,
    roomsLeft: rate.roomsLeft,
    freeCancellation: rate.cancellation.freeCancellation,
    freeCancelDeadline: rate.cancellation.freeCancelDeadLine,
    cancellationPolicies: rate.cancellation.cancellationPolicies,
    baseTotal: total.base,
    taxTotal,
    chargesTotal,
    discountTotal,
    discountDesc: total.discounts[0]?.desc ?? "",
    payableTotal: total.price,
    eCashEarned: Math.round(total.price * ECASH_RATE),
  };
}
