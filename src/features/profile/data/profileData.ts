export type MemberTier = "Silver" | "Gold" | "Platinum";

export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  gstNumber?: string;
  companyName?: string;
  memberTier: MemberTier;
  /**
   * Placeholder counters for the profile stats row. There's no bookings or
   * wishlist store in this app yet (both pages are still empty-state stubs),
   * so these are illustrative for now — swap for real counts (e.g. from a
   * `useBookings()` / `useWishlist()` query) once that data exists.
   */
  bookingsCount: number;
  wishlistCount: number;
  /** 0-100. Drives the "complete your profile" nudge on the profile page. */
  profileCompletionPercent: number;
};

export const CURRENT_USER_PROFILE: UserProfile = {
  firstName: "Aarav",
  lastName: "Sharma",
  email: "aarav.sharma@example.com",
  countryCode: "+91",
  phone: "9876543210",
  memberTier: "Gold",
  bookingsCount: 6,
  wishlistCount: 12,
  profileCompletionPercent: 70,
};
