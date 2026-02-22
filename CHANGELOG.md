# Changelog

All notable changes to Moonshot CSS Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-12-21

### 🎉 Major Release: SCSS Edition

Complete migration from pure CSS to SCSS-based architecture.

### Added
- **SCSS Architecture**: Full SCSS implementation with abstracts, base, components, utilities
- **30+ Mixins**: Reusable patterns (flex-center, card-base, button-base, etc.)
- **15+ Functions**: Smart helpers (gray(), space(), radius(), shadow(), etc.)
- **Loop-Generated Utilities**: Automated generation of 450+ utility classes
- **Image Links Component**: Visually impactful image-based link components
- **Mega Menu**: Advanced dropdown navigation component
- **7 Complete Templates**: Front page, service, blog, event, recruitment, about, brand family
- **Brand Customization Demo**: `brand-family.html` showcasing color variations

### Changed
- **Code Reduction**: 44% less code (3,900 vs 7,000 lines)
- **File Structure**: Organized into abstracts/base/components/utilities
- **Build Process**: SCSS compilation via Sass
- **Naming Convention**: Strict BEM with `ms-` prefix
- **Component Nesting**: All components use SCSS nesting

### Improved
- **Developer Experience**: Mixins and functions for rapid development
- **Maintainability**: Organized, modular SCSS structure
- **Build Speed**: Faster compilation with Sass
- **File Size**: 11.58 KB gzipped (optimized)

### Documentation
- Added `SCSS_MIGRATION_COMPLETE.md` - Complete migration guide
- Added `02_image_links_philosophy.md` - Image Links design philosophy
- Updated `README.md` - SCSS features and usage
- Added `CONTRIBUTING.md` - Contribution guidelines
- Added `CHANGELOG.md` - This file

### Removed
- Old pure CSS files (replaced by SCSS)
- Obsolete milestone documents
- Placeholder scripts
- V2 example pages (merged into main pages)

---

## [0.1.0] - 2025-12-20

### 🎊 Initial Release

First release of Moonshot CSS Framework.

### Added
- **Core Framework**: Pure CSS implementation
- **Monochrome Design**: Broken white + grayscale color system
- **CSS Variables**: Brand customization via 3 CSS variables
- **Components**: Buttons, cards, forms, navigation, hero sections
- **Utilities**: Spacing, colors, helpers (450+ classes)
- **Grid System**: Responsive CSS Grid + Flexbox hybrid
- **Typography**: Japanese + English optimized
- **7 Page Templates**: Complete page layouts for startups
- **Accessibility**: WCAG 2.1 AA compliant
- **Documentation**: Tech stack, strategy, security guidelines

### Features
- Block-based architecture (modular components)
- Zero dependencies in production
- Lightweight: <20KB minified
- Browser support: Modern browsers (last 2 versions)
- SEO-ready semantic HTML

---

## Version History

- **0.1.0** (2025-12-21) - SCSS Edition
- **0.1.0** (2025-12-20) - Initial Release

---

## Upcoming

### [0.3.0] - Planned
- [ ] Dark mode support
- [ ] Component variants expansion
- [ ] Animation library
- [ ] Storybook integration
- [ ] NPM package publishing

### [0.4.0] - Planned
- [ ] React component wrappers
- [ ] Vue component wrappers
- [ ] Theme builder CLI
- [ ] Online customizer

---

For detailed migration guides and technical documentation, see:
- [SCSS Migration Guide](docs/SCSS_MIGRATION_COMPLETE.md)
- [Tech Stack](docs/00_tech_stack.md)
- [Framework Strategy](docs/01_moonshot_css_framework_strategy.md)

