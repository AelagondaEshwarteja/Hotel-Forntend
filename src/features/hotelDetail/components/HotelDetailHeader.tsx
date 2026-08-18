import { MapPin } from "lucide-react";
import type { HotelContentData } from "../types/hotelDetailTypes";

type Props = { hotel: HotelContentData; ratingLabel: string };

export function HotelDetailHeader({ hotel, ratingLabel }: Props) {
  return (
    <div className="bg-card px-5 pb-4 pt-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-foreground">{hotel.name}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-3.5" />{hotel.address.area}, {hotel.address.city}</p>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{hotel.starRating}-Star Hotel</span>
      </div>
      <div className="mt-4 flex items-center gap-2 border-l-2 border-primary pl-3">
        <span className="rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">{hotel.googleReviewInfo.averageRating.toFixed(1)}</span>
        <span className="text-sm font-bold text-foreground">{ratingLabel}</span>
        <span className="text-sm text-muted-foreground">· {hotel.googleReviewInfo.noOfReviews.toLocaleString("en-IN")} reviews</span>
      </div>
    </div>
  );
}
