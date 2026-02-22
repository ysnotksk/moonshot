# Theming & Customization Guide

How to customize the Moonshot CSS Framework's visual design through CSS custom properties and SCSS variable overrides.

---

## Overview

Moonshot's design system is built on CSS custom properties (variables) defined in `:root`. Every color, spacing value, font size, shadow, and radius is a variable you can override. This means you can re-theme the entire framework without modifying source files.

There are two approaches:

1. **CSS custom property overrides** -- Override variables in your stylesheet. No build step required.
2. **SCSS variable overrides** -- Override Sass maps before compiling. Requires a build step but gives full control.

---

## CSS Custom Properties Reference

All properties use the `--ms-` prefix. Below is the complete list organized by category.

### Brand Colors

The primary customization point. These three variables control buttons, links, badges, and all accent elements.

| Property               | Default              | Description                |
| ---------------------- | -------------------- | -------------------------- |
| `--ms-brand-primary`   | `#374151` (gray-700) | Primary brand color        |
| `--ms-brand-secondary` | `#6b7280` (gray-500) | Secondary brand color      |
| `--ms-brand-accent`    | `#1f2937` (gray-800) | Accent / hover state color |

### Base Colors

| Property     | Default   | Description     |
| ------------ | --------- | --------------- |
| `--ms-white` | `#fafafa` | Base white      |
| `--ms-bg`    | `#ffffff` | Page background |

### Gray Scale

| Property        | Default   |
| --------------- | --------- |
| `--ms-gray-50`  | `#f9fafb` |
| `--ms-gray-100` | `#f3f4f6` |
| `--ms-gray-200` | `#e5e7eb` |
| `--ms-gray-300` | `#d1d5db` |
| `--ms-gray-400` | `#9ca3af` |
| `--ms-gray-500` | `#6b7280` |
| `--ms-gray-600` | `#4b5563` |
| `--ms-gray-700` | `#374151` |
| `--ms-gray-800` | `#1f2937` |
| `--ms-gray-900` | `#111827` |

### Status Colors

| Property       | Default   | Description         |
| -------------- | --------- | ------------------- |
| `--ms-success` | `#10b981` | Success / positive  |
| `--ms-error`   | `#ef4444` | Error / destructive |
| `--ms-warning` | `#f59e0b` | Warning / caution   |
| `--ms-info`    | `#3b82f6` | Informational       |

### Semantic Colors

These reference other variables and adapt automatically when `data-theme="dark"` is set.

| Property              | Light Mode Value     | Description               |
| --------------------- | -------------------- | ------------------------- |
| `--ms-text-primary`   | `var(--ms-gray-900)` | Primary text              |
| `--ms-text-secondary` | `var(--ms-gray-600)` | Secondary text            |
| `--ms-text-tertiary`  | `var(--ms-gray-500)` | Tertiary text             |
| `--ms-text-disabled`  | `var(--ms-gray-400)` | Disabled text             |
| `--ms-text-on-brand`  | `var(--ms-white)`    | Text on brand backgrounds |
| `--ms-bg-primary`     | `var(--ms-bg)`       | Primary background        |
| `--ms-bg-secondary`   | `var(--ms-gray-50)`  | Secondary background      |
| `--ms-bg-tertiary`    | `var(--ms-gray-100)` | Tertiary background       |
| `--ms-bg-disabled`    | `var(--ms-gray-200)` | Disabled background       |
| `--ms-border-light`   | `var(--ms-gray-200)` | Light borders             |
| `--ms-border-medium`  | `var(--ms-gray-300)` | Medium borders            |
| `--ms-border-dark`    | `var(--ms-gray-400)` | Dark borders              |

### Typography

#### Font Families

| Property         | Default                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `--ms-font-sans` | `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`              |
| `--ms-font-ja`   | `'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', 'Yu Gothic', 'YuGothic', 'Meiryo', sans-serif` |
| `--ms-font-mono` | `'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace`                       |

#### Font Sizes

| Property         | Value      |
| ---------------- | ---------- |
| `--ms-text-xs`   | `0.75rem`  |
| `--ms-text-sm`   | `0.875rem` |
| `--ms-text-base` | `1rem`     |
| `--ms-text-lg`   | `1.125rem` |
| `--ms-text-xl`   | `1.25rem`  |
| `--ms-text-2xl`  | `1.5rem`   |
| `--ms-text-3xl`  | `1.875rem` |
| `--ms-text-4xl`  | `2.25rem`  |
| `--ms-text-5xl`  | `3rem`     |
| `--ms-text-6xl`  | `3.75rem`  |

