import { z } from "zod";
import { delayedResponse } from "../../../shared/api/delay";
import type { Destination, Hotel, Offer, RecentSearch, SuggestedHotel } from "../types/homeTypes";

const HeroSlideSchema = z.object({
  id: z.string(),
  image: z.string(),
  location: z.string(),
});

const DestinationSchema = z.object({
  id: z.string(),
  city: z.string(),
  country: z.string(),
  image: z.string(),
  propertyCount: z.number(),
  startingFrom: z.number().optional(),
});

const SuggestedHotelSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.string(),
});

const RecentSearchSchema = z.object({
  id: z.string(),
  city: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  guestsSummary: z.string(),
});

const HotelSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.string(),
  country: z.string(),
  image: z.string(),
  starRating: z.number(),
  guestRating: z.number(),
  ratingLabel: z.string(),
  reviewCount: z.number(),
  amenities: z.array(z.string()),
  pricePerNight: z.number(),
  originalPrice: z.number().optional(),
});

const OfferSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: z.string(),
  tag: z.string(),
});

const heroSlides = [
  {
    id: "hero-1",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
    location: "Uluwatu, Bali",
  },
  {
    id: "hero-2",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    location: "Lake Palace, Udaipur",
  },
  {
    id: "hero-3",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    location: "Candolim, Goa",
  },
];

const destinations: Destination[] = [
  {
    id: "dest-goa",
    city: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
    propertyCount: 248,
    startingFrom: 1050,
  },
  {
    id: "dest-mumbai",
    city: "Mumbai",
    country: "India",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
    propertyCount: 412,
    startingFrom: 1100,
  },
  {
    id: "dest-jaipur",
    city: "Jaipur",
    country: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80",
    propertyCount: 176,
    startingFrom: 1200,
  },
  {
    id: "dest-delhi",
    city: "Delhi",
    country: "India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80",
    propertyCount: 389,
    startingFrom: 1000,
  },
  {
    id: "dest-manali",
    city: "Manali",
    country: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80",
    propertyCount: 96,
    startingFrom: 1350,
  },
  {
    id: "dest-udaipur",
    city: "Udaipur",
    country: "India",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80",
    propertyCount: 133,
    startingFrom: 1450,
  },
];

const suggestedHotels: SuggestedHotel[] = [
  { id: "sug-1", name: "The Grand Resort", city: "Goa" },
  { id: "sug-2", name: "Taj Lake Palace", city: "Udaipur" },
  { id: "sug-3", name: "Oberoi Marine Drive", city: "Mumbai" },
];

const recentSearches: RecentSearch[] = [
  {
    id: "recent-1",
    city: "Mumbai",
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    guestsSummary: "2 Guests",
  },
  {
    id: "recent-2",
    city: "Goa",
    checkIn: "2026-08-20",
    checkOut: "2026-08-23",
    guestsSummary: "2 Guests",
  },
  {
    id: "recent-3",
    city: "Jaipur",
    checkIn: "2026-09-02",
    checkOut: "2026-09-04",
    guestsSummary: "1 Guest",
  },
];

const recommendedHotels: Hotel[] = [
  {
    id: "hotel-1",
    name: "The Grand Resort",
    city: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    starRating: 4.5,
    guestRating: 4.6,
    ratingLabel: "Excellent",
    reviewCount: 1250,
    amenities: ["Pool", "Spa", "Free wifi"],
    pricePerNight: 4999,
    originalPrice: 6499,
  },
  {
    id: "hotel-2",
    name: "Lakeview Heritage Palace",
    city: "Udaipur",
    country: "India",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    starRating: 4.8,
    guestRating: 4.8,
    ratingLabel: "Exceptional",
    reviewCount: 892,
    amenities: ["Lake view", "Breakfast", "Valet"],
    pricePerNight: 8299,
  },
  {
    id: "hotel-3",
    name: "Marine Drive Suites",
    city: "Mumbai",
    country: "India",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    starRating: 4.3,
    guestRating: 4.4,
    ratingLabel: "Very good",
    reviewCount: 2031,
    amenities: ["City view", "Gym", "Free wifi"],
    pricePerNight: 5599,
    originalPrice: 6999,
  },
  {
    id: "hotel-4",
    name: "Pink City Boutique Stay",
    city: "Jaipur",
    country: "India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    starRating: 4.2,
    guestRating: 4.3,
    ratingLabel: "Very good",
    reviewCount: 614,
    amenities: ["Rooftop", "Breakfast", "Parking"],
    pricePerNight: 3299,
  },
];

const offers: Offer[] = [
  {
    id: "offer-1",
    title: "Save 20% on your first booking",
    subtitle: "Applied automatically at checkout",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
    tag: "New here",
  },
  {
    id: "offer-2",
    title: "Weekend escape deals",
    subtitle: "Handpicked stays, up to 30% off",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80",
    tag: "This weekend",
  },
  {
    id: "offer-3",
    title: "Free breakfast on select hotels",
    subtitle: "Start your day right, on us",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80",
    tag: "Limited time",
  },
];

export async function fetchHeroSlides() {
  return delayedResponse(z.array(HeroSlideSchema).parse(heroSlides), 300);
}

export async function fetchDestinations() {
  return delayedResponse(z.array(DestinationSchema).parse(destinations), 450);
}

export async function fetchSuggestedHotels() {
  return delayedResponse(z.array(SuggestedHotelSchema).parse(suggestedHotels), 300);
}

export async function fetchRecentSearches() {
  return delayedResponse(z.array(RecentSearchSchema).parse(recentSearches), 350);
}

export async function fetchRecommendedHotels() {
  return delayedResponse(z.array(HotelSchema).parse(recommendedHotels), 550);
}

export async function fetchOffers() {
  return delayedResponse(z.array(OfferSchema).parse(offers), 400);
}
