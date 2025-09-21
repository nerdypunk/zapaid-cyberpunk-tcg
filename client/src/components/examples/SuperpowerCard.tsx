import SuperpowerCard from '../SuperpowerCard';

const mockSuperpower = {
  id: "s1",
  name: "Neural Hack",
  blurb: "Penetrate digital defenses with pure thought",
  rarity: "rare" as const,
  image: "@assets/generated_images/Energy_manipulation_superpower_card_b5951d31.png"
};

export default function SuperpowerCardExample() {
  return (
    <div className="max-w-sm">
      <SuperpowerCard superpower={mockSuperpower} />
    </div>
  );
}