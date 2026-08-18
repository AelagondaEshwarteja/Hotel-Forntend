export type HotelContentImage = {
  url: string;
  thumburl: string;
  caption: string;
};

export type HotelContentAddress = {
  addressLine: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  area: string;
  latitude: number;
  longitude: number;
  zone: string;
};

export type HotelContentAmenity = {
  name: string;
  code: string;
  category: string;
  subCategory: string;
};

export type HotelContentRoom = {
  id: string;
  name: string;
  maxGuestOccupancy: number;
  images: HotelContentImage[];
  amenities: HotelContentAmenity[];
  beds: { bedType: string; bedCount: number }[];
  roomSize: string;
};

export type HotelPolicy = { type: string; desc: string };
export type HotelLandmark = { name: string; distance: number };

export type HotelContentData = {
  id: string;
  name: string;
  images: HotelContentImage[];
  address: HotelContentAddress;
  roomTypes: HotelContentRoom[];
  description: string;
  checkIn: string;
  checkOut: string;
  contact: {
    phone: string;
    phoneNoExtension: string;
    fax: string;
    email: string;
  };
  starRating: number;
  totalRooms: number;
  totalFloors: number;
  carParkingSlots: number;
  landmarks: HotelLandmark[];
  amenities: HotelContentAmenity[];
  policies: HotelPolicy[];
  themes: string[];
  rank: { weekday: number; weekend: number };
  anyTimeCheckIn: boolean;
  googleReviewInfo: {
    placeId: string;
    noOfReviews: number;
    averageRating: number;
    writeReviewURL: string;
    reviewsPageURL: string;
    review: { review: string; name: string; rating: number; timestamp: string }[];
  };
  nCtgs: {
    Restaurant: { R: string; C: string; T: string }[];
    Bar: { B: string; C: string; T: string }[];
    Important_Landmark: { D: string; L: string }[];
    Most_Popular_Landmark: { D: string; L: string }[];
  };
  extraInfo: { checkInInstruction: string };
};

export type HotelContentApiResponse = { data: HotelContentData };
export type HotelDetailTab = "about" | "amenities" | "policies";
