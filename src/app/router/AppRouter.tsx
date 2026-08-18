import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { RouteErrorPage } from "../../features/error/pages/RouteErrorPage";
import { GlobalLoader } from "../../shared/components/GlobalLoader";
import { AppLayout } from "../../shared/layouts/AppLayout";
import { BookingFlowLayout } from "../../shared/layouts/BookingFlowLayout";

const HomePage = lazy(() => import("../../features/home/pages/HomePage"));
const HotelListPage = lazy(() => import("../../features/hotelList/pages/HotelListPage"));
const HotelDetailPage = lazy(() => import("../../features/hotelDetail/pages/HotelDetailPage"));
const RoomSelectionPage = lazy(() => import("../../features/roomSelection/pages/RoomSelectionPage"));
const ReviewBookingPage = lazy(() => import("../../features/reviewBooking/pages/ReviewBookingPage"));
const BookingsPage = lazy(() => import("../../features/bookings/pages/BookingsPage"));
const WishlistPage = lazy(() => import("../../features/wishlist/pages/WishlistPage"));
const ExamplePage = lazy(() => import("../../features/example/pages/ExamplePage"));
const ProfilePage = lazy(() => import("../../features/profile/pages/ProfilePage"));


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Tab-bar pages: share AppLayout's persistent bottom navigation. */}
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="hotels" element={<HotelListPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="example" element={<ExamplePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Booking funnel: hotel details → room selection → review. Each of
            these pages owns a full-screen layout with its own fixed CTA bar,
            so they render under BookingFlowLayout (no persistent tab bar)
            rather than AppLayout — otherwise the two fixed bottom bars would
            stack on top of each other. */}
        <Route element={<BookingFlowLayout />}>
          <Route path="hotels/:hotelId" element={<HotelDetailPage />} />
          <Route path="hotels/:hotelId/rooms" element={<RoomSelectionPage />} />
          <Route path="hotels/:hotelId/review" element={<ReviewBookingPage />} />
      
        </Route>

        <Route path="*" element={<RouteErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GlobalLoader label="Loading app" />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
