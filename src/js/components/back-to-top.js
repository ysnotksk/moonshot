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
      // Feature-detect smooth scroll (missing: iOS < 15, Android < 10)
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this._smoothScroll();
      }
    });
  }
  _smoothScroll() {
    const startY = window.scrollY;
    const duration = 500;
    const startTime = Date.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    const step = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      window.scrollTo(0, startY * (1 - easeOut(progress)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}

export default BackToTop;
