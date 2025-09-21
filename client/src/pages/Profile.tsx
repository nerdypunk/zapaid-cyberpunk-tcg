import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SuperpowerCard from '@/components/SuperpowerCard';
import PatientCard from '@/components/PatientCard';
import BadgeCard from '@/components/BadgeCard';
import CardGrid from '@/components/CardGrid';
import { Share, Download, Trophy, Heart, Zap } from 'lucide-react';

export default function Profile() {
  // Demo profile data - would be replaced with real wallet data
  const [profile] = useState({
    wallet: 'demo-guest',
    heroScore: 245,
    totalContributed: 850,
    missionsCompleted: 3,
    nftsOwned: 6
  });

  const [ownedSuperpowers] = useState([
    {
      id: "s1",
      name: "Healing Surge",
      blurb: "Channel regenerative energy to accelerate recovery",
      rarity: "rare" as const,
      image: "",
      earnedDate: "2025-01-10"
    },
    {
      id: "s2", 
      name: "Empathy Shield",
      blurb: "Absorb emotional pain and transform it into protective energy",
      rarity: "common" as const,
      image: "",
      earnedDate: "2025-01-08"
    }
  ]);

  const [ownedPatientCards] = useState([
    {
      id: "p1",
      name: "Sarah Chen",
      city: "San Francisco, CA",
      story: "A 28-year-old graphic designer who needs urgent heart surgery to repair a congenital valve defect that's affecting her ability to work and care for her family.",
      targetUsd: 45000,
      raisedUsd: 12500,
      image: "@assets/generated_images/Sarah_Chen_patient_portrait_554ce5fb.png",
      rarity: "rare" as const,
      tokenId: 1,
      needSeverity: 3,
      timeWaitingDays: 45,
      earnedDate: "2025-01-10"
    },
    {
      id: "p5",
      name: "Emma Thompson",
      city: "Portland, OR",
      story: "A 32-year-old single mother who needs spinal surgery to treat a herniated disc that's preventing her from working and supporting her children.",
      targetUsd: 35000,
      raisedUsd: 18750,
      image: "@assets/generated_images/Emma_Thompson_patient_portrait_e8c35cfc.png",
      rarity: "common" as const,
      tokenId: 5,
      needSeverity: 2,
      timeWaitingDays: 89,
      earnedDate: "2025-01-08"
    },
    {
      id: "p7",
      name: "Lisa Wang",
      city: "Seattle, WA",
      story: "A 29-year-old nurse who was diagnosed with a brain tumor and needs immediate surgery to prevent permanent neurological damage.",
      targetUsd: 95000,
      raisedUsd: 13500,
      image: "@assets/generated_images/Lisa_Wang_patient_portrait_f76c6eab.png",
      rarity: "rare" as const,
      tokenId: 7,
      needSeverity: 3,
      timeWaitingDays: 56,
      earnedDate: "2025-01-05"
    }
  ]);

  const [ownedBadges] = useState([
    {
      id: "b1",
      name: "First Steps",
      blurb: "Made your first donation to support a patient in need",
      rarity: "common" as const,
      image: "",
      earnedDate: "2025-01-10"
    },
    {
      id: "b2",
      name: "Hope Keeper", 
      blurb: "Supported 3 different patients with medical aid",
      rarity: "rare" as const,
      image: "",
      earnedDate: "2025-01-05"
    }
  ]);

  const handleShare = () => {
    console.log('Share profile triggered');
    // Open Twitter share with pre-filled text
    const shareText = `🚀 Just made a difference on @ZapAid! 💫\n\n💰 $${profile.totalContributed} contributed to medical aid\n❤️ ${profile.missionsCompleted} patients helped\n🎯 Hero Score: ${profile.heroScore}\n\n#ZapAid #CryptoForGood #NFTsForCause #BeTheHero`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank');
  };

  const handleDownload = () => {
    console.log('Download profile image triggered');
    // Download the pre-generated donation summary image
    const imageUrl = '/attached_assets/generated_images/ZapAid_donation_summary_social_media_0e0ae8ff.png';
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ZapAid_Donation_Summary_${new Date().toISOString().split('T')[0]}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="mb-8">
        <Card className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border-purple-500/20">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-3xl font-cyber bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Your Missions
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Wallet: {profile.wallet === 'demo-guest' ? 'Demo Mode' : profile.wallet}
                </p>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleShare} variant="outline" size="sm" data-testid="button-share-profile">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button onClick={handleDownload} variant="outline" size="sm" data-testid="button-download-profile">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1" data-testid="text-hero-score">
                  {profile.heroScore}
                </div>
                <div className="text-sm text-muted-foreground">Hero Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1" data-testid="text-total-contributed">
                  ${profile.totalContributed}
                </div>
                <div className="text-sm text-muted-foreground">Contributed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1" data-testid="text-missions-completed">
                  {profile.missionsCompleted}
                </div>
                <div className="text-sm text-muted-foreground">Missions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1" data-testid="text-nfts-owned">
                  {profile.nftsOwned}
                </div>
                <div className="text-sm text-muted-foreground">NFTs Owned</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Card Vault */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-anime">
            <Trophy className="w-5 h-5" />
            Your Card Vault
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="superpowers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="superpowers" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Superpowers ({ownedSuperpowers.length})
              </TabsTrigger>
              <TabsTrigger value="patients" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Patient Cards ({ownedPatientCards.length})
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Badges ({ownedBadges.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="superpowers" className="mt-6">
              {ownedSuperpowers.length > 0 ? (
                <CardGrid>
                  {ownedSuperpowers.map((superpower) => (
                    <div key={superpower.id} className="relative">
                      <SuperpowerCard superpower={superpower} />
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
                        Owned
                      </Badge>
                    </div>
                  ))}
                </CardGrid>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Zap className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No superpowers in your vault yet.</p>
                  <p className="text-sm">Mint patient cards to earn random superpowers!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="patients" className="mt-6">
              {ownedPatientCards.length > 0 ? (
                <CardGrid>
                  {ownedPatientCards.map((patient) => (
                    <div key={patient.id} className="relative">
                      <PatientCard patient={patient} />
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
                        Owned
                      </Badge>
                    </div>
                  ))}
                </CardGrid>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No patient cards in your vault yet.</p>
                  <p className="text-sm">Support patients to earn their cards!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="badges" className="mt-6">
              {ownedBadges.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ownedBadges.map((badge) => (
                    <BadgeCard
                      key={badge.id}
                      badge={badge}
                      earnedDate={badge.earnedDate}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No badges earned yet.</p>
                  <p className="text-sm">Support patients to earn achievement badges!</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}