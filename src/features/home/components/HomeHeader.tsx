import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { CURRENT_USER_PROFILE } from "../../profile/data/profileData";
import { getUserInitials } from "../../profile/utils/profileUtils";

export function HomeHeader() {
  const initials = getUserInitials(CURRENT_USER_PROFILE);

  return (
    <header className="relative z-10 flex items-center justify-between gap-3 px-5 pt-[calc(1rem+env(safe-area-inset-top))]">
<<<<<<< HEAD
      <div className="min-w-0">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground/75">Good evening</p>
        <button type="button" className="flex items-center gap-1 text-sm font-bold text-primary-foreground">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">Mumbai, India</span>
        </button>
=======
      <div className="flex items-center gap-2.5">
        {/* <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
          H
        </span> */}
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground/75">
            Good evening
          </p>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-bold text-primary-foreground"
          >
            <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">Mumbai, India</span>
          </button>
        </div>
>>>>>>> c5301afae4d103637cb63f9aa0b93a8cf777a254
      </div>

      <Link
        to="/profile"
        aria-label="Open profile"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-sm font-bold text-primary shadow-sm transition active:scale-95"
      >
        {initials}
      </Link>
    </header>
  );
}
