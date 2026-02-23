# Contributing to Moonshot CSS Framework

Thank you for your interest in contributing to Moonshot! 

## Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/moonshot-css.git
   cd moonshot-css
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server:**
   ```bash
   npm start
   # → http://localhost:8080
   ```

## Development Workflow

### Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the `src/` directory:
   - `src/abstracts/` - Variables, functions, mixins
   - `src/base/` - Reset, typography, grid
   - `src/components/` - UI components
   - `src/utilities/` - Helper classes

3. **Build and test:**
   ```bash
   npm run build
   npm run lint
   ```

4. **View your changes:**
   - Edit example pages in `examples/`
   - Test in browser at http://localhost:8080

### Code Standards

#### SCSS Style Guide

- Use **BEM naming** with `ms-` prefix: `.ms-component__element--modifier`
- Use **2 spaces** for indentation
- Use **nesting** for BEM structure:
  ```scss
  .ms-card {
    &__header { }
    &__body { }
    &--elevated { }
  }
  ```
- Use **mixins** for reusable patterns: `@include flex-center;`
- Use **functions** for values: `padding: space(4);`

#### File Organization

- **Partials** start with underscore: `_buttons.scss`
- **One component** per file
- **Import order** in `moonshot.scss`:
  1. Abstracts (variables, functions, mixins)
  2. Base (reset, typography, grid)
  3. Utilities (spacing, colors, helpers)
  4. Components (buttons, cards, etc.)

#### Naming Conventions

```scss
// ✅ Good
.ms-button { }
.ms-button--primary { }
.ms-card__header { }

// ❌ Bad
.button { }
.primaryButton { }
.cardHeader { }
```

### Design Philosophy

Moonshot follows these principles:

1. **Monochrome Base** - Use grayscale as foundation
2. **Brand Customizable** - Let users override 3 CSS variables
3. **Image Links** - Prefer visually impactful image-based components
4. **Japanese Optimized** - Support Japanese typography
5. **Lightweight** - Keep gzipped size under 15KB

### Building Components

#### Component Template

```scss
.ms-component {
  // Base styles using mixins
  @include flex-column;
  
  // Direct properties
  padding: space(4);
  
  // Elements (BEM)
  &__element {
    color: gray(700);
  }
  
  // Modifiers (BEM)
  &--variant {
    background: var(--ms-brand-primary);
  }
  
  // States
  &:hover {
    @include hover-lift;
  }
  
  // Responsive
  @include breakpoint-down('md') {
    padding: space(2);
  }
}
```

#### Using Mixins & Functions

Available mixins:
- `@include flex-center` - Flexbox center
- `@include card-base` - Card foundation
- `@include button-base` - Button foundation
- `@include breakpoint-down('md')` - Responsive
- `@include hover-lift` - Hover animation

Available functions:
- `gray(500)` - Get gray color
- `space(4)` - Get spacing value
- `font-size('xl')` - Get font size
- `radius('lg')` - Get border radius
- `shadow('md')` - Get box shadow

## Testing

1. **Visual testing:**
   - View all examples: http://localhost:8080/examples/
   - Check responsive design (resize browser)
   - Test in Chrome, Firefox, Safari

2. **Build testing:**
   ```bash
   npm run build
   # Check output sizes in terminal
   ```

3. **Lint testing:**
   ```bash
   npm run lint
   ```

## Submitting Changes

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat(buttons): add loading spinner variant"
   ```

   Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat` - New feature
   - `fix` - Bug fix
   - `docs` - Documentation only
   - `style` - Formatting, no logic change
   - `refactor` - Code change that neither fixes a bug nor adds a feature
   - `perf` - Performance improvement
   - `chore` - Build process, dependencies

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request:**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes
   - Reference any related issues

## Pull Request Guidelines

### PR Title Format

Use Conventional Commits format:

```
feat(component): add loading spinner component
fix(buttons): correct hover state on ghost variant
docs: update SCSS migration guide
```

### PR Description

Include:
- **What**: What changes were made
- **Why**: Why these changes were needed
- **Testing**: How you tested the changes
- **Screenshots**: (if UI changes)

### Review Process

1. Automated checks will run (linting, build)
2. Maintainers will review your code
3. Address any feedback
4. Once approved, your PR will be merged

## New Component Checklist

When adding a new component, ensure:

- [ ] File created as `src/components/_component-name.scss`
- [ ] Uses `@use '../abstracts' as *;` for tokens access
- [ ] BEM naming with `ms-` prefix (`.ms-component__element--modifier`)
- [ ] Uses design tokens (no hardcoded colors, spacing, or font sizes)
- [ ] Minimum 44px touch target on interactive elements
- [ ] Focus-visible styles on interactive elements (`@include focus-ring`)
- [ ] `prefers-reduced-motion` respected for animations (`@include reduced-motion`)
- [ ] Dark mode support via CSS custom properties (no hardcoded light-mode colors)
- [ ] Responsive behavior tested at all 5 breakpoints
- [ ] Registered in `src/moonshot.scss` entry point
- [ ] Example usage added or existing template updated

## Questions?

- Open an issue for bugs or feature requests
- Tag with `question` for general questions
- Check existing issues first

## Code of Conduct

- Be respectful and constructive
- Focus on the code, not the person
- Welcome newcomers
- Keep discussions on-topic

Thank you for contributing to Moonshot! 🚀

