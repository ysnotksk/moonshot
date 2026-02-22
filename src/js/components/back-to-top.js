/**
 * Moonshot CSS Framework - Back to Top Component
 * Shows/hides a scroll-to-top button based on scroll position
 */

export class BackToTop {
  constructor(options = {}) {
    this.selector = options.selector || '.ms-back-to-top';
    this.visibleClass = options.visibleClass || 'ms-back-to-top--visible';
    this.threshold = options.threshold || 300;
    this.button = null;
    this.init();
  }

  init() {
    this.button = document.querySelector(this.selector);
    if (!this.button) return;

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > this.threshold) {
          this.button.classList.add(this.visibleClass);
        } else {
          this.button.classList.remove(this.visibleClass);
        }
      },
      { passive: true }
    );

    this.button.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

export default BackToTop;
