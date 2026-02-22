# Moonshot CSS Framework - Strategy Document

## 1. Target (対象)

### Product Definition
- **Name**: Moonshot CSS Framework
- **Tagline**: "Clean, Minimal, Monochrome - Handy CSS Framework for Startups"
- **Product Type**: Modular, Brand-Customizable CSS Framework for Corporate Websites

### Target Customer Profile
- **Primary**: Japanese Startup/Venture Companies
- **Company Size**: 10-30 employees
- **Stage**: 2-3 years since establishment
- **Industry**: Internet Services, Consulting, SaaS
- **Brand Strategy**: Main brand + sub-brand family development
- **Services**: 2-5 customer-facing services

### Target Developers
- **Primary**: Web developers/agencies serving startup clients
- **Skill Level**: Intermediate (familiar with HTML/CSS basics)
- **Use Case**: Quick corporate site deployment (1-2 weeks timeline)
- **Priority**: Speed, maintainability, brand consistency

---

## 2. Strategy (戦略)

### Business Model
**Service Offering**: Web development service using Moonshot Framework
- Provide framework as part of web development package
- Enable rapid deployment for startup corporate sites
- Support multi-brand strategy (main + sub-brands)

### Design Philosophy: "Clean, Minimal, Monochrome"

#### Core Principles
1. **Clean**: 
   - Generous whitespace
   - Clear visual hierarchy
   - Distraction-free layouts
   
2. **Minimal**:
   - No unnecessary decorations
   - Essential components only
   - Lightweight footprint (<20KB core)
   
3. **Monochrome Base**:
   - Broken white + grayscale foundation
   - Timeless, professional aesthetic
   - Universal compatibility across industries
   - Client brand colors via CSS Variables
   
4. **Brand Customizable**:
   - Plug-and-play brand color injection
   - CSS Variables for instant theming
   - Preserves monochrome structure
   - Support 1-3 brand colors per client
   
5. **Modular & Block-based**:
   - Components work independently
   - Mix-and-match like LEGO blocks
   - Tree-shakeable architecture
   
6. **Handy Tool**:
   - Zero configuration quick start
   - Intuitive class naming
   - Copy-paste ready examples

### Required Page Types (7 Categories)

| Page Type | Purpose | Key Components |
|-----------|---------|----------------|
| **Front Page** | High-impact landing, index navigation | Hero, CTA, Feature Grid, Brand Story |
| **Service Pages** | 2-5 service showcases | Service Hero, Feature List, Pricing, Case Study |
| **Blog** | Owned media, SEO content | Article Layout, Sidebar, Tag System, Author Bio |
| **Event Pages** | Seminar/conference pages (quarterly) | Event Hero, Schedule, Speaker Cards, Registration Form |
| **Recruitment** | Job listings, hiring | Job List, Benefits, Culture, Application Form |
| **About Us** | Team, board members, stakeholders | Team Grid, Leadership Profiles, Company Timeline |
| **Brand Family** | Sub-brand showcase | Brand Cards, Visual Identity Grid |

### Key Features

#### 1. Visual Excellence
- **High-quality image support**: Hero sections, service showcases
- **Typography**: Japanese + English optimized font stacks
- **Iconography**: Built-in icon system (SVG-based)

#### 2. SEO Optimization
- Semantic HTML5 structure
- Microdata/JSON-LD support for structured data
- Optimized heading hierarchy
- Performance-first (fast loading)

#### 3. Brand Customization
- **Monochrome Base**: Broken white + 9-step grayscale
- **Client Brand Colors**: 1-3 brand colors via CSS Variables (primary/secondary/accent)
- **One-line theming**: Override 3 variables for instant brand application
- **Typography scale system**: Modular scale preserved across themes
- **Spacing system**: Consistent regardless of color customization

#### 4. Japanese Market Optimization
- Vertical rhythm for Japanese text
- Proper line-height for Kanji/Hiragana mix
- Japanese web font recommendations
- Mobile-first (Japanese users are mobile-heavy)

---

## 3. Tech Stack (技術スタック)

### Core Technologies
```
Base Language:     Pure CSS3 + CSS Custom Properties (Variables)
Preprocessor:      SCSS (for development/customization)
Build Tool:        PostCSS (autoprefixer, minification)
Architecture:      BEM-inspired naming, ITCSS structure
Grid System:       CSS Grid + Flexbox hybrid
Typography:        Modular Scale (1.25 ratio)
```

