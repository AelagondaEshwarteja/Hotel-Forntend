import { z } from "zod";
import { MAX_ROOMS_PER_BOOKING } from "../types/guestDetailsTypes";

export const GuestTitleSchema = z.enum(["Mr", "Mrs", "Ms"]);

export const RoomGuestSchema = z.object({
  roomNumber: z.number().int().positive(),
  title: GuestTitleSchema,
  firstName: z.string().trim().min(1, "Enter first name"),
  lastName: z.string().trim().min(1, "Enter last name"),
});

export const ContactDetailsSchema = z.object({
  email: z.string().trim().min(1, "Enter your email").email("Enter a valid email"),
  countryCode: z.string().min(1),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
});

export const GstDetailsSchema = z.object({
  gstNumber: z
    .string()
    .trim()
    .regex(/^[0-9A-Za-z]{15}$/, "Enter a valid 15-character GSTIN"),
  companyName: z.string().trim().min(1, "Enter the company / legal name"),
});

export const GuestDetailsFormSchema = z.object({
  rooms: z.array(RoomGuestSchema).min(1).max(MAX_ROOMS_PER_BOOKING),
  contact: ContactDetailsSchema,
  gst: GstDetailsSchema.optional(),
});