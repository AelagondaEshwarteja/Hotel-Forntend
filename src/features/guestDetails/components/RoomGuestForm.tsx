import { UserRound } from "lucide-react";
import { cn } from "../../../shared/utils/cn";
import type { GuestTitle, RoomGuest } from "../types/guestDetailsTypes.ts";

const TITLES: GuestTitle[] = ["Mr", "Mrs", "Ms"];

type RoomGuestFormProps = {
  room: RoomGuest;
  errors?: { firstName?: string; lastName?: string };
  isActive?: boolean;
  onActivate?: () => void;
  onChange: (patch: Partial<Omit<RoomGuest, "roomNumber">>) => void;
};

export function RoomGuestForm({ room, errors, isActive = false, onActivate, onChange }: RoomGuestFormProps) {
  return (
    <section
      onClick={onActivate}
      onFocusCapture={onActivate}
      className={cn(
        "rounded-2xl border bg-card p-3.5 shadow-sm transition",
        isActive ? "border-primary ring-2 ring-primary/20" : "border-border",
      )}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-border pb-2.5">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
          {room.roomNumber}
        </span>
        <p className="text-sm font-semibold text-foreground">Room {room.roomNumber} Guest</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="rounded-xl border border-input bg-background p-1.5">
          <div className="mb-1.5 flex items-center gap-1.5 px-1">
            <UserRound aria-hidden="true" className="size-3.5 text-muted-foreground" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">Title</p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {TITLES.map((title) => {
              const selected = room.title === title;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => onChange({ title })}
                  className={cn(
                    "rounded-lg border px-2 py-2 text-sm font-semibold transition",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:bg-muted",
                  )}
                  aria-pressed={selected}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              value={room.firstName}
              onChange={(event) => onChange({ firstName: event.target.value })}
              placeholder="First name"
              aria-invalid={Boolean(errors?.firstName)}
              className={`w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors?.firstName ? "border-destructive ring-1 ring-destructive/30" : ""
              }`}
            />
            {errors?.firstName ? (
              <p className="mt-1 pl-0.5 text-xs text-destructive">{errors.firstName}</p>
            ) : null}
          </div>

          <div className="flex-1">
            <input
              value={room.lastName}
              onChange={(event) => onChange({ lastName: event.target.value })}
              placeholder="Last name"
              aria-invalid={Boolean(errors?.lastName)}
              className={`w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors?.lastName ? "border-destructive ring-1 ring-destructive/30" : ""
              }`}
            />
            {errors?.lastName ? (
              <p className="mt-1 pl-0.5 text-xs text-destructive">{errors.lastName}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}