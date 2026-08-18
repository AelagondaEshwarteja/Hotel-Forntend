import { Building2, Car, Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { HotelContentData } from "../types/hotelDetailTypes";

type Props = { hotel: HotelContentData };
function timeLabel(time: string) {
  const [hourRaw, minute = "00"] = time.split(":");
  const hour = Number(hourRaw);
  if (!Number.isFinite(hour)) return time;
  const suffix = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 || 12;
  return `${display}:${minute} ${suffix}`;
}

export function AboutSection({ hotel }: Props) {
  const overview = [
    { icon: Building2, label: "Total rooms", value: hotel.totalRooms },
    { icon: Building2, label: "Total floors", value: hotel.totalFloors },
    { icon: Car, label: "Car parking", value: `${hotel.carParkingSlots} slots` },
    { icon: Clock3, label: "Any time check-in", value: hotel.anyTimeCheckIn ? "Yes" : "No" },
  ];

  return <div className="space-y-4 p-4">
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Description</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{hotel.description}</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[{label:"Check-in",value:timeLabel(hotel.checkIn)},{label:"Check-out",value:timeLabel(hotel.checkOut)},{label:"Rooms",value:String(hotel.totalRooms)}].map((item) =>
          <div key={item.label} className="rounded-xl bg-muted px-2 py-3 text-center"><p className="text-[0.68rem] text-muted-foreground">{item.label}</p><p className="mt-0.5 text-xs font-bold text-foreground">{item.value}</p></div>)}
      </div>
    </section>

    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Nearby landmarks</h2>
      <div className="mt-2 divide-y divide-border">
        {hotel.landmarks.map((landmark) => <div key={landmark.name} className="flex items-center gap-3 py-3"><span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary"><MapPin className="size-4" /></span><span className="min-w-0 flex-1 text-sm font-medium">{landmark.name}</span><span className="text-xs text-muted-foreground">{landmark.distance} km</span></div>)}
      </div>
    </section>

    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Overview</h2>
      <div className="mt-2 divide-y divide-border">
        {overview.map(({icon:Icon,label,value}) => <div key={label} className="flex items-center gap-3 py-3"><span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="size-4" /></span><span className="flex-1 text-sm text-muted-foreground">{label}</span><span className="text-sm font-semibold text-foreground">{value}</span></div>)}
      </div>
    </section>

    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Contact</h2>
      <div className="mt-2 space-y-3 text-sm text-muted-foreground">
        <p className="flex items-center gap-3"><Phone className="size-4 text-primary" />{hotel.contact.phone}</p>
        <p className="flex items-center gap-3"><Phone className="size-4 text-primary" />{hotel.contact.fax}</p>
        <p className="flex items-center gap-3 break-all"><Mail className="size-4 shrink-0 text-primary" />{hotel.contact.email}</p>
      </div>
      {hotel.themes.length ? <div className="mt-4 flex flex-wrap gap-2">{hotel.themes.map((theme) => <span key={theme} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{theme}</span>)}</div> : null}
    </section>
  </div>;
}
