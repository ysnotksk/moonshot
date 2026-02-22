#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function getGzipSize(filePath) {
  const content = fs.readFileSync(filePath);
  const gzipped = zlib.gzipSync(content);
  return gzipped.length;
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

console.log('\n📦 Moonshot CSS Framework - Build Size Report\n');
console.log('─'.repeat(50));

const distPath = path.join(__dirname, '..', 'dist');
const files = ['moonshot.css', 'moonshot.min.css'];

files.forEach(file => {
  const filePath = path.join(distPath, file);

  if (fs.existsSync(filePath)) {
    const size = getFileSize(filePath);
    const gzipSize = getGzipSize(filePath);

    console.log(`\n${file}:`);
    console.log(`  Raw:     ${formatBytes(size)}`);
    console.log(`  Gzipped: ${formatBytes(gzipSize)}`);
  }
});

console.log('\n' + '─'.repeat(50) + '\n');

// Check size targets
const minFilePath = path.join(distPath, 'moonshot.min.css');
if (fs.existsSync(minFilePath)) {
  const minSize = getFileSize(minFilePath);
  const minTarget = 85 * 1024; // 85KB minified target
  const gzipSize = getGzipSize(minFilePath);
  const gzipTarget = 15 * 1024; // 15KB gzipped target

  if (minSize <= minTarget) {
    console.log('✅ Minified target met: ' + formatBytes(minSize) + ' / 85.00 KB');
  } else {
    console.log('⚠️  Minified target exceeded: ' + formatBytes(minSize) + ' / 85.00 KB');
  }

  if (gzipSize <= gzipTarget) {
    console.log('✅ Gzipped target met: ' + formatBytes(gzipSize) + ' / 15.00 KB\n');
  } else {
    console.log('⚠️  Gzipped target exceeded: ' + formatBytes(gzipSize) + ' / 15.00 KB\n');
  }
}
