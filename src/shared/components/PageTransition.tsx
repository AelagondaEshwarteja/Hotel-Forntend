import { m, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function PageTransition({ children }: PropsWithChildren) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
      className="min-h-dvh"
    >
      {children}
    </m.div>
  );
}
