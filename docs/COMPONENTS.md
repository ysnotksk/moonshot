# Component Reference

Moonshot CSS Framework -- complete API reference for all components, layout primitives, and utility classes.

All classes use the `ms-` prefix. Components follow BEM naming: `.ms-block__element--modifier`.

---

## Table of Contents

- [Buttons](#buttons)
- [Cards](#cards)
- [Forms](#forms)
- [Navigation](#navigation)
- [Hero](#hero)
- [Animated Stats](#animated-stats)
- [Image Links](#image-links)
- [Accordion](#accordion)
- [Pricing](#pricing)
- [Testimonials](#testimonials)
- [Client Logos](#client-logos)
- [Grid & Layout](#grid--layout)
- [Typography](#typography)
- [Spacing Utilities](#spacing-utilities)
- [Color Utilities](#color-utilities)
- [Helper Utilities](#helper-utilities)

---

## Buttons

### Base Class

`.ms-button` or `.ms-btn`

### Variant Modifiers

| Modifier      | Description                                           |
| ------------- | ----------------------------------------------------- |
| `--primary`   | Brand primary background, white text                  |
| `--secondary` | Gray-100 background, primary text color               |
| `--outline`   | Transparent background, brand primary border and text |
| `--ghost`     | Transparent background, no border, subtle hover       |
| `--danger`    | Error/red background, white text                      |

### Size Modifiers

| Modifier | Description                       |
| -------- | --------------------------------- |
| `--sm`   | Smaller font size and padding     |
| `--lg`   | Larger font size and padding      |
| `--xl`   | Extra-large font size and padding |

### Width Modifiers

| Modifier   | Description                |
| ---------- | -------------------------- |
| `--full`   | Full-width (100%) button   |
| `--square` | Square aspect ratio button |

### Icon Support

| Class             | Description                                        |
| ----------------- | -------------------------------------------------- |
| `ms-button--icon` | Inline-flex with gap for icon + text               |
| `ms-button__icon` | Wrapper for the icon element (SVG sized to 1.25em) |

### Button Group

| Class                       | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| `ms-button-group`           | Inline-flex container with gap between buttons        |
| `ms-button-group--attached` | Buttons joined edge-to-edge with shared border radius |

### HTML Example

```html
<button class="ms-button ms-button--primary">Get Started</button>
<button class="ms-button ms-button--outline ms-button--lg">Learn More</button>

<button class="ms-button ms-button--primary ms-button--icon">
  <span class="ms-button__icon"><svg>...</svg></span>
  Download
</button>

<div class="ms-button-group">
  <button class="ms-button ms-button--primary">Save</button>
  <button class="ms-button ms-button--secondary">Cancel</button>
</div>
```

---

## Cards

### Base Class

`.ms-card`

### Elements

| Element                   | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `__image`                 | Full-width cover image                               |
| `__image-wrapper`         | Container for the image with optional aspect ratio   |
| `__image-wrapper--16-9`   | 16:9 aspect ratio                                    |
| `__image-wrapper--4-3`    | 4:3 aspect ratio                                     |
| `__image-wrapper--square` | 1:1 aspect ratio                                     |
| `__header`                | Card header with bottom border                       |
| `__body`                  | Main content area (flex: 1)                          |
| `__footer`                | Card footer with top border and secondary background |
| `__title`                 | Title text (xl, semibold)                            |
| `__subtitle`              | Subtitle text (sm, secondary color)                  |
| `__description`           | Body text (base, relaxed line-height)                |
| `__icon`                  | Icon container (used in `--feature` variant)         |
| `__value`                 | Large stat number (used in `--stats` variant)        |
| `__label`                 | Stat label text (used in `--stats` variant)          |

### Variant Modifiers

| Modifier        | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `--elevated`    | No border, medium shadow, hover lift effect                |
| `--outlined`    | 1px light border, no shadow                                |
| `--flat`        | No border/shadow, secondary background                     |
| `--interactive` | Pointer cursor, hover lift + shadow + brand border         |
| `--horizontal`  | Side-by-side layout (image 40%, body 60%)                  |
| `--profile`     | Centered text, circular image (120px)                      |
| `--feature`     | Centered text, secondary bg, icon container                |
| `--stats`       | Brand gradient background, white text, large value display |

### Size Modifiers

| Modifier | Description                 |
| -------- | --------------------------- |
| `--sm`   | Reduced padding (space-4)   |
| `--lg`   | Increased padding (space-8) |

### Responsive Behavior

- `--horizontal` stacks vertically below the `md` breakpoint (768px).

### HTML Example

```html
<div class="ms-card ms-card--elevated">
  <div class="ms-card__image-wrapper ms-card__image-wrapper--16-9">
    <img class="ms-card__image" src="photo.jpg" alt="Description" />
  </div>
  <div class="ms-card__body">
    <h3 class="ms-card__title">Card Title</h3>
    <p class="ms-card__subtitle">Subtitle text</p>
    <p class="ms-card__description">Card body content goes here.</p>
  </div>
  <div class="ms-card__footer">
    <button class="ms-button ms-button--primary ms-button--sm">Action</button>
  </div>
</div>
```

---

## Forms

### Form Group

| Class           | Description                                          |
| --------------- | ---------------------------------------------------- |
| `ms-form-group` | Wrapper with bottom margin (collapses on last child) |

### Labels

| Class                | Description                                 |
| -------------------- | ------------------------------------------- |
| `ms-label`           | Block-level label (sm, medium weight)       |
| `ms-label--required` | Appends a red asterisk after the label text |

### Inputs

| Class         | Description                                          |
| ------------- | ---------------------------------------------------- |
| `ms-input`    | Text input with full width, border, focus ring       |
| `ms-textarea` | Multi-line input (min-height 120px, vertical resize) |
| `ms-select`   | Styled select dropdown with custom chevron           |

### Input Modifiers

| Modifier            | Description                    |
| ------------------- | ------------------------------ |
| `ms-input--sm`      | Smaller font and padding       |
| `ms-input--lg`      | Larger font and padding        |
| `ms-input--error`   | Red border, red focus ring     |
| `ms-input--success` | Green border, green focus ring |

### Textarea Modifiers

| Modifier                 | Description            |
| ------------------------ | ---------------------- |
| `ms-textarea--no-resize` | Disables resize handle |

### Checkbox & Radio

| Class                 | Description                                    |
| --------------------- | ---------------------------------------------- |
| `ms-checkbox`         | Custom styled checkbox (20px, rounded corners) |
| `ms-radio`            | Custom styled radio button (20px, circular)    |
| `ms-checkbox-wrapper` | Flex container for checkbox + label            |
| `ms-radio-wrapper`    | Flex container for radio + label               |
| `__label`             | Label text element inside wrapper              |

### Switch Toggle

| Class               | Description                       |
| ------------------- | --------------------------------- |
| `ms-switch`         | Toggle switch container (48x24px) |
| `ms-switch__input`  | Hidden input element              |
| `ms-switch__slider` | Visual slider track and knob      |

### Input Group

| Class                   | Description                                  |
| ----------------------- | -------------------------------------------- |
| `ms-input-group`        | Flex container that joins inputs and buttons |
| `ms-input-group__addon` | Static text addon (prefix/suffix)            |

### Helper Text

| Class             | Description                                |
| ----------------- | ------------------------------------------ |
| `ms-form-help`    | Help text below input (sm, tertiary color) |
| `ms-form-error`   | Error message (sm, red)                    |
| `ms-form-success` | Success message (sm, green)                |

### HTML Example

```html
<div class="ms-form-group">
  <label class="ms-label ms-label--required">Email</label>
  <input type="email" class="ms-input" placeholder="you@example.com" />
  <span class="ms-form-help">We will never share your email.</span>
</div>

<div class="ms-form-group">
  <label class="ms-label">Message</label>
  <textarea class="ms-textarea" rows="4"></textarea>
</div>

<div class="ms-form-group">
  <label class="ms-label">Plan</label>
  <select class="ms-select">
    <option>Free</option>
    <option>Pro</option>
  </select>
</div>

<label class="ms-checkbox-wrapper">
  <input type="checkbox" class="ms-checkbox" />
  <span class="ms-checkbox-wrapper__label">I agree to the terms</span>
</label>

<label class="ms-switch">
  <input type="checkbox" class="ms-switch__input" />
  <span class="ms-switch__slider"></span>
</label>

<div class="ms-input-group">
  <span class="ms-input-group__addon">https://</span>
  <input type="text" class="ms-input" placeholder="example.com" />
  <button class="ms-button ms-button--primary">Go</button>
</div>
```

---

## Navigation

### Header & Navbar

| Class                       | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `ms-header`                 | Full-width header, absolutely positioned over content           |
| `ms-navbar`                 | Glassmorphism navbar container (max-width 1400px, centered)     |
| `ms-navbar__brand`          | Brand name/logo link                                            |
| `ms-navbar__logo`           | Logo image (height 32px)                                        |
| `ms-navbar__menu`           | Navigation link list (flex, centered)                           |
| `ms-navbar__item`           | Individual menu item                                            |
| `ms-navbar__item--has-mega` | Item that reveals a mega menu on hover                          |
| `ms-navbar__link`           | Navigation link                                                 |
| `ms-navbar__link--active`   | Active state with background highlight                          |
| `ms-navbar__actions`        | CTA button container between menu and toggle (hidden on mobile) |
| `ms-navbar__toggle`         | Mobile hamburger button (hidden on desktop)                     |
| `ms-navbar__toggle-bar`     | Individual hamburger bar (3 bars)                               |

> **Requires JavaScript:** Include `dist/moonshot.min.js` for mobile menu toggle functionality. The bundle auto-initializes on DOMContentLoaded.

### Mobile Menu

On screens below the `md` breakpoint (768px), the navbar menu becomes a dropdown panel.

| Class                   | Description                                  |
| ----------------------- | -------------------------------------------- |
| `ms-navbar__menu--open` | Shows the mobile menu with fade-in animation |

### Mega Menu

| Class                            | Description                           |
| -------------------------------- | ------------------------------------- |
| `ms-mega-menu`                   | Dropdown mega menu panel              |
| `ms-mega-menu__grid`             | 3-column grid layout                  |
| `ms-mega-menu__section`          | Column section                        |
| `ms-mega-menu__heading`          | Section heading (uppercase, small)    |
| `ms-mega-menu__link`             | Menu link with icon/description       |
| `ms-mega-menu__link-content`     | Text container inside link            |
| `ms-mega-menu__link-title`       | Link title text                       |
| `ms-mega-menu__link-description` | Link description text                 |
| `ms-mega-menu__featured`         | Full-width featured section at bottom |
| `ms-mega-menu__featured-title`   | Featured section heading              |
| `ms-mega-menu__featured-grid`    | 4-column grid for featured links      |
| `ms-mega-menu__featured-link`    | Featured link item                    |

### Footer

| Class                    | Description                               |
| ------------------------ | ----------------------------------------- |
| `ms-footer`              | Full-width dark footer                    |
| `ms-footer__container`   | Centered container (2xl max-width)        |
| `ms-footer__grid`        | Auto-fit grid for footer columns          |
| `ms-footer__section`     | Footer section (flex column)              |
| `ms-footer__column`      | Footer column                             |
| `ms-footer__heading`     | Column heading (uppercase, light color)   |
| `ms-footer__link`        | Footer link (gray, light on hover)        |
| `ms-footer__social`      | Social icon container (flex)              |
| `ms-footer__social-link` | Circular social media icon button         |
| `ms-footer__bottom`      | Bottom bar with copyright and legal links |
| `ms-footer__copyright`   | Copyright text                            |
| `ms-footer__legal`       | Legal links list                          |

### Breadcrumbs

| Class                         | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| `ms-breadcrumb`               | Breadcrumb container (flex, with `/` separators) |
| `ms-breadcrumb__item`         | Breadcrumb item                                  |
| `ms-breadcrumb__link`         | Breadcrumb link                                  |
| `ms-breadcrumb__link--active` | Current page (non-clickable)                     |

### Sidebar Navigation

| Class                      | Description                            |
| -------------------------- | -------------------------------------- |
| `ms-sidenav`               | Vertical navigation container          |
| `ms-sidenav__item`         | Navigation item                        |
| `ms-sidenav__link`         | Navigation link                        |
| `ms-sidenav__link--active` | Active link (brand primary background) |
| `ms-sidenav__group`        | Link group with title                  |
| `ms-sidenav__group-title`  | Group title (uppercase, xs)            |

### Responsive Behavior

- Navbar collapses to hamburger menu below `md` (768px).
- Mega menu is hidden on mobile.
- Footer grid becomes single-column below `md`.

### HTML Example

```html
<header class="ms-header">
  <nav class="ms-navbar">
    <a href="/" class="ms-navbar__brand">Moonshot</a>
    <button class="ms-navbar__toggle">
      <span class="ms-navbar__toggle-bar"></span>
      <span class="ms-navbar__toggle-bar"></span>
      <span class="ms-navbar__toggle-bar"></span>
    </button>
    <ul class="ms-navbar__menu">
      <li class="ms-navbar__item">
        <a href="#" class="ms-navbar__link ms-navbar__link--active">Home</a>
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
```

---

## Hero

### Base Class

`.ms-hero`

### Elements

| Element                | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `__container`          | Centered content container (2xl max-width)                  |
| `__heading`            | Hero heading (6xl)                                          |
| `__subheading`         | Sub-heading (2xl, secondary color)                          |
| `__description`        | Description text (lg, secondary color)                      |
| `__actions`            | Button container (flex, centered, wrapping)                 |
| `__image`              | Hero image (rounded, shadow)                                |
| `__image-wrapper`      | Image container                                             |
| `__background`         | Full-cover background container                             |
| `__background-image`   | Background image (cover, 40% opacity)                       |
| `__background-overlay` | Gradient overlay for background images                      |
| `__stats`              | Stats grid below hero content                               |
| `__stat`               | Individual stat item                                        |
| `__stat-value`         | Large stat number (5xl, bold, brand color)                  |
| `__stat-label`         | Stat label (sm, uppercase)                                  |
| `__eyebrow`            | Small uppercase label above heading (used with `--subpage`) |
| `__badge`              | Inline badge above heading                                  |
| `__badge--outline`     | Outline variant of the badge                                |

### Variant Modifiers

| Modifier      | Description                                               |
| ------------- | --------------------------------------------------------- |
| `--centered`  | Center-aligned text and actions, constrained width        |
| `--split`     | Two-column layout (content + image), stacks on mobile     |
| `--fullwidth` | Full-height (min 600px), dark background, white text      |
| `--minimal`   | Compact page header with bottom border, smaller heading   |
| `--subpage`   | Centered text header for inner pages with eyebrow support |

### Responsive Behavior

- Heading scales down from `6xl` to `4xl` below `md`.
- `--split` stacks to single column below `md`.
- `--fullwidth` reduces min-height to 500px below `md`.
- Action buttons go full-width and stack vertically on mobile.
- Stats grid becomes single column on mobile.

### HTML Example

```html
<section class="ms-hero ms-hero--centered">
  <div class="ms-hero__container">
    <div class="ms-hero__content">
      <span class="ms-hero__badge">New Release</span>
      <h1 class="ms-hero__heading">Build Something Great</h1>
      <p class="ms-hero__description">A clean CSS framework designed for modern startups.</p>
      <div class="ms-hero__actions">
        <a href="#" class="ms-button ms-button--primary ms-button--lg">Get Started</a>
        <a href="#" class="ms-button ms-button--outline ms-button--lg">Documentation</a>
      </div>
    </div>
  </div>
</section>
```

---

## Animated Stats

Counts up numeric values with a smooth animation when scrolled into view. Powered by `moonshot.min.js` — auto-initializes on `DOMContentLoaded`, no manual setup required.

### Data Attributes

| Attribute            | Required | Description                                                  | Example                  |
| -------------------- | -------- | ------------------------------------------------------------ | ------------------------ |
| `data-stat-value`    | yes      | Target number. Supports `K`/`M`/`B` multipliers              | `"150"`, `"5M"`, `"99%"` |
| `data-stat-prefix`   | no       | Text prepended to the displayed value                        | `"$"`                    |
| `data-stat-suffix`   | no       | Text appended to the displayed value                         | `"+"`                    |
| `data-stats-section` | no       | Add to a parent element to group stats that animate together | —                        |

### Behavior

- Animation triggers when 20% of the containing section is visible (Intersection Observer).
- Duration: 2 seconds, easeOutCubic easing.
- Staggered: each stat in a group starts 100ms after the previous one.
- Animates once — does not re-trigger on subsequent scrolls.
- Falls back to immediate display if Intersection Observer is not supported.

### Example

```html
<section data-stats-section>
  <div class="ms-grid ms-grid-cols-4 ms-gap-8 ms-text-center">
    <!-- Plain number -->
    <div>
      <div class="ms-text-5xl ms-font-bold ms-text-brand-primary" data-stat-value="3">0</div>
      <div class="ms-text-sm ms-text-secondary">Years in Business</div>
    </div>

    <!-- Number with suffix -->
    <div>
      <div
        class="ms-text-5xl ms-font-bold ms-text-brand-primary"
        data-stat-value="150"
        data-stat-suffix="+"
      >
        0
      </div>
      <div class="ms-text-sm ms-text-secondary">Clients Served</div>
    </div>

    <!-- Currency with prefix and multiplier -->
    <div>
      <div
        class="ms-text-5xl ms-font-bold ms-text-brand-primary"
        data-stat-value="5M"
        data-stat-prefix="$"
      >
        $0
      </div>
      <div class="ms-text-sm ms-text-secondary">Funding Raised</div>
    </div>

    <!-- Percentage -->
    <div>
      <div class="ms-text-5xl ms-font-bold ms-text-brand-primary" data-stat-value="99%">0</div>
      <div class="ms-text-sm ms-text-secondary">Uptime SLA</div>
    </div>
  </div>
</section>
```

Set the element's initial text content to `0` (or `$0` when using a prefix) so users see a placeholder before the animation fires.

---

## Image Links

### Base Class

`.ms-image-link`

### Elements

| Element         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `__background`  | Absolute-positioned background container             |
| `__image`       | Cover image with hover zoom effect                   |
| `__overlay`     | Gradient overlay (dark by default)                   |
| `__content`     | Content container (positioned over image)            |
| `__title`       | Title text (3xl, bold, white)                        |
| `__description` | Description text (base, white at 90% opacity)        |
| `__cta`         | Call-to-action text with arrow (uppercase, semibold) |

### Layout Modifiers

| Modifier   | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `--hero`   | No top rounding, bottom corners only, extra top padding for navbar clearance |
| `--banner` | Full viewport width, no border radius                                        |

### Size Modifiers

| Modifier | Description                                          |
| -------- | ---------------------------------------------------- |
| `--sm`   | Min-height 200px, smaller title (xl)                 |
| `--lg`   | Min-height 400px, larger title (5xl)                 |
| `--xl`   | Min-height 630px, largest title (6xl), extra padding |

### Overlay Modifiers

| Modifier         | Description                                       |
| ---------------- | ------------------------------------------------- |
| `--light`        | Darker overlay with backdrop blur for readability |
| `--dark`         | Heavy dark overlay                                |
| `--brand`        | Gray-toned brand overlay                          |
| `--gradient-top` | Top-to-bottom gradient, content at top            |

### Position Modifiers

| Modifier         | Description                |
| ---------------- | -------------------------- |
| `--center`       | Content centered both axes |
| `--top-left`     | Content at top-left        |
| `--top-right`    | Content at top-right       |
| `--bottom-left`  | Content at bottom-left     |
| `--bottom-right` | Content at bottom-right    |

### Effect Modifiers

| Modifier      | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `--parallax`  | Overflow visible for parallax scrolling                    |
| `--glow`      | (Reserved, currently no visual effect)                     |
| `--zoom`      | Reverse zoom -- image starts zoomed in, zooms out on hover |
| `--grayscale` | Image is grayscale, becomes color on hover                 |

### Image Link Grid

| Class                          | Description                           |
| ------------------------------ | ------------------------------------- |
| `ms-image-link-grid`           | Grid container for image links        |
| `ms-image-link-grid--2`        | 2-column grid                         |
| `ms-image-link-grid--3`        | 3-column grid                         |
| `ms-image-link-grid--4`        | 4-column grid                         |
| `ms-image-link-grid--featured` | First item spans 2 columns and 2 rows |

### Responsive Behavior

- All grids collapse to single column below `md` (768px).
- Title font sizes scale down on mobile.
- Content padding reduces on mobile.
- 3- and 4-column grids become 2 columns below `lg` (1024px).

### HTML Example

```html
<a href="/services" class="ms-image-link ms-image-link--lg ms-image-link--bottom-left">
  <div class="ms-image-link__background">
    <img class="ms-image-link__image" src="hero.jpg" alt="" />
  </div>
  <div class="ms-image-link__overlay"></div>
  <div class="ms-image-link__content">
    <h2 class="ms-image-link__title">Our Services</h2>
    <p class="ms-image-link__description">Explore what we offer.</p>
    <span class="ms-image-link__cta">Learn More</span>
  </div>
</a>
```

---

## Accordion

### Base Class

`.ms-accordion`

### Elements

| Element    | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `__item`   | Each `<details>` element, bottom border separator                 |
| `__header` | `<summary>` element, flex layout with chevron icon via `::after`  |
| `__body`   | Content panel with padding, revealed when `<details>` is `[open]` |

### Behavior

- CSS-only — uses native `<details>`/`<summary>` elements, no JavaScript required.
- Chevron icon rotates 180deg when the item is open.
- Items are separated by a bottom border.

### Responsive Behavior

- Padding reduces on mobile (below `md` breakpoint).

### HTML Example

```html
<div class="ms-accordion">
  <details class="ms-accordion__item">
    <summary class="ms-accordion__header">Question goes here?</summary>
    <div class="ms-accordion__body">Answer content goes here.</div>
  </details>

  <details class="ms-accordion__item" open>
    <summary class="ms-accordion__header">Another question?</summary>
    <div class="ms-accordion__body">This item starts open.</div>
  </details>
</div>
```

---

## Pricing

### Base Class

`.ms-pricing`

### Elements

| Element               | Description                                         |
| --------------------- | --------------------------------------------------- |
| `__card`              | Individual pricing card (vertical layout)           |
| `__card--featured`    | Highlighted card with brand border-top, shadow lift |
| `__header`            | Card header section (plan name, price, period)      |
| `__name`              | Plan name text                                      |
| `__price`             | Large price display (4xl, bold)                     |
| `__period`            | Billing period text (sm, secondary)                 |
| `__features`          | Feature list (`<ul>`) with check/dash icons         |
| `__feature--excluded` | Feature marked as excluded (dash icon, muted text)  |
| `__cta`               | Bottom button slot                                  |

### Layout

- `.ms-pricing` is a grid container with `auto-fit` at `minmax(280px, 1fr)`.
- Cards have equal height via `display: flex; flex-direction: column`.
- The `--featured` modifier adds `scale(1.02)`, a brand-colored top border, and elevated shadow.

### Feature Icons

- Included features show a green checkmark (SVG via `::before`).
- Excluded features (`.ms-pricing__feature--excluded`) show a gray dash.

### Responsive Behavior

- Grid collapses to single column below `md` (768px).
- Featured card scale resets to 1 on mobile.

### HTML Example

```html
<div class="ms-pricing">
  <div class="ms-pricing__card">
    <div class="ms-pricing__header">
      <div class="ms-pricing__name">Starter</div>
      <div class="ms-pricing__price">$29</div>
      <div class="ms-pricing__period">per month</div>
    </div>
    <ul class="ms-pricing__features">
      <li>Feature one</li>
      <li>Feature two</li>
      <li class="ms-pricing__feature--excluded">Not included</li>
    </ul>
    <div class="ms-pricing__cta">
      <a href="#" class="ms-btn ms-btn--outline ms-btn--lg">Get Started</a>
    </div>
  </div>

  <div class="ms-pricing__card ms-pricing__card--featured">
    <div class="ms-pricing__header">
      <div class="ms-pricing__name">Pro</div>
      <div class="ms-pricing__price">$99</div>
      <div class="ms-pricing__period">per month</div>
    </div>
    <ul class="ms-pricing__features">
      <li>Everything in Starter</li>
      <li>Priority support</li>
      <li>Advanced analytics</li>
    </ul>
    <div class="ms-pricing__cta">
      <a href="#" class="ms-btn ms-btn--primary ms-btn--lg">Get Started</a>
    </div>
  </div>
</div>
```

---

## Testimonials

### Base Class

`.ms-testimonial`

### Elements

| Element     | Description                                 |
| ----------- | ------------------------------------------- |
| `__quote`   | Blockquote text                             |
| `__author`  | Author info container (flex, avatar + text) |
| `__avatar`  | Author photo (48px circle)                  |
| `__info`    | Author text container                       |
| `__name`    | Author name                                 |
| `__title`   | Author job title                            |
| `__company` | Author company name                         |

### Variant Modifiers

| Modifier     | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `--featured` | Full-width banner with dark gradient background, centered text |

### Grid Layout

| Class                 | Description                         |
| --------------------- | ----------------------------------- |
| `ms-testimonial-grid` | 3-column grid for testimonial cards |

### Decorative

- A large opening quote character (`\201C`) is rendered via `::before` on each `.ms-testimonial`.

### Responsive Behavior

- Grid collapses from 3 columns to 2 below `lg`, then to 1 below `md`.

### HTML Example

```html
<div class="ms-testimonial-grid">
  <div class="ms-testimonial">
    <p class="ms-testimonial__quote">"This product transformed our workflow completely."</p>
    <div class="ms-testimonial__author">
      <img src="avatar.jpg" alt="Jane" class="ms-testimonial__avatar" />
      <div class="ms-testimonial__info">
        <div class="ms-testimonial__name">Jane Doe</div>
        <div class="ms-testimonial__title">CTO</div>
        <div class="ms-testimonial__company">Acme Inc.</div>
      </div>
    </div>
  </div>
</div>

<!-- Featured variant -->
<div class="ms-testimonial ms-testimonial--featured">
  <p class="ms-testimonial__quote">"An incredible experience from start to finish."</p>
  <div class="ms-testimonial__author">
    <img src="avatar.jpg" alt="John" class="ms-testimonial__avatar" />
    <div class="ms-testimonial__info">
      <div class="ms-testimonial__name">John Smith</div>
      <div class="ms-testimonial__title">CEO</div>
      <div class="ms-testimonial__company">BigCorp</div>
    </div>
  </div>
</div>
```

---

## Client Logos

### Base Class

`.ms-client-logos`

### Elements

| Element            | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `__container`      | Centered container (2xl max-width)                               |
| `__heading`        | Section heading (lg, uppercase, secondary color)                 |
| `__scroll-wrapper` | Overflow container with fade-edge mask                           |
| `__scroll-track`   | Horizontal flex container with scroll animation (30s loop)       |
| `__logo-item`      | Individual logo wrapper (grayscale, 60% opacity, color on hover) |

### Variant Modifiers

| Modifier        | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `--stats-style` | Secondary background, primary heading color, smaller logos |

### Responsive Behavior

- Logos shrink on mobile (max-width 80px, height 32px).
- Animation speeds up on mobile (20s).
- Heading font size reduces to `sm`.

### HTML Example

```html
<section class="ms-client-logos ms-client-logos--stats-style">
  <div class="ms-client-logos__container">
    <h2 class="ms-client-logos__heading">Trusted By</h2>
    <div class="ms-client-logos__scroll-wrapper">
      <div class="ms-client-logos__scroll-track">
        <div class="ms-client-logos__logo-item">
          <img src="logo1.svg" alt="Client 1" />
        </div>
        <div class="ms-client-logos__logo-item">
          <img src="logo2.svg" alt="Client 2" />
        </div>
        <!-- Duplicate the logos for seamless loop -->
        <div class="ms-client-logos__logo-item">
          <img src="logo1.svg" alt="Client 1" />
        </div>
        <div class="ms-client-logos__logo-item">
          <img src="logo2.svg" alt="Client 2" />
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Grid & Layout

### Containers

| Class              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `ms-container`     | Responsive container (auto max-width at breakpoints) |
| `ms-container-sm`  | Max-width 640px                                      |
| `ms-container-md`  | Max-width 768px                                      |
| `ms-container-lg`  | Max-width 1024px                                     |
| `ms-container-xl`  | Max-width 1280px                                     |
| `ms-container-2xl` | Max-width 1440px                                     |

### CSS Grid

| Class                                     | Description                             |
| ----------------------------------------- | --------------------------------------- |
| `ms-grid`                                 | Display grid with default gap (space-4) |
| `ms-grid-cols-1` through `ms-grid-cols-6` | 1 to 6 equal columns                    |
| `ms-grid-cols-12`                         | 12-column grid                          |

### Column Span

| Class                                    | Description               |
| ---------------------------------------- | ------------------------- |
| `ms-col-span-1` through `ms-col-span-12` | Span 1-12 columns         |
| `ms-col-span-full`                       | Span all columns (1 / -1) |

### Row Span

| Class                                   | Description   |
| --------------------------------------- | ------------- |
| `ms-row-span-1` through `ms-row-span-6` | Span 1-6 rows |

### Gap Utilities

| Class       | Description |
| ----------- | ----------- |
| `ms-gap-0`  | No gap      |
| `ms-gap-2`  | 0.5rem gap  |
| `ms-gap-4`  | 1rem gap    |
| `ms-gap-6`  | 1.5rem gap  |
| `ms-gap-8`  | 2rem gap    |
| `ms-gap-12` | 3rem gap    |

### Flexbox

| Class                       | Description              |
| --------------------------- | ------------------------ |
| `ms-flex`                   | Display flex             |
| `ms-inline-flex`            | Display inline-flex      |
| `ms-flex-row`               | Row direction            |
| `ms-flex-row-reverse`       | Reverse row direction    |
| `ms-flex-col`               | Column direction         |
| `ms-flex-col-reverse`       | Reverse column direction |
| `ms-flex-wrap`              | Flex wrap                |
| `ms-flex-nowrap`            | No wrapping              |
| `ms-flex-1`                 | Flex: 1 1 0%             |
| `ms-flex-auto`              | Flex: 1 1 auto           |
| `ms-flex-initial`           | Flex: 0 1 auto           |
| `ms-flex-none`              | Flex: none               |
| `ms-grow` / `ms-grow-0`     | Flex grow on/off         |
| `ms-shrink` / `ms-shrink-0` | Flex shrink on/off       |

### Justify & Align

| Class                                     | Description                    |
| ----------------------------------------- | ------------------------------ |
| `ms-justify-start`                        | justify-content: flex-start    |
| `ms-justify-end`                          | justify-content: flex-end      |
| `ms-justify-center`                       | justify-content: center        |
| `ms-justify-between`                      | justify-content: space-between |
| `ms-justify-around`                       | justify-content: space-around  |
| `ms-justify-evenly`                       | justify-content: space-evenly  |
| `ms-items-start`                          | align-items: flex-start        |
| `ms-items-end`                            | align-items: flex-end          |
| `ms-items-center`                         | align-items: center            |
| `ms-items-baseline`                       | align-items: baseline          |
| `ms-items-stretch`                        | align-items: stretch           |
| `ms-self-start` through `ms-self-stretch` | align-self variants            |

### Display

| Class             | Description           |
| ----------------- | --------------------- |
| `ms-block`        | display: block        |
| `ms-inline-block` | display: inline-block |
| `ms-inline`       | display: inline       |
| `ms-hidden`       | display: none         |

### Position

| Class         | Description        |
| ------------- | ------------------ |
| `ms-static`   | position: static   |
| `ms-relative` | position: relative |
| `ms-absolute` | position: absolute |
| `ms-fixed`    | position: fixed    |
| `ms-sticky`   | position: sticky   |

### Responsive Visibility

| Class             | Description                           |
| ----------------- | ------------------------------------- |
| `ms-hide-mobile`  | Hidden at 768px and below             |
| `ms-hide-tablet`  | Hidden between 769px and 1024px       |
| `ms-hide-desktop` | Hidden at 1025px and above            |
| `ms-show-mobile`  | Visible only at 768px and below       |
| `ms-show-tablet`  | Visible only between 769px and 1024px |
| `ms-show-desktop` | Visible only at 1025px and above      |

### Responsive Behavior

- Multi-column grids (2-6 columns) collapse to single column below 768px.
- Column spans become full-width below 768px.
- 3+ column grids collapse to single column on tablets (769px-1024px).

### HTML Example

```html
<div class="ms-container-xl">
  <div class="ms-grid ms-grid-cols-3 ms-gap-8">
    <div class="ms-card ms-card--elevated">...</div>
    <div class="ms-card ms-card--elevated">...</div>
    <div class="ms-card ms-card--elevated">...</div>
  </div>
</div>
```

---

## Typography

### Headings

| Class          | Alias   | Size           |
| -------------- | ------- | -------------- |
| `ms-heading-1` | `ms-h1` | 3.75rem (6xl)  |
| `ms-heading-2` | `ms-h2` | 3rem (5xl)     |
| `ms-heading-3` | `ms-h3` | 2.25rem (4xl)  |
| `ms-heading-4` | `ms-h4` | 1.875rem (3xl) |
| `ms-heading-5` | `ms-h5` | 1.5rem (2xl)   |
| `ms-heading-6` | `ms-h6` | 1.25rem (xl)   |

### Body Text

| Class          | Size     |
| -------------- | -------- |
| `ms-text-lg`   | 1.125rem |
| `ms-text-base` | 1rem     |
| `ms-text-sm`   | 0.875rem |
| `ms-text-xs`   | 0.75rem  |

### Paragraphs

| Class                   | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `ms-paragraph` / `ms-p` | Paragraph with bottom margin and relaxed line-height |
| `ms-lead`               | Larger intro text (xl, secondary color)              |

### Links

| Class     | Description                                         |
| --------- | --------------------------------------------------- |
| `ms-link` | Styled link with brand color and underline on hover |

### Lists

| Class               | Description                  |
| ------------------- | ---------------------------- |
| `ms-list`           | Base list with left padding  |
| `ms-list-unordered` | Disc bullet list             |
| `ms-list-ordered`   | Numbered list                |
| `ms-list-item`      | List item with bottom margin |

### Code

| Class            | Description                            |
| ---------------- | -------------------------------------- |
| `ms-code-inline` | Inline code with background and border |
| `ms-code-block`  | Code block with dark background        |

### Other

| Class           | Description                        |
| --------------- | ---------------------------------- |
| `ms-blockquote` | Styled blockquote with left border |
| `ms-hr`         | Horizontal rule                    |

### Text Utilities

| Class                                                                     | Description            |
| ------------------------------------------------------------------------- | ---------------------- |
| `ms-text-left` / `ms-text-center` / `ms-text-right` / `ms-text-justify`   | Text alignment         |
| `ms-font-normal` / `ms-font-medium` / `ms-font-semibold` / `ms-font-bold` | Font weight            |
| `ms-uppercase` / `ms-lowercase` / `ms-capitalize`                         | Text transform         |
| `ms-truncate`                                                             | Truncate with ellipsis |
| `ms-no-wrap`                                                              | Prevent wrapping       |
| `ms-break-words` / `ms-break-all`                                         | Word breaking          |

### Text Colors

| Class                                                                    | Description          |
| ------------------------------------------------------------------------ | -------------------- |
| `ms-text-primary`                                                        | Primary text color   |
| `ms-text-secondary`                                                      | Secondary text color |
| `ms-text-tertiary`                                                       | Tertiary text color  |
| `ms-text-disabled`                                                       | Disabled text color  |
| `ms-text-brand`                                                          | Brand primary color  |
| `ms-text-success` / `ms-text-error` / `ms-text-warning` / `ms-text-info` | Status colors        |

### Japanese Text

The framework includes built-in Japanese font optimization. Use `lang="ja"` on your HTML element to activate Japanese-specific typography settings (wider line-height, word-wrap).

### Responsive Behavior

- `ms-h1` scales from `6xl` to `4xl` on mobile.
- `ms-h2` scales from `5xl` to `3xl` on mobile.
- `ms-h3` scales from `4xl` to `2xl` on mobile.
- `ms-h4` scales from `3xl` to `xl` on mobile.

### HTML Example

```html
<h1 class="ms-h1">Main Heading</h1>
<p class="ms-lead">An introductory paragraph with larger text.</p>
<p class="ms-p">Regular paragraph text with <a href="#" class="ms-link">a link</a>.</p>
<p class="ms-text-sm ms-text-secondary">Small secondary caption.</p>
```

---

## Spacing Utilities

All spacing utilities are generated from the spacing scale: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32`.

### Margin

| Pattern        | Description             |
| -------------- | ----------------------- |
| `ms-m-{size}`  | Margin on all sides     |
| `ms-mt-{size}` | Margin top              |
| `ms-mb-{size}` | Margin bottom           |
| `ms-ml-{size}` | Margin left             |
| `ms-mr-{size}` | Margin right            |
| `ms-mx-{size}` | Margin left + right     |
| `ms-my-{size}` | Margin top + bottom     |
| `ms-m-auto`    | Margin auto (all sides) |
| `ms-mx-auto`   | Horizontal centering    |

### Padding

| Pattern        | Description          |
| -------------- | -------------------- |
| `ms-p-{size}`  | Padding on all sides |
| `ms-pt-{size}` | Padding top          |
| `ms-pb-{size}` | Padding bottom       |
| `ms-pl-{size}` | Padding left         |
| `ms-pr-{size}` | Padding right        |
| `ms-px-{size}` | Padding left + right |
| `ms-py-{size}` | Padding top + bottom |

### Gap

| Pattern           | Description          |
| ----------------- | -------------------- |
| `ms-gap-{size}`   | Gap for grid/flexbox |
| `ms-gap-x-{size}` | Column gap           |
| `ms-gap-y-{size}` | Row gap              |

### Space Between

| Pattern             | Description                         |
| ------------------- | ----------------------------------- |
| `ms-space-x-{size}` | Horizontal spacing between children |
| `ms-space-y-{size}` | Vertical spacing between children   |

### Spacing Scale Reference

| Size | Value          |
| ---- | -------------- |
| 0    | 0              |
| 1    | 0.25rem (4px)  |
| 2    | 0.5rem (8px)   |
| 3    | 0.75rem (12px) |
| 4    | 1rem (16px)    |
| 5    | 1.25rem (20px) |
| 6    | 1.5rem (24px)  |
| 8    | 2rem (32px)    |
| 10   | 2.5rem (40px)  |
| 12   | 3rem (48px)    |
| 16   | 4rem (64px)    |
| 20   | 5rem (80px)    |
| 24   | 6rem (96px)    |
| 32   | 8rem (128px)   |

### HTML Example

```html
<div class="ms-p-8 ms-mb-6">
  <h2 class="ms-mb-4">Section Title</h2>
  <div class="ms-flex ms-gap-4">
    <div class="ms-p-4">Item 1</div>
    <div class="ms-p-4">Item 2</div>
  </div>
</div>
```

---

## Color Utilities

### Text Colors

| Class                     | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `ms-text-primary`         | Primary text                                                      |
| `ms-text-secondary`       | Secondary text                                                    |
| `ms-text-tertiary`        | Tertiary text                                                     |
| `ms-text-disabled`        | Disabled text                                                     |
| `ms-text-white`           | White text                                                        |
| `ms-text-gray-{50-900}`   | Gray scale text (50, 100, 200, 300, 400, 500, 600, 700, 800, 900) |
| `ms-text-brand-primary`   | Brand primary color                                               |
| `ms-text-brand-secondary` | Brand secondary color                                             |
| `ms-text-brand-accent`    | Brand accent color                                                |
| `ms-text-success`         | Green                                                             |
| `ms-text-error`           | Red                                                               |
| `ms-text-warning`         | Amber                                                             |
| `ms-text-info`            | Blue                                                              |

### Background Colors

| Class                                                            | Description                             |
| ---------------------------------------------------------------- | --------------------------------------- |
| `ms-bg-white`                                                    | White background                        |
| `ms-bg-primary`                                                  | Primary background                      |
| `ms-bg-secondary`                                                | Secondary (gray-50) background          |
| `ms-bg-tertiary`                                                 | Tertiary (gray-100) background          |
| `ms-bg-gray-{50-900}`                                            | Gray scale backgrounds                  |
| `ms-bg-brand-primary`                                            | Brand primary background + white text   |
| `ms-bg-brand-secondary`                                          | Brand secondary background + white text |
| `ms-bg-brand-accent`                                             | Brand accent background + white text    |
| `ms-bg-success` / `ms-bg-error` / `ms-bg-warning` / `ms-bg-info` | Status backgrounds + white text         |

### Border Colors

| Class              | Description                |
| ------------------ | -------------------------- |
| `ms-border-light`  | Light border color         |
| `ms-border-medium` | Medium border color        |
| `ms-border-dark`   | Dark border color          |
| `ms-border-brand`  | Brand primary border color |

### Border Width

| Class                                                         | Description            |
| ------------------------------------------------------------- | ---------------------- |
| `ms-border-0`                                                 | No border              |
| `ms-border-1`                                                 | 1px solid border       |
| `ms-border-2`                                                 | 2px solid border       |
| `ms-border-4`                                                 | 4px solid border       |
| `ms-border-t` / `ms-border-b` / `ms-border-l` / `ms-border-r` | Single-side 1px border |

### Border Radius

| Class                        | Description                         |
| ---------------------------- | ----------------------------------- |
| `ms-rounded`                 | Base radius (0.5rem)                |
| `ms-rounded-none`            | No radius                           |
| `ms-rounded-sm`              | 0.25rem                             |
| `ms-rounded-base`            | 0.5rem                              |
| `ms-rounded-md`              | 0.75rem                             |
| `ms-rounded-lg`              | 1rem                                |
| `ms-rounded-xl`              | 1.5rem                              |
| `ms-rounded-2xl`             | 2rem                                |
| `ms-rounded-full`            | 9999px (circles)                    |
| `ms-rounded-{corner}-{size}` | Individual corners (tl, tr, bl, br) |

---

## Helper Utilities

### Size

| Class                                     | Description          |
| ----------------------------------------- | -------------------- |
| `ms-w-full` / `ms-w-screen` / `ms-w-auto` | Width utilities      |
| `ms-h-full` / `ms-h-screen` / `ms-h-auto` | Height utilities     |
| `ms-w-min` / `ms-w-max` / `ms-w-fit`      | Intrinsic width      |
| `ms-min-w-0` / `ms-min-h-0`               | Min dimensions       |
| `ms-max-w-full` / `ms-max-h-full`         | Max dimensions       |
| `ms-max-w-sm` through `ms-max-w-2xl`      | Container max-widths |

### Overflow

| Class                                                                                    | Description            |
| ---------------------------------------------------------------------------------------- | ---------------------- |
| `ms-overflow-auto` / `ms-overflow-hidden` / `ms-overflow-visible` / `ms-overflow-scroll` | Overflow control       |
| `ms-overflow-x-auto` / `ms-overflow-y-auto`                                              | Axis-specific overflow |

### Visibility

| Class                                               | Description         |
| --------------------------------------------------- | ------------------- |
| `ms-visible`                                        | visibility: visible |
| `ms-invisible`                                      | visibility: hidden  |
| `ms-opacity-0` / `ms-opacity-50` / `ms-opacity-100` | Opacity levels      |

### Shadows

| Class            | Description        |
| ---------------- | ------------------ |
| `ms-shadow-sm`   | Subtle shadow      |
| `ms-shadow-base` | Default shadow     |
| `ms-shadow-md`   | Medium shadow      |
| `ms-shadow-lg`   | Large shadow       |
| `ms-shadow-xl`   | Extra-large shadow |
| `ms-shadow-2xl`  | Dramatic shadow    |
| `ms-shadow-none` | No shadow          |

### Text Helpers

| Class                                          | Description                               |
| ---------------------------------------------- | ----------------------------------------- |
| `ms-truncate`                                  | Single-line text truncation with ellipsis |
| `ms-line-clamp-1` through `ms-line-clamp-5`    | Multi-line text clamping                  |
| `ms-underline` / `ms-line-through` / `ms-none` | Text decoration                           |

### Cursor

| Class                                                                                                                        | Description   |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `ms-cursor-pointer` / `ms-cursor-default` / `ms-cursor-move` / `ms-cursor-not-allowed` / `ms-cursor-wait` / `ms-cursor-text` | Cursor styles |

### Interaction

| Class                                                 | Description    |
| ----------------------------------------------------- | -------------- |
| `ms-pointer-events-none` / `ms-pointer-events-auto`   | Pointer events |
| `ms-select-none` / `ms-select-text` / `ms-select-all` | User select    |

### Aspect Ratio

| Class              | Description |
| ------------------ | ----------- |
| `ms-aspect-square` | 1:1         |
| `ms-aspect-video`  | 16:9        |
| `ms-aspect-4-3`    | 4:3         |
| `ms-aspect-21-9`   | 21:9        |

### Object Fit

| Class                                                                                                  | Description     |
| ------------------------------------------------------------------------------------------------------ | --------------- |
| `ms-object-contain` / `ms-object-cover` / `ms-object-fill` / `ms-object-none` / `ms-object-scale-down` | Object fit      |
| `ms-object-center` / `ms-object-top` / `ms-object-bottom` / `ms-object-left` / `ms-object-right`       | Object position |

### Z-Index

| Class                      | Description                            |
| -------------------------- | -------------------------------------- |
| `ms-z-0` through `ms-z-50` | Z-index values (0, 10, 20, 30, 40, 50) |
| `ms-z-dropdown`            | 1000                                   |
| `ms-z-sticky`              | 1020                                   |
| `ms-z-fixed`               | 1030                                   |
| `ms-z-modal`               | 1040                                   |
| `ms-z-popover`             | 1050                                   |
| `ms-z-tooltip`             | 1060                                   |

### Accessibility

| Class            | Description                                  |
| ---------------- | -------------------------------------------- |
| `ms-sr-only`     | Visually hidden, available to screen readers |
| `ms-skip-link`   | Skip navigation link (visible on focus)      |
| `ms-back-to-top` | Fixed scroll-to-top button (bottom-right)    |
| `ms-section`     | Section spacing utility (padding-top/bottom) |

> **Requires JavaScript:** `ms-back-to-top` needs `dist/moonshot.min.js` for scroll visibility toggling and smooth scroll behavior.
