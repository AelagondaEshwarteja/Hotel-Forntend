import { ChevronUp } from "lucide-react";
import { formatCurrency } from "../../../shared/utils/formatters";

type ReviewFooterBarProps = {
  amount: number;
  onProceed: () => void;
  onViewDetails?: () => void;
};

export function ReviewFooterBar({ amount, onProceed, onViewDetails }: ReviewFooterBarProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 border-t border-border bg-card px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={onViewDetails} className="text-left transition active:opacity-70">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">Total Amount</p>
          <span className="flex items-center gap-1 text-lg font-bold text-foreground">
            {formatCurrency(amount)}
            <ChevronUp aria-hidden="true" className="size-4 text-muted-foreground" />
          </span>
        </button>

        <button
          type="button"
          onClick={onProceed}
          className="shrink-0 rounded-xl bg-destructive px-8 py-3 text-sm font-bold text-destructive-foreground shadow-sm transition active:scale-[0.98]"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
