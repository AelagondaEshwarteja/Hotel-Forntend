import { Check, CircleX, ShieldCheck } from "lucide-react";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { RoomRatePlan } from "../types/roomSelectionTypes";

type Props = { 
  rate: RoomRatePlan;
  isSelected : boolean;
  isMostPreferred?: boolean;
  onChoose :()=> void;  
  // recommended?: boolean; 
  onSelect: (rate: RoomRatePlan) => void };

function shortPlanName(rate: RoomRatePlan) {
  const marker = " - ";
  return rate.ratePlanName.includes(marker) ? rate.ratePlanName.split(marker).slice(1).join(marker) : rate.ratePlanName;
}

export function RoomRateCard({ rate, isSelected, isMostPreferred = false, onChoose, onSelect}: Props) {
  const cancellationText = rate.cancellation.freeCancellation
    ? rate.cancellation.cancellationPolicies[0] ?? "Free cancellation available"
    : "Non-refundable";

  return (
    <article 
    role="radio"
    aria-checked = {isSelected}
    tabIndex={0}
    onClick={onChoose}
    onKeyDown={(event)=>{
      if(event.key === "Enter" || event.key === " " ){
        event.preventDefault();
        onChoose();
      }
    }}
    className={`cursor-pointer rounded-2xl border p-3.5 shadow-sm transition-colors ${isSelected ? "border-primary bg-secondary/40" : "border-border bg-card"}`}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${isSelected? "border-primary" : "border-border"}`}>
          {isSelected ? <span className="size-2.5 rounded-full bg-primary" /> : null}
        </span>
        <div className="min-w-0 flex-1">
          {isMostPreferred ? <span className="mb-1.5 inline-flex rounded-full bg-secondary px-2 py-1 text-[10px] font-bold text-primary">Most Preferred</span> : null}
          <h3 className="text-sm font-bold leading-5">{shortPlanName(rate)}</h3>
          <div className="mt-2 space-y-1">
            {rate.inclusions.slice(0, 2).map((item) => <p key={item} className="flex items-start gap-1.5 text-xs text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-primary" />{item}</p>)}

            <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
              {rate.cancellation.freeCancellation ? <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-primary" /> : <CircleX className="mt-0.5 size-3.5 shrink-0 text-destructive" />}
              <span className="line-clamp-2">{cancellationText}</span>
            </p>
          </div>
          <div className="mt-3 flex items-end justify-between gap-3 border-t border-border pt-3">
            <div>
              <div className="flex items-baseline gap-1"><span className="text-lg font-bold">{formatCurrency(rate.pricing.perNight.price)}</span><span className="text-[11px] text-muted-foreground">/ night</span></div>
              <p className="text-[11px] text-muted-foreground">{formatCurrency(rate.pricing.total.price)} total</p>
            </div>
            <div className="text-right">
              <p className={`mb-2 text-[11px] font-semibold ${rate.roomsLeft <= 2 ? "text-destructive" : "text-primary"}`}>{rate.roomsLeft} room{rate.roomsLeft !== 1 ? "s" : ""} left</p>
              <button 
              type="button" 
              onClick={(event) => {
                event.stopPropagation();
                onSelect(rate)
              }} 
              className="h-9 rounded-xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition active:scale-95">Select</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
