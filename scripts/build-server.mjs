#!/usr/bin/env node
import { build } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Banner to inject Node.js-like __dirname in ESM for compatibility
const banner = `
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`;

try {
  await build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    packages: 'external',
    outdir: 'dist',
    banner: {
      js: banner,
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'import.meta.dirname': '__dirname'
    },
    sourcemap: 'inline',
    minify: false, // Keep readable for debugging
  });

  console.log('✅ Server build completed successfully');
} catch (error) {
  console.error('❌ Server build failed:', error);
  process.exit(1);
}