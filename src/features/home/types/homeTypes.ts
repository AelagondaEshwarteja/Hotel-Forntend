export type HeroSlide = {
  id: string;
  image: string;
  location: string;
};

export type Destination = {
  id: string;
  city: string;
  country: string;
  image: string;
  propertyCount: number;
  startingFrom?: number;
};

export type SuggestedHotel = {
  id: string;
  name: string;
  city: string;
};

export type RecentSearch = {
  id: string;
  city: string;
  checkIn: string;
  checkOut: string;
  guestsSummary: string;
};

export type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  starRating: number;
  guestRating: number;
  ratingLabel: string;
  reviewCount: number;
  amenities: string[];
  pricePerNight: number;
  originalPrice?: number;
};

export type Offer = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
};

export type GuestsConfig = {
  rooms: number;
  adults: number;
  children: number;
  childrenAges: Array<number | null>;
};

export type SearchFormState = {
  destinationId: string | null;
  destinationLabel: string;
  checkIn: Date;
  checkOut: Date;
  guests: GuestsConfig;
};
