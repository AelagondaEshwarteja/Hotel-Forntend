import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ToastProps = {
  message: string | null;
};

export function Toast({ message }: ToastProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] mx-auto flex w-full max-w-[430px] justify-center px-5">
      <AnimatePresence>
        {message ? (
          <m.div
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background shadow-xl"
          >
            <CheckCircle2 aria-hidden="true" className="size-4 text-primary" />
            {message}
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
