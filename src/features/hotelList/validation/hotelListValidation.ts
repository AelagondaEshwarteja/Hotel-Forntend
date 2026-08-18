import { z } from "zod";

/**
 * Schemas below validate the raw hotel search API response.
 * Structure mirrors the API contract exactly (see hotelListTypes.ts).
 */
export const HotelSearchMetaSchema = z.object({
  status: z.string(),
  uid: z.string(),
  createdAt: z.string(),
  timeTaken: z.number(),
  count: z.number(),
});

export const HotelImageSchema = z.object({
  url: z.string(),
  thumburl: z.string(),
  caption: z.string(),
});

export const HotelAddressSchema = z.object({
  city: z.string(),
  area: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const RateGuaranteeSchema = z.object({
  guaranteeType: z.string(),
  paymentType: z.string(),
});

export const RateTaxSchema = z.object({
  type: z.string(),
  amount: z.number(),
});

export const RateChargeSchema = z.object({
  type: z.string(),
  amount: z.number(),
});

export const RateDiscountSchema = z.object({
  type: z.string(),
  amount: z.number(),
  desc: z.string(),
});

export const RateCommissionSchema = z.object({
  type: z.string(),
  percentage: z.number(),
  grossAmount: z.number(),
  netAmount: z.number(),
  taxes: z.array(RateTaxSchema),
});

export const RatePriceBlockSchema = z.object({
  base: z.number(),
  price: z.number(),
  taxes: z.array(RateTaxSchema),
  charges: z.array(RateChargeSchema),
  discounts: z.array(RateDiscountSchema),
  commissions: z.array(RateCommissionSchema),
});

export const RatePricingSchema = z.object({
  total: RatePriceBlockSchema,
  perNight: RatePriceBlockSchema,
});

export const HotelRateSchema = z.object({
  roomTypeId: z.string(),
  ratePlanId: z.string(),
  ratePlanName: z.string(),
  guarantee: z.array(RateGuaranteeSchema),
  rateProvider: z.string(),
  pricing: RatePricingSchema,
  currency: z.string(),
  roomName: z.string(),
  ratePlanType: z.string(),
  roomsLeft: z.number(),
  taxPercentage: z.number(),
  freeCancel: z.boolean(),
  inclusions: z.array(z.string()),
  extras: z.array(z.string()),
});

export const HotelApiResultSchema = z.object({
  id: z.string(),
  vendorName: z.string(),
  starRating: z.string(),
  images: z.array(HotelImageSchema),
  amenities: z.array(z.string()),
  address: z.array(HotelAddressSchema),
  rates: HotelRateSchema,
  propertyType: z.string(),
  guestRating: z.number().optional(),
  ratingLabel: z.string().optional(),
  reviewCount: z.number().optional(),
  distanceFromCentreKm: z.number().optional(),
});

export const HotelSearchApiResponseSchema = z.object({
  meta: HotelSearchMetaSchema,
  data: z.object({
    hotels: z.array(HotelApiResultSchema),
  }),
});

/**
 * Validates the search query params carried over from the home page
 * (destination + stay details). Falls back gracefully when parsing fails —
 * see useHotelSearchParams.
 */
export const HotelSearchQueryParamsSchema = z.object({
  city: z.string().trim().min(1, "Destination is required"),
  checkIn: z.string().trim().min(1, "Check-in date is required"),
  checkOut: z.string().trim().min(1, "Check-out date is required"),
  rooms: z.coerce.number().int().min(1).max(8),
  adults: z.coerce.number().int().min(1).max(12),
  children: z.coerce.number().int().min(0).max(6),
});

/**
 * Validates a user-adjusted price range from the filter sheet before it's
 * applied — guards against an inverted min/max from a stray drag event.
 */
export const PriceRangeFilterSchema = z
  .tuple([z.number().nonnegative(), z.number().nonnegative()])
  .refine(([min, max]) => max >= min, { message: "Maximum price must not be lower than minimum price" });
