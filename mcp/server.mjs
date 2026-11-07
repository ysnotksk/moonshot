#!/usr/bin/env node
// moonshot MCP server — lets coding agents look up the framework's real
// class names and usage instead of guessing or hand-writing CSS.
//
//   npm install
//   node mcp/server.mjs        (stdio transport; configure your MCP client
//                               with this command and the repo root as cwd)
//
// Tools:
//   moonshot_guide  — fetch a doc section by topic (see index via no topic)
//   moonshot_search — rank doc sections by a plain-language need
//
// Data source is docs/*.md in this checkout, read once at startup.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { guide, search } from './docs.mjs';

const server = new McpServer(
  { name: 'moonshot', version: '0.1.0' },
  {
    instructions:
      'Moonshot CSS Framework reference. Before writing custom CSS, search ' +
      'for an existing component: moonshot_search with what you need ' +
      '(e.g. "card grid", "sticky sidebar", "form input"), then ' +
      'moonshot_guide with the returned topic for full markup and modifiers. ' +
      'All classes use the ms- prefix; brand colors are the three ' +
      '--ms-brand-* variables (see theming:brand-colors).',
  }
);

server.registerTool(
  'moonshot_guide',
  {
    title: 'Moonshot doc guide',
    description:
      'Return a section of the Moonshot CSS documentation as markdown. ' +
      'Call without a topic to get the index of available topics ' +
      '(doc:slug ids such as components:buttons or theming:brand-colors).',
    inputSchema: {
      topic: z
        .string()
        .optional()
        .describe('Topic id, e.g. "components:buttons" or bare "buttons"'),
    },
  },
  async ({ topic }) => ({
    content: [{ type: 'text', text: guide(topic) }],
  })
);

server.registerTool(
  'moonshot_search',
  {
    title: 'Search Moonshot docs',
    description:
      'Search the Moonshot CSS documentation for classes and patterns ' +
      'matching a plain-language need (e.g. "pricing table", "image cards", ' +
      '"dark mode"). Returns matching sections with class names and the ' +
      'SCSS files that define them.',
    inputSchema: {
      query: z.string().describe('What you need, in plain words'),
      limit: z
        .number()
        .int()
        .min(1)
        .max(20)
        .optional()
        .describe('Max sections to return (default 5)'),
    },
  },
  async ({ query, limit }) => ({
    content: [{ type: 'text', text: search(query, limit ?? 5) }],
  })
);

await server.connect(new StdioServerTransport());
