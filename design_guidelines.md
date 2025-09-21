# ZapAid Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern anime aesthetic combined with cyberpunk TCG games like "Legends of Runeterra" and "Yu-Gi-Oh! Master Duel", while maintaining the clean UX patterns of contemporary DeFi platforms.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Deep Purple: 270 85% 15% (main brand)
- Electric Blue: 210 100% 50% (accents)
- Neon Pink: 320 100% 70% (highlights)

**Dark Mode (Primary):**
- Background: 240 15% 8%
- Surface: 240 12% 12%
- Text: 0 0% 95%

**Light Mode:**
- Background: 240 10% 98%
- Surface: 0 0% 100%
- Text: 240 15% 15%

### Typography
- **Primary**: Inter (headings, UI)
- **Accent**: Orbitron (cyber elements, card names)
- Sizes: text-sm, text-base, text-lg, text-xl, text-2xl, text-4xl

### Layout System
**Spacing Units**: 2, 4, 6, 8, 12, 16 (p-2, m-4, gap-8, etc.)
- Consistent 8px grid system
- Generous whitespace for card visibility

### Component Library

**Navigation:**
- Fixed header with wallet connection
- Gradient borders on active states
- Subtle glow effects on hover

**Cards:**
- Rounded corners (rounded-xl)
- Subtle shadows with color tints
- Animated hover states with glow
- Metallic borders for rare cards

**Buttons:**
- Primary: Gradient purple-to-blue
- Secondary: Outline with neon accents
- CTA: Electric blue with subtle pulse

**Forms:**
- Dark inputs with neon borders
- Floating labels
- Error states in neon red

**Data Displays:**
- Card grids with masonry layout
- Stats panels with holographic effects
- Leaderboards with rank indicators

## Visual Treatments

**Gradients:**
- Hero backgrounds: Purple to blue diagonal
- Card overlays: Subtle dark-to-transparent
- Button states: Multi-stop neon gradients

**Effects:**
- Subtle box-shadows with color tints
- Minimal use of glow effects on interactive elements
- Smooth transitions (duration-300)

## Images
**Hero Section:** Large hero image featuring anime-style TCG artwork with cyberpunk cityscape background. Position gradient overlay (purple-to-blue) at 60% opacity.

**Card Images:** High-quality anime character artwork for each card, displayed in 3:4 aspect ratio with rounded corners.

**Background Elements:** Subtle geometric patterns and circuit board motifs as decorative elements, kept at low opacity to not interfere with content readability.

**Icons:** Use Heroicons for UI elements, custom anime-inspired icons for game-specific features (energy, attack, defense).

## Key Principles
1. **Anime Aesthetic**: Bold character art, vibrant colors, dynamic compositions
2. **Cyberpunk Elements**: Neon accents, geometric patterns, holographic effects
3. **Clean UX**: Intuitive navigation, clear information hierarchy
4. **Performance**: Optimized for Solana blockchain interactions
5. **Accessibility**: High contrast ratios, clear typography, consistent interactions