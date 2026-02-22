/**
 * Moonshot CSS Framework - Navigation Component
 * Mobile menu toggle and navigation interactions
 */

export class Navigation {
  constructor(options = {}) {
    this.toggleSelector = options.toggleSelector || '#navbar-toggle';
    this.menuSelector = options.menuSelector || '#navbar-menu';
    this.activeClass = options.activeClass || 'ms-navbar__menu--open';

    this.toggle = null;
    this.menu = null;

    this.init();
  }

  init() {
    this.toggle = document.querySelector(this.toggleSelector);
    this.menu = document.querySelector(this.menuSelector);

    if (!this.toggle || !this.menu) {
      console.warn('Moonshot Navigation: Toggle or menu element not found');
      return;
    }

    // Auto-detect and set active link based on current page URL
    this.setActiveLink();

    this.bindEvents();
  }

  setActiveLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Find all navigation links
    const links = this.menu.querySelectorAll('a.ms-navbar__link');

    links.forEach(link => {
      const linkHref = link.getAttribute('href');
      const linkPage = linkHref.split('/').pop();

      // Remove existing active class
      link.classList.remove('ms-navbar__link--active');

      // Check if this link matches the current page
      if (
        linkPage === currentPage ||
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === 'index.html' && linkPage === 'front-page.html')
      ) {
        link.classList.add('ms-navbar__link--active');
      }
    });
  }

  bindEvents() {
    // Toggle menu on button click
    this.toggle.addEventListener('click', e => {
      e.stopPropagation();
      this.toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', e => {
      if (this.isMenuOpen() && !this.isClickInside(e)) {
        this.closeMenu();
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.isMenuOpen()) {
        this.closeMenu();
        this.toggle.focus();
      }
    });

    // Close menu when clicking on a link
    const links = this.menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  toggleMenu() {
    if (this.isMenuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.menu.classList.add(this.activeClass);
    this.toggle.setAttribute('aria-expanded', 'true');
    this.menu.setAttribute('aria-hidden', 'false');
  }

  closeMenu() {
    this.menu.classList.remove(this.activeClass);
    this.toggle.setAttribute('aria-expanded', 'false');
    this.menu.setAttribute('aria-hidden', 'true');
  }

  isMenuOpen() {
    return this.menu.classList.contains(this.activeClass);
  }

  isClickInside(event) {
    return this.toggle.contains(event.target) || this.menu.contains(event.target);
  }

  destroy() {
    // Clean up event listeners if needed
    this.toggle = null;
    this.menu = null;
  }
}

// Auto-initialize if data-ms-nav attribute exists
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}

function initNavigation() {
  const navElement = document.querySelector('[data-ms-nav]');
  if (navElement) {
    new Navigation();
  }
}
