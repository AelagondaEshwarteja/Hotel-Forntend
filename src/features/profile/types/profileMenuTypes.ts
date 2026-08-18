import type { LucideIcon } from "lucide-react";

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  onSelect: () => void;
};

export type ProfileMenuSection = {
  title: string;
  items: ProfileMenuItem[];
};
