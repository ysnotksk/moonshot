/**
 * Moonshot CSS Framework - Cookie Banner Component
 * Manages cookie consent with localStorage persistence
 */

export class CookieBanner {
  constructor(options = {}) {
    this.selector = options.selector || '.ms-cookie-banner';
    this.visibleClass = options.visibleClass || 'ms-cookie-banner--visible';
    this.storageKey = options.storageKey || 'ms-cookie-consent';
    this.banner = null;
    this.init();
  }

  init() {
    this.banner = document.querySelector(this.selector);
    if (!this.banner) return;

    // Show banner if no consent recorded
    if (!this.hasConsent()) {
      // Delay slightly so the slide-up animation is visible
      requestAnimationFrame(() => {
        this.banner.classList.add(this.visibleClass);
      });
    }

    // Bind button actions
    const acceptBtn = this.banner.querySelector('[data-cookie-accept]');
    const rejectBtn = this.banner.querySelector('[data-cookie-reject]');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.accept());
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => this.reject());
    }
  }

  hasConsent() {
    return localStorage.getItem(this.storageKey) !== null;
  }

  accept() {
    localStorage.setItem(this.storageKey, 'accepted');
    this.hide();
  }

  reject() {
    localStorage.setItem(this.storageKey, 'rejected');
    this.hide();
  }

  hide() {
    if (this.banner) {
      this.banner.classList.remove(this.visibleClass);
    }
  }
}

export default CookieBanner;
