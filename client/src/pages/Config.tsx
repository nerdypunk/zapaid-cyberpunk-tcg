import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Settings, Database, Wallet, Zap, AlertCircle, CheckCircle } from 'lucide-react';

export default function Config() {
  // todo: remove mock functionality - replace with real environment variables
  const [isWalletConnected] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(true);
  
  const envConfig = {
    VITE_SOLANA_CLUSTER: 'devnet',
    VITE_RPC: 'https://api.devnet.solana.com',
    VITE_CANDY_MACHINE_SUPERPOWER: '',
    VITE_CANDY_MACHINE_PATIENT: '',
    VITE_CANDY_MACHINE_BADGE: '',
    VITE_DISPLAY_PRICE_USD: '10'
  };

  const candyMachinesConfigured = Object.entries(envConfig)
    .filter(([key]) => key.includes('CANDY_MACHINE'))
    .every(([, value]) => value && value.trim() !== '');

  const handleToggleDemoMode = () => {
    setIsDemoMode(!isDemoMode);
    console.log('Demo mode toggled:', !isDemoMode);
    // todo: implement real demo mode toggle functionality
  };

  const handleConnectWallet = () => {
    console.log('Connect wallet triggered from config');
    // todo: implement real wallet connection
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
          System Configuration
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Monitor system status and configure ZapAid platform settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Environment Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Environment Variables
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(envConfig).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                <div className="font-mono text-sm text-muted-foreground">
                  {key}
                </div>
                <div className="text-right">
                  {value ? (
                    <Badge variant="outline" className="font-mono text-xs border-green-500 text-green-600">
                      {key.includes('CANDY_MACHINE') ? 'SET' : value}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="font-mono text-xs border-red-500 text-red-600">
                      NOT SET
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Wallet Connection</span>
                </div>
                {isWalletConnected ? (
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-orange-500 text-orange-600">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Disconnected
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Candy Machines</span>
                </div>
                {candyMachinesConfigured ? (
                  <Badge className="bg-green-500 text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Configured
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-red-500 text-red-600">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Not Configured
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Demo Mode</span>
                </div>
                <Badge className={isDemoMode ? "bg-orange-500 text-white" : "bg-green-500 text-white"}>
                  {isDemoMode ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span className="text-sm">Network</span>
                </div>
                <Badge variant="outline" className="border-blue-500 text-blue-600">
                  Solana Devnet
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Mode Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Demo Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Demo Mode</div>
                <div className="text-sm text-muted-foreground">
                  Simulate minting without real transactions
                </div>
              </div>
              <Switch
                checked={isDemoMode}
                onCheckedChange={handleToggleDemoMode}
                data-testid="switch-demo-mode"
              />
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground mb-4">
                Demo mode is automatically enabled when:
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• No wallet is connected</li>
                <li>• Candy Machine IDs are not configured</li>
                <li>• Network connection issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleConnectWallet}
              disabled={isWalletConnected}
              className="w-full"
              data-testid="button-connect-wallet-config"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open('https://faucet.solana.com', '_blank')}
              className="w-full"
              data-testid="button-faucet"
            >
              Get Devnet SOL
            </Button>

            <Button
              variant="outline"
              onClick={() => console.log('Refresh configuration')}
              className="w-full"
              data-testid="button-refresh-config"
            >
              <Settings className="w-4 h-4 mr-2" />
              Refresh Configuration
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Information Panel */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Setup Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Development:</h4>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Connect a Phantom wallet on Devnet</li>
                <li>2. Get SOL from the Solana Faucet</li>
                <li>3. Configure Candy Machine IDs in .env</li>
                <li>4. Deploy NFT collections to Devnet</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Demo Mode Features:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Simulated wallet with "demo-guest" profile</li>
                <li>• Mock minting with fake transaction signatures</li>
                <li>• LocalStorage persistence for demo progress</li>
                <li>• All UI flows work without blockchain connection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}