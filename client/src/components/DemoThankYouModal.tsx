import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, CheckCircle } from 'lucide-react';

interface DemoThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'mint' | 'support' | 'mystery';
  details: {
    patientName?: string;
    superpowerName?: string;
    amount?: number;
  };
}

export default function DemoThankYouModal({ isOpen, onClose, type, details }: DemoThankYouModalProps) {
  const getTitle = () => {
    switch (type) {
      case 'mint': return 'NFTs Successfully Minted!';
      case 'support': return 'Support Sent Successfully!';
      case 'mystery': return 'Mystery Pack Opened!';
      default: return 'Thank You!';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'mint': 
        return `You've minted NFTs for ${details.patientName} with $${details.amount}. Your digital heroes are ready to deploy aid!`;
      case 'support': 
        return `Your $${details.amount} support has been sent to ${details.patientName}. You've earned a Hero Badge for your compassion!`;
      case 'mystery': 
        return `Your mystery pack revealed amazing cards! Every purchase helps save lives while building your collection.`;
      default: 
        return 'Your contribution makes a real difference in saving lives!';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'mint': return <Sparkles className="w-8 h-8 text-cyan-400" />;
      case 'support': return <Heart className="w-8 h-8 text-red-400" />;
      case 'mystery': return <CheckCircle className="w-8 h-8 text-yellow-400" />;
      default: return <Heart className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-cyan-500/30">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            {getIcon()}
          </div>
          <DialogTitle className="text-3xl font-cyber font-bold neon-text mb-4">
            {getTitle()}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Thank You Image */}
          <div className="flex justify-center">
            <img 
              src="/attached_assets/generated_images/Thank_you_donation_anime_cyberpunk_4c249333.png" 
              alt="Thank You for Your Support" 
              className="w-full max-w-md h-48 object-cover rounded-lg border border-cyan-500/30 shadow-lg"
              data-testid="img-thank-you"
            />
          </div>

          {/* Details */}
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              {getDescription()}
            </p>
            
            {details.patientName && details.superpowerName && (
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Your Digital Heroes:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-cyan-400">Patient Card</div>
                    <div>{details.patientName}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-purple-400">Superpower Card</div>
                    <div>{details.superpowerName}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-semibold text-green-400">Impact Preview (Demo Mode)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                In real mode, this contribution would directly fund medical aid for patients in need. 
                Every NFT mint and support helps save lives!
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button 
              onClick={onClose}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold px-8 py-3"
              data-testid="button-close-modal"
            >
              Continue Helping
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}