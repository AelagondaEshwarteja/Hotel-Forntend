import { Bath, Car, Dumbbell, MapPin, Sparkles, UtensilsCrossed, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { HotelContentData } from "../types/hotelDetailTypes";

type Props = { hotel: HotelContentData };
function iconFor(name: string): LucideIcon {
  const text=name.toLowerCase();
  if (text.includes("wi-fi") || text.includes("wifi")) return Wifi;
  if (text.includes("pool")) return Bath;
  if (text.includes("fitness")) return Dumbbell;
  if (text.includes("restaurant") || text.includes("breakfast") || text.includes("bar")) return UtensilsCrossed;
  if (text.includes("parking")) return Car;
  return Sparkles;
}

export function AmenitiesSection({ hotel }: Props) {
  const nearby = [...hotel.nCtgs.Important_Landmark, ...hotel.nCtgs.Most_Popular_Landmark];
  return <div className="space-y-4 p-4">
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Hotel Amenities</h2>
      <div className="mt-2 divide-y divide-border">
        {hotel.amenities.map((amenity) => { const Icon=iconFor(amenity.name); return <div key={amenity.code} className="flex items-start gap-3 py-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="size-4" /></span><div><p className="text-sm font-semibold">{amenity.name}</p><p className="mt-0.5 text-xs text-muted-foreground">{amenity.category} · {amenity.subCategory}</p></div></div>; })}
      </div>
    </section>

    {(hotel.nCtgs.Restaurant.length || hotel.nCtgs.Bar.length) ? <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Dining & facilities</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {hotel.nCtgs.Restaurant.map((r) => <div key={r.R} className="rounded-xl bg-muted p-3"><UtensilsCrossed className="size-4 text-primary"/><p className="mt-2 text-sm font-semibold">{r.R}</p><p className="text-xs text-muted-foreground">{r.C} · {r.T}</p></div>)}
        {hotel.nCtgs.Bar.map((b) => <div key={b.B} className="rounded-xl bg-muted p-3"><Sparkles className="size-4 text-primary"/><p className="mt-2 text-sm font-semibold">{b.B}</p><p className="text-xs text-muted-foreground">{b.C} · {b.T}</p></div>)}
      </div>
    </section> : null}

    {nearby.length ? <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h2 className="text-sm font-bold">Nearby attractions</h2>
      <div className="mt-2 divide-y divide-border">{nearby.map((item) => <div key={`${item.L}-${item.D}`} className="flex items-center gap-3 py-3"><MapPin className="size-4 text-primary"/><span className="flex-1 text-sm font-medium">{item.L}</span><span className="text-xs text-muted-foreground">{item.D}</span></div>)}</div>
    </section> : null}
  </div>;
}

// secound ui option from here
// import {
//   Bath,
//   Car,
//   ChevronRight,
//   Dumbbell,
//   GlassWater,
//   Info,
//   Shirt,
//   Sparkles,
//   Snowflake,
//   UtensilsCrossed,
//   Wifi,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { useState } from "react";

// import type { HotelContentData } from "../types/hotelDetailTypes";

// type Props = {
//   hotel: HotelContentData;
// };

// function iconFor(name: string): LucideIcon {
//   const text = name.toLowerCase();

//   if (text.includes("wi-fi") || text.includes("wifi")) {
//     return Wifi;
//   }

//   if (text.includes("pool") || text.includes("swimming")) {
//     return Bath;
//   }

//   if (
//     text.includes("fitness") ||
//     text.includes("gym") ||
//     text.includes("health club")
//   ) {
//     return Dumbbell;
//   }

//   if (
//     text.includes("restaurant") ||
//     text.includes("breakfast") ||
//     text.includes("dining") ||
//     text.includes("food")
//   ) {
//     return UtensilsCrossed;
//   }

//   if (text.includes("bar") || text.includes("lounge")) {
//     return GlassWater;
//   }

//   if (
//     text.includes("parking") ||
//     text.includes("car parking") ||
//     text.includes("valet")
//   ) {
//     return Car;
//   }

//   if (
//     text.includes("air conditioning") ||
//     text.includes("air-conditioned") ||
//     text.includes("ac")
//   ) {
//     return Snowflake;
//   }

//   if (text.includes("laundry")) {
//     return Shirt;
//   }

//   if (text.includes("spa")) {
//     return Sparkles;
//   }

//   return Sparkles;
// }

// function getAmenityDescription(
//   category?: string,
//   subCategory?: string,
// ) {
//   if (subCategory?.trim()) {
//     return subCategory;
//   }

//   if (category?.trim()) {
//     return category;
//   }

//   return "Available at the property";
// }

// export function AmenitiesSection({ hotel }: Props) {
//   const [showAllAmenities, setShowAllAmenities] = useState(false);

//   const INITIAL_AMENITIES_COUNT = 6;

//   const visibleAmenities = showAllAmenities
//     ? hotel.amenities
//     : hotel.amenities.slice(0, INITIAL_AMENITIES_COUNT);

//   const hasMoreAmenities =
//     hotel.amenities.length > INITIAL_AMENITIES_COUNT;

//   const restaurants = hotel.nCtgs?.Restaurant ?? [];
//   const bars = hotel.nCtgs?.Bar ?? [];

//   const hasDining = restaurants.length > 0 || bars.length > 0;

//   return (
//     <div className="space-y-4 p-4">
//       {/* Premium Amenities Header */}
//       <section className="rounded-2xl border border-border bg-secondary p-4 shadow-sm">
//         <div className="flex items-center gap-3">
//           <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
//             <Sparkles className="size-5" />
//           </span>

//           <div className="min-w-0">
//             <h2 className="text-sm font-bold text-foreground">
//               Premium amenities
//             </h2>

//             <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
//               Everything you need for a comfortable stay.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Hotel Amenities */}
//       {hotel.amenities.length > 0 && (
//         <section>
//           <div className="mb-3 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <span className="h-5 w-1 rounded-full bg-primary" />

//               <h2 className="text-sm font-bold">
//                 Hotel Amenities
//               </h2>
//             </div>

//             {hasMoreAmenities && (
//               <button
//                 type="button"
//                 onClick={() =>
//                   setShowAllAmenities((previous) => !previous)
//                 }
//                 className="text-xs font-semibold text-primary transition-opacity hover:opacity-80"
//               >
//                 {showAllAmenities ? "Show less" : "View all"}
//               </button>
//             )}
//           </div>

//           <div className="grid grid-cols-2 gap-2.5">
//             {visibleAmenities.map((amenity) => {
//               const Icon = iconFor(amenity.name);

//               return (
//                 <div
//                   key={amenity.code}
//                   className="flex min-h-[88px] items-start gap-2.5 rounded-xl border border-border bg-card p-3 shadow-sm transition-transform duration-200 active:scale-[0.98]"
//                 >
//                   <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
//                     <Icon className="size-4" />
//                   </span>

//                   <div className="min-w-0 flex-1">
//                     <p className="line-clamp-2 text-xs font-semibold leading-4 text-foreground">
//                       {amenity.name}
//                     </p>

//                     <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-muted-foreground">
//                       {getAmenityDescription(
//                         amenity.category,
//                         amenity.subCategory,
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       )}

//       {/* Dining */}
//       {hasDining && (
//         <section>
//           <div className="mb-3 flex items-center gap-2">
//             <span className="h-5 w-1 rounded-full bg-primary" />

//             <h2 className="text-sm font-bold">
//               Dining & Facilities
//             </h2>
//           </div>

//           <div className="space-y-2.5">
//             {restaurants.map((restaurant) => (
//               <div
//                 key={`${restaurant.R}-${restaurant.T}`}
//                 className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm"
//               >
//                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
//                   <UtensilsCrossed className="size-4" />
//                 </span>

//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-semibold">
//                     {restaurant.R}
//                   </p>

//                   <p className="mt-0.5 truncate text-xs text-muted-foreground">
//                     {restaurant.C}
//                     {restaurant.T ? ` · ${restaurant.T}` : ""}
//                   </p>

//                   {restaurant.T && (
//                     <span className="mt-2 inline-flex rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold text-primary">
//                       {restaurant.T}
//                     </span>
//                   )}
//                 </div>

//                 <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
//               </div>
//             ))}

//             {bars.map((bar) => (
//               <div
//                 key={`${bar.B}-${bar.T}`}
//                 className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm"
//               >
//                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
//                   <GlassWater className="size-4" />
//                 </span>

//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-semibold">
//                     {bar.B}
//                   </p>

//                   <p className="mt-0.5 truncate text-xs text-muted-foreground">
//                     {bar.C}
//                     {bar.T ? ` · ${bar.T}` : ""}
//                   </p>

//                   {bar.T && (
//                     <span className="mt-2 inline-flex rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold text-primary">
//                       {bar.T}
//                     </span>
//                   )}
//                 </div>

//                 <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Helpful Note */}
//       {hasDining && (
//         <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-secondary p-3">
//           <Info className="mt-0.5 size-4 shrink-0 text-primary" />

//           <p className="text-xs leading-5 text-secondary-foreground">
//             Dining options and facility availability may vary depending on
//             hotel timings.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }