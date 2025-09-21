# ZapAid - Cyberpunk Trading Card Game Platform

## Overview

ZapAid is a static front-end trading card game (TCG) platform built on Solana devnet with a cyberpunk anime aesthetic. The platform enables users to mint NFTs representing healing superpowers and patient support cards while contributing to real-world causes. The application features a dual-mint system where users can either mint individual cards or purchase mystery packs, with all transactions happening on-chain when Candy Machine IDs are configured, or in Demo Mode for development and testing.

The platform combines modern web technologies with blockchain integration to create an engaging user experience that gamifies charitable giving through collectible NFTs with varying rarity levels and animated visual effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application is built as a Single Page Application (SPA) using:
- **Vite + React + TypeScript** for the core framework and build system
- **React Router with HashRouter** to avoid server-side routing issues for static deployment
- **TailwindCSS** for styling with custom cyberpunk design tokens and animations
- **Radix UI components** for accessible UI primitives with custom theming

### State Management & Data Flow
- **TanStack React Query** for server state management and caching
- **Local State** using React hooks for component-level state
- **Demo Mode Storage** using localStorage to persist user actions when wallets aren't connected
- **Profile System** that switches between demo-guest and wallet-based profiles

### Design System
- **Cyberpunk + Anime TCG Aesthetic** with neon grids, animated circuit lines, and foil rarity effects
- **Color Palette** featuring deep purple (270° 85% 15%), electric blue (210° 100% 50%), and neon pink (320° 100% 70%)
- **Typography** using Inter for UI elements and Orbitron for cyberpunk accents
- **Component Library** with card variants, hover effects, and rarity-based styling

### Wallet Integration
- **@solana/wallet-adapter-react** ecosystem for multi-wallet support
- **Phantom, Backpack, and Solflare** wallet adapters
- **Graceful Fallback** to Demo Mode when no wallet is connected or Candy Machine IDs are missing

### NFT Minting System
- **Metaplex Umi with Candy Machine v3** for on-chain minting when configured
- **Dual-Mint Functionality** allowing users to mint both superpower and patient NFTs simultaneously
- **Variable Contribution System** supporting different funding amounts with corresponding NFT rewards
- **Demo Mode Simulation** for development and testing without blockchain transactions

### Routing & Navigation
- **Hash-based Routing** for static deployment compatibility
- **Main Routes**: Home, Superpowers, Leaderboard, Profile, Agent (AI analysis), Config
- **4-Column Grid Layout** for card displays across different screen sizes
- **Responsive Design** with mobile-first approach and hamburger menu

### Asset Management
- **Static Asset Handling** through Vite's asset pipeline
- **Image Optimization** for card artwork and UI elements
- **Font Loading** with preconnect for Google Fonts (Inter, Orbitron, Rajdhani)

### Build & Deployment
- **Static Site Generation** outputting to dist/ directory
- **Environment Variable Configuration** for Solana cluster and Candy Machine settings
- **Production Optimization** with code splitting and asset optimization

## External Dependencies

### Blockchain Infrastructure
- **Solana Devnet** as the target blockchain network
- **Neon Database** with PostgreSQL for potential backend data (configured but not actively used in static mode)
- **Metaplex Candy Machine v3** for NFT minting when configured

### UI & Styling
- **Radix UI** component library for accessible primitives
- **TailwindCSS** for utility-first styling
- **Google Fonts API** for Inter, Orbitron, and Rajdhani typefaces
- **Lucide React** for consistent iconography

### Development & Build Tools
- **Vite** for fast development and optimized builds
- **TypeScript** for type safety and developer experience
- **ESBuild** for fast JavaScript bundling
- **PostCSS + Autoprefixer** for CSS processing

### Data & State Management
- **TanStack React Query** for asynchronous state management
- **Wouter** for lightweight client-side routing
- **React Hook Form** with Zod resolvers for form validation

### Database & ORM (Backend Foundation)
- **Drizzle ORM** with PostgreSQL schema definitions
- **Neon Database** connection configured for potential future backend integration
- **Zod** for runtime type validation and schema creation