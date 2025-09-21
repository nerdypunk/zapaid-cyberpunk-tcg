# ZapAid - Cyberpunk Trading Card Game Platform

A revolutionary trading card game platform built on Solana devnet that combines the excitement of collectible NFTs with real-world charitable impact. ZapAid features a cyberpunk anime aesthetic where users can mint healing superpower and patient support cards while contributing to meaningful causes.

## 🌟 Features

- **Dual-Mint System**: Mint individual cards or purchase mystery packs with varying rarity levels
- **Blockchain Integration**: Built on Solana devnet for secure NFT transactions
- **Demo Mode**: Full functionality without wallet connection for development and testing
- **Cyberpunk Aesthetic**: Stunning neon grids, animated circuit lines, and foil rarity effects
- **Multi-Wallet Support**: Compatible with Phantom, Backpack, and Solflare wallets
- **Charitable Impact**: Every mint contributes to real-world causes through gamified giving
- **Responsive Design**: Optimized for all devices with mobile-first approach

## 🛠 Technology Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: TailwindCSS with custom cyberpunk design tokens
- **Blockchain**: Solana Web3.js + Wallet Adapter
- **NFT Minting**: Metaplex Umi with Candy Machine v3
- **State Management**: TanStack React Query
- **UI Components**: Radix UI with custom theming
- **Routing**: React Router with HashRouter for static deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository:
git clone https://github.com/nerdypunk/zapaid-cyberpunk-tcg.git
cd zapaid-cyberpunk-tcg
Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:5000
Production Build
# Build frontend
npm run build
# Build server for production
node scripts/build-server.mjs
# Start production server
npm start
🎮 How to Play
Connect Wallet: Link your Solana wallet (Phantom, Backpack, or Solflare)
Browse Cards: Explore superpower and patient support cards
Mint NFTs: Choose individual cards or mystery packs
Collect & Trade: Build your collection with different rarity levels
Make Impact: Contribute to real-world causes through your mints
Demo Mode
Don't have a wallet? No problem! ZapAid runs in Demo Mode where you can:

Explore all features without blockchain transactions
Test the minting experience
Browse the full card collection
Experience the complete user interface
🎨 Design System
Color Palette: Deep purple, electric blue, and neon pink
Typography: Inter for UI, Orbitron for cyberpunk accents
Animations: Circuit line effects, hover transitions, foil rarity animations
Grid Layout: Responsive 4-column card displays
🔧 Configuration
Environment Variables
VITE_SOLANA_NETWORK: Solana network (devnet/mainnet)
VITE_CANDY_MACHINE_ID: Candy Machine ID for NFT minting
Wallet Configuration
The app automatically detects and supports multiple Solana wallets. No additional configuration required.

📁 Project Structure
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages
│   │   └── lib/          # Utilities and configurations
├── server/               # Backend Express server
├── shared/               # Shared types and schemas
├── scripts/              # Build and utility scripts
└── attached_assets/      # Static assets and images
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🎯 Roadmap
 Mainnet deployment
 Advanced card trading system
 Enhanced rarity mechanics
 Mobile app development
 Additional charity partnerships
🔗 Links
Live Demo
Documentation
Report Issues
💫 About
ZapAid transforms charitable giving into an engaging gaming experience through collectible NFTs. By combining the excitement of trading cards with blockchain technology and real-world impact, we're creating a new way to make a difference while having fun.

Built with ❤️ for the future of charitable gaming
