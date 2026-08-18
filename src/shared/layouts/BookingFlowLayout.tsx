import { Outlet } from "react-router-dom";

export function BookingFlowLayout() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <main className="relative mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-muted shadow-2xl">
        <Outlet />
      </main>
    </div>
  );
}
