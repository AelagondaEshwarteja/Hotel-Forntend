import { useNavigate } from "react-router-dom";
import type { UserProfile } from "../data/profileData";

type ProfileStatsCardProps = {
  profile: UserProfile;
};

export function ProfileStatsCard({ profile }: ProfileStatsCardProps) {
  const navigate = useNavigate();

  return (
    <div className="-mt-8 flex overflow-hidden rounded-2xl border border-border bg-card shadow-md">
      <button
        type="button"
        onClick={() => navigate("/bookings")}
        className="flex-1 border-r border-border py-3.5 text-center transition active:bg-secondary"
      >
        <p className="text-lg font-bold text-foreground">{profile.bookingsCount}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">Bookings</p>
      </button>

      <button
        type="button"
        onClick={() => navigate("/wishlist")}
        className="flex-1 py-3.5 text-center transition active:bg-secondary"
      >
        <p className="text-lg font-bold text-foreground">{profile.wishlistCount}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">Wishlist</p>
      </button>
    </div>
  );
}
