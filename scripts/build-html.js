#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pug = require('pug');

const SRC_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'examples');

// Only compile top-level .pug files (skip _layouts, _includes)
const files = fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.pug') && !f.startsWith('_'));

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

/**
 * Extract `- var key = "value"` lines from a pug source and return
 * them as a locals object. These lines are stripped from the source
 * so Pug doesn't see unbuffered code at the top level of extending
 * templates (which is invalid in all Pug versions).
 */
function extractLocals(source) {
  const lines = source.split('\n');
  const locals = {};
  const kept = [];

  for (const line of lines) {
    const m = line.match(
      /^-\s*var\s+(\w+)\s*=\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|null|true|false|\d+)\s*$/
    );
    if (m) {
      let val = m[2];
      // Unquote strings
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      } else if (val === 'null') {
        val = null;
      } else if (val === 'true') {
        val = true;
      } else if (val === 'false') {
        val = false;
      } else {
        val = Number(val);
      }
      locals[m[1]] = val;
    } else {
      kept.push(line);
    }
  }

  return { locals, source: kept.join('\n') };
}

let compiled = 0;
let failed = 0;

files.forEach(file => {
  const srcPath = path.join(SRC_DIR, file);
  const outFile = file.replace('.pug', '.html');
  const outPath = path.join(OUT_DIR, outFile);

  try {
    const raw = fs.readFileSync(srcPath, 'utf8');
    const { locals, source } = extractLocals(raw);

    const html = pug.render(source, {
      pretty: true,
      basedir: SRC_DIR,
      filename: srcPath,
      ...locals,
    });
    fs.writeFileSync(outPath, html);
    compiled++;
    console.log(`  ${file} -> ${outFile}`);
  } catch (err) {
    failed++;
    console.error(`  ERROR ${file}: ${err.message}`);
  }
});

console.log(`\nPug: ${compiled} compiled, ${failed} failed`);
if (failed > 0) process.exit(1);
