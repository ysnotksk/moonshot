# AGENTS.md

## For coding agents building pages on Moonshot

Before writing custom CSS or inventing class names, query the framework's own
documentation — guessing is the main source of drift.

1. If the `moonshot` MCP server is configured, call `moonshot_search` with the
   need ("card grid", "sticky sidebar", "dark mode") and `moonshot_guide`
   with the returned topic id. See `docs/MCP.md`.
2. Otherwise read `docs/COMPONENTS.md` (full class reference) and
   `docs/THEMING.md` (CSS variables) directly.
3. All classes use the `ms-` prefix with BEM naming. Brand colors are only the
   three `--ms-brand-*` variables — do not hard-code colors.
4. If no component fits the need, extend `src/` (SCSS, BEM) rather than
   adding page-level CSS.

## Repo conventions

- SCSS source in `src/`; `dist/` is built output, never hand-edit.
- `npm run build` regenerates dist + examples; `npm run lint` is stylelint.
