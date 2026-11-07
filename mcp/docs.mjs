// Doc index for the moonshot MCP server.
//
// Loads docs/*.md once, splits them into heading-delimited chunks, and
// answers two questions:
//   guide(topic)  — return the markdown for one named section
//   search(query) — rank sections by how well they match a free-text need
//
// Everything is read from the working tree at call time setup (once at
// startup), so the server always serves the docs of the checkout it runs
// from — no build step, no generated files to keep in sync.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DOC_FILES = ['GETTING_STARTED.md', 'COMPONENTS.md', 'THEMING.md'];

const DOC_KEY = {
  'GETTING_STARTED.md': 'getting-started',
  'COMPONENTS.md': 'components',
  'THEMING.md': 'theming',
};

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseDoc(file) {
  const text = readFileSync(join(ROOT, 'docs', file), 'utf8');
  const lines = text.split('\n');

  const heads = [];
  lines.forEach((line, i) => {
    const m = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (m) heads.push({ level: m[1].length, title: m[2], line: i });
  });

  const chunks = [];
  const preambleEnd = heads.length ? heads[0].line : lines.length;
  if (preambleEnd > 0) {
    chunks.push({
      doc: DOC_KEY[file],
      file: `docs/${file}`,
      level: 0,
      title: '(overview)',
      slug: 'overview',
      parent: null,
      line: 0,
      end: preambleEnd,
      lines,
    });
  }

  let parentSlug = null;
  for (let i = 0; i < heads.length; i++) {
    const h = heads[i];
    if (h.level === 2) parentSlug = slugify(h.title);
    // Range ends at the next heading of same or higher level.
    let end = lines.length;
    for (let j = i + 1; j < heads.length; j++) {
      if (heads[j].level <= h.level) {
        end = heads[j].line;
        break;
      }
    }
    chunks.push({
      doc: DOC_KEY[file],
      file: `docs/${file}`,
      level: h.level,
      title: h.title,
      slug: slugify(h.title),
      parent: h.level === 3 ? parentSlug : null,
      line: h.line,
      end,
      lines,
    });
  }
  return chunks;
}

// class -> defining scss file, e.g. 'ms-button--primary' -> 'src/components/_buttons.scss'
function buildScssIndex() {
  const map = new Map();
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.scss')) {
        const text = readFileSync(p, 'utf8');
        for (const m of text.matchAll(/\.ms-[a-zA-Z0-9_-]+/g)) {
          const cls = m[0].slice(1);
          const rel = relative(ROOT, p);
          if (!map.has(cls)) map.set(cls, rel);
        }
      }
    }
  };
  walk(join(ROOT, 'src'));
  return map;
}

const CLASS_RE = /ms-[a-zA-Z0-9_-]+/g;

function chunkText(chunk) {
  return chunk.lines
    .slice(chunk.line, chunk.end)
    .join('\n')
    .trim();
}

function chunkClasses(text) {
  return [...new Set(text.match(CLASS_RE) || [])];
}

export function buildIndex() {
  const chunks = DOC_FILES.flatMap(parseDoc);
  const scss = buildScssIndex();

  // A chunk is searchable when no deeper heading lives inside it; parents
  // would only repeat their children's text.
  const hasChild = new Set();
  for (const c of chunks) {
    if (c.level === 0) continue;
    for (const o of chunks) {
      if (o !== c && o.level > c.level && o.line >= c.line && o.line < c.end) {
        hasChild.add(c);
        break;
      }
    }
  }
  const searchable = chunks.filter((c) => !hasChild.has(c));
  for (const c of searchable) {
    c.text = chunkText(c);
    c.classes = chunkClasses(c.text);
  }

  // All chunks (incl. parents) for guide lookups.
  for (const c of chunks) c.text = chunkText(c);

  return { chunks, searchable, scss };
}

let index = null;
function getIndex() {
  if (!index) index = buildIndex();
  return index;
}

// Canonical topic id for a chunk: 'components:buttons' for a ## section,
// 'components:cards/html-example' for a ### subsection (slugs like
// "html-example" repeat under every component, so the parent is required).
function topicId(c) {
  const path = c.level === 3 && c.parent ? `${c.parent}/${c.slug}` : c.slug;
  return `${c.doc}:${path}`;
}

function resolveTopic(topic) {
  const { chunks } = getIndex();
  let t = topic.trim().toLowerCase().replace(/\.md$/, '');
  let docPref = null;
  const colon = t.indexOf(':');
  if (colon > 0) {
    docPref = t.slice(0, colon);
    t = t.slice(colon + 1);
  }
  const path = t
    .replace(/\\/g, '/')
    .replace(/[\s_]+/g, '-')
    .replace(/^\/+|\/+$/g, '');

  const matches = chunks.filter((c) => {
    if (c.level === 0) return false;
    if (docPref && c.doc !== docPref) return false;
    const cid = c.level === 3 && c.parent ? `${c.parent}/${c.slug}` : c.slug;
    return cid === path || c.slug === path;
  });
  if (matches.length === 1) return { chunk: matches[0] };
  if (matches.length > 1) {
    const ids = [...new Set(matches.map(topicId))];
    if (ids.length > 1) return { ambiguous: ids };
    return { chunk: matches[0] };
  }
  return { none: true };
}

