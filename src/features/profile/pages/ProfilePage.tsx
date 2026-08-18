import { UserRound } from "lucide-react";
import { AppHeader } from "../../../shared/components/AppHeader";
import { PageTransition } from "../../../shared/components/PageTransition";

export default function ProfilePage() {
  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted">
        <AppHeader title="Profile" subtitle="Placeholder feature page" showBack={false} showMenu={false} />

        <div className="px-5 py-6">
          <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
              <UserRound aria-hidden="true" className="size-7" />
            </div>
            <h1 className="mt-4 text-lg font-bold">Profile module</h1>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Replace this page with the hotel-specific profile or account experience.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
