import { CalendarCheck } from "lucide-react";
// import { AppHeader } from "../../../shared/components/AppHeader";
import { EmptyState } from "../../../shared/components/EmptyState";
import { PageTransition } from "../../../shared/components/PageTransition";

export default function BookingsPage() {
  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted">
        {/* <AppHeader title="Bookings" showBack={false} showMenu={false} /> */}
        <EmptyState
          icon={CalendarCheck}
          title="No bookings yet"
          description="Trips you book will show up here so you can check details anytime."
        />
      </section>
    </PageTransition>
  );
}
