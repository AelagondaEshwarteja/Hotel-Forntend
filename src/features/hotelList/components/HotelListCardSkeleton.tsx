import { Skeleton } from "../../../shared/components/Skeleton";

export function HotelListCardSkeleton() {
  return (
    <div className="flex overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Skeleton className="h-40 w-[9.5rem] shrink-0 rounded-none" />
      <div className="min-w-0 flex-1 space-y-2 p-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="mt-4 h-5 w-1/3" />
      </div>
    </div>
  );
}
