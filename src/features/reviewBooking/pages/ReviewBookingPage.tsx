import { useQuery } from "@tanstack/react-query";
import { differenceInCalendarDays, parseISO } from "date-fns";
import { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { queryKeys } from "../../../shared/api/queryKeys";
import { AppHeader } from "../../../shared/components/AppHeader";
import { ErrorState } from "../../../shared/components/ErrorState";
import { PageTransition } from "../../../shared/components/PageTransition";
import { Skeleton } from "../../../shared/components/Skeleton";
import { Toast } from "../../../shared/components/Toast";
import { useToast } from "../../../shared/hooks/useToast";
import { fetchHotelContent } from "../../hotelDetail/api/hotelDetailApi";
import { useHotelSearchParams } from "../../hotelList/hooks/useHotelSearchParams";
import { fetchHotelRates } from "../../roomSelection/api/roomSelectionApi";
import { HotelStayCard } from "../components/HotelStayCard";
// import { LoginPromoBanner } from "../components/LoginPromoBanner";
import { PromoCodeSection } from "../components/PromoCodeSection";
import { ReviewFooterBar } from "../components/ReviewFooterBar";
import { RoomDetailsCard } from "../components/RoomDetailsCard";
import { TariffDetailsCard } from "../components/TariffDetailsCard";
import { mockPromoCodes } from "../data/mockReviewData";
import { toReviewSummary, toStayContext } from "../utils/reviewTransform";

export default function ReviewBookingPage() {
  const { hotelId = "" } = useParams();
  const [searchParams] = useSearchParams();
  const stayParams = useHotelSearchParams();
  const navigate = useNavigate();
  const { message, showToast } = useToast();

  const ratePlanId = searchParams.get("ratePlanId") ?? "";
  const roomTypeId = searchParams.get("roomTypeId") ?? "";

  const contentQuery = useQuery({
    queryKey: queryKeys.hotelDetail(hotelId),
    queryFn: () => fetchHotelContent(hotelId),
    enabled: Boolean(hotelId),
  });
  const ratesQuery = useQuery({
    queryKey: queryKeys.hotelRates(hotelId),
    queryFn: () => fetchHotelRates(hotelId),
    enabled: Boolean(hotelId),
  });

  const rate = useMemo(
    () => ratesQuery.data?.data.rates.find((item) => item.ratePlanId === ratePlanId && item.roomTypeId === roomTypeId),
    [ratesQuery.data, ratePlanId, roomTypeId],
  );

  const nights = Math.max(1, differenceInCalendarDays(parseISO(stayParams.checkOut), parseISO(stayParams.checkIn)));
  const stay = useMemo(() => toStayContext(stayParams, nights), [stayParams, nights]);

  const baseSummary = useMemo(() => {
    if (!contentQuery.data || !rate) return null;
    return toReviewSummary(contentQuery.data, rate, stay);
  }, [contentQuery.data, rate, stay]);

  const [appliedCode, setAppliedCode] = useState(mockPromoCodes.find((promo) => promo.applied)?.code ?? "");

  const summary = useMemo(() => {
    if (!baseSummary) return null;
    const promo = mockPromoCodes.find((item) => item.code === appliedCode);
    const discountTotal = promo?.save ?? 0;
    const payableTotal = baseSummary.baseTotal + baseSummary.taxTotal + baseSummary.chargesTotal - discountTotal;

    return {
      ...baseSummary,
      discountTotal,
      discountDesc: promo?.description ?? "",
      payableTotal,
      eCashEarned: Math.round(payableTotal * 0.15),
    };
  }, [appliedCode, baseSummary]);

  function handleSelectPromo(code: string) {
    setAppliedCode(code);
    showToast(`${code} applied`);
  }

  function handleRemovePromo() {
    setAppliedCode("");
    showToast("Promo code removed");
  }

  function handleProceed() {
    if (!summary) return;

    navigate(`/hotels/${hotelId}/guest-details`, {
      state: {
        rooms: summary.stay.rooms,
        nights: summary.stay.nights,
        amount: summary.payableTotal,
        hotelName: summary.hotel.name,
        hotelEmail: summary.hotel.contact.email,
      },
    });
  }

  if (contentQuery.isError || ratesQuery.isError) {
    return (
      <PageTransition>
        <ErrorState
          title="Couldn't load this booking"
          description="Something went wrong while fetching the hotel or rate details. Please try again."
          actionLabel="Retry"
          onAction={() => {
            void contentQuery.refetch();
            void ratesQuery.refetch();
          }}
        />
      </PageTransition>
    );
  }

  if (contentQuery.isLoading || ratesQuery.isLoading || !contentQuery.data || !ratesQuery.data) {
    return (
      <PageTransition>
        <AppHeader title="Review Hotel Details" />
        <div className="flex flex-col gap-4 px-4 pb-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-32" />
          <Skeleton className="h-24" />
          <Skeleton className="h-48" />
          <Skeleton className="h-40" />
        </div>
      </PageTransition>
    );
  }

  if (!summary) {
    return (
      <PageTransition>
        <ErrorState
          title="No rate plan selected"
          description="We couldn't find the room and rate plan for this booking. Please pick a room again."
          actionLabel="Back to room selection"
          onAction={() => navigate(`/hotels/${hotelId}/rooms?${searchParams.toString()}`)}
        />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <AppHeader title="Review Hotel Details" />

      <div className="flex flex-col gap-4 px-4 pb-4">
        <HotelStayCard hotel={summary.hotel} stay={summary.stay} />
        <RoomDetailsCard summary={summary} />
        {/* <LoginPromoBanner onLoginClick={() => navigate("/profile")} /> */}
        <PromoCodeSection
          promoCodes={mockPromoCodes}
          appliedCode={appliedCode}
          onSelect={handleSelectPromo}
          onRemove={handleRemovePromo}
        />
        <TariffDetailsCard summary={summary} />
      </div>

      <ReviewFooterBar amount={summary.payableTotal} onProceed={handleProceed} />

      <Toast message={message} />
    </PageTransition>
  );
}
