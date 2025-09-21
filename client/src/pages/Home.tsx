import { useState } from 'react';
import CardGrid from '@/components/CardGrid';
import PatientCard from '@/components/PatientCard';
import patientsData from '@/data/patients.json';

export default function Home() {
  // todo: remove mock functionality - replace with real wallet and minting
  const [patients] = useState(patientsData as any);

  const handleMint = (patientId: string, amount: number) => {
    console.log(`Mint action for patient ${patientId} with amount $${amount}`);
    // todo: implement real dual-mint functionality (Superpower + Patient NFTs)
  };

  const handleSupport = (patientId: string, amount: number) => {
    console.log(`Support action for patient ${patientId} with amount $${amount}`);
    // todo: implement real support minting (Patient NFTs + Badge)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-cyber font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Be the Hero. Mint a Lifeline.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Deploy aid to cyber-warriors in need. Every mint creates digital lifelines in the form of NFTs while supporting real heroes.
        </p>
      </div>

      {/* Patient Cards Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-anime font-bold mb-6 text-center">
          Current Missions
        </h2>
        <CardGrid>
          {patients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onMint={(amount) => handleMint(patient.id, amount)}
              onSupport={(amount) => handleSupport(patient.id, amount)}
            />
          ))}
        </CardGrid>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <div className="text-3xl font-bold text-primary mb-2">1,247</div>
          <div className="text-sm text-muted-foreground">Heroes Deployed</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20">
          <div className="text-3xl font-bold text-primary mb-2">5,632</div>
          <div className="text-sm text-muted-foreground">NFTs Minted</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
          <div className="text-3xl font-bold text-primary mb-2">$892K</div>
          <div className="text-sm text-muted-foreground">Aid Deployed</div>
        </div>
      </div>
    </div>
  );
}