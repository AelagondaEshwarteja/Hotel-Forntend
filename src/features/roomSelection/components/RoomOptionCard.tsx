import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { BedDouble, ChevronDown, Snowflake, Users, Wifi, ZoomIn } from "lucide-react";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { RoomRatePlan, RoomWithRates } from "../types/roomSelectionTypes";
import { useState } from "react";
import { RoomRateCard } from "./RoomRateCard";

type Props = { item: RoomWithRates; expanded: boolean; onToggle: () => void; onSelectRate: (rate: RoomRatePlan) => void };

function bedLabel(beds: RoomWithRates["room"]["beds"]) {
  if (!beds.length) return "Bed details available";
  return beds.map((bed) => `${bed.bedCount > 1 ? `${bed.bedCount} ` : ""}${bed.bedType}`).join(", ");
}

export function RoomOptionCard({ item, expanded, onToggle, onSelectRate }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const { room, rates } = item;
  const fromPrice = rates.length ? Math.min(...rates.map((rate) => rate.pricing.perNight.price)) : undefined;
  const minRoomsLeft = rates.length ? Math.min(...rates.map((rate) => rate.roomsLeft)) : undefined;
  const image = room.images[0]?.url;
  // added new feature here 
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [selectedRatePlanId, setSelectedRatePlanId] = useState(rates[0]?.ratePlanId ?? null);
  function handleToggleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  }

  return (
    <article className={`overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors ${expanded ? "border-primary/50" : "border-border"}`}>
      <div  tabIndex={0} onClick={onToggle} onKeyDown={handleToggleKeyDown}  aria-expanded={expanded} className="w-full p-3 text-left">
        <div className="flex gap-3">
          {/* added from here  */}
           {image ? (
            <m.button
              type="button"
              layout
              onClick={(event) => {
                event.stopPropagation();
                setIsImageEnlarged((current) => !current);
              }}
              aria-label={isImageEnlarged ? "Shrink room photo" : "Enlarge room photo"}
              aria-pressed={isImageEnlarged}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
              className={`relative shrink-0 overflow-hidden rounded-xl ${
                isImageEnlarged ? "h-36 w-40" : expanded ? "h-24 w-28" : "size-20"
              }`}
            >
              <img src={image} alt={room.images[0]?.caption || room.name} className="size-full object-cover" />
              <span className="absolute bottom-1 right-1 flex size-5 items-center justify-center rounded-full bg-foreground/60 text-background">
                <ZoomIn aria-hidden="true" className="size-3" />
              </span>
            </m.button>
          ) : null}







          {/* {image ? <img src={image} alt={room.images[0]?.caption || room.name} className={`shrink-0 rounded-xl object-cover ${expanded ? "h-24 w-28" : "size-20"}`} /> : null} */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-bold leading-5">{room.name}</h2>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} /></span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{room.roomSize} · {bedLabel(room.beds)}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Users className="size-3.5" />Up to {room.maxGuestOccupancy} guests</p>
            {!expanded && fromPrice !== undefined ? <div className="mt-2 flex items-end justify-between gap-2"><div className="flex gap-2 text-[11px] text-muted-foreground"><span className="flex items-center gap-1"><Wifi className="size-3 text-primary" />Wi-Fi</span><span className="flex items-center gap-1"><Snowflake className="size-3 text-primary" />AC</span></div><div className="text-right"><p className="text-[10px] text-muted-foreground">From</p><p className="text-sm font-bold">{formatCurrency(fromPrice)}<span className="text-[10px] font-normal text-muted-foreground"> / night</span></p></div></div> : null}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded ? (
          <m.div initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.2 }} className="overflow-hidden">
            <div className="px-3 pb-3">
              <div className="flex flex-wrap gap-2 border-y border-border py-3 text-[11px] text-muted-foreground">
                {room.amenities.slice(0, 3).map((amenity) => <span key={amenity.code} className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">{amenity.name}</span>)}
                <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground"><BedDouble className="size-3 text-primary" />{bedLabel(room.beds)}</span>
              </div>
              <div className="mt-3 flex items-center justify-between"><h3 className="text-sm font-bold">Rate Plans ({rates.length})</h3>{minRoomsLeft !== undefined ? <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${minRoomsLeft <= 2 ? "bg-destructive/10 text-destructive" : "bg-secondary text-primary"}`}>{minRoomsLeft} min. left</span> : null}</div>
              <div className="mt-2.5 space-y-2.5">
                {rates.map((rate, index) => <RoomRateCard
                 key={rate.ratePlanId}
                  rate={rate}
                  isSelected = {selectedRatePlanId === rate.ratePlanId}
                  isMostPreferred = {index === 0}
                  onChoose={()=>setSelectedRatePlanId(rate.ratePlanId)}
                  onSelect={onSelectRate}
                   />
                   )}
                   </div>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
