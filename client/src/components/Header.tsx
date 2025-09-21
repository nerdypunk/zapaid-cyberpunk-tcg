import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Wallet, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Agent', href: '/agent' },
  { name: 'Superpowers', href: '/superpowers' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Profile', href: '/profile' },
  { name: 'Config', href: '/config' }
];

export default function Header() {
  const [location] = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    console.log('Dark mode toggled:', !isDarkMode);
  };

  const toggleWallet = () => {
    setIsWalletConnected(!isWalletConnected);
    console.log('Wallet connection toggled:', !isWalletConnected);
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 cyber-grid">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="link-home">
              <div className="font-cyber text-2xl font-bold neon-text">
                ZapAid
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isAgent = item.name === 'Agent';
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={location === item.href ? "default" : (isAgent ? "default" : "ghost")}
                    size="sm"
                    className={`relative ${isAgent ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold border border-cyan-400' : ''}`}
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    {location === item.href && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Status Pills & Actions */}
          <div className="flex items-center space-x-2">
            {/* Status Pills */}
            <div className="hidden sm:flex items-center space-x-2">
              <Badge variant="outline" className="text-xs border-blue-500 text-blue-600">
                Devnet
              </Badge>
              <Badge variant="outline" className="text-xs border-orange-500 text-orange-600">
                Demo Mode
              </Badge>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Wallet Connect */}
            <Button
              onClick={toggleWallet}
              variant={isWalletConnected ? "default" : "outline"}
              size="sm"
              className="hidden sm:flex items-center gap-2"
              data-testid="button-wallet-connect"
            >
              <Wallet className="h-4 w-4" />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isAgent = item.name === 'Agent';
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={location === item.href ? "default" : (isAgent ? "default" : "ghost")}
                      className={`w-full justify-start ${isAgent ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold border border-cyan-400' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile Wallet Button */}
              <Button
                onClick={toggleWallet}
                variant={isWalletConnected ? "default" : "outline"}
                className="w-full justify-start gap-2 mt-4"
                data-testid="button-mobile-wallet"
              >
                <Wallet className="h-4 w-4" />
                {isWalletConnected ? 'Connected' : 'Connect Wallet'}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}