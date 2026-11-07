# Moonshot MCP Server

A stdio [MCP](https://modelcontextprotocol.io) server that lets coding agents
query this framework's documentation directly, instead of guessing class
names or hand-writing CSS.

It is intentionally thin: the data source is `docs/*.md` in the checkout the
server runs from, read once at startup. No build step, no generated index to
keep in sync — edit the docs and the next session sees the change.

## Tools

| Tool               | Arguments            | Returns                                             |
| ------------------ | -------------------- | --------------------------------------------------- |
| `moonshot_guide`   | `topic` (optional)   | One doc section as markdown; no topic → topic index |
| `moonshot_search`  | `query`, `limit?`    | Sections ranked by relevance, with classes + SCSS   |

Topic ids look like `components:buttons` or `theming:brand-colors`. `###`
subsections that share a slug (every component has an `html-example`) are
addressed as `components:cards/html-example` — `moonshot_search` always
returns the full resolvable id.

## Run

```bash
npm install        # once, for @modelcontextprotocol/sdk + zod
node mcp/server.mjs
```

Or `npm run mcp`.

## Client configuration

Any MCP client that speaks stdio can use it. Example configuration:

```json
{
  "mcpServers": {
    "moonshot": {
      "command": "node",
      "args": ["/absolute/path/to/moonshot/repo/mcp/server.mjs"]
    }
  }
}
```

The server resolves `docs/` and `src/` relative to its own location, so the
repo must be cloned (an npm-installed copy does not include `mcp/` or `docs/`).

## Intended use

When an agent builds a page on Moonshot, it should call `moonshot_search`
with the need ("card grid", "sticky sidebar", "dark mode") and
`moonshot_guide` with the returned topic before writing markup or CSS. If no
component fits, that is a signal to extend the framework — not to inline
page-level styles.
