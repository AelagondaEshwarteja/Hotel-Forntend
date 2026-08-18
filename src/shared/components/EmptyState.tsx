import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center px-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h2 className="mt-4 text-base font-bold text-foreground">{title}</h2>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
