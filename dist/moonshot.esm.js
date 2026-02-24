// src/js/components/navigation.js
var Navigation = class {
  constructor(options = {}) {
    this.toggleSelector = options.toggleSelector || "#navbar-toggle";
    this.menuSelector = options.menuSelector || "#navbar-menu";
    this.activeClass = options.activeClass || "ms-navbar__menu--open";
    this.toggle = null;
    this.menu = null;
    this.init();
  }
  init() {
    this.toggle = document.querySelector(this.toggleSelector);
    this.menu = document.querySelector(this.menuSelector);
    if (!this.toggle || !this.menu) {
      console.warn("Moonshot Navigation: Toggle or menu element not found");
      return;
    }
    this.setActiveLink();
    this.bindEvents();
  }
  setActiveLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split("/").pop() || "index.html";
    const links = this.menu.querySelectorAll("a.ms-navbar__link");
    links.forEach((link) => {
      const linkHref = link.getAttribute("href");
      const linkPage = linkHref.split("/").pop();
      link.classList.remove("ms-navbar__link--active");
      if (linkPage === currentPage || currentPage === "" && linkPage === "index.html" || currentPage === "index.html" && linkPage === "front-page.html") {
        link.classList.add("ms-navbar__link--active");
      }
    });
  }
  bindEvents() {
    this.toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleMenu();
    });
    document.addEventListener("click", (e) => {
      if (this.isMenuOpen() && !this.isClickInside(e)) {
        this.closeMenu();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen()) {
        this.closeMenu();
        this.toggle.focus();
      }
    });
    const links = this.menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
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
    this.toggle.setAttribute("aria-expanded", "true");
    this.menu.setAttribute("aria-hidden", "false");
  }
  closeMenu() {
    this.menu.classList.remove(this.activeClass);
    this.toggle.setAttribute("aria-expanded", "false");
    this.menu.setAttribute("aria-hidden", "true");
  }
  isMenuOpen() {
    return this.menu.classList.contains(this.activeClass);
  }
  isClickInside(event) {
    return this.toggle.contains(event.target) || this.menu.contains(event.target);
  }
  destroy() {
    this.toggle = null;
    this.menu = null;
  }
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavigation);
} else {
  initNavigation();
}
function initNavigation() {
  const navElement = document.querySelector("[data-ms-nav]");
  if (navElement) {
    new Navigation();
  }
}

// src/js/components/stats.js
var AnimatedStats = class {
  constructor(options = {}) {
    this.options = {
      duration: 2e3,
      // Animation duration in milliseconds
      easing: "easeOutCubic",
      // Easing function
      startDelay: 100,
      // Delay before starting animation
      staggerDelay: 100,
      // Delay between each stat animation
      selector: "[data-stat-value]",
      // Selector for stat value elements
      ...options
    };
    this.stats = [];
    this.observer = null;
    this.init();
  }
  init() {
    const statElements = document.querySelectorAll(this.options.selector);
    if (statElements.length === 0) {
      return;
    }
    statElements.forEach((element, index) => {
      const targetValue = this.parseValue(element.getAttribute("data-stat-value"));
      const prefix = element.getAttribute("data-stat-prefix") || "";
      const suffix = element.getAttribute("data-stat-suffix") || "";
      if (targetValue !== null) {
        this.stats.push({
          element,
          targetValue,
          prefix,
          suffix,
          index,
          animated: false
        });
      }
    });
    this.setupObserver();
  }
  parseValue(value) {
    if (!value) return null;
    const cleanValue = value.replace(/[^0-9.]/g, "");
    const numValue = parseFloat(cleanValue);
    if (isNaN(numValue)) return null;
    if (value.includes("K") || value.toLowerCase().includes("k")) {
      return numValue * 1e3;
    }
    if (value.includes("M") || value.toLowerCase().includes("m")) {
      return numValue * 1e6;
    }
    if (value.includes("B") || value.toLowerCase().includes("b")) {
      return numValue * 1e9;
    }
    return numValue;
  }
  formatValue(value, originalValue) {
    const stat = this.stats.find((s) => s.targetValue === value);
    const prefix = stat?.prefix || "";
    const suffix = stat?.suffix || "";
    let finalSuffix = suffix;
    if (!finalSuffix && originalValue) {
      const match = originalValue.match(/[^0-9.KMBkmb]+$/);
      if (match) {
        finalSuffix = match[0];
      }
    }
    if (originalValue) {
      if (originalValue.includes("K") || originalValue.toLowerCase().includes("k")) {
        return `${prefix}${(value / 1e3).toFixed(value % 1e3 === 0 ? 0 : 1)}K${finalSuffix}`;
      }
      if (originalValue.includes("M") || originalValue.toLowerCase().includes("m")) {
        return `${prefix}${(value / 1e6).toFixed(value % 1e6 === 0 ? 0 : 1)}M${finalSuffix}`;
      }
      if (originalValue.includes("B") || originalValue.toLowerCase().includes("b")) {
        return `${prefix}${(value / 1e9).toFixed(value % 1e9 === 0 ? 0 : 1)}B${finalSuffix}`;
      }
      if (originalValue.includes("%") && !finalSuffix.includes("%")) {
        return `${prefix}${Math.round(value)}%${finalSuffix}`;
      }
      if (originalValue.includes("$")) {
        return `${prefix}${Math.round(value).toLocaleString()}${finalSuffix}`;
      }
      if (originalValue.includes("+") && !finalSuffix.includes("+")) {
        return `${prefix}${Math.round(value)}+${finalSuffix}`;
      }
      if (originalValue.includes("<")) {
        return `${prefix}< ${Math.round(value)}${finalSuffix}`;
      }
      if (originalValue.includes("\u221E")) {
        return `${prefix}\u221E${finalSuffix}`;
      }
    }
    return `${prefix}${Math.round(value).toLocaleString()}${finalSuffix}`;
  }
  setupObserver() {
    if (!("IntersectionObserver" in window)) {
      this.animateAll();
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statContainer = entry.target.closest("[data-stats-section]") || entry.target;
            this.animateStatsInContainer(statContainer);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        // Trigger when 20% visible
        rootMargin: "0px 0px -50px 0px"
        // Trigger slightly before fully visible
      }
    );
    this.stats.forEach((stat) => {
      const container = stat.element.closest("section") || stat.element.parentElement;
      if (container) {
        this.observer.observe(container);
      }
    });
  }
  animateStatsInContainer(container) {
    const containerStats = this.stats.filter((stat) => {
      return container.contains(stat.element) && !stat.animated;
    });
    containerStats.forEach((stat, index) => {
      setTimeout(
        () => {
          this.animateStat(stat);
        },
        this.options.startDelay + index * this.options.staggerDelay
      );
    });
  }
  animateStat(stat) {
    if (stat.animated) return;
    stat.animated = true;
    const originalValue = stat.element.getAttribute("data-stat-value");
    const startValue = 0;
    const endValue = stat.targetValue;
    const startTime = performance.now();
    const duration = this.options.duration;
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = this.ease(progress, this.options.easing);
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      stat.element.textContent = this.formatValue(currentValue, originalValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        stat.element.textContent = this.formatValue(endValue, originalValue);
      }
    };
    requestAnimationFrame(animate);
  }
  animateAll() {
    this.stats.forEach((stat, index) => {
      setTimeout(
        () => {
          this.animateStat(stat);
        },
        this.options.startDelay + index * this.options.staggerDelay
      );
    });
  }
  ease(t, type) {
    switch (type) {
      case "easeOutCubic":
        return 1 - Math.pow(1 - t, 3);
      case "easeOutQuad":
        return 1 - (1 - t) * (1 - t);
      case "easeInOutCubic":
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      case "linear":
        return t;
      default:
        return 1 - Math.pow(1 - t, 3);
    }
  }
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.stats = [];
  }
};
var stats_default = AnimatedStats;

