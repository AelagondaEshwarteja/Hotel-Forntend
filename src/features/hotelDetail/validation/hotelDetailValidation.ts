import { z } from "zod";

const ImageSchema = z.object({ url: z.string(), thumburl: z.string(), caption: z.string() });
const AmenitySchema = z.object({ name: z.string(), code: z.string(), category: z.string(), subCategory: z.string() });

export const HotelContentApiResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    name: z.string(),
    images: z.array(ImageSchema),
    address: z.object({
      addressLine: z.string(), city: z.string(), state: z.string(), country: z.string(), pincode: z.string(),
      area: z.string(), latitude: z.number(), longitude: z.number(), zone: z.string(),
    }),
    roomTypes: z.array(z.object({
      id: z.string(), name: z.string(), maxGuestOccupancy: z.number(), images: z.array(ImageSchema),
      amenities: z.array(AmenitySchema), beds: z.array(z.object({ bedType: z.string(), bedCount: z.number() })), roomSize: z.string(),
    })),
    description: z.string(), checkIn: z.string(), checkOut: z.string(),
    contact: z.object({ phone: z.string(), phoneNoExtension: z.string(), fax: z.string(), email: z.string() }),
    starRating: z.number(), totalRooms: z.number(), totalFloors: z.number(), carParkingSlots: z.number(),
    landmarks: z.array(z.object({ name: z.string(), distance: z.number() })),
    amenities: z.array(AmenitySchema),
    policies: z.array(z.object({ type: z.string(), desc: z.string() })),
    themes: z.array(z.string()), rank: z.object({ weekday: z.number(), weekend: z.number() }), anyTimeCheckIn: z.boolean(),
    googleReviewInfo: z.object({
      placeId: z.string(), noOfReviews: z.number(), averageRating: z.number(), writeReviewURL: z.string(), reviewsPageURL: z.string(),
      review: z.array(z.object({ review: z.string(), name: z.string(), rating: z.number(), timestamp: z.string() })),
    }),
    nCtgs: z.object({
      Restaurant: z.array(z.object({ R: z.string(), C: z.string(), T: z.string() })),
      Bar: z.array(z.object({ B: z.string(), C: z.string(), T: z.string() })),
      Important_Landmark: z.array(z.object({ D: z.string(), L: z.string() })),
      Most_Popular_Landmark: z.array(z.object({ D: z.string(), L: z.string() })),
    }),
    extraInfo: z.object({ checkInInstruction: z.string() }),
  }),
});
