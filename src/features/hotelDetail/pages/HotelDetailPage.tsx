import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { queryKeys } from "../../../shared/api/queryKeys";
import { ErrorState } from "../../../shared/components/ErrorState";
import { PageTransition } from "../../../shared/components/PageTransition";
import { Skeleton } from "../../../shared/components/Skeleton";
import { getHotelListItemById } from "../../hotelList/api/hotelListApi";
import { fetchHotelContent } from "../api/hotelDetailApi";
import { AboutSection } from "../components/AboutSection";
import { AmenitiesSection } from "../components/AmenitiesSection";
import { HotelBookingBar } from "../components/HotelBookingBar";
import { HotelDetailHeader } from "../components/HotelDetailHeader";
import { HotelDetailTabs } from "../components/HotelDetailTabs";
import { HotelImageGallery } from "../components/HotelImageGallery";
import { PoliciesSection } from "../components/PoliciesSection";
import type { HotelDetailTab } from "../types/hotelDetailTypes";

function ratingLabel(rating: number) {
  if (rating >= 4.5) return "Excellent";
  if (rating >= 4) return "Very good";
  if (rating >= 3.5) return "Good";
  return "Pleasant";
}

export default function HotelDetailPage() {
  const { hotelId = "" } = useParams();
  const [activeTab, setActiveTab] = useState<HotelDetailTab>("about");
  const shouldReduceMotion = useReducedMotion();
  const listHotel = useMemo(() => getHotelListItemById(hotelId), [hotelId]);
  const query = useQuery({ queryKey: queryKeys.hotelDetail(hotelId), queryFn: () => fetchHotelContent(hotelId), enabled: Boolean(hotelId) });

  if (query.isError) return <PageTransition><ErrorState title="Hotel details unavailable" description="We couldn't load this hotel's details." actionLabel="Retry" onAction={() => query.refetch()} /></PageTransition>;
  if (query.isLoading || !query.data) return <PageTransition><section className="min-h-dvh bg-muted"><Skeleton className="h-[18rem] rounded-none"/><div className="space-y-3 p-4"><Skeleton className="h-24"/><Skeleton className="h-14"/><Skeleton className="h-72"/></div></section></PageTransition>;

  const hotel = query.data;
  return <PageTransition>
    <section className="min-h-dvh bg-muted pb-28">
      <HotelImageGallery images={hotel.images} />
      <HotelDetailHeader hotel={hotel} ratingLabel={ratingLabel(hotel.googleReviewInfo.averageRating)} />
      <HotelDetailTabs active={activeTab} onChange={setActiveTab} />
      <AnimatePresence mode="wait" initial={false}>
        <m.div key={activeTab} initial={shouldReduceMotion ? false : {opacity:0,y:8}} animate={{opacity:1,y:0}} exit={shouldReduceMotion ? undefined : {opacity:0,y:-6}} transition={{duration:shouldReduceMotion?0:0.18}}>
          {activeTab === "about" ? <AboutSection hotel={hotel} /> : null}
          {activeTab === "amenities" ? <AmenitiesSection hotel={hotel} /> : null}
          {activeTab === "policies" ? <PoliciesSection hotel={hotel} /> : null}
        </m.div>
      </AnimatePresence>
    </section>
    <HotelBookingBar price={listHotel?.finalPrice} />
  </PageTransition>;
}
