import type { UserProfile } from "../data/profileData";

export function getUserInitials(profile: Pick<UserProfile, "firstName" | "lastName">) {
  const first = profile.firstName.trim().charAt(0);
  const last = profile.lastName.trim().charAt(0);
  return `${first}${last}`.toUpperCase() || "?";
}

export function getUserFullName(profile: Pick<UserProfile, "firstName" | "lastName">) {
  return `${profile.firstName} ${profile.lastName}`.trim() || "Guest";
}
