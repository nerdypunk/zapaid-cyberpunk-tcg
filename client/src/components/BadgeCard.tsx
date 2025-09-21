import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Trophy } from 'lucide-react';

interface BadgeItem {
  id: string;
  name: string;
  blurb: string;
  rarity: 'common' | 'rare' | 'legendary';
  image: string;
}

interface BadgeCardProps {
  badge: BadgeItem;
  earnedDate?: string;
}

const rarityStyles = {
  common: 'border-gray-400 bg-gradient-to-br from-gray-900 to-gray-800',
  rare: 'border-blue-500 bg-gradient-to-br from-blue-900/50 to-purple-900/50 neon-border',
  legendary: 'border-yellow-500 bg-gradient-to-br from-yellow-900/50 to-orange-900/50 foil-effect neon-border'
};

const rarityColors = {
  common: 'bg-gray-500',
  rare: 'bg-blue-500',
  legendary: 'bg-yellow-500'
};

const badgeIcons = {
  common: Heart,
  rare: Shield,
  legendary: Trophy
};

export default function BadgeCard({ badge, earnedDate }: BadgeCardProps) {
  const BadgeIcon = badgeIcons[badge.rarity];

  return (
    <Card className={`${rarityStyles[badge.rarity]} card-tilt hover-elevate relative overflow-hidden`}>
      {badge.rarity === 'legendary' && (
        <div className="absolute inset-0 scanlines pointer-events-none" />
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <BadgeIcon className="w-5 h-5 text-red-500" />
            <h3 className="font-anime font-bold text-lg" data-testid={`text-badge-name-${badge.id}`}>
              {badge.name}
            </h3>
          </div>
          <Badge className={`${rarityColors[badge.rarity]} text-white`} data-testid={`badge-rarity-${badge.id}`}>
            {badge.rarity}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-red-900/30 to-pink-900/30 mx-auto w-24 h-24">
          <div className="w-full h-full bg-gradient-to-br from-red-500/40 to-pink-500/40 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="relative">
                <BadgeIcon className="mx-auto w-8 h-8 neon-glow" />
                {badge.rarity === 'legendary' && (
                  <div className="absolute inset-0 pulse-neon">
                    <BadgeIcon className="mx-auto w-8 h-8" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm text-muted-foreground" data-testid={`text-blurb-${badge.id}`}>
            {badge.blurb}
          </p>
          
          {earnedDate && (
            <p className="text-xs text-muted-foreground" data-testid={`text-earned-date-${badge.id}`}>
              Earned: {earnedDate}
            </p>
          )}
          
          {badge.rarity === 'legendary' && (
            <Badge variant="outline" className="border-yellow-500 text-yellow-600">
              Elite Status
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}