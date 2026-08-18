import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import type { UserProfile } from "../data/profileData";
import { getUserFullName, getUserInitials } from "../utils/profileUtils";

type ProfileHeaderProps = {
  profile: UserProfile;
  onBackClick: () => void;
  onSettingsClick: () => void;
  onDetailsClick: () => void;
};

export function ProfileHeader({ profile, onBackClick, onSettingsClick, onDetailsClick }: ProfileHeaderProps) {
  const fullName = getUserFullName(profile);
  const initials = getUserInitials(profile);

  return (
    <div className="rounded-b-[2rem] bg-primary px-5 pb-12 pt-[calc(1.25rem+env(safe-area-inset-top))] text-primary-foreground shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBackClick}
          aria-label="Back to home"
          className="flex size-10 items-center justify-center rounded-full transition active:bg-primary-foreground/15"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        <h1 className="flex-1 text-center text-lg font-bold tracking-tight">Profile</h1>

        <button
          type="button"
          onClick={onSettingsClick}
          aria-label="Account settings"
          className="flex size-10 items-center justify-center rounded-full transition active:bg-primary-foreground/15"
        >
          <Settings aria-hidden="true" className="size-5" />
        </button>
      </div>

      <button type="button" onClick={onDetailsClick} className="mt-6 flex w-full items-center gap-4 text-left">
        <span className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-primary-foreground text-2xl font-bold text-primary ring-4 ring-primary-foreground/25">
          {initials}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-xl font-bold leading-tight">{fullName}</span>
          <span className="mt-1 block truncate text-sm font-medium text-primary-foreground/85">
            {profile.countryCode} {profile.phone}
          </span>
          
        </span>

        <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-primary-foreground/80" />
      </button>
    </div>
  );
}
