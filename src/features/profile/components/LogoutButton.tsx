import { LogOut } from "lucide-react";

type LogoutButtonProps = {
  onClick: () => void;
};

export function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-2xl border border-destructive/30 bg-card px-3.5 py-3 text-left transition active:bg-destructive/5"
    >
      <LogOut aria-hidden="true" className="size-[18px] shrink-0 text-destructive" />
      <span className="text-sm font-bold text-destructive">Log out</span>
    </button>
  );
}
