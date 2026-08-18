import { AnimatePresence, m } from "framer-motion";
import type { HeroSlide } from "../types/homeTypes";
import { useHeroRotation } from "../hooks/useHeroRotation";
import { HomeHeader } from "./HomeHeader";

type HeroSectionProps = {
  slides: HeroSlide[] | undefined;
  isLoading: boolean;
};

export function HeroSection({ slides, isLoading }: HeroSectionProps) {
  const activeIndex = useHeroRotation(slides);
  const activeSlide = slides?.[activeIndex];

  return (
    <div className="relative h-[19rem] overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <AnimatePresence>
          {activeSlide ? (
            <m.div
              key={activeSlide.id}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeSlide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          ) : null}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/15 via-foreground/35 to-foreground/70" />
      </div>

      <div className="relative flex h-full flex-col">
        <HomeHeader />

        <div className="mt-7 px-5">
          <h1 className="text-[1.45rem] font-bold leading-tight text-primary-foreground">
            Find your
            <br />
            perfect stay
          </h1>
          <p className="mt-2 max-w-[15rem] text-xs leading-5 text-primary-foreground/85">
            Handpicked hotels and comfortable stays, wherever you're headed next.
          </p>
        </div>

        {slides && slides.length > 1 ? (
          <div className="mt-auto flex justify-center gap-1.5 pb-4" aria-hidden="true">
            {slides.map((slide, index) => (
              <span
                key={slide.id}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "w-5 bg-primary-foreground" : "w-1.5 bg-primary-foreground/45"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {isLoading ? <span className="sr-only">Loading hero imagery</span> : null}
    </div>
  );
}
