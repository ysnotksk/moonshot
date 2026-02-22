# Getting Started with Moonshot CSS

A quick guide to building your first page with the Moonshot CSS Framework.

---

## Installation

### Option 1: CDN (Fastest)

Link directly to the compiled CSS file. No build step required.

```html
<link rel="stylesheet" href="https://unpkg.com/moonshot-css/dist/moonshot.min.css" />
```

### Option 2: npm

Install via npm for use in build pipelines.

```bash
npm install moonshot-css
```

Then import in your project:

```css
/* In your CSS or framework entry point */
@import 'moonshot-css/dist/moonshot.min.css';
```

Or import the SCSS source for full customization:

```scss
// Override variables before importing
@use 'moonshot-css/src/abstracts/variables' with (
  $colors-brand: (
    'primary': #2563eb,
    'secondary': #3b82f6,
    'accent': #1d4ed8,
  )
);
@use 'moonshot-css/src/moonshot';
```

### Option 3: Download

Download `moonshot.min.css` from the `dist/` directory and include it in your project.

---

## Basic HTML Template

Start with this boilerplate. It includes the required charset, viewport meta tag, and CSS link.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Moonshot Site</title>
    <link rel="stylesheet" href="dist/moonshot.min.css" />
  </head>
  <body>
    <!-- Your content here -->
    <script src="dist/moonshot.min.js"></script>
  </body>
</html>
```

> **Note:** Default brand colors are dark gray (`#374151`). Override with 3 CSS variables to apply your brand — see [Brand Customization](#brand-customization) below.

For Japanese sites, set `lang="ja"` on the `<html>` element to activate Japanese-optimized typography (wider line-height, proper word wrapping, Japanese font stack).

---

## Building Your First Page

Here is a complete example with a header, hero section, and a card grid.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Startup</title>
    <link rel="stylesheet" href="dist/moonshot.min.css" />
  </head>
  <body>
    <!-- Navigation -->
    <header class="ms-header">
      <nav class="ms-navbar">
        <a href="/" class="ms-navbar__brand">MyStartup</a>
        <button class="ms-navbar__toggle" aria-label="Toggle menu">
          <span class="ms-navbar__toggle-bar"></span>
          <span class="ms-navbar__toggle-bar"></span>
          <span class="ms-navbar__toggle-bar"></span>
        </button>
        <ul class="ms-navbar__menu">
          <li class="ms-navbar__item">
            <a href="#" class="ms-navbar__link ms-navbar__link--active">Home</a>
          </li>
          <li class="ms-navbar__item">
            <a href="#" class="ms-navbar__link">Services</a>
          </li>
          <li class="ms-navbar__item">
            <a href="#" class="ms-navbar__link">About</a>
          </li>
          <li class="ms-navbar__item">
            <a href="#" class="ms-navbar__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="ms-hero ms-hero--centered">
      <div class="ms-hero__container">
        <div class="ms-hero__content">
          <span class="ms-hero__badge">Now in Beta</span>
          <h1 class="ms-hero__heading">Build the Future</h1>
          <p class="ms-hero__description">
            A modern platform for teams that move fast and ship with confidence.
          </p>
          <div class="ms-hero__actions">
            <a href="#" class="ms-button ms-button--primary ms-button--lg">Get Started</a>
            <a href="#" class="ms-button ms-button--outline ms-button--lg">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Card Grid -->
    <section class="ms-py-16">
      <div class="ms-container-xl">
        <h2 class="ms-h2 ms-text-center ms-mb-12">Why Choose Us</h2>
        <div class="ms-grid ms-grid-cols-3 ms-gap-8">
          <div class="ms-card ms-card--feature">
            <div class="ms-card__body">
              <div class="ms-card__icon">1</div>
              <h3 class="ms-card__title">Fast Deployment</h3>
              <p class="ms-card__description">Go from idea to production in hours, not weeks.</p>
            </div>
          </div>

          <div class="ms-card ms-card--feature">
            <div class="ms-card__body">
              <div class="ms-card__icon">2</div>
              <h3 class="ms-card__title">Scalable Infrastructure</h3>
              <p class="ms-card__description">
                Built to handle millions of requests out of the box.
              </p>
            </div>
          </div>

          <div class="ms-card ms-card--feature">
            <div class="ms-card__body">
              <div class="ms-card__icon">3</div>
              <h3 class="ms-card__title">Developer First</h3>
              <p class="ms-card__description">Clean APIs and comprehensive documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="ms-footer">
      <div class="ms-footer__container">
        <div class="ms-footer__bottom">
          <p class="ms-footer__copyright">2026 MyStartup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </body>
