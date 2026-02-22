/**
 * Moonshot CSS Framework - Animated Stats Component
 *
 * Animates numeric values in stats sections with a counting-up effect.
 * Uses Intersection Observer to trigger animation when stats enter viewport.
 *
 * @version 0.1.0
 * @license MIT
 */

class AnimatedStats {
  constructor(options = {}) {
    this.options = {
      duration: 2000, // Animation duration in milliseconds
      easing: 'easeOutCubic', // Easing function
      startDelay: 100, // Delay before starting animation
      staggerDelay: 100, // Delay between each stat animation
      selector: '[data-stat-value]', // Selector for stat value elements
      ...options,
    };

    this.stats = [];
    this.observer = null;
    this.init();
  }

  init() {
    // Find all stat elements
    const statElements = document.querySelectorAll(this.options.selector);

    if (statElements.length === 0) {
      return; // No stats found
    }

    // Initialize each stat
    statElements.forEach((element, index) => {
      const targetValue = this.parseValue(element.getAttribute('data-stat-value'));
      const prefix = element.getAttribute('data-stat-prefix') || '';
      const suffix = element.getAttribute('data-stat-suffix') || '';

      if (targetValue !== null) {
        this.stats.push({
          element,
          targetValue,
          prefix,
          suffix,
          index,
          animated: false,
        });
      }
    });

    // Set up Intersection Observer
    this.setupObserver();
  }

  parseValue(value) {
    if (!value) return null;

    // Handle different formats: "150", "150+", "$5M", "100%", etc.
    const cleanValue = value.replace(/[^0-9.]/g, '');
    const numValue = parseFloat(cleanValue);

    if (isNaN(numValue)) return null;

    // Check for multipliers
    if (value.includes('K') || value.toLowerCase().includes('k')) {
      return numValue * 1000;
    }
    if (value.includes('M') || value.toLowerCase().includes('m')) {
      return numValue * 1000000;
    }
    if (value.includes('B') || value.toLowerCase().includes('b')) {
      return numValue * 1000000000;
    }

    return numValue;
  }

  formatValue(value, originalValue) {
    // Get prefix and suffix from stat configuration
    const stat = this.stats.find(s => s.targetValue === value);
    const prefix = stat?.prefix || '';
    const suffix = stat?.suffix || '';

    // Extract suffix from original value ONLY if not explicitly set via data-stat-suffix
    let finalSuffix = suffix;
    if (!finalSuffix && originalValue) {
      // Extract trailing non-numeric characters (+, %, etc.) but NOT multipliers (K, M, B)
      const match = originalValue.match(/[^0-9.KMBkmb]+$/);
      if (match) {
        finalSuffix = match[0];
      }
    }

    // Format number based on original value
    if (originalValue) {
      // Handle multipliers (K, M, B) - these are part of the number format, not suffix
      if (originalValue.includes('K') || originalValue.toLowerCase().includes('k')) {
        return `${prefix}${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K${finalSuffix}`;
      }
      if (originalValue.includes('M') || originalValue.toLowerCase().includes('m')) {
        return `${prefix}${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M${finalSuffix}`;
      }
      if (originalValue.includes('B') || originalValue.toLowerCase().includes('b')) {
        return `${prefix}${(value / 1000000000).toFixed(value % 1000000000 === 0 ? 0 : 1)}B${finalSuffix}`;
      }
      // Handle percentages - don't add % if it's already in suffix
      if (originalValue.includes('%') && !finalSuffix.includes('%')) {
        return `${prefix}${Math.round(value)}%${finalSuffix}`;
      }
      // Handle currency - prefix is already set, just format number
      if (originalValue.includes('$')) {
        return `${prefix}${Math.round(value).toLocaleString()}${finalSuffix}`;
      }
      // Handle plus sign - don't add + if it's already in suffix
      if (originalValue.includes('+') && !finalSuffix.includes('+')) {
        return `${prefix}${Math.round(value)}+${finalSuffix}`;
      }
      // Handle less than
      if (originalValue.includes('<')) {
        return `${prefix}< ${Math.round(value)}${finalSuffix}`;
      }
      // Handle infinity
      if (originalValue.includes('∞')) {
        return `${prefix}∞${finalSuffix}`;
      }
    }

    // Default: round and format with prefix and suffix
    return `${prefix}${Math.round(value).toLocaleString()}${finalSuffix}`;
  }

  setupObserver() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: animate immediately
      this.animateAll();
      return;
    }

    // Create observer
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Find the stat container
            const statContainer = entry.target.closest('[data-stats-section]') || entry.target;
            this.animateStatsInContainer(statContainer);
            // Unobserve after animation starts
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully visible
      }
    );

    // Observe each stat's container (section or parent)
    this.stats.forEach(stat => {
      const container = stat.element.closest('section') || stat.element.parentElement;
      if (container) {
        this.observer.observe(container);
      }
    });
  }

  animateStatsInContainer(container) {
    // Find stats within this container
    const containerStats = this.stats.filter(stat => {
      return container.contains(stat.element) && !stat.animated;
    });

    // Animate each stat with stagger
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

    const originalValue = stat.element.getAttribute('data-stat-value');
    const startValue = 0;
    const endValue = stat.targetValue;
    const startTime = performance.now();
    const duration = this.options.duration;

    const animate = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing
      const easedProgress = this.ease(progress, this.options.easing);

      // Calculate current value
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      // Update element
      stat.element.textContent = this.formatValue(currentValue, originalValue);

      // Continue animation
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final value is set
        stat.element.textContent = this.formatValue(endValue, originalValue);
      }
    };

    requestAnimationFrame(animate);
  }

  animateAll() {
    // Animate all stats immediately (fallback)
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
    // Easing functions
    switch (type) {
      case 'easeOutCubic':
        return 1 - Math.pow(1 - t, 3);
      case 'easeOutQuad':
        return 1 - (1 - t) * (1 - t);
      case 'easeInOutCubic':
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      case 'linear':
        return t;
      default:
        return 1 - Math.pow(1 - t, 3); // Default: easeOutCubic
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.stats = [];
  }
}

export default AnimatedStats;
