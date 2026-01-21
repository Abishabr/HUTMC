/**
 * CSS Module Utilities
 * Helper functions for working with CSS modules
 */

/**
 * Combine CSS module classes (similar to clsx but for CSS modules)
 * @param {...any} classes - CSS module classes, strings, objects, or arrays
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}

/**
 * Create a class name combiner for a specific CSS module
 * @param {Object} styles - CSS module styles object
 * @returns {Function} Class name combiner function
 */
export function createClassCombiner(styles) {
  return (...classes) => {
    return cn(
      ...classes.map(cls => {
        if (typeof cls === 'string') {
          // Handle space-separated class names
          return cls.split(' ').map(c => styles[c] || c).join(' ');
        }
        if (typeof cls === 'object' && cls !== null) {
          const result = {};
          Object.entries(cls).forEach(([key, value]) => {
            result[styles[key] || key] = value;
          });
          return result;
        }
        return cls;
      })
    );
  };
}

/**
 * Merge multiple CSS module style objects
 * @param {...Object} styleObjects - CSS module style objects
 * @returns {Object} Merged styles object
 */
export function mergeStyles(...styleObjects) {
  return Object.assign({}, ...styleObjects);
}

/**
 * Create responsive class names based on breakpoints
 * @param {Object} styles - CSS module styles object
 * @param {Object} responsiveClasses - Object with breakpoint keys and class values
 * @returns {string} Combined responsive class names
 */
export function responsive(styles, responsiveClasses) {
  return Object.entries(responsiveClasses)
    .map(([breakpoint, className]) => {
      if (breakpoint === 'base') {
        return styles[className] || className;
      }
      return styles[`${breakpoint}${className.charAt(0).toUpperCase()}${className.slice(1)}`] || '';
    })
    .filter(Boolean)
    .join(' ');
}

/**
 * Create variant classes based on props
 * @param {Object} styles - CSS module styles object
 * @param {Object} variants - Variant configuration
 * @param {Object} props - Component props
 * @returns {string} Variant class names
 */
export function variants(styles, variants, props) {
  return Object.entries(variants)
    .map(([variantName, variantConfig]) => {
      const propValue = props[variantName];
      if (propValue && variantConfig[propValue]) {
        return styles[variantConfig[propValue]] || variantConfig[propValue];
      }
      if (variantConfig.default) {
        return styles[variantConfig.default] || variantConfig.default;
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

/**
 * Handle conditional classes
 * @param {Object} styles - CSS module styles object
 * @param {Object} conditions - Object with condition keys and class values
 * @returns {string} Conditional class names
 */
export function conditional(styles, conditions) {
  return Object.entries(conditions)
    .filter(([, condition]) => Boolean(condition))
    .map(([className]) => styles[className] || className)
    .join(' ');
}

/**
 * Create a theme-aware class combiner
 * @param {Object} lightStyles - Light theme CSS module
 * @param {Object} darkStyles - Dark theme CSS module
 * @param {boolean} isDark - Whether dark theme is active
 * @returns {Function} Theme-aware class combiner
 */
export function createThemeCombiner(lightStyles, darkStyles, isDark) {
  const styles = isDark ? { ...lightStyles, ...darkStyles } : lightStyles;
  return createClassCombiner(styles);
}

/**
 * Extract CSS module class names for debugging
 * @param {Object} styles - CSS module styles object
 * @returns {string[]} Array of available class names
 */
export function getAvailableClasses(styles) {
  return Object.keys(styles);
}

/**
 * Validate that all required classes exist in the CSS module
 * @param {Object} styles - CSS module styles object
 * @param {string[]} requiredClasses - Array of required class names
 * @returns {Object} Validation result
 */
export function validateClasses(styles, requiredClasses) {
  const missing = requiredClasses.filter(cls => !styles[cls]);
  return {
    isValid: missing.length === 0,
    missing,
    available: Object.keys(styles)
  };
}

/**
 * Create a CSS module class name with fallback
 * @param {Object} styles - CSS module styles object
 * @param {string} className - Class name to look up
 * @param {string} fallback - Fallback class name
 * @returns {string} CSS module class name or fallback
 */
export function withFallback(styles, className, fallback = '') {
  return styles[className] || fallback;
}

/**
 * Compose multiple CSS module class functions
 * @param {...Function} fns - Class name functions
 * @returns {Function} Composed function
 */
export function compose(...fns) {
  return (...args) => {
    return fns.reduce((result, fn) => {
      const newClasses = fn(...args);
      return cn(result, newClasses);
    }, '');
  };
}