### Browser Support
```
Modern Browsers:   Last 2 versions (Chrome, Firefox, Safari, Edge)
Mobile:            iOS 12+, Android 8+
Fallbacks:         Progressive enhancement approach
```

### File Structure
```
moonshot/
├── src/
│   ├── core/
│   │   ├── reset.css          # Normalize/reset
│   │   ├── variables.css      # CSS Custom Properties
│   │   ├── typography.css     # Type system
│   │   └── grid.css          # Layout system
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── navigation.css
│   │   ├── hero.css
│   │   └── [component].css
│   ├── utilities/
│   │   ├── spacing.css       # Margin/padding utilities
│   │   ├── colors.css        # Color utilities
│   │   └── helpers.css       # Display/alignment helpers
│   └── themes/
│       ├── default.css       # Green theme (default)
│       └── custom.css        # Customization template
├── dist/
│   ├── moonshot.css          # Full build
│   ├── moonshot.min.css      # Minified
│   └── moonshot-core.css     # Core only (no components)
└── examples/
    ├── front-page.html
    ├── service-page.html
    ├── blog.html
    └── [page-type].html
```

### Naming Convention (BEM-inspired)
```css
/* Block */
.ms-button { }

/* Block + Modifier */
.ms-button--primary { }
.ms-button--large { }

/* Block + Element */
.ms-card__header { }
.ms-card__body { }

/* Namespace: "ms" = Moonshot */
```

### Size Targets
```
Core (reset + variables + grid):  ~5KB minified
Full Framework:                   ~18KB minified
Gzipped:                         ~6KB
```

---

## 4. Security (セキュリティ)

### Threat Model
**Attack Surface**: Minimal (pure CSS, no JavaScript in core)

### Security Measures

#### 1. Content Security Policy (CSP) Compatibility
```
No inline styles dependency
No external resource loading (self-contained)
Compatible with strict CSP: style-src 'self'
```

#### 2. XSS Prevention
```
Pure CSS: No JavaScript injection vectors
No data attributes with user content
No CSS expression() or behavior() (legacy IE issues)
```

#### 3. Supply Chain Security
```
Development:
  - Pin all npm dependencies (package-lock.json)
  - Run npm audit before release
  - No external CDN dependencies in core

Distribution:
  - Provide SRI (Subresource Integrity) hashes
  - Self-hosting recommended for production
  - CDN option with integrity checks
```

#### 4. Privacy
```
No tracking/analytics in framework
No external font loading by default (GDPR compliance)
No third-party resources
```

#### 5. Dependency Management
```yaml
Development Dependencies Only:
  - autoprefixer: ^10.x (PostCSS plugin)
  - cssnano: ^6.x (Minification)
  - sass: ^1.x (SCSS compilation)
  
Production Dependencies: NONE (pure CSS output)
```

### Security Checklist for Releases
- [ ] npm audit shows 0 vulnerabilities
- [ ] All dependencies pinned to specific versions
- [ ] SRI hashes generated for CDN files
- [ ] CSP compatibility tested
- [ ] No external resource loading in core
- [ ] Source maps removed from production build

---

## 5. Implementation Phases

### Phase 1: Core Foundation (Week 1)
- [ ] Setup build pipeline (SCSS → PostCSS → CSS)
- [ ] Reset/Normalize
- [ ] CSS Variables system (colors, spacing, typography)
- [ ] Typography system
- [ ] Grid system (CSS Grid + Flexbox)
- [ ] Utility classes

### Phase 2: Essential Components (Week 2)
- [ ] Buttons (primary, secondary, outline, ghost)
- [ ] Cards (basic, image, hover effects)
- [ ] Forms (inputs, textarea, select, checkbox, radio)
- [ ] Navigation (header, footer, breadcrumb)
- [ ] Hero sections (full-width, split, video background)

### Phase 3: Page-Specific Components (Week 3)
- [ ] Blog components (article layout, sidebar, author bio)
- [ ] Event components (schedule, speaker cards)
- [ ] Team components (team grid, profile cards)
- [ ] Service components (feature list, pricing table)
- [ ] Job listing components

### Phase 4: Polish & Documentation (Week 4)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Browser testing
- [ ] Performance optimization
- [ ] Documentation site
- [ ] Example templates for all 7 page types

---

## 6. Success Metrics

