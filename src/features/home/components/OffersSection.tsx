import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "../../../shared/components/Skeleton";
import { useHorizontalScroll } from "../../../shared/hooks/useHorizontalScroll";
import type { Offer } from "../types/homeTypes";

type OffersSectionProps = {
  offers: Offer[] | undefined;
  isLoading: boolean;
};

export function OffersSection({ offers, isLoading }: OffersSectionProps) {
  const { scrollRef, scrollByAmount } = useHorizontalScroll();

  return (
    <section className="px-4 pt-6">
      <h2 className="px-1 text-sm font-bold text-foreground">Offers for you</h2>

      <div className="relative mt-3">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading
            ? Array.from({ length: 2 }).map((_, index) => <Skeleton key={index} className="h-28 w-64 shrink-0" />)
            : offers?.map((offer) => (
                <div
                  key={offer.id}
                  className="relative h-35 w-64 shrink-0 overflow-hidden rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${offer.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-3.5">
                    <span className="mb-1 w-fit rounded-md bg-primary-foreground/90 px-1.5 py-0.5 text-[0.62rem] font-bold text-primary">
                      {offer.tag}
                    </span>
                    <p className="text-sm font-bold leading-tight text-primary-foreground">{offer.title}</p>
                    <p className="mt-0.5 text-[0.7rem] text-primary-foreground/85">{offer.subtitle}</p>
                  </div>
                </div>
              ))}
        </div>

        {!isLoading && offers && offers.length > 0 ? (
          <>
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByAmount("left")}
              className="h-64 absolute left-0 top-1/2  hidden size-8 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:bg-secondary "
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByAmount("right")}
              className="absolute right-0 top-1/2 hidden size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition hover:bg-secondary"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}