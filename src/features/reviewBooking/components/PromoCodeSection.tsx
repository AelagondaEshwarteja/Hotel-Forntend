import { Check, ChevronDown, PartyPopper, Tag } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../shared/utils/cn";
import { formatCurrency } from "../../../shared/utils/formatters";
import type { PromoCode } from "../types/reviewTypes";

type PromoCodeSectionProps = {
  promoCodes: PromoCode[];
  appliedCode: string;
  onSelect: (code: string) => void;
  onRemove: () => void;
};

const COLLAPSED_COUNT = 3;

export function PromoCodeSection({ promoCodes, appliedCode, onSelect, onRemove }: PromoCodeSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const applied = promoCodes.find((promo) => promo.code === appliedCode);
  const otherCodes = promoCodes.filter((promo) => promo.code !== appliedCode);
  const visibleCodes = showAll ? otherCodes : otherCodes.slice(0, COLLAPSED_COUNT);
  const hiddenCount = otherCodes.length - visibleCodes.length;

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-1.5">
        <Tag aria-hidden="true" className="size-4 text-primary" />
        <h3 className="text-sm font-bold text-foreground">Promo Code</h3>
      </div>

      {applied ? (
        <div className="mt-3 rounded-xl border border-dashed border-primary bg-secondary p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-bold tracking-wide text-secondary-foreground">{applied.code}</span>
            <button
              type="button"
              onClick={onRemove}
              className="text-xs font-bold text-destructive transition active:opacity-70"
            >
              REMOVE
            </button>
          </div>
          <p className="mt-1.5 flex items-start gap-1.5 text-xs font-medium text-emerald-600">
            <PartyPopper aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
            <span>
              Congrats! You have availed a discount of {formatCurrency(applied.save)}.{" "}
              <span className="text-muted-foreground">{applied.terms}</span>
            </span>
          </p>
        </div>
      ) : null}

      {otherCodes.length > 0 ? (
        <>
          <p className="mt-4 text-xs font-semibold text-muted-foreground">
            {applied ? "or choose from below ongoing offers" : "Choose from below ongoing offers"}
          </p>

          <div className="mt-2 divide-y divide-border">
            {visibleCodes.map((promo) => {
              const isSelected = promo.code === appliedCode;
              return (
                <button
                  key={promo.code}
                  type="button"
                  onClick={() => onSelect(promo.code)}
                  className="flex w-full items-start gap-3 py-3 text-left transition active:bg-secondary"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border",
                      isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border",
                    )}
                  >
                    {isSelected ? <Check aria-hidden="true" className="size-3" /> : null}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="rounded-md border border-dashed border-primary px-1.5 py-0.5 text-xs font-bold text-primary">
                        {promo.code}
                      </span>
                      <span className="text-xs font-bold text-amber-600">Save {formatCurrency(promo.save)}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{promo.description}</p>
                    {promo.terms ? <p className="mt-0.5 text-[0.65rem] font-semibold text-primary">{promo.terms}</p> : null}
                  </div>
                </button>
              );
            })}
          </div>

          {hiddenCount > 0 || showAll ? (
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="mt-1 flex w-full items-center justify-center gap-1 py-2 text-xs font-bold text-primary transition active:opacity-70"
            >
              {showAll ? "Show less" : `View ${hiddenCount} more offers`}
              <ChevronDown aria-hidden="true" className={cn("size-3.5 transition-transform", showAll ? "rotate-180" : "")} />
            </button>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