### Technical Metrics
- [ ] Core size: <5KB minified
- [ ] Full framework: <20KB minified
- [ ] Lighthouse Performance Score: >90
- [ ] WCAG 2.1 AA compliance: 100%
- [ ] Browser support: Last 2 versions verified

### Business Metrics
- [ ] Time to deploy corporate site: <2 weeks
- [ ] Developer onboarding time: <1 hour
- [ ] Client customization time: <1 day (color/fonts)
- [ ] Code reusability: >80% across projects

---

## 7. Competitive Analysis

### Positioning
```
Tailwind CSS:      Utility-first (too granular for quick deployment)
Bootstrap:         Heavy, outdated aesthetic for startups
Bulma:             Good but no Japanese optimization
Foundation:        Enterprise-focused, too complex

Moonshot:          ✓ Component-focused (balanced)
                   ✓ Startup aesthetic (modern, clean)
                   ✓ Japanese market optimized
                   ✓ Lightweight (<20KB)
                   ✓ Block-based modularity
```

### Unique Value Propositions
1. **Monochrome + Brand-customizable** (professional base, instant client branding)
2. **Japanese typography optimization** (vertical rhythm, font stacks)
3. **Startup page templates** (7 essential page types included)
4. **Block-based modularity** (LEGO-like component assembly)
5. **Zero-config start** (handy tool philosophy)
6. **One-line theming** (change 3 CSS variables = new brand)

---

## Appendix: Color System Strategy (Monochrome + Customizable)

### Base Palette (Monochrome Foundation)

#### Broken White
```css
--ms-white:     #fafafa;  /* Softer than pure white */
--ms-bg:        #ffffff;  /* Pure white for contrast */
```

#### Grayscale (9-step scale)
```css
--ms-gray-50:   #f9fafb;  /* Lightest backgrounds */
--ms-gray-100:  #f3f4f6;  /* Subtle backgrounds */
--ms-gray-200:  #e5e7eb;  /* Borders, dividers */
--ms-gray-300:  #d1d5db;  /* Disabled states */
--ms-gray-400:  #9ca3af;  /* Placeholders */
--ms-gray-500:  #6b7280;  /* Secondary text */
--ms-gray-600:  #4b5563;  /* Body text */
--ms-gray-700:  #374151;  /* Headings */
--ms-gray-800:  #1f2937;  /* Primary text */
--ms-gray-900:  #111827;  /* Maximum contrast */
```

### Brand Color Injection (Client Customizable)

Framework provides **semantic slots** that clients override:

```css
/* Default (Neutral) */
:root {
  --ms-brand-primary:   #374151;   /* Gray-700 fallback */
  --ms-brand-secondary: #6b7280;   /* Gray-500 fallback */
  --ms-brand-accent:    #1f2937;   /* Gray-800 fallback */
}

/* Client Theme Example (Blue Brand) */
:root {
  --ms-brand-primary:   #2563eb;   /* Client blue */
  --ms-brand-secondary: #3b82f6;   /* Lighter blue */
  --ms-brand-accent:    #1e40af;   /* Darker blue */
}

/* Client Theme Example (Red Brand) */
:root {
  --ms-brand-primary:   #dc2626;   /* Client red */
  --ms-brand-secondary: #ef4444;   /* Lighter red */
  --ms-brand-accent:    #b91c1c;   /* Darker red */
}
```

### Semantic Color Mapping

```css
/* Interactive Elements */
--ms-btn-primary-bg:    var(--ms-brand-primary);
--ms-btn-primary-hover: var(--ms-brand-accent);
--ms-link-color:        var(--ms-brand-primary);
--ms-link-hover:        var(--ms-brand-accent);

/* Status Colors (Fixed, not customizable) */
--ms-success:  #10b981;  /* Green for success states */
--ms-error:    #ef4444;  /* Red for errors */
--ms-warning:  #f59e0b;  /* Amber for warnings */
--ms-info:     #3b82f6;  /* Blue for info */
```

### Usage Philosophy

**Monochrome-first Design**:
- 90% of UI uses grayscale
- Brand colors used **sparingly** for:
  - Primary CTAs (buttons, links)
  - Active/focus states
  - Brand accents (underlines, borders)
  - Strategic emphasis points

**Benefits**:
- Timeless, professional base
- Client brand stands out (not competing with framework colors)
- Works with any brand color palette
- Accessible contrast ratios maintained

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-21  
**Status**: ✅ Approved - Ready for Implementation

