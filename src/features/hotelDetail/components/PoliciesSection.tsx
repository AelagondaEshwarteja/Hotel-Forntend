import { CalendarClock, Info, ShieldCheck } from "lucide-react";
import type { HotelContentData } from "../types/hotelDetailTypes";

type Props = { hotel: HotelContentData };

export function PoliciesSection({ hotel }: Props) {
  return <div className="space-y-4 p-4">
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Hotel Policies</h2>
      <div className="mt-2 divide-y divide-border">
        {hotel.policies.map((policy) => <div key={policy.type} className="flex items-start gap-3 py-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><ShieldCheck className="size-4"/></span><div><p className="text-sm font-semibold">{policy.type.replaceAll("_"," ").toLowerCase().replace(/\b\w/g,(m)=>m.toUpperCase())}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{policy.desc}</p></div></div>)}
      </div>
    </section>

    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="flex items-center gap-2 text-sm font-bold"><CalendarClock className="size-4 text-primary"/>Check-in instructions</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{hotel.extraInfo.checkInInstruction}</p>
    </section>

    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="flex items-center gap-2 text-sm font-bold"><Info className="size-4 text-primary"/>Important note</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Room cancellation and payment conditions can vary by selected rate plan and will be shown on the room selection screen.</p>
    </section>
  </div>;
}
