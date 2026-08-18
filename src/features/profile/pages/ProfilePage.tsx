import { Bell, Briefcase, CreditCard, Gift, Heart, LifeBuoy, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../../../shared/components/PageTransition";
import { Toast } from "../../../shared/components/Toast";
import { useToast } from "../../../shared/hooks/useToast";
import { LogoutButton } from "../components/LogoutButton";
import { ProfileCompletionBanner } from "../components/ProfileCompletionBanner";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileMenuSectionList } from "../components/ProfileMenuSectionList";
import { ProfileStatsCard } from "../components/ProfileStatsCard";
import { CURRENT_USER_PROFILE } from "../data/profileData";
import type { ProfileMenuSection } from "../types/profileMenuTypes";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { message, showToast } = useToast();

  const sections: ProfileMenuSection[] = [
    {
      title: "My account",
      items: [
        { id: "bookings", label: "My bookings", icon: Briefcase, onSelect: () => navigate("/bookings") },
        { id: "wishlist", label: "Wishlist", icon: Heart, onSelect: () => navigate("/wishlist") },
        {
          id: "payment-methods",
          label: "Saved payment methods",
          icon: CreditCard,
          onSelect: () => showToast("Saved payment methods coming soon"),
        },
      ],
    },
    {
      title: "Offers and rewards",
      items: [
        { id: "offers", label: "Offers and coupons", icon: Tag, onSelect: () => showToast("Offers coming soon") },
        { id: "refer", label: "Refer and earn", icon: Gift, onSelect: () => showToast("Refer and earn coming soon") },
      ],
    },
    {
      title: "Support",
      items: [
        { id: "help", label: "Help and support", icon: LifeBuoy, onSelect: () => showToast("Help and support coming soon") },
        { id: "notifications", label: "Notifications", icon: Bell, onSelect: () => showToast("Notifications coming soon") },
      ],
    },
  ];

  return (
    <PageTransition>
      <section className="min-h-dvh bg-muted pb-6">
        <ProfileHeader
          profile={CURRENT_USER_PROFILE}
          onBackClick={() => navigate("/home")}
          onSettingsClick={() => showToast("Settings coming soon")}
          onDetailsClick={() => showToast("Edit profile coming soon")}
        />

        <div className="flex flex-col gap-4 px-4">
          <ProfileStatsCard profile={CURRENT_USER_PROFILE} />

          <ProfileCompletionBanner
            percent={CURRENT_USER_PROFILE.profileCompletionPercent}
            onClick={() => showToast("Complete your profile")}
          />

          {sections.map((section) => (
            <ProfileMenuSectionList key={section.title} section={section} />
          ))}

          <LogoutButton onClick={() => showToast("Logged out")} />

          <p className="text-center text-[0.7rem] text-muted-foreground">App version 1.0.0</p>
        </div>
      </section>

      <Toast message={message} />
    </PageTransition>
  );
}
