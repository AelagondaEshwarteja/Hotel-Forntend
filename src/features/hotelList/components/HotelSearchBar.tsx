import { Search, X } from "lucide-react";

type HotelSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  city: string;
};

export function HotelSearchBar({ value, onChange, city }: HotelSearchBarProps) {
  const shortCity = city.split(",")[0]?.trim() || city;

  return (
    <div className="px-4 pt-3">
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-sm transition focus-within:border-primary">
        <Search aria-hidden="true" className="size-[1.1rem] shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={`Search hotels in ${shortCity}`}
          className="w-full min-w-0 truncate bg-transparent text-sm font-semibold text-foreground outline-none placeholder:font-medium placeholder:text-muted-foreground"
        />
        {value ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onChange("")}
            className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition active:scale-90"
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
