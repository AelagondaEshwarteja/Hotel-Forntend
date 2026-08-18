import { formatCurrency } from "../../../shared/utils/formatters";

type GuestDetailsFooterBarProps = {
  rooms: number;
  nights: number;
  amount: number;
  onProceed: () => void;
};

export function GuestDetailsFooterBar({ rooms, nights, amount, onProceed }: GuestDetailsFooterBarProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 border-t border-border/80 bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm">
        <div>
          <p className="text-xs text-muted-foreground">
            {rooms} {rooms === 1 ? "Room" : "Rooms"} &middot; {nights} {nights === 1 ? "Night" : "Nights"}
          </p>
          <p className="mt-0.5 text-lg font-bold text-foreground">{formatCurrency(amount)}</p>
        </div>

        <button
          type="button"
          onClick={onProceed}
          className="shrink-0 rounded-xl bg-destructive px-6 py-3 text-sm font-bold text-destructive-foreground shadow-sm transition hover:brightness-95 active:scale-[0.98]"
        >
          Pay
        </button>
      </div>
    </div>
  );
}