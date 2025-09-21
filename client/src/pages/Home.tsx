import { useState } from 'react';
import CardGrid from '@/components/CardGrid';
import PatientCard from '@/components/PatientCard';
import DemoThankYouModal from '@/components/DemoThankYouModal';
import patientsData from '@/data/patients.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Zap, Heart, Stars } from 'lucide-react';

export default function Home() {
  // todo: remove mock functionality - replace with real wallet and minting
  const [patients] = useState(patientsData as any);
  const [walletAddress] = useState('demo-guest'); // Simulating demo mode
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [modalData, setModalData] = useState<{
    type: 'mint' | 'support' | 'mystery';
    details: { patientName?: string; superpowerName?: string; amount?: number; };
  }>({ type: 'mystery', details: {} });
  
  const isDemoMode = walletAddress === 'demo-guest';

  const handleMint = (patientId: string, amount: number) => {
    console.log(`Mint action for patient ${patientId} with amount $${amount}`);
    // todo: implement real dual-mint functionality (Superpower + Patient NFTs)
  };

  const handleSupport = (patientId: string, amount: number) => {
    console.log(`Support action for patient ${patientId} with amount $${amount}`);
    // todo: implement real support minting (Patient NFTs + Badge)
  };

  const handleRandomPack = () => {
    if (!isDemoMode) {
      console.log('Random pack purchase triggered for $15');
      // todo: implement real random pack functionality - random patient + random superpower
      return;
    }
    
    // Demo mode result
    const randomPatient = patients[Math.floor(Math.random() * patients.length)];
    const superpowers = ['Healing Touch', 'Empathy Shield', 'Hope Beacon', 'Recovery Boost', 'Comfort Aura'];
    const randomSuperpower = superpowers[Math.floor(Math.random() * superpowers.length)];
    
    setModalData({
      type: 'mystery',
      details: {
        patientName: randomPatient.name,
        superpowerName: randomSuperpower,
        amount: 15
      }
    });
    setShowThankYouModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero + Mystery Pack Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Hero Section */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="text-center mb-8">
            <div className="font-cyber text-6xl md:text-7xl font-bold neon-text">
              ZapAid
            </div>
          </div>
          <div className="mb-8">
            <img 
              src="/attached_assets/generated_images/Futuristic_medical_aid_technology_10ad2d3e.png" 
              alt="Futuristic Medical Aid Technology" 
              className="w-full h-64 object-cover rounded-lg border border-cyan-500/30 shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-cyber font-bold neon-text">
              Be the Hero. Mint a Lifeline.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Deploy aid to those in need. Every mint creates digital lifelines in the form of NFTs while you become a hero supporting real patients.
            </p>
            <p className="text-sm text-cyan-400 font-semibold">
              All proceeds go directly to patient medical aid.
            </p>
          </div>
        </div>

        {/* Random Pack Section */}
        <div>
        <Card className="bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20 border-yellow-500/40 neon-border relative overflow-hidden">
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
          <CardHeader className="text-center relative z-10">
            <CardTitle className="text-3xl font-cyber bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              <Gift className="inline w-8 h-8 mr-3 text-yellow-400" />
              Mystery Pack
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feeling lucky? Support a random patient and unlock a surprise superpower card!
            </p>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Heart className="w-8 h-8 text-red-400 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Random Patient</h3>
                <p className="text-xs text-muted-foreground">Support a patient chosen by our AI urgency scanner</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <Zap className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Random Superpower</h3>
                <p className="text-xs text-muted-foreground">Unlock a mystery superpower NFT</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
                <Stars className="w-8 h-8 text-green-400 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Higher Rarity Chance</h3>
                <p className="text-xs text-muted-foreground">Increased odds for rare and legendary cards</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
              <div className="text-4xl font-bold neon-text mb-2">$15</div>
              <div className="text-sm text-muted-foreground mb-4">One-time purchase • 2 NFTs guaranteed</div>
              <Button 
                onClick={handleRandomPack}
                disabled={!isDemoMode}
                size="lg"
                className={`bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-3 text-lg border-2 border-yellow-400 ${!isDemoMode ? 'opacity-50 cursor-not-allowed' : ''}`}
                data-testid="button-random-pack"
              >
                <Gift className="w-5 h-5 mr-2" />
                Get Mystery Pack
              </Button>
            </div>
            <p className="text-xs text-muted-foreground italic">
              All proceeds go directly to patient medical aid. No refunds - but every purchase helps save lives!
            </p>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Patient Cards Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-anime font-bold mb-6 text-center">
          Current Missions
        </h2>
        <CardGrid>
          {patients.map((patient: any) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              isDemoMode={isDemoMode}
              onMint={(amount) => handleMint(patient.id, amount)}
              onSupport={(amount) => handleSupport(patient.id, amount)}
            />
          ))}
        </CardGrid>
      </div>

      {/* Demo Thank You Modal */}
      <DemoThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        type={modalData.type}
        details={modalData.details}
      />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/40 neon-border scanlines">
          <div className="text-3xl font-bold neon-text mb-2">1,247</div>
          <div className="text-sm text-muted-foreground">Heroes Deployed</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-900/30 to-pink-900/30 border border-blue-500/40 neon-border scanlines">
          <div className="text-3xl font-bold neon-text mb-2">5,632</div>
          <div className="text-sm text-muted-foreground">NFTs Minted</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/40 neon-border scanlines">
          <div className="text-3xl font-bold neon-text mb-2">$892K</div>
          <div className="text-sm text-muted-foreground">Aid Deployed</div>
        </div>
      </div>
    </div>
  );
}