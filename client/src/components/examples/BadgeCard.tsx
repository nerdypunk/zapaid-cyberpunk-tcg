import BadgeCard from '../BadgeCard';

const mockBadge = {
  id: "b1",
  name: "Hero's Heart",
  blurb: "Awarded to those who support the cause",
  rarity: "common" as const,
  image: "@assets/generated_images/Support_badge_emblem_design_cc1fca2f.png"
};

export default function BadgeCardExample() {
  return (
    <div className="max-w-xs">
      <BadgeCard badge={mockBadge} earnedDate="2025-01-21" />
    </div>
  );
}