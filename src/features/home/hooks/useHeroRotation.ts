import { useEffect, useState } from "react";

export function useHeroRotation<T>(slides: T[] | undefined, intervalMs = 4500) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [slides, intervalMs]);

  return slides && slides.length > 0 ? activeIndex % slides.length : 0;
}
