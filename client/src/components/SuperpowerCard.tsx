import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Star, Crown } from 'lucide-react';

interface Superpower {
  id: string;
  name: string;
  blurb: string;
  rarity: 'common' | 'rare' | 'legendary';
  image: string;
}

interface SuperpowerCardProps {
  superpower: Superpower;
}

const rarityStyles = {
  common: 'border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100',
  rare: 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-100',
  legendary: 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-100 foil-effect'
};

const rarityColors = {
  common: 'bg-gray-500',
  rare: 'bg-blue-500',
  legendary: 'bg-yellow-500'
};

const rarityIcons = {
  common: Zap,
  rare: Star,
  legendary: Crown
};

export default function SuperpowerCard({ superpower }: SuperpowerCardProps) {
  const RarityIcon = rarityIcons[superpower.rarity];

  return (
    <Card className={`${rarityStyles[superpower.rarity]} card-tilt hover-elevate relative overflow-hidden`}>
      {superpower.rarity === 'legendary' && (
        <div className="absolute inset-0 scanlines pointer-events-none" />
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <RarityIcon className="w-5 h-5 text-primary" />
            <h3 className="font-anime font-bold text-lg" data-testid={`text-superpower-name-${superpower.id}`}>
              {superpower.name}
            </h3>
          </div>
          <Badge className={`${rarityColors[superpower.rarity]} text-white`} data-testid={`badge-rarity-${superpower.id}`}>
            {superpower.rarity}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="relative">
                <Zap className="mx-auto mb-2 w-12 h-12 neon-glow" />
                {superpower.rarity === 'legendary' && (
                  <div className="absolute inset-0 pulse-neon">
                    <Zap className="mx-auto mb-2 w-12 h-12" />
                  </div>
                )}
              </div>
              <p className="text-sm font-anime uppercase tracking-wider">SUPERPOWER</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground text-center" data-testid={`text-blurb-${superpower.id}`}>
            {superpower.blurb}
          </p>
          
          {superpower.rarity === 'legendary' && (
            <div className="text-center">
              <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                Ultra Rare
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}