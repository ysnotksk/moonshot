# Moonshot CSS Framework

**Clean, Minimal, Monochrome - Handy CSS Framework for Startups**

## Overview

Moonshot is a modular, block-based CSS framework designed specifically for Japanese startup and venture company corporate websites. Built with a "clean, minimal, monochrome" design philosophy and instant brand customization via CSS Variables, Moonshot enables rapid deployment of high-quality corporate sites with optimized Japanese typography and SEO-ready structure.

## Features

### Design & Architecture

- **Block-based Architecture** - Mix and match components like LEGO blocks
- **Monochrome Base** - Timeless broken white + grayscale foundation
- **Dark Mode Support** - Opt-in dark mode via `data-theme="dark"` attribute
- **Brand Customizable** - One-line theming with CSS Variables
- **Image Links Philosophy** - Impactful, visually-driven UI components
- **Japanese Optimized** - Typography and layouts tuned for Japanese content

### Technical

- **SCSS Powered** - Modern `@use`/`@forward` module system, zero deprecation warnings
- **Lightweight** - ~14 KB gzipped, ~86 KB minified
- **30+ Mixins** - Reusable patterns for rapid development
- **15+ Functions** - Smart helpers (`gray()`, `space()`, `radius()`, etc.)
- **Zero Config** - Drop in and start building immediately

### Content & Templates

- **18 Page Templates** - Front, Service, Service Detail, Case Study, Blog, Event, Recruitment, About, Demo, Contact, and more
- **40+ Components** - Buttons, cards, forms, navigation, hero, image-links, accordion, pricing, testimonials
- **SEO Ready** - Semantic HTML5, Open Graph tags, JSON-LD structured data
- **WCAG 2.1 AA** - Skip navigation, form labels, focus-visible styles

## Quick Start

### CDN (fastest)

```html
<link rel="stylesheet" href="https://unpkg.com/moonshot-css/dist/moonshot.min.css" />
```

### NPM

```bash
npm install moonshot-css
```

### HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site</title>
    <link rel="stylesheet" href="dist/moonshot.min.css" />
  </head>
  <body>
    <a href="#main-content" class="ms-skip-link">Skip to main content</a>
    <main id="main-content">
      <!-- Your content here -->
    </main>
    <script src="dist/moonshot.min.js"></script>
  </body>
</html>
```

See the [Getting Started Guide](docs/GETTING_STARTED.md) for a complete walkthrough.

## Brand Customization

Override just 3 CSS variables to match your brand:

```css
:root {
  --ms-brand-primary: #2563eb;
  --ms-brand-secondary: #3b82f6;
  --ms-brand-accent: #1d4ed8;
}
```

See the [Theming Guide](docs/THEMING.md) for the full list of customizable properties.

## Development

### Setup

```bash
git clone https://github.com/ysnotksk/moonshot.git
cd moonshot
npm install
npm start
# -> http://localhost:8080
```

### Build

```bash
npm run build       # Full build (CSS + JS + size report)
npm run build:css   # SCSS -> CSS only
npm run watch       # Watch mode for development
```

### Linting & Formatting

```bash
npm run lint        # Lint SCSS (with auto-fix)
npm run format      # Format with Prettier
```

## Project Structure

```
moonshot/
├── src/                          # Source SCSS files
│   ├── abstracts/               # Variables, functions, mixins
│   │   ├── _index.scss         # Module forwarding entry point
│   │   ├── _variables.scss     # Sass maps + CSS Custom Properties
│   │   ├── _functions.scss     # Utility functions
│   │   └── _mixins.scss        # Reusable patterns
│   ├── base/                    # Foundation styles
│   │   ├── _reset.scss         # Modern CSS reset
│   │   ├── _typography.scss    # Japanese + English typography
│   │   └── _grid.scss          # Grid system
│   ├── components/              # UI components
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _forms.scss
│   │   ├── _navigation.scss
│   │   ├── _hero.scss
│   │   ├── _image-links.scss
│   │   ├── _client-logos.scss
│   │   ├── _accordion.scss
│   │   ├── _pricing.scss
│   │   └── _testimonials.scss
│   ├── utilities/               # Loop-generated utilities
│   │   ├── _spacing.scss
│   │   ├── _colors.scss
│   │   └── _helpers.scss
│   └── moonshot.scss            # Main entry point
├── dist/                         # Built CSS (production-ready)
│   ├── moonshot.css             # Uncompressed (~111 KB)
│   └── moonshot.min.css         # Compressed (~86 KB, ~14 KB gzipped)
├── examples/                     # 18 HTML page templates
├── docs/                         # Documentation
└── scripts/                      # Build scripts
```

## Documentation

- [Getting Started](docs/GETTING_STARTED.md) - Installation and first page
- [Component Reference](docs/COMPONENTS.md) - All classes and modifiers
- [Theming Guide](docs/THEMING.md) - CSS custom properties and brand customization
- [Framework Strategy](docs/01_moonshot_css_framework_strategy.md) - Design philosophy
- [Image Links Philosophy](docs/02_image_links_philosophy.md) - Visual design approach
- [Tech Stack](docs/00_tech_stack.md) - Technical specifications

## SCSS Features

**Mixins:**

```scss
@use 'moonshot/abstracts' as *;

@include flex-center;
@include card-base;
@include breakpoint-down('md') {
  /* mobile styles */
}
```

**Functions:**

```scss
color: gray(500);
padding: space(4);
border-radius: radius('lg');
```

**Nesting:**

```scss
.ms-card {
  &__header {
  }
  &__body {
  }
  &--elevated {
    &:hover {
    }
  }
}
```

## Browser Support

- **Chrome/Edge**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Mobile**: iOS Safari 14+, Chrome Android 90+

## Contributing

See the [Contributing Guide](CONTRIBUTING.md) for development workflow, code standards, and how to submit pull requests.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Resources

- **Live Demo**: Open `examples/index.html` to browse all templates
- **Components Demo**: `examples/image-links-demo.html`
- **Brand Customization**: `examples/brand-family.html`
