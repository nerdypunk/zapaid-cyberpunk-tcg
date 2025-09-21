import PatientCard from '../PatientCard';

const mockPatient = {
  id: "p1",
  name: "Akira Chen",
  city: "Neo Tokyo",
  story: "A talented cyber-engineer who needs advanced neural implant surgery to continue protecting the digital realm from data corruption attacks.",
  targetUsd: 50000,
  raisedUsd: 12500,
  image: "@assets/generated_images/Cyberpunk_anime_patient_card_e979c152.png",
  rarity: "rare" as const,
  tokenId: 1,
  needSeverity: 3,
  timeWaitingDays: 45
};

export default function PatientCardExample() {
  return (
    <div className="max-w-sm">
      <PatientCard
        patient={mockPatient}
        onMint={(amount) => console.log('Mint:', amount)}
        onSupport={(amount) => console.log('Support:', amount)}
      />
    </div>
  );
}