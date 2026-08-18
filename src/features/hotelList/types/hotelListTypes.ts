/**
 * Raw API contract types.
 * These mirror the hotel search response exactly as returned by the backend
 * (see meta/data.hotels[] shape). Keep these 1:1 with the API — any UI-only
 * convenience fields belong in the "UI-facing types" section below.
 */
export type HotelSearchMeta = {
  status: string;
  uid: string;
  createdAt: string;
  timeTaken: number;
  count: number;
};

export type HotelImage = {
  url: string;
  thumburl: string;
  caption: string;
};

export type HotelAddress = {
  city: string;
  area: string;
  latitude: number;
  longitude: number;
};

export type RateGuarantee = {
  guaranteeType: string;
  paymentType: string;
};

export type RateTax = {
  type: string;
  amount: number;
};

export type RateCharge = {
  type: string;
  amount: number;
};

export type RateDiscount = {
  type: string;
  amount: number;
  desc: string;
};

export type RateCommission = {
  type: string;
  percentage: number;
  grossAmount: number;
  netAmount: number;
  taxes: RateTax[];
};

export type RatePriceBlock = {
  base: number;
  price: number;
  taxes: RateTax[];
  charges: RateCharge[];
  discounts: RateDiscount[];
  commissions: RateCommission[];
};

export type RatePricing = {
  total: RatePriceBlock;
  perNight: RatePriceBlock;
};

/** Known rate plan types found in the dataset — used to drive filter options. */
export type RatePlanType = "BED_AND_BREAKFAST" | "ROOM_ONLY" | "HALF_BOARD" | "ALL_INCLUSIVE";

export type HotelRate = {
  roomTypeId: string;
  ratePlanId: string;
  ratePlanName: string;
  guarantee: RateGuarantee[];
  rateProvider: string;
  pricing: RatePricing;
  currency: string;
  roomName: string;
  ratePlanType: string;
  roomsLeft: number;
  taxPercentage: number;
  freeCancel: boolean;
  inclusions: string[];
  extras: string[];
};

/** Known property types found in the dataset — used to drive filter options. */
export type PropertyType = "HOTEL" | "RESORT" | "APARTMENT" | "VILLA" | "HOMESTAY";

export type HotelApiResult = {
  id: string;
  vendorName: string;
  /** Comes from the API as a string, e.g. "5" */
  starRating: string;
  images: HotelImage[];
  amenities: string[];
  address: HotelAddress[];
  rates: HotelRate;
  propertyType: string;
  /**
   * Supplemental, optional fields the search service may enrich results with.
   * UI degrades gracefully when these are absent (falls back to star rating).
   */
  guestRating?: number;
  ratingLabel?: string;
  reviewCount?: number;
  distanceFromCentreKm?: number;
};

export type HotelSearchApiResponse = {
  meta: HotelSearchMeta;
  data: {
    hotels: HotelApiResult[];
  };
};

/**
 * UI-facing types.
 * These are derived/flattened shapes the list page actually renders with —
 * kept separate from the raw API types so the UI never depends on API nesting.
 */
export type HotelListItem = {
  id: string;
  name: string;
  propertyType: string;
  starRating: number;
  city: string;
  area: string;
  latitude: number;
  longitude: number;
  image: string;
  amenities: string[];
  ratePlanName: string;
  ratePlanType: string;
  roomName: string;
  currency: string;
  /** Final payable price (tax & charges inclusive, discount applied). */
  finalPrice: number;
  /** Price before promotional discount was applied — undefined when no discount. */
  strikethroughPrice?: number;
  discountDesc?: string;
  perNightPrice: number;
  taxAmount: number;
  roomsLeft: number;
  freeCancel: boolean;
  inclusions: string[];
  guestRating?: number;
  ratingLabel?: string;
  reviewCount?: number;
  distanceFromCentreKm?: number;
};

export type HotelSearchQueryParams = {
  city: string;
  /** ISO date string, e.g. "2026-08-13" */
  checkIn: string;
  /** ISO date string, e.g. "2026-08-14" */
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
};

export type SortOptionValue =
  | "recommended"
  | "price_low_high"
  | "price_high_low"
  | "star_rating_high_low"
  | "guest_rating_high_low";

export type SortOption = {
  value: SortOptionValue;
  label: string;
};

export type FilterState = {
  priceRange: [number, number] | null;
  starRatings: number[];
  amenities: string[];
  ratePlanTypes: string[];
  propertyTypes: string[];
  freeCancelOnly: boolean;
  minGuestRating: number | null;
};

/** Bounds/options computed from the *unfiltered* result set, used to render filter controls. */
export type FilterOptions = {
  priceMin: number;
  priceMax: number;
  starRatings: number[];
  amenities: string[];
  ratePlanTypes: string[];
  propertyTypes: string[];
};

export type QuickFilterKey = "freeCancellation" | "breakfastIncluded" | "ratingFourPlus";
