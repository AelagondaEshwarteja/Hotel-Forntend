import { ChevronRight } from "lucide-react";
import type { ProfileMenuSection } from "../types/profileMenuTypes";

type ProfileMenuSectionListProps = {
  section: ProfileMenuSection;
};

export function ProfileMenuSectionList({ section }: ProfileMenuSectionListProps) {
  return (
    <div>
      <p className="mb-2 px-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{section.title}</p>

      <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {section.items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={item.onSelect}
            className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition active:bg-secondary"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <item.icon aria-hidden="true" className="size-[18px]" />
            </span>
            <span className="min-w-0 flex-1 text-[0.95rem] font-medium text-foreground">{item.label}</span>
            <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}
