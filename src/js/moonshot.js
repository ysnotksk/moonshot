/**
 * Moonshot CSS Framework - Main JavaScript Entry
 *
 * @version 0.1.0
 * @license MIT
 */

import { Navigation } from './components/navigation.js';
import AnimatedStats from './components/stats.js';
import BackToTop from './components/back-to-top.js';
import CookieBanner from './components/cookie-banner.js';

// Export components for direct use
export { Navigation, AnimatedStats, BackToTop, CookieBanner };

// Auto-initialize all components
function initMoonshot() {
  // Auto-initialize navigation
  const navElement = document.querySelector('.ms-navbar');
  if (navElement) {
    new Navigation();
  }

  // Auto-initialize animated stats
  const statsElements = document.querySelectorAll('[data-stat-value]');
  if (statsElements.length > 0) {
    new AnimatedStats();
  }

  // Auto-initialize back to top
  const backToTopElement = document.querySelector('.ms-back-to-top');
  if (backToTopElement) {
    new BackToTop();
  }

  // Auto-initialize cookie banner
  const cookieBannerElement = document.querySelector('.ms-cookie-banner');
  if (cookieBannerElement) {
    new CookieBanner();
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMoonshot);
} else {
  initMoonshot();
}

// Export version
export const version = '0.1.0';

// Global namespace (for non-module usage)
if (typeof window !== 'undefined') {
  window.Moonshot = {
    Navigation,
    AnimatedStats,
    BackToTop,
    CookieBanner,
    version,
    init: initMoonshot,
  };
}
