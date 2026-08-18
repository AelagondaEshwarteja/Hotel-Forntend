import { useMemo, useState } from "react";
import type { FilterOptions, FilterState, HotelListItem, SortOption, SortOptionValue } from "../types/hotelListTypes";

export const SORT_OPTIONS: SortOption[] = [
  { value: "recommended", label: "Our top picks" },
  { value: "price_low_high", label: "Price (lowest first)" },
  { value: "price_high_low", label: "Price (highest first)" },
  { value: "star_rating_high_low", label: "Star rating" },
  { value: "guest_rating_high_low", label: "Guest rating" },
];

const EMPTY_FILTERS: FilterState = {
  priceRange: null,
  starRatings: [],
  amenities: [],
  ratePlanTypes: [],
  propertyTypes: [],
  freeCancelOnly: false,
  minGuestRating: null,
};

function deriveFilterOptions(hotels: HotelListItem[]): FilterOptions {
  const prices = hotels.map((hotel) => hotel.finalPrice);
  const amenities = new Set<string>();
  const ratePlanTypes = new Set<string>();
  const propertyTypes = new Set<string>();
  const starRatings = new Set<number>();

  for (const hotel of hotels) {
    hotel.amenities.forEach((amenity) => amenities.add(amenity));
    ratePlanTypes.add(hotel.ratePlanType);
    propertyTypes.add(hotel.propertyType);
    starRatings.add(Math.round(hotel.starRating));
  }

  return {
    priceMin: prices.length ? Math.min(...prices) : 0,
    priceMax: prices.length ? Math.max(...prices) : 0,
    amenities: Array.from(amenities).sort(),
    ratePlanTypes: Array.from(ratePlanTypes).sort(),
    propertyTypes: Array.from(propertyTypes).sort(),
    starRatings: Array.from(starRatings).sort((a, b) => b - a),
  };
}

function applySort(hotels: HotelListItem[], sort: SortOptionValue): HotelListItem[] {
  const sorted = [...hotels];

  switch (sort) {
    case "price_low_high":
      return sorted.sort((a, b) => a.finalPrice - b.finalPrice);
    case "price_high_low":
      return sorted.sort((a, b) => b.finalPrice - a.finalPrice);
    case "star_rating_high_low":
      return sorted.sort((a, b) => b.starRating - a.starRating);
    case "guest_rating_high_low":
      return sorted.sort((a, b) => (b.guestRating ?? 0) - (a.guestRating ?? 0));
    case "recommended":
    default:
      return sorted.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
  }
}

function applyFilters(hotels: HotelListItem[], filters: FilterState, searchText: string): HotelListItem[] {
  const query = searchText.trim().toLowerCase();

  return hotels.filter((hotel) => {
    if (query && !`${hotel.name} ${hotel.area}`.toLowerCase().includes(query)) {
      return false;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (hotel.finalPrice < min || hotel.finalPrice > max) {
        return false;
      }
    }

    if (filters.starRatings.length > 0 && !filters.starRatings.includes(Math.round(hotel.starRating))) {
      return false;
    }

    if (filters.amenities.length > 0 && !filters.amenities.every((amenity) => hotel.amenities.includes(amenity))) {
      return false;
    }

    if (filters.ratePlanTypes.length > 0 && !filters.ratePlanTypes.includes(hotel.ratePlanType)) {
      return false;
    }

    if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(hotel.propertyType)) {
      return false;
    }

    if (filters.freeCancelOnly && !hotel.freeCancel) {
      return false;
    }

    if (filters.minGuestRating !== null && (hotel.guestRating ?? 0) < filters.minGuestRating) {
      return false;
    }

    return true;
  });
}

export function useHotelListFilters(hotels: HotelListItem[]) {
  const [sort, setSort] = useState<SortOptionValue>("recommended");
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [searchText, setSearchText] = useState("");

  const filterOptions = useMemo(() => deriveFilterOptions(hotels), [hotels]);

  const visibleHotels = useMemo(() => {
    const filtered = applyFilters(hotels, filters, searchText);
    return applySort(filtered, sort);
  }, [hotels, filters, searchText, sort]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.priceRange) count += 1;
    if (filters.starRatings.length > 0) count += 1;
    if (filters.amenities.length > 0) count += 1;
    if (filters.ratePlanTypes.length > 0) count += 1;
    if (filters.propertyTypes.length > 0) count += 1;
    if (filters.freeCancelOnly) count += 1;
    if (filters.minGuestRating !== null) count += 1;
    return count;
  }, [filters]);

  function toggleListValue(key: "starRatings" | "amenities" | "ratePlanTypes" | "propertyTypes", value: string | number) {
    setFilters((prev) => {
      const current = prev[key] as Array<string | number>;
      const exists = current.includes(value);
      const next = exists ? current.filter((item) => item !== value) : [...current, value];
      return { ...prev, [key]: next };
    });
  }

  function setPriceRange(range: [number, number] | null) {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  }

  function setFreeCancelOnly(value: boolean) {
    setFilters((prev) => ({ ...prev, freeCancelOnly: value }));
  }

  function setMinGuestRating(value: number | null) {
    setFilters((prev) => ({ ...prev, minGuestRating: value }));
  }

  function resetFilters() {
    setFilters(EMPTY_FILTERS);
  }

  return {
    sort,
    setSort,
    filters,
    filterOptions,
    searchText,
    setSearchText,
    visibleHotels,
    activeFilterCount,
    toggleListValue,
    setPriceRange,
    setFreeCancelOnly,
    setMinGuestRating,
    resetFilters,
  };
}
