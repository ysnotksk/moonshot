/**
 * Moonshot CSS Framework - Main JavaScript Entry
 *
 * @version 0.2.0
 * @license MIT
 */

import { Navigation } from './components/navigation.js';
import AnimatedStats from './components/stats.js';
import BackToTop from './components/back-to-top.js';

// Export components for direct use
export { Navigation, AnimatedStats, BackToTop };

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
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMoonshot);
} else {
  initMoonshot();
}

// Export version
export const version = '0.2.0';

// Global namespace (for non-module usage)
if (typeof window !== 'undefined') {
  window.Moonshot = {
    Navigation,
    AnimatedStats,
    BackToTop,
    version,
    init: initMoonshot,
  };
}
