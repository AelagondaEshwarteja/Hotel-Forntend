import { CircleCheck } from "lucide-react";

type ProfileCompletionBannerProps = {
  percent: number;
  onClick: () => void;
};

export function ProfileCompletionBanner({ percent, onClick }: ProfileCompletionBannerProps) {
  if (percent >= 100) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-2xl bg-secondary p-3 text-left transition active:opacity-90"
    >
      <CircleCheck aria-hidden="true" className="size-[18px] shrink-0 text-secondary-foreground" />
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold text-secondary-foreground">Your profile is {percent}% complete</span>
        <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-primary/20">
          <span className="block h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
        </span>
      </span>
    </button>
  );
}
