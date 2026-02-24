# Project Requirements & Tech Stack

## 1. 概要 (Overview)

- **プロジェクト名**: Moonshot CSS Framework
- **目的**: Clean, Minimal, Monochrome - Brand-Customizable CSS Framework for Startup Corporate Sites
- **対象顧客**: Japanese Startup/Venture Companies (10-30 employees, 2-3 years old)
- **提供形態**: Web Development Service (Framework + Templates + Brand Theming)

## 2. 技術スタック (Tech Stack)

### Core Technologies

```
Language:          CSS3 + CSS Custom Properties (Variables)
Preprocessor:      SCSS (@use/@forward module system)
Build Tools:       Sass + esbuild
Architecture:      BEM-inspired naming, ITCSS structure
Grid System:       CSS Grid + Flexbox hybrid
Typography:        Modular Scale (1.25 ratio)
```

### Development Environment

```
Node.js:           v18+ LTS
Package Manager:   npm
Build Script:      npm scripts (no webpack/rollup)
Version Control:   Git
```

### Browser Support

```
Modern:            Last 2 versions (Chrome, Firefox, Safari, Edge)
Mobile:            iOS 12+, Android 8+
Strategy:          Progressive enhancement
```

### File Size (Actual)

```
Full Framework:    ~86KB minified (all components)
Gzipped:           ~14KB
```

## 3. 主要機能 (Key Features)

### Design System

- CSS Variables-based theming (Monochrome base + Client brand colors)
- Modular component architecture (block-based)
- Japanese + English typography optimization
- Responsive grid system
- One-line brand customization (3 CSS variables)

### Component Library

- Core: Buttons, Cards, Forms, Navigation, Hero sections
- Page-specific: Blog, Event, Team, Service, Job listings
- Utilities: Spacing, Colors, Display helpers

### Page Templates (21 Total: 18 main + 3 demo/utility)

1. Front Page (Landing)
2. Service Pages (Overview)
3. Service Detail (Individual service)
4. Case Study Detail
5. Blog (Owned media, SEO)
6. Blog Detail
7. Event Pages (Seminars, conferences)
8. Event Detail
9. Recruitment (Job listings)
10. About Us (Team, board members)
11. Brand Family (Sub-brands)
12. Demo (Lead capture)
13. Contact
14. Terms of Service
15. Privacy Policy (Legal template)
16. Client Logos Demo
17. Image Links Demo
18. Index (Template gallery)
19. Flow Demo
20. News
21. News Detail

### Developer Experience

- Zero-config quick start
- BEM-inspired naming convention (`ms-*` prefix)
- Copy-paste ready examples
- Self-contained (no external dependencies)

## 4. セキュリティ要件 (Security Requirements)

- CSP compatible (no inline styles)
- Zero production dependencies
- SRI hashes for CDN distribution
- npm audit: 0 vulnerabilities
- Self-hosting recommended

## 5. ファイル構成 (Project Structure)

```
moonshot/
├── src/                    # Source files (SCSS)
│   ├── abstracts/         # Variables, functions, mixins
│   ├── base/              # Reset, typography, grid
│   ├── components/        # UI components
│   ├── utilities/         # Utility classes
│   └── moonshot.scss      # Main entry point
├── dist/                   # Built CSS + JS files
│   ├── moonshot.css
│   ├── moonshot.min.css
│   ├── moonshot.js
│   └── moonshot.min.js
├── examples/               # 21 HTML page templates
├── docs/                   # Documentation
└── scripts/                # Build scripts
```

## 6. 命名規則 (Naming Conventions)

### CSS Classes (BEM-inspired)

```css
.ms-button              /* Block */
.ms-button--primary     /* Modifier */
.ms-card__header        /* Element */
```

### File Naming

```
kebab-case.css          /* CSS/SCSS files */
kebab-case.html         /* Example files */
UPPERCASE.md            /* Documentation */
```

## 7. Todo

### Phase 1: Foundation

- [x] Strategy document
- [x] Tech stack definition
- [x] Setup build pipeline
- [x] Create core CSS (reset, variables, typography, grid)

### Phase 2: Components

- [x] Essential components (buttons, cards, forms, navigation)
- [x] Hero sections
- [x] Page-specific components (image-links, client-logos)

### Phase 3: Templates

- [x] 14 page type HTML templates
- [x] Component reference documentation
- [x] Example implementations

### Phase 4: Release

- [ ] Browser testing (cross-browser QA pending)
- [x] Accessibility improvements (skip links, form labels, ARIA)
- [x] SEO optimization (meta tags, OG, JSON-LD structured data)
- [x] SCSS modernization (@use/@forward, zero deprecation warnings)
- [ ] Security audit (pre-release blocker)
