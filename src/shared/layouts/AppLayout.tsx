import { CalendarCheck, CircleUserRound, Heart, Home } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { BottomNavigation } from "../navigation/BottomNavigation";
import { cn } from "../utils/cn";

const navigationItems = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Bookings", to: "/bookings", icon: CalendarCheck },
  { label: "Wishlist", to: "/wishlist", icon: Heart },
  { label: "Profile", to: "/profile", icon: CircleUserRound },
];

export function AppLayout() {
  const location = useLocation();
  // Profile owns a full-screen layout for now (no persistent tab bar) while
  // its sub-pages are still being designed. Revisit once those exist.
  const hideBottomNav = location.pathname.startsWith("/profile");

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <main
        className={cn(
          "mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-muted shadow-2xl",
          !hideBottomNav && "pb-[calc(5.75rem+env(safe-area-inset-bottom))]",
        )}
      >
        <Outlet />
      </main>
      {!hideBottomNav ? <BottomNavigation items={navigationItems} /> : null}
    </div>
  );
}
