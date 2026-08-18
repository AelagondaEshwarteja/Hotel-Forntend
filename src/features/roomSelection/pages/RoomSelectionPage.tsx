import { useQuery } from "@tanstack/react-query";
import { ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { queryKeys } from "../../../shared/api/queryKeys";
import { ErrorState } from "../../../shared/components/ErrorState";
import { PageTransition } from "../../../shared/components/PageTransition";
import { Skeleton } from "../../../shared/components/Skeleton";
import { fetchHotelContent } from "../../hotelDetail/api/hotelDetailApi";
import { useHotelSearchParams } from "../../hotelList/hooks/useHotelSearchParams";
import { fetchHotelRates } from "../api/roomSelectionApi";
import { RoomOptionCard } from "../components/RoomOptionCard";
import { RoomSelectionHeader } from "../components/RoomSelectionHeader";
import type { RoomRatePlan, RoomWithRates } from "../types/roomSelectionTypes";

export default function RoomSelectionPage() {
  const { hotelId = "" } = useParams();
  const navigate = useNavigate();
  const search = useHotelSearchParams();
  const [expandedRoomId, setExpandedRoomId] = useState<string | null>(null);

  const contentQuery = useQuery({ queryKey: queryKeys.hotelDetail(hotelId), queryFn: () => fetchHotelContent(hotelId), enabled: Boolean(hotelId) });
  const ratesQuery = useQuery({ queryKey: queryKeys.hotelRates(hotelId), queryFn: () => fetchHotelRates(hotelId), enabled: Boolean(hotelId) });

  const rooms = useMemo<RoomWithRates[]>(() => {
    if (!contentQuery.data || !ratesQuery.data) return [];
    return contentQuery.data.roomTypes.map((room) => ({ room, rates: ratesQuery.data.data.rates.filter((rate) => rate.roomTypeId === room.id) })).filter((item) => item.rates.length > 0);
  }, [contentQuery.data, ratesQuery.data]);

  const activeRoomId = expandedRoomId ?? rooms[0]?.room.id ?? null;

  function handleSelectRate(rate: RoomRatePlan) {
    const params = new URLSearchParams(window.location.search);
    params.set("ratePlanId", rate.ratePlanId);
    params.set("roomTypeId", rate.roomTypeId);
    navigate(`/hotels/${hotelId}/review?${params.toString()}`);
  }

  if (contentQuery.isError || ratesQuery.isError) return <PageTransition><ErrorState title="Rooms unavailable" description="We couldn't load room availability for this hotel." actionLabel="Retry" onAction={() => { void contentQuery.refetch(); void ratesQuery.refetch(); }} /></PageTransition>;
  if (contentQuery.isLoading || ratesQuery.isLoading || !contentQuery.data) return <PageTransition><section className="min-h-dvh bg-muted"><Skeleton className="h-36 rounded-none"/><div className="space-y-3 p-4"><Skeleton className="h-64"/><Skeleton className="h-28"/><Skeleton className="h-28"/></div></section></PageTransition>;

  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted pb-6">
        <RoomSelectionHeader hotelName={contentQuery.data.name} search={search} />
        <main className="space-y-3 p-4">
          {rooms.map((item) => <RoomOptionCard key={item.room.id} item={item} expanded={activeRoomId === item.room.id} onToggle={() => setExpandedRoomId(activeRoomId === item.room.id ? "" : item.room.id)} onSelectRate={handleSelectRate} />)}
          <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-secondary p-3.5"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-card text-primary"><ShieldCheck className="size-4" /></span><div><p className="text-xs font-bold">Prices include taxes & fees</p><p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">Final payable price is shown before you continue to booking.</p></div></div>
        </main>
      </section>
    </PageTransition>
  );
}
