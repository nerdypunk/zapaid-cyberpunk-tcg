import NeonGridBackground from '../NeonGridBackground';

export default function NeonGridBackgroundExample() {
  return (
    <div className="relative h-96 bg-background overflow-hidden">
      <NeonGridBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-foreground text-lg font-cyber">Animated Cyberpunk Grid Background</p>
      </div>
    </div>
  );
}