import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

type ErrorStateProps = {
  title: string;
  description?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorState({ title, description, actionLabel, onAction }: ErrorStateProps) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-muted px-6 py-10 text-center">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-lg">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
          <AlertTriangle aria-hidden="true" className="size-6" />
        </div>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        {description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p> : null}
        {actionLabel && onAction ? (
          <button
            className="mt-5 h-12 w-full rounded-lg bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition active:scale-[0.98]"
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
