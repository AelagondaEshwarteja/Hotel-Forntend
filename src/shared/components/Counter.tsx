import { Minus, Plus } from "lucide-react";

type CounterProps = {
  label: string;
  description?: string;
  value: number;
  min: number;
  max: number;
  onChange: (delta: number) => void;
};

export function Counter({ label, description, value, min, max, onChange }: CounterProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-bold text-foreground">{label}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition active:scale-90 disabled:opacity-30"
        >
          <Minus aria-hidden="true" className="size-4" />
        </button>

        <span className="w-5 text-center text-sm font-bold text-foreground">{value}</span>

        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(1)}
          className="flex size-9 items-center justify-center rounded-full border border-primary bg-secondary text-primary transition active:scale-90 disabled:opacity-30"
        >
          <Plus aria-hidden="true" className="size-4" />
        </button>
      </div>
    </div>
  );
}