#### Font Weights

| Property             | Value |
| -------------------- | ----- |
| `--ms-font-normal`   | `400` |
| `--ms-font-medium`   | `500` |
| `--ms-font-semibold` | `600` |
| `--ms-font-bold`     | `700` |

#### Line Heights

| Property               | Value   |
| ---------------------- | ------- |
| `--ms-leading-none`    | `1`     |
| `--ms-leading-tight`   | `1.25`  |
| `--ms-leading-snug`    | `1.375` |
| `--ms-leading-normal`  | `1.5`   |
| `--ms-leading-relaxed` | `1.625` |
| `--ms-leading-loose`   | `2`     |

#### Letter Spacing

| Property                | Value      |
| ----------------------- | ---------- |
| `--ms-tracking-tighter` | `-0.05em`  |
| `--ms-tracking-tight`   | `-0.025em` |
| `--ms-tracking-normal`  | `0`        |
| `--ms-tracking-wide`    | `0.025em`  |
| `--ms-tracking-wider`   | `0.05em`   |
| `--ms-tracking-widest`  | `0.1em`    |

### Spacing

| Property        | Value     |
| --------------- | --------- |
| `--ms-space-0`  | `0`       |
| `--ms-space-1`  | `0.25rem` |
| `--ms-space-2`  | `0.5rem`  |
| `--ms-space-3`  | `0.75rem` |
| `--ms-space-4`  | `1rem`    |
| `--ms-space-5`  | `1.25rem` |
| `--ms-space-6`  | `1.5rem`  |
| `--ms-space-8`  | `2rem`    |
| `--ms-space-10` | `2.5rem`  |
| `--ms-space-12` | `3rem`    |
| `--ms-space-16` | `4rem`    |
| `--ms-space-20` | `5rem`    |
| `--ms-space-24` | `6rem`    |
| `--ms-space-32` | `8rem`    |

### Max Widths (Containers)

| Property              | Value    |
| --------------------- | -------- |
| `--ms-max-width-sm`   | `640px`  |
| `--ms-max-width-md`   | `768px`  |
| `--ms-max-width-lg`   | `1024px` |
| `--ms-max-width-xl`   | `1280px` |
| `--ms-max-width-2xl`  | `1440px` |
| `--ms-max-width-full` | `100%`   |

### Border Radius

| Property           | Value     |
| ------------------ | --------- |
| `--ms-radius-none` | `0`       |
| `--ms-radius-sm`   | `0.25rem` |
| `--ms-radius-base` | `0.5rem`  |
| `--ms-radius-md`   | `0.75rem` |
| `--ms-radius-lg`   | `1rem`    |
| `--ms-radius-xl`   | `1.5rem`  |
| `--ms-radius-2xl`  | `2rem`    |
| `--ms-radius-3xl`  | `3rem`    |
| `--ms-radius-full` | `9999px`  |

### Border Widths

| Property              | Value |
| --------------------- | ----- |
| `--ms-border-width-0` | `0`   |
| `--ms-border-width-1` | `1px` |
| `--ms-border-width-2` | `2px` |
| `--ms-border-width-4` | `4px` |

### Shadows

| Property           | Value                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| `--ms-shadow-sm`   | `0 1px 2px 0 rgb(0 0 0 / 5%)`                                         |
| `--ms-shadow-base` | `0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)`           |
| `--ms-shadow-md`   | `0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)`     |
| `--ms-shadow-lg`   | `0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)`   |
| `--ms-shadow-xl`   | `0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)` |
| `--ms-shadow-2xl`  | `0 25px 50px -12px rgb(0 0 0 / 25%)`                                  |
| `--ms-shadow-none` | `0 0 #00000000`                                                       |

### Transitions

