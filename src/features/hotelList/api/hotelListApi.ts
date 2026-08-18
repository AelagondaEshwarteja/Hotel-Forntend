import { delayedResponse } from "../../../shared/api/delay";
import type {
  HotelApiResult,
  HotelImage,
  HotelListItem,
  HotelSearchQueryParams,
  RatePriceBlock,
} from "../types/hotelListTypes";
import { HotelSearchApiResponseSchema } from "../validation/hotelListValidation";

type HotelSeed = {
  id: string;
  vendorName: string;
  starRating: string;
  images: HotelImage[];
  amenities: string[];
  city: string;
  area: string;
  latitude: number;
  longitude: number;
  propertyType: string;
  roomName: string;
  ratePlanName: string;
  ratePlanType: string;
  /** Base per-night rate before tax/charges/discount. */
  base: number;
  discountPercent?: number;
  discountDesc?: string;
  roomsLeft: number;
  freeCancel: boolean;
  inclusions: string[];
  extras: string[];
  guestRating: number;
  ratingLabel: string;
  reviewCount: number;
  distanceFromCentreKm: number;
};

function buildPriceBlock(base: number, discountPercent?: number, discountDesc?: string): RatePriceBlock {
  const taxAmount = Math.round(base * 0.18);
  const serviceCharge = Math.round(base * 0.05);
  const discountAmount = discountPercent ? Math.round((base * discountPercent) / 100) : 0;
  const price = base + taxAmount + serviceCharge - discountAmount;
  const commissionGross = Math.round(base * 0.05);
  const commissionTax = Math.round(commissionGross * 0.05);

  return {
    base,
    price,
    taxes: [{ type: "GST", amount: taxAmount }],
    charges: [{ type: "SERVICE_CHARGE", amount: serviceCharge }],
    discounts: discountAmount
      ? [{ type: "RATE_RULE", amount: discountAmount, desc: discountDesc ?? `${discountPercent}% promotional discount` }]
      : [],
    commissions: [
      {
        type: "AFFILIATE_COMMISSION",
        percentage: 5,
        grossAmount: commissionGross,
        netAmount: commissionGross - commissionTax,
        taxes: [{ type: "GST", amount: commissionTax }],
      },
    ],
  };
}

function buildHotel(seed: HotelSeed): HotelApiResult {
  const priceBlock = buildPriceBlock(seed.base, seed.discountPercent, seed.discountDesc);

  return {
    id: seed.id,
    vendorName: seed.vendorName,
    starRating: seed.starRating,
    images: seed.images,
    amenities: seed.amenities,
    address: [{ city: seed.city, area: seed.area, latitude: seed.latitude, longitude: seed.longitude }],
    rates: {
      roomTypeId: `${seed.id}-ROOM`,
      ratePlanId: `${seed.id}-RATE`,
      ratePlanName: seed.ratePlanName,
      guarantee: [{ guaranteeType: "PREPAY", paymentType: "OFFLINE" }],
      rateProvider: "TGU",
      // Mock quote is for a single night; total mirrors perNight for this dataset.
      pricing: { total: priceBlock, perNight: priceBlock },
      currency: "INR",
      roomName: seed.roomName,
      ratePlanType: seed.ratePlanType,
      roomsLeft: seed.roomsLeft,
      taxPercentage: 18,
      freeCancel: seed.freeCancel,
      inclusions: seed.inclusions,
      extras: seed.extras,
    },
    propertyType: seed.propertyType,
    guestRating: seed.guestRating,
    ratingLabel: seed.ratingLabel,
    reviewCount: seed.reviewCount,
    distanceFromCentreKm: seed.distanceFromCentreKm,
  };
}

