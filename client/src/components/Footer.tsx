import { Link } from 'wouter';
import { Heart, Shield, Users, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900/50 to-black/50 border-t border-cyan-500/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-cyber font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ZapAid
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing charitable giving through NFT technology. Every mint creates digital lifelines while funding real medical aid for those in need.
            </p>
            <div className="flex items-center space-x-2 text-sm text-cyan-400">
              <Heart className="w-4 h-4" />
              <span>100% of proceeds go directly to patient medical aid</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-cyan-400 transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/superpowers" className="block text-muted-foreground hover:text-cyan-400 transition-colors" data-testid="link-footer-superpowers">
                Healing Powers
              </Link>
              <Link href="/profile" className="block text-muted-foreground hover:text-cyan-400 transition-colors" data-testid="link-footer-profile">
                Profile
              </Link>
              <Link href="/agent" className="block text-muted-foreground hover:text-cyan-400 transition-colors" data-testid="link-footer-agent">
                AI Agent
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure Blockchain Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Community-Driven Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Transparent Aid Distribution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 ZapAid. All rights reserved. Building the future of charitable giving.
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by <span className="text-cyan-400">Solana Devnet</span> • 
              <span className="text-purple-400 ml-1">Anime TCG Aesthetics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}