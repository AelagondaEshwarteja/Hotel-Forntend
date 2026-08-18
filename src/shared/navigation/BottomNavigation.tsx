import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";

type BottomNavigationItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

type BottomNavigationProps = {
  items: BottomNavigationItem[];
};

export function BottomNavigation({ items }: BottomNavigationProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[430px] border-t border-border bg-card/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur">
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex h-12 flex-col items-center justify-center gap-1 rounded-lg text-[0.68rem] font-semibold transition",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
              )
            }
          >
            <item.icon aria-hidden="true" className="size-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
