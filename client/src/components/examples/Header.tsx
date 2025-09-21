import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">ZapAid Header Component</h1>
        <p className="text-muted-foreground mt-2">
          Cyberpunk-themed navigation with wallet connection, dark mode toggle, and responsive mobile menu.
        </p>
      </div>
    </div>
  );
}