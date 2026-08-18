import { Heart } from "lucide-react";
import { AppHeader } from "../../../shared/components/AppHeader";
import { EmptyState } from "../../../shared/components/EmptyState";
import { PageTransition } from "../../../shared/components/PageTransition";

export default function WishlistPage() {
  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted">
        <AppHeader title="Wishlist" showBack={false} showMenu={false} />
        <EmptyState
          icon={Heart}
          title="Save hotels you love"
          description="Tap the heart on any hotel card to keep it here for later."
        />
      </section>
    </PageTransition>
  );
}
