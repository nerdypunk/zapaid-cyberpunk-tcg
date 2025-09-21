import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Zap } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  city: string;
  story: string;
  targetUsd: number;
  raisedUsd: number;
  image: string;
  rarity: 'common' | 'rare' | 'legendary';
  tokenId: number;
  needSeverity: number;
  timeWaitingDays: number;
}

interface PatientCardProps {
  patient: Patient;
  onMint?: (amount: number) => void;
  onSupport?: (amount: number) => void;
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

export default function PatientCard({ patient, onMint, onSupport }: PatientCardProps) {
  const [mintAmount, setMintAmount] = useState(10);
  const [supportAmount, setSupportAmount] = useState(5);
  
  const progressPercentage = (patient.raisedUsd / patient.targetUsd) * 100;

  const handleMint = () => {
    console.log(`Mint triggered for ${patient.name} with amount $${mintAmount}`);
    onMint?.(mintAmount);
  };

  const handleSupport = () => {
    console.log(`Support triggered for ${patient.name} with amount $${supportAmount}`);
    onSupport?.(supportAmount);
  };

  return (
    <Card className={`${rarityStyles[patient.rarity]} card-tilt hover-elevate relative overflow-hidden`}>
      {patient.rarity === 'legendary' && (
        <div className="absolute inset-0 scanlines pointer-events-none" />
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-anime font-bold text-lg" data-testid={`text-patient-name-${patient.id}`}>
              {patient.name}
            </h3>
            <p className="text-sm text-muted-foreground">{patient.city}</p>
          </div>
          <Badge className={`${rarityColors[patient.rarity]} text-white`} data-testid={`badge-rarity-${patient.id}`}>
            {patient.rarity}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative">
          <img 
            src={patient.image.replace('@assets/', '/attached_assets/')} 
            alt={patient.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.querySelector('.fallback-content')!.classList.remove('hidden');
            }}
          />
          <div className="fallback-content hidden w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center absolute inset-0">
            <div className="text-center text-white">
              <Heart className="mx-auto mb-2 w-8 h-8" />
              <p className="text-sm font-anime">PATIENT CARE</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-story-${patient.id}`}>
          {patient.story}
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span data-testid={`text-progress-${patient.id}`}>
              ${patient.raisedUsd.toLocaleString()} / ${patient.targetUsd.toLocaleString()}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Mint Section */}
        <div className="space-y-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-medium text-sm">Deploy Aid</span>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              min="10"
              step="10"
              value={mintAmount}
              onChange={(e) => setMintAmount(Number(e.target.value))}
              className="text-sm"
              data-testid={`input-mint-amount-${patient.id}`}
            />
            <Button 
              onClick={handleMint}
              disabled={mintAmount < 10}
              className="whitespace-nowrap"
              data-testid={`button-mint-${patient.id}`}
            >
              Mint (2 NFTs)
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">$10 minimum • 2 NFTs per $10</p>
        </div>

        {/* Support Section */}
        <div className="space-y-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="font-medium text-sm">Support</span>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              min="1"
              step="1"
              value={supportAmount}
              onChange={(e) => setSupportAmount(Number(e.target.value))}
              className="text-sm"
              data-testid={`input-support-amount-${patient.id}`}
            />
            <Button 
              variant="outline"
              onClick={handleSupport}
              disabled={supportAmount < 1}
              className="whitespace-nowrap"
              data-testid={`button-support-${patient.id}`}
            >
              Support
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Any amount • Badge + Patient cards</p>
        </div>
      </CardContent>
    </Card>
  );
}