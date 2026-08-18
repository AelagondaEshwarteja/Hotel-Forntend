import { LoaderCircle } from "lucide-react";

type GlobalLoaderProps = {
  label?: string;
};

export function GlobalLoader({ label = "Loading" }: GlobalLoaderProps) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-muted px-6">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-card p-6 text-center shadow-lg">
        <LoaderCircle aria-hidden="true" className="size-8 animate-spin text-primary" />
        <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
