#!/usr/bin/env node

/**
 * Script to remove console statements from production builds
 * This is a fallback method in case Next.js compiler.removeConsole doesn't catch everything
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, '..', '.next');

function removeConsoleStatements(content) {
  // Remove console.log, console.info, console.debug, console.warn (but keep console.error for production errors)
  return (
    content
      .replace(/console\.(log|info|debug|warn)\s*\([^)]*\);?/g, '')
      .replace(/console\.(log|info|debug|warn)\s*\([^)]*\)/g, '')
      // Remove debugger statements
      .replace(/debugger\s*;?/g, '')
      // Remove alert statements
      .replace(/alert\s*\([^)]*\);?/g, '')
      .replace(/alert\s*\([^)]*\)/g, '')
  );
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = removeConsoleStatements(content);

    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`✅ Cleaned: ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      processFile(filePath);
    }
  }
}

function main() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('⚠️  This script should only run in production builds');
    process.exit(1);
  }

  if (!fs.existsSync(BUILD_DIR)) {
    console.log('⚠️  Build directory not found. Run "pnpm build" first.');
    process.exit(1);
  }

  console.log('🧹 Removing console statements from production build...');
  walkDir(BUILD_DIR);
  console.log('✨ Console removal complete!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
