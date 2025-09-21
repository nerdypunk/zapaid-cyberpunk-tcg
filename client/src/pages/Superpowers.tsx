import { useState } from 'react';
import CardGrid from '@/components/CardGrid';
import SuperpowerCard from '@/components/SuperpowerCard';
import superpowersData from '@/data/superpowers.json';

export default function Superpowers() {
  // todo: remove mock functionality
  const [superpowers] = useState(superpowersData as any);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Superpower Arsenal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the legendary abilities that power our cyber-heroes. Each superpower NFT grants unique digital capabilities.
        </p>
      </div>

      {/* Superpowers Grid */}
      <div className="mb-8">
        <CardGrid>
          {superpowers.map((superpower) => (
            <SuperpowerCard
              key={superpower.id}
              superpower={superpower}
            />
          ))}
        </CardGrid>
      </div>

      {/* Rarity Information */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-anime font-bold mb-6">Rarity Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/20">
            <div className="text-2xl font-bold text-gray-600 mb-2">76%</div>
            <div className="text-sm text-muted-foreground">Common Powers</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="text-2xl font-bold text-blue-600 mb-2">20%</div>
            <div className="text-sm text-muted-foreground">Rare Abilities</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <div className="text-2xl font-bold text-yellow-600 mb-2">4%</div>
            <div className="text-sm text-muted-foreground">Legendary Powers</div>
          </div>
        </div>
      </div>
    </div>
  );
}