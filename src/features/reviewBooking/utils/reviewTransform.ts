import type { ReviewHotelContext, ReviewSummary, RoomRatePlan } from "../types/reviewTypes";

const ECASH_RATE = 0.15;

function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}

export function toReviewSummary(rate: RoomRatePlan, hotel: ReviewHotelContext): ReviewSummary {
  const { total } = rate.pricing;

  const discountTotal = sum(total.discounts.map((discount) => discount.amount));
  const taxTotal = sum(total.taxes.map((tax) => tax.amount));
  const chargesTotal = sum(total.charges.map((charge) => charge.amount));

  return {
    hotel,
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
