export { MAX_ROOMS_PER_BOOKING } from "../../../shared/constants/booking";

export type GuestTitle = "Mr" | "Mrs" | "Ms";

export type RoomGuest = {
  roomNumber: number;
  title: GuestTitle;
  firstName: string;
  lastName: string;
};

export type ContactDetails = {
  email: string;
  countryCode: string;
  phone: string;
};

export type GstDetails = {
  gstNumber: string;
  companyName: string;
};

export type GuestDetailsForm = {
  rooms: RoomGuest[];
  contact: ContactDetails;
  gst?: GstDetails;
};

export type GuestDetailsRouteState = {
  rooms: number;
  nights: number;
  amount: number;
  hotelName?: string;
  hotelEmail?: string;
};

export type GuestDetailsResult = GuestDetailsRouteState & { guestName: string };