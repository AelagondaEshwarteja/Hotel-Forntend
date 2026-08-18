import { Heart, MapPin, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../shared/utils/cn";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { HotelListItem } from "../types/hotelListTypes";

type HotelListCardProps = {
  hotel: HotelListItem;
};

export function HotelListCard({ hotel }: HotelListCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const visibleAmenities = hotel.amenities.slice(0, 2);
  const remainingAmenityCount = hotel.amenities.length - visibleAmenities.length;

  return (
    <Link
      to={`/hotels/${hotel.id}${location.search}`}
      className="flex overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition active:scale-[0.99]"
    >
      <div className="relative w-[9.5rem] shrink-0">
        <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />

        <button
          type="button"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsFavorite((current) => !current);
          }}
          className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm backdrop-blur transition active:scale-95"
        >
          <Heart
            aria-hidden="true"
            className={cn("size-4", isFavorite ? "fill-destructive text-destructive" : "text-foreground")}
            strokeWidth={1.8}
          />
        </button>

        {hotel.roomsLeft <= 3 ? (
          <span className="absolute bottom-2 left-2 rounded-md bg-destructive px-2 py-0.5 text-[0.6rem] font-bold text-destructive-foreground shadow-sm">
            Only {hotel.roomsLeft} left
          </span>
        ) : null}
      </div>

      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 truncate text-sm font-bold text-foreground">{hotel.name}</h3>
          <span className="flex shrink-0 items-center gap-0.5 rounded-md bg-secondary px-1.5 py-0.5 text-[0.65rem] font-bold text-secondary-foreground">
            <Star aria-hidden="true" className="size-2.5 fill-primary text-primary" />
            {hotel.starRating.toFixed(1)}
          </span>
        </div>

        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">
            {hotel.area}
            {hotel.distanceFromCentreKm !== undefined ? ` · ${hotel.distanceFromCentreKm} km from centre` : ""}
          </span>
        </div>

        {hotel.guestRating !== undefined ? (
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="rounded-md bg-primary px-1.5 py-0.5 text-[0.65rem] font-bold text-primary-foreground">
              {hotel.guestRating.toFixed(1)}
            </span>
            
            {hotel.reviewCount ? (
              <span className="text-xs text-muted-foreground">· {hotel.reviewCount.toLocaleString("en-IN")} reviews</span>
            ) : null}
          </div>
        ) : null}

        {visibleAmenities.length > 0 ? (
          <p className="mt-1.5 truncate text-xs text-muted-foreground">
            {visibleAmenities.join(" · ")}
            {remainingAmenityCount > 0 ? ` +${remainingAmenityCount} more` : ""}
          </p>
        ) : null}

        <div className="mt-2 flex items-end justify-between gap-2">
          <div className="min-w-0">
            {hotel.freeCancel ? (
              <p className="flex items-center gap-1 text-[0.65rem] font-semibold text-emerald-600">
                <ShieldCheck aria-hidden="true" className="size-3" />
                Free cancellation
              </p>
            ) : null}
            <div className="mt-0.5 flex items-baseline gap-1.5">
              {hotel.strikethroughPrice ? (
                <span className="text-xs text-muted-foreground line-through">{formatCurrency(hotel.strikethroughPrice)}</span>
              ) : null}
              <span className="text-base font-bold text-foreground">{formatCurrency(hotel.finalPrice)}</span>
            </div>
            <p className="text-[0.65rem] text-muted-foreground">+ taxes &amp; fees included</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
