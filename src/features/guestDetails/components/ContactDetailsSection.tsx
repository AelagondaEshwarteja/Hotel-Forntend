import { Mail, Phone, UserRound } from "lucide-react";
import type { ContactDetails } from "../types/guestDetailsTypes";

type ContactDetailsSectionProps = {
  contact: ContactDetails;
  errors?: { email?: string; phone?: string };
  onChange: (patch: Partial<ContactDetails>) => void;
};

export function ContactDetailsSection({ contact, errors, onChange }: ContactDetailsSectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-3.5 shadow-sm">
      <div className="mb-3 flex items-center gap-1.5 border-b border-border pb-2.5">
        <UserRound aria-hidden="true" className="size-4 text-muted-foreground" />
        <p className="text-sm font-semibold text-foreground">Contact details</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <div>
          <div className="flex items-center gap-2.5 rounded-xl border border-input bg-background px-3.5 py-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <Mail aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
            <input
              value={contact.email}
              onChange={(event) => onChange({ email: event.target.value })}
              placeholder="Email address"
              type="email"
              inputMode="email"
              aria-invalid={Boolean(errors?.email)}
              className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          {errors?.email ? <p className="mt-1 pl-0.5 text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div>
          <div className="flex items-center gap-2.5 rounded-xl border border-input bg-background px-3.5 py-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <Phone aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{contact.countryCode}</span>
            <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border" />
            <input
              value={contact.phone}
              onChange={(event) => onChange({ phone: event.target.value.replace(/\D/g, "").slice(0, 10) })}
              placeholder="Phone number"
              type="tel"
              inputMode="numeric"
              aria-invalid={Boolean(errors?.phone)}
              className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          {errors?.phone ? <p className="mt-1 pl-0.5 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
      </div>
    </section>
  );
}