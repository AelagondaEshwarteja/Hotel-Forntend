import { Info, Wallet } from "lucide-react";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { ReviewSummary } from "../types/reviewTypes";

type TariffDetailsCardProps = {
  summary: ReviewSummary;
};

export function TariffDetailsCard({ summary }: TariffDetailsCardProps) {
  const chargesBase = summary.baseTotal + summary.chargesTotal;

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h3 className="text-sm font-bold text-foreground">Tariff Details</h3>

      <dl className="mt-3 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <dt className="text-muted-foreground">Hotel Charges</dt>
          <dd className="font-semibold text-foreground">{formatCurrency(chargesBase)}</dd>
        </div>

        <div className="flex items-center justify-between text-sm">
          <dt className="text-muted-foreground">Hotel GST</dt>
          <dd className="font-semibold text-foreground">{formatCurrency(summary.taxTotal)}</dd>
        </div>

        {summary.discountTotal > 0 ? (
          <div className="flex items-center justify-between text-sm">
            <dt className="flex items-center gap-1 text-muted-foreground">
              Promo Offer (-)
              <Info aria-hidden="true" className="size-3.5 text-muted-foreground" />
            </dt>
            <dd className="font-semibold text-emerald-600">- {formatCurrency(summary.discountTotal)}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <p className="text-sm font-bold text-foreground">You Pay</p>
        <p className="text-base font-bold text-foreground">{formatCurrency(summary.payableTotal)}</p>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-dashed border-border pt-2.5">
        <p className="text-sm font-semibold text-muted-foreground">You Earn</p>
        <p className="flex items-center gap-1 text-sm font-bold text-amber-600">
          <Wallet aria-hidden="true" className="size-3.5" />
          {formatCurrency(summary.eCashEarned)} eCash
        </p>
      </div>
    </section>
  );
}
