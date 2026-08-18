import { Skeleton } from "../../../shared/components/Skeleton";
import type { Hotel } from "../types/homeTypes";
import { HotelCard } from "./HotelCard";

type RecommendedHotelsProps = {
  hotels: Hotel[] | undefined;
  isLoading: boolean;
};

export function RecommendedHotels({ hotels, isLoading }: RecommendedHotelsProps) {
  return (
    <section className="px-4 pt-6">
      <h2 className="px-1 text-sm font-bold text-foreground">Recommended for you</h2>

      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none">
        {isLoading
          ? Array.from({ length: 4 }).map(
              (_, index) => (
                <Skeleton
                  key={index}
                  className="h-64 w-[285px] min-w-[285px] snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                />
              ),
            )
          : hotels?.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
      </div>
    </section>
  );
}
