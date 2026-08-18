import type { HotelDetailTab } from "../types/hotelDetailTypes";
import { cn } from "../../../shared/utils/cn";

type Props = { active: HotelDetailTab; onChange: (tab: HotelDetailTab) => void };
const tabs: { value: HotelDetailTab; label: string }[] = [
  { value: "about", label: "About" }, { value: "amenities", label: "Amenities" }, { value: "policies", label: "Policies" },
];

export function HotelDetailTabs({ active, onChange }: Props) {
  return <div className="sticky top-0 z-20 grid grid-cols-3 border-b border-border bg-card/95 px-4 backdrop-blur">
    {tabs.map((tab) => <button key={tab.value} type="button" onClick={() => onChange(tab.value)} className={cn("relative h-14 text-sm font-semibold transition", active === tab.value ? "text-primary" : "text-muted-foreground")}>
      {tab.label}
      {active === tab.value ? <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary" /> : null}
    </button>)}
  </div>;
}
