import { format, parseISO } from "date-fns";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../shared/utils/cn";
import type { ReviewSummary } from "../types/reviewTypes";

type RoomDetailsCardProps = {
  summary: ReviewSummary;
};

type Tab = "room" | "policy";

export function RoomDetailsCard({ summary }: RoomDetailsCardProps) {
  const [tab, setTab] = useState<Tab>("room");
  const deadline = parseISO(summary.freeCancelDeadline);

  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-5 border-b border-border pb-2.5">
        <button
          type="button"
          onClick={() => setTab("room")}
          className={cn(
            "relative pb-2 text-xs font-bold uppercase tracking-wide transition",
            tab === "room" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Room Details
          {tab === "room" ? <span className="absolute -bottom-[11px] left-0 h-0.5 w-full rounded-full bg-primary" /> : null}
        </button>
        <button
          type="button"
          onClick={() => setTab("policy")}
          className={cn(
            "relative pb-2 text-xs font-bold uppercase tracking-wide transition",
            tab === "policy" ? "text-primary" : "text-muted-foreground",
          )}
        >
          Inclusions &amp; Policy
          {tab === "policy" ? <span className="absolute -bottom-[11px] left-0 h-0.5 w-full rounded-full bg-primary" /> : null}
        </button>
      </div>

      {tab === "room" ? (
        <div className="pt-3">
          <p className="text-sm font-bold text-foreground">{summary.roomName}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{summary.ratePlanName}</p>
          <p className="mt-1.5 text-xs font-medium text-muted-foreground">
            {summary.hotel.rooms} {summary.hotel.rooms === 1 ? "Room" : "Rooms"}, {summary.hotel.guests} Guests
          </p>

          {summary.roomsLeft <= 5 ? (
            <p className="mt-2.5 w-fit rounded-md bg-destructive/10 px-2 py-1 text-[0.7rem] font-bold text-destructive">
              Only {summary.roomsLeft} rooms left at this price!
            </p>
          ) : null}
        </div>
      ) : (
        <div className="space-y-3 pt-3">
          <div>
            <p className="text-xs font-bold text-foreground">Inclusions</p>
            <ul className="mt-1.5 space-y-1">
              {summary.inclusions.map((inclusion) => (
                <li key={inclusion} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BadgeCheck aria-hidden="true" className="size-3.5 shrink-0 text-primary" />
                  {inclusion}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck aria-hidden="true" className="size-3.5 shrink-0 text-emerald-600" />
              <p className="text-xs font-bold text-emerald-600">
                {summary.freeCancellation ? `Free cancellation until ${format(deadline, "d MMM, h:mm a")}` : "Non-refundable"}
              </p>
            </div>
            <ul className="mt-1.5 space-y-1.5">
              {summary.cancellationPolicies.map((policy) => (
                <li key={policy} className="text-xs leading-relaxed text-muted-foreground">
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
