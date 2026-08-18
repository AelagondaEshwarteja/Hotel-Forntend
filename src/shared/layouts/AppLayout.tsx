import { CalendarCheck, CircleUserRound, Heart, Home } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { BottomNavigation } from "../navigation/BottomNavigation";

const navigationItems = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Bookings", to: "/bookings", icon: CalendarCheck },
  { label: "Wishlist", to: "/wishlist", icon: Heart },
  { label: "Profile", to: "/profile", icon: CircleUserRound },
];

export function AppLayout() {
  const { pathname } = useLocation();
  const isHotelFlowPage = /^\/hotels\/[^/]+(?:\/(?:rooms|review))?$/.test(pathname);

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <main className={isHotelFlowPage ? "mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-muted shadow-2xl" : "mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-muted pb-[calc(5.75rem+env(safe-area-inset-bottom))] shadow-2xl"}>
        <Outlet />
      </main>
      {!isHotelFlowPage ? <BottomNavigation items={navigationItems} /> : null}
    </div>
  );
}