| Property               | Value                                |
| ---------------------- | ------------------------------------ |
| `--ms-transition-fast` | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ms-transition-base` | `250ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ms-transition-slow` | `350ms cubic-bezier(0.4, 0, 0.2, 1)` |

### Z-Index Scale

| Property          | Value  |
| ----------------- | ------ |
| `--ms-z-0`        | `0`    |
| `--ms-z-10`       | `10`   |
| `--ms-z-20`       | `20`   |
| `--ms-z-30`       | `30`   |
| `--ms-z-40`       | `40`   |
| `--ms-z-50`       | `50`   |
| `--ms-z-dropdown` | `1000` |
| `--ms-z-sticky`   | `1020` |
| `--ms-z-fixed`    | `1030` |
| `--ms-z-modal`    | `1040` |
| `--ms-z-popover`  | `1050` |
| `--ms-z-tooltip`  | `1060` |

---

## Creating a Custom Brand Theme

To create a custom theme, override `:root` variables in your own stylesheet loaded after Moonshot.

### Minimal Brand Override

The fastest way. Override just the brand colors.

```css
:root {
  --ms-brand-primary: #2563eb;
  --ms-brand-secondary: #3b82f6;
  --ms-brand-accent: #1d4ed8;
}
```

### Extended Theme Override

For more control, override additional variables.

```css
:root {
  /* Brand */
  --ms-brand-primary: #2563eb;
  --ms-brand-secondary: #3b82f6;
  --ms-brand-accent: #1d4ed8;

  /* Typography */
  --ms-font-sans: 'Inter', system-ui, sans-serif;

  /* Borders - sharper corners */
  --ms-radius-md: 0.375rem;
  --ms-radius-lg: 0.5rem;
  --ms-radius-xl: 0.75rem;

  /* Shadows - more pronounced */
  --ms-shadow-md: 0 4px 12px -2px rgb(0 0 0 / 15%), 0 2px 6px -1px rgb(0 0 0 / 10%);
}
```

---

## Dark Mode Customization

### How Dark Mode Works

Moonshot defaults to light mode. Dark mode is opt-in via the `data-theme="dark"` attribute on the `<html>` element.

To auto-detect the user's OS preference, add this snippet:

```html
<script>
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
</script>
```

In dark mode, the gray scale is inverted (gray-50 becomes dark, gray-900 becomes light), backgrounds darken, and shadows are strengthened.

### Customizing Dark Mode Colors

Override the dark mode tokens using the `[data-theme='dark']` selector.

```css
/* Custom dark mode brand colors */
[data-theme='dark'] {
  --ms-brand-primary: #60a5fa; /* Lighter blue for dark backgrounds */
  --ms-brand-secondary: #93c5fd;
  --ms-brand-accent: #3b82f6;
}
```

### Dark Mode Token Reference

These are the values applied in dark mode. All semantic colors automatically re-resolve because they reference the gray scale variables.

| Property        | Dark Mode Value |
| --------------- | --------------- |
| `--ms-white`    | `#ffffff`       |
| `--ms-bg`       | `#0a0a0a`       |
| `--ms-gray-50`  | `#1a1a1a`       |
| `--ms-gray-100` | `#262626`       |
| `--ms-gray-200` | `#333333`       |
| `--ms-gray-300` | `#404040`       |
| `--ms-gray-400` | `#737373`       |
| `--ms-gray-500` | `#a3a3a3`       |
| `--ms-gray-600` | `#d4d4d4`       |
| `--ms-gray-700` | `#e5e5e5`       |
| `--ms-gray-800` | `#f5f5f5`       |
| `--ms-gray-900` | `#fafafa`       |

Shadows are also strengthened in dark mode (higher opacity values).

---

## SCSS Variable Overrides

For developers who import the Moonshot SCSS source, you can override Sass maps at build time.

### Overriding Sass Maps

Override variables before importing the framework using the `@use ... with` syntax.

```scss
// my-theme.scss
@use 'moonshot-css/src/abstracts/variables' with (
  $colors-brand: (
    'primary': #2563eb,
    'secondary': #3b82f6,
    'accent': #1d4ed8,
  ),
  $font-families: (
    'sans': (
      'Inter',
      system-ui,
      sans-serif,
    ),
    'ja': (
      'Noto Sans JP',
      'Hiragino Sans',
      sans-serif,
    ),
    'mono': (
      'JetBrains Mono',
      'SF Mono',
      monospace,
    ),
  ),
  $radii: (
    'none': 0,
    'sm': 0.125rem,
    'base': 0.25rem,
    'md': 0.375rem,
    'lg': 0.5rem,
    'xl': 0.75rem,
    '2xl': 1rem,
    '3xl': 1.5rem,
    'full': 9999px,
  )
);

@use 'moonshot-css/src/moonshot';
```

### Available Sass Maps