// Chunk text without its own leading heading line (the guide response
// already prints the title; child chunks keep theirs for structure).
function chunkBody(chunk) {
  return chunkText(chunk).replace(/^#{2,3}\s+[^\n]*\n?/, '');
}

// A chunk's range already runs to the next heading of same-or-higher
// level, so a ## chunk contains its ### children verbatim — no need to
// re-append them.
function sectionMarkdown(chunk) {
  return chunkBody(chunk);
}

export function guide(topic) {
  const { chunks } = getIndex();
  if (!topic || !topic.trim()) {
    const byDoc = new Map();
    for (const c of chunks) {
      if (c.level !== 2) continue;
      if (!byDoc.has(c.doc)) byDoc.set(c.doc, []);
      byDoc.get(c.doc).push(c.slug);
    }
    const lines = [
      'Moonshot CSS Framework — documentation topics.',
      'Call moonshot_guide with a topic id (doc:slug, or bare slug when unique).',
      'Call moonshot_search with a plain-language need to find the right classes.',
      '',
    ];
    for (const [doc, slugs] of byDoc) {
      lines.push(`${doc}:`);
      for (const s of slugs) lines.push(`  ${doc}:${s}`);
      lines.push('');
    }
    return lines.join('\n');
  }

  const key = topic.trim().toLowerCase().replace(/[\s_]+/g, '-');
  // A bare doc key lists that document's sections.
  const docEntry = DOC_FILES.find((f) => DOC_KEY[f] === key);
  if (docEntry && !topic.includes(':') && !topic.includes(' ')) {
    const sections = chunks.filter(
      (c) => c.doc === DOC_KEY[docEntry] && c.level === 2
    );
    const lines = [`docs/${docEntry} — sections:`];
    for (const c of sections) lines.push(`  ${c.doc}:${c.slug} — ${c.title}`);
    return lines.join('\n');
  }

  const res = resolveTopic(topic);
  if (res.chunk) {
    const c = res.chunk;
    return `# ${c.title}\n# source: ${c.file}\n# topic: ${topicId(c)}\n\n${sectionMarkdown(c)}`;
  }
  if (res.ambiguous) {
    return `Topic "${topic}" is ambiguous — retry with one of:\n${res.ambiguous.join('\n')}`;
  }
  return `No doc section matches "${topic}". Call moonshot_guide without a topic for the index, or moonshot_search to find classes by purpose.`;
}

function countOccurrences(haystack, needle) {
  let n = 0;
  let i = haystack.indexOf(needle);
  while (i !== -1) {
    n++;
    i = haystack.indexOf(needle, i + needle.length);
  }
  return n;
}

export function search(query, limit = 5) {
  const { searchable, scss } = getIndex();
  const terms = [
    ...new Set(
      query
        .toLowerCase()
        .split(/[^a-z0-9_-]+/)
        .filter((t) => t.length > 1)
    ),
  ];
  if (!terms.length) return 'Empty query.';

  const scored = searchable.map((c) => {
    const text = c.text.toLowerCase();
    let score = 0;
    for (const t of terms) {
      score += Math.min(countOccurrences(text, t), 10);
      if (c.classes.some((cls) => cls.includes(t))) score += 5;
    }
    return { c, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((s) => s.score > 0).slice(0, limit);
  if (!top.length) {
    return `No matches for "${query}". Try different words, or call moonshot_guide for the full topic index.`;
  }

  const out = [`Search: "${query}" — ${top.length} match(es)\n`];
  for (const { c } of top) {
    const title =
      c.level === 3 && c.parent
        ? `${c.parent} › ${c.slug}`
        : c.slug;
    out.push(`## ${title} (${c.doc})`);
    out.push(`topic: ${topicId(c)} — ${c.file}`);
    if (c.classes.length) {
      const shown = c.classes.slice(0, 12).map((k) => `\`${k}\``);
      const more = c.classes.length > 12 ? ` +${c.classes.length - 12} more` : '';
      out.push(`classes: ${shown.join(' ')}${more}`);
      const defs = [...new Set(c.classes.map((k) => scss.get(k)).filter(Boolean))];
      if (defs.length) out.push(`scss: ${defs.join(', ')}`);
    }
    const excerpt = c.text.slice(0, 500).replace(/\n{3,}/g, '\n\n');
    out.push('', excerpt, '');
  }
  return out.join('\n');
}
