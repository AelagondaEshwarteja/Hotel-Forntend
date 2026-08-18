import { useQuery } from "@tanstack/react-query";
import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { PageTransition } from "../../../shared/components/PageTransition";
import { EmptyState } from "../../../shared/components/EmptyState";
import { ErrorState } from "../../../shared/components/ErrorState";
import { queryKeys } from "../../../shared/api/queryKeys";
import { fetchHotelList, mapApiHotelToListItem } from "../api/hotelListApi";
import { FilterSheet } from "../components/FilterSheet";
import { HotelListCard } from "../components/HotelListCard";
import { HotelListCardSkeleton } from "../components/HotelListCardSkeleton";
import { HotelMapPreview } from "../components/HotelMapPreview";
import { HotelSearchBar } from "../components/HotelSearchBar";
import { ListToolbar } from "../components/ListToolbar";
import { QuickFilterChips } from "../components/QuickFilterChips";
import { SearchSummaryBar } from "../components/SearchSummaryBar";
import { SortSheet } from "../components/SortSheet";
import { useHotelListFilters } from "../hooks/useHotelListFilters";
import { useHotelSearchParams } from "../hooks/useHotelSearchParams";
import type { QuickFilterKey } from "../types/hotelListTypes";

export default function HotelListPage() {
  const searchParams = useHotelSearchParams();
  const [activeSheet, setActiveSheet] = useState<"sort" | "filter" | null>(null);
  const [isMapView, setIsMapView] = useState(false);

  const hotelsQuery = useQuery({
    queryKey: queryKeys.hotelList(searchParams),
    queryFn: () => fetchHotelList(searchParams),
  });

  const hotels = useMemo(() => (hotelsQuery.data ?? []).map(mapApiHotelToListItem), [hotelsQuery.data]);

  const {
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
  } = useHotelListFilters(hotels);

  const activeQuickFilters: QuickFilterKey[] = [
    ...(filters.freeCancelOnly ? (["freeCancellation"] as const) : []),
    ...(filters.ratePlanTypes.includes("BED_AND_BREAKFAST") ? (["breakfastIncluded"] as const) : []),
    ...(filters.minGuestRating === 8 ? (["ratingFourPlus"] as const) : []),
  ];

  function handleQuickFilterToggle(key: QuickFilterKey) {
    if (key === "freeCancellation") {
      setFreeCancelOnly(!filters.freeCancelOnly);
      return;
    }
    if (key === "breakfastIncluded") {
      toggleListValue("ratePlanTypes", "BED_AND_BREAKFAST");
      return;
    }
    setMinGuestRating(filters.minGuestRating === 8 ? null : 8);
  }

  if (hotelsQuery.isError) {
    return (
      <PageTransition>
        <ErrorState
          title="Couldn't load hotels"
          description="Something went wrong while fetching hotels for this search. Please try again."
          actionLabel="Retry"
          onAction={() => hotelsQuery.refetch()}
        />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted pb-8">
        <SearchSummaryBar params={searchParams} />

        <HotelSearchBar value={searchText} onChange={setSearchText} city={searchParams.city} />

        <QuickFilterChips activeKeys={activeQuickFilters} onToggle={handleQuickFilterToggle} />

        <ListToolbar
          resultCount={visibleHotels.length}
          city={searchParams.city}
          activeFilterCount={activeFilterCount}
          isMapView={isMapView}
          onOpenSort={() => setActiveSheet("sort")}
          onOpenFilter={() => setActiveSheet("filter")}
          onToggleMap={() => setIsMapView((current) => !current)}
        />

        {isMapView ? (
          <HotelMapPreview hotels={visibleHotels} />
        ) : (
          <div className="space-y-3 px-4 pt-3">
            {hotelsQuery.isLoading
              ? Array.from({ length: 5 }).map((_, index) => <HotelListCardSkeleton key={index} />)
              : visibleHotels.map((hotel) => <HotelListCard key={hotel.id} hotel={hotel} />)}

            {!hotelsQuery.isLoading && visibleHotels.length === 0 ? (
              <EmptyState
                icon={SearchX}
                title="No hotels match your filters"
                description="Try adjusting your filters or search a different area to see more stays."
              />
            ) : null}
          </div>
        )}
      </section>

      <SortSheet isOpen={activeSheet === "sort"} onClose={() => setActiveSheet(null)} value={sort} onChange={setSort} />

      <FilterSheet
        isOpen={activeSheet === "filter"}
        onClose={() => setActiveSheet(null)}
        filters={filters}
        options={filterOptions}
        resultCount={visibleHotels.length}
        onTogglePropertyValue={toggleListValue}
        onPriceRangeChange={setPriceRange}
        onFreeCancelOnlyChange={setFreeCancelOnly}
        onMinGuestRatingChange={setMinGuestRating}
        onReset={resetFilters}
      />
    </PageTransition>
  );
}