| Map                | Controls                                      |
| ------------------ | --------------------------------------------- |
| `$colors-brand`    | Brand colors (primary, secondary, accent)     |
| `$colors-gray`     | Gray scale (50-900)                           |
| `$colors-status`   | Status colors (success, error, warning, info) |
| `$colors-white`    | Base white values                             |
| `$font-families`   | Font stacks (sans, ja, mono)                  |
| `$font-sizes`      | Type scale (xs through 6xl)                   |
| `$font-weights`    | Weight names (normal, medium, semibold, bold) |
| `$line-heights`    | Line height scale                             |
| `$letter-spacings` | Tracking scale                                |
| `$spacings`        | Spacing scale (0 through 32)                  |
| `$breakpoints`     | Responsive breakpoints                        |
| `$max-widths`      | Container max-widths                          |
| `$radii`           | Border radius scale                           |
| `$shadows`         | Shadow scale                                  |
| `$transitions`     | Transition presets                            |
| `$z-indices`       | Z-index scale                                 |
| `$border-widths`   | Border width scale                            |

### Using SCSS Functions

Moonshot provides helper functions for accessing design tokens in your own SCSS:

```scss
@use 'moonshot-css/src/abstracts' as *;

.my-component {
  color: gray(700);
  padding: space(4) space(6);
  font-size: font-size('lg');
  border-radius: radius('md');
  box-shadow: shadow('md');
  z-index: z('modal');
}
```

### Using SCSS Mixins

```scss
@use 'moonshot-css/src/abstracts' as *;

.my-component {
  @include flex-center;
  @include card-base;
  @include transition(background-color, color);

  @include breakpoint-down('md') {
    flex-direction: column;
  }
}
```

---

## Example Themes

### Tech Startup

A modern blue theme with tight corners.

```css
:root {
  /* Brand */
  --ms-brand-primary: #2563eb;
  --ms-brand-secondary: #3b82f6;
  --ms-brand-accent: #1d4ed8;

  /* Tighter radius for a technical feel */
  --ms-radius-md: 0.375rem;
  --ms-radius-lg: 0.5rem;
  --ms-radius-xl: 0.75rem;
  --ms-radius-2xl: 1rem;
}

/* Dark mode adjustments */
[data-theme='dark'] {
  --ms-brand-primary: #60a5fa;
  --ms-brand-secondary: #93c5fd;
  --ms-brand-accent: #3b82f6;
}
```

### Creative Agency

A bold purple theme with generous rounding.

```css
:root {
  /* Brand */
  --ms-brand-primary: #7c3aed;
  --ms-brand-secondary: #8b5cf6;
  --ms-brand-accent: #6d28d9;

  /* Generous radius for a playful feel */
  --ms-radius-md: 1rem;
  --ms-radius-lg: 1.5rem;
  --ms-radius-xl: 2rem;
  --ms-radius-2xl: 3rem;

  /* Custom font */
  --ms-font-sans: 'DM Sans', system-ui, sans-serif;

  /* Softer shadows */
  --ms-shadow-md: 0 8px 24px -4px rgb(124 58 237 / 15%), 0 4px 8px -2px rgb(124 58 237 / 8%);
  --ms-shadow-lg: 0 16px 40px -8px rgb(124 58 237 / 20%), 0 8px 16px -4px rgb(124 58 237 / 10%);
}

/* Dark mode adjustments */
[data-theme='dark'] {
  --ms-brand-primary: #a78bfa;
  --ms-brand-secondary: #c4b5fd;
  --ms-brand-accent: #8b5cf6;
}
```

---

## Tips

- **Default brand is gray, not blue.** Out of the box, Moonshot uses a dark gray palette (`#374151`, `#6b7280`, `#1f2937`). Override the 3 brand variables to apply your actual colors.
- **Start with brand colors.** Overriding just `--ms-brand-primary`, `--ms-brand-secondary`, and `--ms-brand-accent` is enough for most projects.
- **Test in dark mode.** If your brand colors are dark, you may need lighter variants for dark mode to maintain contrast.
- **Use semantic variables.** Override `--ms-text-primary` or `--ms-bg-secondary` rather than individual component styles.
- **Keep the gray scale consistent.** If you override grays, maintain the progressive lightness pattern (50 = lightest, 900 = darkest).
- **Use SCSS for large customizations.** If you need to change the spacing scale, type scale, or breakpoints, SCSS variable overrides are cleaner than CSS property overrides.

---

## Further Reading

- **[Component Reference](COMPONENTS.md)** -- Full list of components and their classes.
- **[Getting Started](GETTING_STARTED.md)** -- Quick setup and first page tutorial.
- **[Image Links Philosophy](02_image_links_philosophy.md)** -- Design philosophy behind image link components.