</html>
```

This page is fully responsive. The 3-column card grid collapses to a single column on mobile, and the navbar switches to a hamburger menu.

---

## Brand Customization

Moonshot uses a monochrome gray palette by default. You can instantly apply your brand identity by overriding three CSS custom properties.

### The 3 Brand Variables

```css
:root {
  --ms-brand-primary: #2563eb; /* Main brand color (buttons, links, accents) */
  --ms-brand-secondary: #3b82f6; /* Secondary brand color */
  --ms-brand-accent: #1d4ed8; /* Hover/active states */
}
```

Add this `<style>` block after your Moonshot CSS link, or in your own stylesheet:

```html
<link rel="stylesheet" href="dist/moonshot.min.css" />
<style>
  :root {
    --ms-brand-primary: #2563eb;
    --ms-brand-secondary: #3b82f6;
    --ms-brand-accent: #1d4ed8;
  }
</style>
```

Every component that uses brand colors (buttons, links, badges, cards, hero elements) will automatically update.

### Example Brand Palettes

**Tech Blue:**

```css
:root {
  --ms-brand-primary: #2563eb;
  --ms-brand-secondary: #3b82f6;
  --ms-brand-accent: #1d4ed8;
}
```

**Startup Green:**

```css
:root {
  --ms-brand-primary: #059669;
  --ms-brand-secondary: #10b981;
  --ms-brand-accent: #047857;
}
```

**Creative Purple:**

```css
:root {
  --ms-brand-primary: #7c3aed;
  --ms-brand-secondary: #8b5cf6;
  --ms-brand-accent: #6d28d9;
}
```

---

## Dark Mode

Moonshot defaults to light mode. Dark mode is opt-in via the `data-theme="dark"` attribute.

### Enabling Dark Mode

Add `data-theme="dark"` to the `<html>` element to activate dark mode.

```html
<html data-theme="dark">
  ...
</html>
```

To build a theme toggle button, use JavaScript to switch the attribute:

```html
<button onclick="toggleTheme()">Toggle Theme</button>

<script>
  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    html.setAttribute('data-theme', current === 'dark' ? '' : 'dark');
  }
</script>
```

In dark mode, all semantic colors (text, backgrounds, borders, shadows) are automatically remapped. Brand colors remain the same, so your identity stays consistent across both modes.

---

## JavaScript

Moonshot includes a small vanilla JS bundle (`dist/moonshot.min.js`) that provides:

- **Navbar toggle** — mobile hamburger menu open/close
- **Stat counters** — animated number counting on scroll (`data-stat-value`)
- **Back to top** — scroll-to-top button visibility and smooth scroll

Add the script tag before `</body>`:

```html
<script src="dist/moonshot.min.js"></script>
```

All features auto-initialize on `DOMContentLoaded`. No manual setup required.

---

## Next Steps

- **[Component Reference](COMPONENTS.md)** -- Full API for all components, elements, modifiers, and utility classes.
- **[Theming & Customization](THEMING.md)** -- Deep dive into CSS custom properties, dark mode, and creating custom themes.
- **Examples** -- Browse `examples/` directory for complete page templates (front page, service page, blog, events, recruitment, about, brand family).
