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
  // todo: remove mock functionality - replace with real wallet data
  const [profile] = useState({
    wallet: 'demo-guest',
    heroScore: 245,
    totalContributed: 850,
    missionsCompleted: 12,
    nftsOwned: 34
  });

  const [ownedSuperpowers] = useState([
    {
      id: "s1",
      name: "Neural Hack",
      blurb: "Penetrate digital defenses with pure thought",
      rarity: "rare" as const,
      image: "",
      earnedDate: "2025-01-15"
    }
  ]);

  const [ownedPatientCards] = useState([
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
      timeWaitingDays: 45,
      earnedDate: "2025-01-15"
    }
  ]);

  const [ownedBadges] = useState([
    {
      id: "b1",
      name: "Hero's Heart",
      blurb: "Awarded to those who support the cause",
      rarity: "common" as const,
      image: "",
      earnedDate: "2025-01-15"
    }
  ]);

  const handleShare = () => {
    console.log('Share profile triggered');
    // todo: implement PNG generation and Twitter sharing
  };

  const handleDownload = () => {
    console.log('Download profile image triggered');
    // todo: implement PNG download functionality
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