// src/js/components/back-to-top.js
var BackToTop = class {
  constructor(options = {}) {
    this.selector = options.selector || ".ms-back-to-top";
    this.visibleClass = options.visibleClass || "ms-back-to-top--visible";
    this.threshold = options.threshold || 300;
    this.button = null;
    this.init();
  }
  init() {
    this.button = document.querySelector(this.selector);
    if (!this.button) return;
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > this.threshold) {
          this.button.classList.add(this.visibleClass);
        } else {
          this.button.classList.remove(this.visibleClass);
        }
      },
      { passive: true }
    );
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        this._smoothScroll();
      }
    });
  }
  _smoothScroll() {
    const startY = window.scrollY;
    const duration = 500;
    const startTime = Date.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const step = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      window.scrollTo(0, startY * (1 - easeOut(progress)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
};
var back_to_top_default = BackToTop;

// src/js/components/cookie-banner.js
var CookieBanner = class {
  constructor(options = {}) {
    this.selector = options.selector || ".ms-cookie-banner";
    this.visibleClass = options.visibleClass || "ms-cookie-banner--visible";
    this.storageKey = options.storageKey || "ms-cookie-consent";
    this.banner = null;
    this.init();
  }
  init() {
    this.banner = document.querySelector(this.selector);
    if (!this.banner) return;
    if (!this.hasConsent()) {
      requestAnimationFrame(() => {
        this.banner.classList.add(this.visibleClass);
      });
    }
    const acceptBtn = this.banner.querySelector("[data-cookie-accept]");
    const rejectBtn = this.banner.querySelector("[data-cookie-reject]");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => this.accept());
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", () => this.reject());
    }
  }
  hasConsent() {
    return localStorage.getItem(this.storageKey) !== null;
  }
  accept() {
    localStorage.setItem(this.storageKey, "accepted");
    this.hide();
  }
  reject() {
    localStorage.setItem(this.storageKey, "rejected");
    this.hide();
  }
  hide() {
    if (this.banner) {
      this.banner.classList.remove(this.visibleClass);
    }
  }
};
var cookie_banner_default = CookieBanner;

// src/js/moonshot.js
function initMoonshot() {
  const navElement = document.querySelector(".ms-navbar");
  if (navElement) {
    new Navigation();
  }
  const statsElements = document.querySelectorAll("[data-stat-value]");
  if (statsElements.length > 0) {
    new stats_default();
  }
  const backToTopElement = document.querySelector(".ms-back-to-top");
  if (backToTopElement) {
    new back_to_top_default();
  }
  const cookieBannerElement = document.querySelector(".ms-cookie-banner");
  if (cookieBannerElement) {
    new cookie_banner_default();
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMoonshot);
} else {
  initMoonshot();
}
var version = "0.1.0";
if (typeof window !== "undefined") {
  window.Moonshot = {
    Navigation,
    AnimatedStats: stats_default,
    BackToTop: back_to_top_default,
    CookieBanner: cookie_banner_default,
    version,
    init: initMoonshot
  };
}
export {
  stats_default as AnimatedStats,
  back_to_top_default as BackToTop,
  cookie_banner_default as CookieBanner,
  Navigation,
  version
};
/**
 * Moonshot CSS Framework - Animated Stats Component
 *
 * Animates numeric values in stats sections with a counting-up effect.
 * Uses Intersection Observer to trigger animation when stats enter viewport.
 *
 * @version 0.1.0
 * @license MIT
 */
/**
 * Moonshot CSS Framework - Main JavaScript Entry
 *
 * @version 0.1.0
 * @license MIT
 */
