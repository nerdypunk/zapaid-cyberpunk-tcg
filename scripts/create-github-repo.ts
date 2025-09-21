#!/usr/bin/env tsx

import { createRepository } from '../server/github.js';

async function main() {
  try {
    console.log('Creating GitHub repository for ZapAid...');
    
    const repo = await createRepository(
      'zapaid-cyberpunk-tcg',
      'ZapAid - Cyberpunk Trading Card Game Platform built on Solana devnet with a focus on charitable giving through collectible NFTs',
      false // public repository
    );
    
    console.log('✅ Repository created successfully!');
    console.log(`Repository URL: ${repo.html_url}`);
    console.log(`Clone URL: ${repo.clone_url}`);
    console.log(`SSH URL: ${repo.ssh_url}`);
    
    return repo;
  } catch (error: any) {
    console.error('❌ Failed to create repository:', error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}