import { Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../shared/utils/cn";
import type { Hotel } from "../types/homeTypes";

type HotelCardProps = {
  hotel: Hotel;
};

export function HotelCard({ hotel }: HotelCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const locationText = `${hotel.city}, ${hotel.country}`;
  const price = hotel.pricePerNight.toLocaleString("en-IN");

  return (
    <article className="w-[285px] min-w-[285px] snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-[180px] w-full overflow-hidden bg-secondary">
        <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover" />

        <button
          type="button"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((current) => !current)}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm backdrop-blur transition active:scale-95"
        >
          <Heart
            aria-hidden="true"
            className={cn("size-5", isFavorite ? "fill-destructive text-destructive" : "text-foreground")}
            strokeWidth={1.8}
          />
        </button>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-card/95 px-2.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          <Star aria-hidden="true" className="size-3.5 fill-primary text-primary" />
          <span>{hotel.starRating.toFixed(1)}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="truncate text-base font-bold text-foreground">{hotel.name}</h3>

        <div className="mt-2 flex items-center gap-1.5">
          <MapPin aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
          <p className="truncate text-sm text-muted-foreground">{locationText}</p>
        </div>

        <p className="mt-2 truncate text-xs text-muted-foreground">{hotel.amenities[0] ?? "Comfort stay"}</p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-foreground">₹{price}</p>
            <p className="text-xs text-muted-foreground">/ night</p>
          </div>

          {hotel.originalPrice ? (
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
              Free cancellation
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
