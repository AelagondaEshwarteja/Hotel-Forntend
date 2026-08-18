import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";
import { useEffect } from "react";

type BottomSheetProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  footer?: ReactNode;
}>;

export function BottomSheet({ isOpen, onClose, title, footer, children }: BottomSheetProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-50 mx-auto flex w-full max-w-[430px] flex-col justify-end">
          <m.div
            aria-hidden="true"
            className="absolute inset-0 bg-foreground/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative flex max-h-[86dvh] flex-col rounded-t-[1.75rem] bg-card shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
          >
            <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-border" />

            <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-4">
              <h2 className="text-base font-bold text-foreground">{title}</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition active:scale-95"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">{children}</div>

            {footer ? (
              <div className="shrink-0 border-t border-border px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
                {footer}
              </div>
            ) : null}
          </m.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
