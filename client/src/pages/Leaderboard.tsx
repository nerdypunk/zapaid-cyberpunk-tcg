import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Award, Crown, Star } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  wallet: string;
  heroScore: number;
  totalContributed: number;
  missionsCompleted: number;
  nftsOwned: number;
}

export default function Leaderboard() {
  // todo: remove mock functionality - replace with real leaderboard data
  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      rank: 1,
      wallet: 'CyberHero123',
      heroScore: 2450,
      totalContributed: 15000,
      missionsCompleted: 47,
      nftsOwned: 142
    },
    {
      rank: 2,
      wallet: 'NeonWarrior',
      heroScore: 1890,
      totalContributed: 12500,
      missionsCompleted: 38,
      nftsOwned: 98
    },
    {
      rank: 3,
      wallet: 'QuantumSavior',
      heroScore: 1650,
      totalContributed: 9800,
      missionsCompleted: 32,
      nftsOwned: 87
    },
    {
      rank: 4,
      wallet: 'DataMedic',
      heroScore: 1420,
      totalContributed: 8750,
      missionsCompleted: 28,
      nftsOwned: 73
    },
    {
      rank: 5,
      wallet: 'demo-guest',
      heroScore: 245,
      totalContributed: 850,
      missionsCompleted: 12,
      nftsOwned: 34
    }
  ]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      const colors = {
        1: 'bg-yellow-500 text-yellow-900',
        2: 'bg-gray-400 text-gray-900',
        3: 'bg-amber-600 text-amber-900'
      };
      return colors[rank as keyof typeof colors];
    }
    return 'bg-muted text-muted-foreground';
  };

  const generateAvatarInitials = (wallet: string) => {
    if (wallet === 'demo-guest') return 'DG';
    return wallet.slice(0, 2).toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Hall of Heroes
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Celebrating the champions who deploy aid and support our cyber-warriors in need.
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {leaderboard.slice(0, 3).map((entry) => (
          <Card
            key={entry.rank}
            className={`relative overflow-hidden ${
              entry.rank === 1
                ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
                : entry.rank === 2
                ? 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-400/30'
                : 'bg-gradient-to-br from-amber-600/10 to-amber-700/10 border-amber-600/30'
            } ${entry.rank === 1 ? 'md:order-2 md:scale-110 md:mt-0' : entry.rank === 2 ? 'md:order-1 md:mt-8' : 'md:order-3 md:mt-8'}`}
          >
            {entry.rank === 1 && (
              <div className="absolute inset-0 scanlines pointer-events-none" />
            )}
            
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                {getRankIcon(entry.rank)}
              </div>
              <Badge className={`${getRankBadge(entry.rank)} mx-auto mb-2`}>
                #{entry.rank}
              </Badge>
              <div className="flex justify-center mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="text-lg font-bold">
                    {generateAvatarInitials(entry.wallet)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="font-anime text-lg" data-testid={`text-hero-name-${entry.rank}`}>
                {entry.wallet === 'demo-guest' ? 'You (Demo)' : entry.wallet}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center space-y-3">
              <div>
                <div className="text-2xl font-bold text-primary" data-testid={`text-hero-score-${entry.rank}`}>
                  {entry.heroScore.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Hero Score</div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="font-semibold" data-testid={`text-contributed-${entry.rank}`}>
                    ${entry.totalContributed.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground">Contributed</div>
                </div>
                <div>
                  <div className="font-semibold" data-testid={`text-missions-${entry.rank}`}>
                    {entry.missionsCompleted}
                  </div>
                  <div className="text-muted-foreground">Missions</div>
                </div>
                <div>
                  <div className="font-semibold" data-testid={`text-nfts-${entry.rank}`}>
                    {entry.nftsOwned}
                  </div>
                  <div className="text-muted-foreground">NFTs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Complete Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-colors hover-elevate ${
                  entry.wallet === 'demo-guest' 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-card border-card-border'
                }`}
                data-testid={`row-leaderboard-${entry.rank}`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex items-center justify-center w-8">
                    {entry.rank <= 3 ? (
                      getRankIcon(entry.rank)
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">
                        #{entry.rank}
                      </span>
                    )}
                  </div>
                  
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="text-sm font-semibold">
                      {generateAvatarInitials(entry.wallet)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="min-w-0 flex-1">
                    <div className="font-medium truncate">
                      {entry.wallet === 'demo-guest' ? 'You (Demo Mode)' : entry.wallet}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hero Score: {entry.heroScore.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">${entry.totalContributed.toLocaleString()}</div>
                    <div className="text-muted-foreground">Contributed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{entry.missionsCompleted}</div>
                    <div className="text-muted-foreground">Missions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{entry.nftsOwned}</div>
                    <div className="text-muted-foreground">NFTs</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scoring Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Hero Score Calculation</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Scoring System:</h4>
              <ul className="space-y-1">
                <li>• +1 point per $10 minted</li>
                <li>• +1 point per support badge earned</li>
                <li>• +5 bonus points per mission completed</li>
                <li>• +1 point per NFT owned</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Achievement Tiers:</h4>
              <ul className="space-y-1">
                <li>• <span className="text-yellow-500">Champion</span>: 2000+ points</li>
                <li>• <span className="text-blue-500">Hero</span>: 1000+ points</li>
                <li>• <span className="text-green-500">Guardian</span>: 500+ points</li>
                <li>• <span className="text-gray-500">Supporter</span>: &lt;500 points</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}