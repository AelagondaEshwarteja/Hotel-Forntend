import { useQuery } from "@tanstack/react-query";
import { differenceInCalendarDays } from "date-fns";
import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
import { PromoCodeSection } from "../components/PromoCodeSection";
import { ReviewFooterBar } from "../components/ReviewFooterBar";
import { RoomDetailsCard } from "../components/RoomDetailsCard";
import { TariffDetailsCard } from "../components/TariffDetailsCard";
import { mockPromoCodes } from "../data/mockReviewData";
import type { ReviewHotelContext } from "../types/reviewTypes";
import { toReviewSummary } from "../utils/reviewTransform";

export default function ReviewBookingPage() {
  const { hotelId = "" } = useParams();
  const [params] = useSearchParams();
  const ratePlanId = params.get("ratePlanId") ?? "";
  const roomTypeId = params.get("roomTypeId") ?? "";
  const search = useHotelSearchParams();
  const { message, showToast } = useToast();

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

  const [appliedCode, setAppliedCode] = useState(mockPromoCodes.find((promo) => promo.applied)?.code ?? "");

  const rate = useMemo(() => {
    const rates = ratesQuery.data?.data.rates ?? [];
    return rates.find((item) => item.ratePlanId === ratePlanId && item.roomTypeId === roomTypeId) ?? rates[0];
  }, [ratesQuery.data, ratePlanId, roomTypeId]);

  const hotelContext = useMemo<ReviewHotelContext | null>(() => {
    if (!contentQuery.data) {
      return null;
    }
    const nights = Math.max(1, differenceInCalendarDays(new Date(search.checkOut), new Date(search.checkIn)));
    return {
      name: contentQuery.data.name,
      address: [contentQuery.data.address.addressLine, contentQuery.data.address.city]
        .filter(Boolean)
        .join(", "),
      starRating: contentQuery.data.starRating,
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      nights,
      rooms: search.rooms,
      guests: search.adults + search.children,
    };
  }, [contentQuery.data, search]);

  const baseSummary = useMemo(() => {
    if (!rate || !hotelContext) {
      return null;
    }
    return toReviewSummary(rate, hotelContext);
  }, [rate, hotelContext]);

  const summary = useMemo(() => {
    if (!baseSummary) {
      return null;
    }
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
    showToast("Proceeding to guest details");
  }

  if (contentQuery.isError || ratesQuery.isError) {
    return (
      <PageTransition>
        <AppHeader title="Review Hotel Details" showMenu={false} />
        <ErrorState
          title="Couldn't load your booking"
          description="Something went wrong while fetching hotel and rate details. Please try again."
          actionLabel="Retry"
          onAction={() => {
            void contentQuery.refetch();
            void ratesQuery.refetch();
          }}
        />
      </PageTransition>
    );
  }

  if (contentQuery.isLoading || ratesQuery.isLoading || !summary) {
    return (
      <PageTransition>
        <AppHeader title="Review Hotel Details" showMenu={false} />
        <div className="space-y-4 px-4 pb-4">
          <Skeleton className="h-40" />
          <Skeleton className="h-48" />
          <Skeleton className="h-56" />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <AppHeader title="Review Hotel Details" showMenu={false} />

      <div className="flex flex-col gap-4 px-4 pb-4">
        <HotelStayCard hotel={summary.hotel} />
        <RoomDetailsCard summary={summary} />

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
