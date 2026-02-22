#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SRC_DIR = path.join(__dirname, '..', 'src', 'pages');
const BUILD_SCRIPT = path.join(__dirname, 'build-html.js');

console.log('Watching src/pages/ for changes...\n');

// Initial build
execFileSync('node', [BUILD_SCRIPT], { stdio: 'inherit' });

// Watch all .pug files recursively
fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
  if (!filename || !filename.endsWith('.pug')) return;

  console.log(`\n${filename} changed, rebuilding...`);
  try {
    execFileSync('node', [BUILD_SCRIPT], { stdio: 'inherit' });
  } catch {
    // build-html.js already logs errors
  }
});
