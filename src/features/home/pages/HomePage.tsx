import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../../../shared/components/PageTransition";
import { Toast } from "../../../shared/components/Toast";
import { queryKeys } from "../../../shared/api/queryKeys";
import { useToast } from "../../../shared/hooks/useToast";
import { buildHotelListSearch } from "../../hotelList/hooks/useHotelSearchParams";
import {
  fetchDestinations,
  fetchHeroSlides,
  fetchOffers,
  fetchRecentSearches,
  fetchRecommendedHotels,
  fetchSuggestedHotels,
} from "../api/homeApi";
import { HeroSection } from "../components/HeroSection";
import { OffersSection } from "../components/OffersSection";
import { TopDestinations } from "../components/TopDestinations";
import { RecentSearches } from "../components/RecentSearches";
import { RecommendedHotels } from "../components/RecommendedHotels";
import { SearchCard } from "../components/search/SearchCard";
import { useSearchForm } from "../hooks/useSearchForm";

export default function HomePage() {
  const form = useSearchForm();
  const { message, showToast } = useToast();
  const navigate = useNavigate();

  const heroQuery = useQuery({ queryKey: queryKeys.heroSlides, queryFn: fetchHeroSlides });
  const destinationsQuery = useQuery({ queryKey: queryKeys.destinations, queryFn: fetchDestinations });
  const suggestedHotelsQuery = useQuery({ queryKey: queryKeys.suggestedHotels, queryFn: fetchSuggestedHotels });
  const recentSearchesQuery = useQuery({ queryKey: queryKeys.recentSearches, queryFn: fetchRecentSearches });
  const recommendedHotelsQuery = useQuery({ queryKey: queryKeys.recommendedHotels, queryFn: fetchRecommendedHotels });
  const offersQuery = useQuery({ queryKey: queryKeys.offers, queryFn: fetchOffers });

  function handleSearch() {
    showToast(`Searching ${form.destinationLabel} · ${form.nights} night${form.nights > 1 ? "s" : ""}`);

    const search = buildHotelListSearch({
      city: form.destinationLabel,
      checkIn: format(form.checkIn, "yyyy-MM-dd"),
      checkOut: format(form.checkOut, "yyyy-MM-dd"),
      rooms: form.guests.rooms,
      adults: form.guests.adults,
      children: form.guests.children,
    });

    navigate(`/hotels?${search}`);
  }

  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted pb-8">
        <HeroSection slides={heroQuery.data} isLoading={heroQuery.isLoading} />

        <SearchCard
          form={form}
          destinations={destinationsQuery.data}
          suggestedHotels={suggestedHotelsQuery.data}
          recentSearches={recentSearchesQuery.data}
          onSearch={handleSearch}
        />

        <RecentSearches
          searches={recentSearchesQuery.data}
          isLoading={recentSearchesQuery.isLoading}
          onSelect={(search) => {
            form.selectDestination(`recent-${search.id}`, search.city);
            form.selectDates(parseISO(search.checkIn), parseISO(search.checkOut));
          }}
        />

        <TopDestinations
          destinations={destinationsQuery.data}
          isLoading={destinationsQuery.isLoading}
          onSelect={(destination) => form.selectDestination(destination.id, `${destination.city}, ${destination.country}`)}
        />

        <RecommendedHotels hotels={recommendedHotelsQuery.data} isLoading={recommendedHotelsQuery.isLoading} />

        <OffersSection offers={offersQuery.data} isLoading={offersQuery.isLoading} />
      </section>

      <Toast message={message} />
    </PageTransition>
  );
}
