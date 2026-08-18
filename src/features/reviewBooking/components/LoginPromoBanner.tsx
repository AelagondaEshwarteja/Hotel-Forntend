import { Sparkles } from "lucide-react";

type LoginPromoBannerProps = {
  onLoginClick?: () => void;
};

export function LoginPromoBanner({ onLoginClick }: LoginPromoBannerProps) {
  return (
    <section className="overflow-hidden rounded-2xl bg-primary p-4 text-primary-foreground shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles aria-hidden="true" className="size-4 shrink-0" />
        <p className="text-sm font-bold">Login/Register to get additional 10% off</p>
      </div>

      <button
        type="button"
        onClick={onLoginClick}
        className="mt-3 w-full rounded-xl border border-primary-foreground/60 bg-transparent py-2.5 text-sm font-bold text-primary-foreground transition active:scale-[0.99] active:bg-primary-foreground/10"
      >
        Login / Register
      </button>
    </section>
  );
}
