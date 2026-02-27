# moonshot

> Source of truth: `docs/00_tech_stack.md` | Security: `docs/SECURITY_GUIDELINES.md`

## Project

- **Stack**: Node.js
- **Description**: SCSS-based CSS framework with 21 page templates for corporate/startup sites

## Commands

```sh
# Development
http-server ./ -p 8080

# Build
npm run build

# Test
(none — manual testing via examples/)

# Lint / Format
npm run lint && npm run format
```

## Process

### Phase 0: Discovery & Planning (MANDATORY)
- **Trigger**: New project, new feature, or missing documentation.
- BEFORE writing any code:
    1. Review `docs/00_tech_stack.md` and `README.md`.
    2. If empty or generic, ask user for specs.
    3. Draft Overview, Tech Stack, Key Features into `docs/00_tech_stack.md`.
    4. Create a Todo list. WAIT for user approval.

### Phase 1: Implementation
- Analyze (align with tech stack) → Security Scan → Plan → Execute.
- Keep `docs/00_tech_stack.md` updated as source of truth.
- No new packages without explicit justification and user approval.

## Session Workflow

### At Session Start
1. Read `.backlog/SESSION_LOG.md` for previous session state.
2. Read `.backlog/BACKLOG.md` to confirm current priorities.

### At Session End (Required)
1. Update `BACKLOG.md` — move completed items, add newly discovered items.
2. Append today's entry to `SESSION_LOG.md`.
3. If architectural decisions were made, record in `DECISIONS.md`.
4. Commit backlog updates separately: `docs(backlog): update session state`

## References

- Backlog: `.backlog/BACKLOG.md`
- Decisions: `.backlog/DECISIONS.md`
- Session log: `.backlog/SESSION_LOG.md`
- Security guidelines: `docs/SECURITY_GUIDELINES.md`
- Best practices: `docs/BEST_PRACTICES.md`
- Security checklist: `docs/SECURITY.md`
