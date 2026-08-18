import { useRef } from "react";

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  }

  return { scrollRef, scrollByAmount };
}