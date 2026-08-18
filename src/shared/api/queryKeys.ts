import type { HotelSearchQueryParams } from "../../features/hotelList/types/hotelListTypes";

export const queryKeys = {
  exampleItems: ["example-items"] as const,
  heroSlides: ["home", "hero-slides"] as const,
  destinations: ["home", "destinations"] as const,
  suggestedHotels: ["home", "suggested-hotels"] as const,
  recentSearches: ["home", "recent-searches"] as const,
  recommendedHotels: ["home", "recommended-hotels"] as const,
  offers: ["home", "offers"] as const,
  hotelList: (params: HotelSearchQueryParams) => ["hotel-list", params] as const,
  hotelDetail: (hotelId: string) => ["hotel-detail", hotelId] as const,
  hotelRates: (hotelId: string) => ["hotel-rates", hotelId] as const,
};