const HOTEL_SEEDS: HotelSeed[] = [
  {
    id: "HTL-MUM-1001",
    vendorName: "Taj Lands End",
    starRating: "5",
    images: [{ url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Free Wi-Fi", "Swimming Pool", "Fitness Center", "Restaurant", "Room Service", "Parking", "Air Conditioning", "Spa"],
    city: "Mumbai",
    area: "Bandra",
    latitude: 19.0453,
    longitude: 72.8203,
    propertyType: "HOTEL",
    roomName: "Deluxe King Room",
    ratePlanName: "Deluxe Room - Breakfast Included",
    ratePlanType: "BED_AND_BREAKFAST",
    base: 11200,
    discountPercent: 8,
    discountDesc: "8% early bird discount",
    roomsLeft: 4,
    freeCancel: true,
    inclusions: ["Breakfast for 2 guests", "Free Wi-Fi", "Complimentary bottled water"],
    extras: ["Airport Transfer", "Extra Bed", "Late Checkout"],
    guestRating: 8.1,
    ratingLabel: "Very good",
    reviewCount: 2635,
    distanceFromCentreKm: 7.1,
  },
  {
    id: "HTL-MUM-1002",
    vendorName: "The Oberoi Mumbai",
    starRating: "5",
    images: [{ url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Room Service", "Air Conditioning", "Spa", "Bar"],
    city: "Mumbai",
    area: "Nariman Point",
    latitude: 18.9256,
    longitude: 72.8242,
    propertyType: "HOTEL",
    roomName: "Premier Sea View Room",
    ratePlanName: "Premier Room - Room Only",
    ratePlanType: "ROOM_ONLY",
    base: 21500,
    roomsLeft: 3,
    freeCancel: true,
    inclusions: ["Free Wi-Fi", "Sea view"],
    extras: ["Airport Transfer", "Late Checkout"],
    guestRating: 9.3,
    ratingLabel: "Superb",
    reviewCount: 1645,
    distanceFromCentreKm: 17.6,
  },
  {
    id: "HTL-MUM-1003",
    vendorName: "Fairmont Mumbai",
    starRating: "5",
    images: [{ url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Free Wi-Fi", "Swimming Pool", "Fitness Center", "Restaurant", "Parking", "Air Conditioning"],
    city: "Mumbai",
    area: "Western Suburbs",
    latitude: 19.1075,
    longitude: 72.8263,
    propertyType: "HOTEL",
    roomName: "Fairmont King Room",
    ratePlanName: "Fairmont Room - Breakfast Included",
    ratePlanType: "BED_AND_BREAKFAST",
    base: 9800,
    discountPercent: 12,
    discountDesc: "12% limited-time discount",
    roomsLeft: 6,
    freeCancel: true,
    inclusions: ["Breakfast for 2 guests", "Free Wi-Fi"],
    extras: ["Extra Bed"],
    guestRating: 9.1,
    ratingLabel: "Superb",
    reviewCount: 747,
    distanceFromCentreKm: 2.9,
  },
  {
    id: "HTL-MUM-1004",
    vendorName: "Sea Pearl Boutique Stay",
    starRating: "3",
    images: [{ url: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Free Wi-Fi", "Room Service", "Air Conditioning"],
    city: "Mumbai",
    area: "Andheri East",
    latitude: 19.1197,
    longitude: 72.8697,
    propertyType: "HOTEL",
    roomName: "Standard Room",
    ratePlanName: "Standard Room - Room Only",
    ratePlanType: "ROOM_ONLY",
    base: 3200,
    roomsLeft: 9,
    freeCancel: false,
    inclusions: ["Free Wi-Fi"],
    extras: ["Parking"],
    guestRating: 7.4,
    ratingLabel: "Good",
    reviewCount: 318,
    distanceFromCentreKm: 12.4,
  },
  {
    id: "HTL-MUM-1005",
    vendorName: "Marine Drive Suites",
    starRating: "4",
    images: [{ url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["City view", "Free Wi-Fi", "Fitness Center", "Restaurant", "Air Conditioning"],
    city: "Mumbai",
    area: "Marine Drive",
    latitude: 18.9432,
    longitude: 72.8235,
    propertyType: "APARTMENT",
    roomName: "City View Suite",
    ratePlanName: "Suite - Half Board",
    ratePlanType: "HALF_BOARD",
    base: 6800,
    discountPercent: 15,
    discountDesc: "15% weekday offer",
    roomsLeft: 2,
    freeCancel: true,
    inclusions: ["Breakfast for 2 guests", "Dinner for 2 guests", "Free Wi-Fi"],
    extras: ["Late Checkout"],
    guestRating: 8.4,
    ratingLabel: "Very good",
    reviewCount: 2031,
    distanceFromCentreKm: 1.2,
  },
  {
    id: "HTL-MUM-1006",
    vendorName: "Harbour View Residency",
    starRating: "3",
    images: [{ url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Free Wi-Fi", "Parking", "Air Conditioning", "Room Service"],
    city: "Mumbai",
    area: "Colaba",
    latitude: 18.9067,
    longitude: 72.8147,
    propertyType: "HOTEL",
    roomName: "Deluxe Twin Room",
    ratePlanName: "Deluxe Twin - Room Only",
    ratePlanType: "ROOM_ONLY",
    base: 4100,
    roomsLeft: 1,
    freeCancel: false,
    inclusions: ["Free Wi-Fi"],
    extras: ["Extra Bed"],
    guestRating: 7.0,
    ratingLabel: "Good",
    reviewCount: 512,
    distanceFromCentreKm: 3.6,
  },
  {
    id: "HTL-GOA-2001",
    vendorName: "The Grand Resort",
    starRating: "5",
    images: [{ url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&q=80", caption: "Resort exterior" }],
    amenities: ["Pool", "Spa", "Free Wi-Fi", "Restaurant", "Bar", "Air Conditioning"],
    city: "Goa",
    area: "Candolim",
    latitude: 15.5185,
    longitude: 73.7631,
    propertyType: "RESORT",
    roomName: "Beachfront Villa",
    ratePlanName: "Villa - All Inclusive",
    ratePlanType: "ALL_INCLUSIVE",
    base: 15600,
    discountPercent: 20,
    discountDesc: "20% seasonal offer",
    roomsLeft: 5,
    freeCancel: true,
    inclusions: ["All meals included", "Free Wi-Fi", "Beach access"],
    extras: ["Airport Transfer"],
    guestRating: 8.9,
    ratingLabel: "Excellent",
    reviewCount: 1250,
    distanceFromCentreKm: 4.5,
  },
  {
    id: "HTL-JAI-3001",
    vendorName: "Pink City Boutique Stay",
    starRating: "4",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", thumburl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=200&q=80", caption: "Hotel exterior" }],
    amenities: ["Rooftop", "Breakfast", "Parking", "Free Wi-Fi", "Air Conditioning"],
    city: "Jaipur",
    area: "Pink City",
    latitude: 26.9124,
    longitude: 75.7873,
    propertyType: "HOTEL",
    roomName: "Heritage Room",
    ratePlanName: "Heritage Room - Breakfast Included",
    ratePlanType: "BED_AND_BREAKFAST",
    base: 3299,
    roomsLeft: 7,
    freeCancel: true,
    inclusions: ["Breakfast for 2 guests", "Free Wi-Fi"],
    extras: [],
    guestRating: 8.3,
    ratingLabel: "Very good",
    reviewCount: 614,
    distanceFromCentreKm: 2.1,
  },
];

const MOCK_HOTELS: HotelApiResult[] = HOTEL_SEEDS.map(buildHotel);

/**
 * Mock hotel search. In production this call filters server-side; here we
 * approximate that by matching the searched city and validate the shape
 * with the same schema the real API response would have to satisfy.
 */
export async function fetchHotelList(params: HotelSearchQueryParams) {
  const searchCity = params.city.split(",")[0]?.trim().toLowerCase() ?? "";
  const matched = MOCK_HOTELS.filter((hotel) => hotel.address[0]?.city.toLowerCase() === searchCity);
  const hotels = matched.length > 0 ? matched : MOCK_HOTELS;

  const response = HotelSearchApiResponseSchema.parse({
    meta: {
      status: "SUCCESS",
      uid: `hotel-search-${Date.now()}`,
      createdAt: new Date().toISOString(),
      timeTaken: 245,
      count: hotels.length,
    },
    data: { hotels },
  });

  return delayedResponse(response.data.hotels, 550);
}

/** Maps a raw API hotel result to the flattened shape the UI renders with. */
export function mapApiHotelToListItem(hotel: HotelApiResult): HotelListItem {
  const address = hotel.address[0];
  const { total, perNight } = hotel.rates.pricing;
  const discountAmount = total.discounts.reduce((sum, discount) => sum + discount.amount, 0);
  const taxAmount = total.taxes.reduce((sum, tax) => sum + tax.amount, 0);

  return {
    id: hotel.id,
    name: hotel.vendorName,
    propertyType: hotel.propertyType,
    starRating: Number(hotel.starRating),
    city: address?.city ?? "",
    area: address?.area ?? "",
    latitude: address?.latitude ?? 0,
    longitude: address?.longitude ?? 0,
    image: hotel.images[0]?.url ?? "",
    amenities: hotel.amenities,
    ratePlanName: hotel.rates.ratePlanName,
    ratePlanType: hotel.rates.ratePlanType,
    roomName: hotel.rates.roomName,
    currency: hotel.rates.currency,
    finalPrice: total.price,
    strikethroughPrice: discountAmount > 0 ? total.price + discountAmount : undefined,
    discountDesc: total.discounts[0]?.desc,
    perNightPrice: perNight.price,
    taxAmount,
    roomsLeft: hotel.rates.roomsLeft,
    freeCancel: hotel.rates.freeCancel,
    inclusions: hotel.rates.inclusions,
    guestRating: hotel.guestRating,
    ratingLabel: hotel.ratingLabel,
    reviewCount: hotel.reviewCount,
    distanceFromCentreKm: hotel.distanceFromCentreKm,
  };
}

/** Returns one flattened mock hotel by id for detail-page display data such as starting price. */
export function getHotelListItemById(hotelId: string): HotelListItem | undefined {
  const hotel = MOCK_HOTELS.find((item) => item.id === hotelId);
  return hotel ? mapApiHotelToListItem(hotel) : undefined;
}
