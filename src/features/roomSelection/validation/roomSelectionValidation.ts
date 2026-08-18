import { z } from "zod";

const moneyItem = z.object({ type: z.string(), amount: z.number() });
const priceBlock = z.object({
  base: z.number(),
  price: z.number(),
  taxes: z.array(moneyItem),
  charges: z.array(moneyItem),
  discounts: z.array(moneyItem.extend({ desc: z.string() })),
  commissions: z.array(z.object({
    type: z.string(), percentage: z.number(), grossAmount: z.number(), netAmount: z.number(), taxes: z.array(moneyItem),
  })),
});

export const HotelRatesApiResponseSchema = z.object({
  meta: z.object({ status: z.string(), uid: z.string(), createdAt: z.string(), timeTaken: z.number(), count: z.number() }),
  data: z.object({
    rates: z.array(z.object({
      roomTypeId: z.string(), ratePlanId: z.string(), ratePlanName: z.string(), rateProvider: z.string(),
      pricing: z.object({ total: priceBlock, perNight: priceBlock }), currency: z.string(), guaranteeType: z.string(), roomName: z.string(),
      roomsLeft: z.number(), taxPercentage: z.number(),
      cancellation: z.object({ cancellationTypeId: z.string(), freeCancellation: z.boolean(), freeCancelDeadLine: z.string(), cancellationPolicies: z.array(z.string()), cancellationPenalty: z.array(z.object({ date: z.string(), fee: z.string() })) }),
      checkInRestricted: z.boolean(), checkOutRestricted: z.boolean(), restrictedMsg: z.string(), inclusions: z.array(z.string()),
      maxAdultOccupancy: z.number(), maxChildOccupancy: z.number(), maxGuestOccupancy: z.number(),
    })),
    propertyType: z.string(),
  }),
});
