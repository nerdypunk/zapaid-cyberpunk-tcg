import CardGrid from '../CardGrid';
import PatientCard from '../PatientCard';

const mockPatients = [
  {
    id: "p1",
    name: "Akira Chen",
    city: "Neo Tokyo",
    story: "A talented cyber-engineer who needs advanced neural implant surgery.",
    targetUsd: 50000,
    raisedUsd: 12500,
    image: "",
    rarity: "rare" as const,
    tokenId: 1,
    needSeverity: 3,
    timeWaitingDays: 45
  },
  {
    id: "p2",
    name: "Luna Nakamura", 
    city: "Cyber Seattle",
    story: "Former data-detective requiring emergency memory reconstruction surgery.",
    targetUsd: 75000,
    raisedUsd: 28750,
    image: "",
    rarity: "legendary" as const,
    tokenId: 2,
    needSeverity: 3,
    timeWaitingDays: 12
  }
];

export default function CardGridExample() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">4-Column Card Grid</h2>
      <CardGrid>
        {mockPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </CardGrid>
    </div>
  );
}