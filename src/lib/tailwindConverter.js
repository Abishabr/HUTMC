/**
 * Tailwind to CSS Module Converter Utility
 * Converts Tailwind CSS classes to CSS module equivalents
 */

// Tailwind to CSS property mapping
export const tailwindToCSSMap = {
  // Layout
  'flex': { display: 'flex' },
  'flex-col': { display: 'flex', flexDirection: 'column' },
  'flex-row': { display: 'flex', flexDirection: 'row' },
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'inline-flex': { display: 'inline-flex' },
  'grid': { display: 'grid' },
  'hidden': { display: 'none' },
  
  // Flexbox
  'items-center': { alignItems: 'center' },
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'justify-center': { justifyContent: 'center' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  
  // Gap
  'gap-1': { gap: '0.25rem' },
  'gap-2': { gap: '0.5rem' },
  'gap-3': { gap: '0.75rem' },
  'gap-4': { gap: '1rem' },
  'gap-5': { gap: '1.25rem' },
  'gap-6': { gap: '1.5rem' },
  'gap-8': { gap: '2rem' },
  'gap-10': { gap: '2.5rem' },
  'gap-12': { gap: '3rem' },
  
  // Padding
  'p-0': { padding: '0' },
  'p-1': { padding: '0.25rem' },
  'p-2': { padding: '0.5rem' },
  'p-3': { padding: '0.75rem' },
  'p-4': { padding: '1rem' },
  'p-5': { padding: '1.25rem' },
  'p-6': { padding: '1.5rem' },
  'p-8': { padding: '2rem' },
  'p-10': { padding: '2.5rem' },
  'p-12': { padding: '3rem' },
  
  'px-1': { paddingLeft: '0.25rem', paddingRight: '0.25rem' },
  'px-2': { paddingLeft: '0.5rem', paddingRight: '0.5rem' },
  'px-3': { paddingLeft: '0.75rem', paddingRight: '0.75rem' },
  'px-4': { paddingLeft: '1rem', paddingRight: '1rem' },
  'px-6': { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
  'px-8': { paddingLeft: '2rem', paddingRight: '2rem' },
  
  'py-1': { paddingTop: '0.25rem', paddingBottom: '0.25rem' },
  'py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
  'py-3': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
  'py-4': { paddingTop: '1rem', paddingBottom: '1rem' },
  'py-6': { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
  'py-8': { paddingTop: '2rem', paddingBottom: '2rem' },
  
  // Margin
  'm-0': { margin: '0' },
  'm-1': { margin: '0.25rem' },
  'm-2': { margin: '0.5rem' },
  'm-3': { margin: '0.75rem' },
  'm-4': { margin: '1rem' },
  'm-6': { margin: '1.5rem' },
  'm-8': { margin: '2rem' },
  
  'mx-1': { marginLeft: '0.25rem', marginRight: '0.25rem' },
  'mx-2': { marginLeft: '0.5rem', marginRight: '0.5rem' },
  'mx-4': { marginLeft: '1rem', marginRight: '1rem' },
  'mx-6': { marginLeft: '1.5rem', marginRight: '1.5rem' },
  'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },
  
  'my-1': { marginTop: '0.25rem', marginBottom: '0.25rem' },
  'my-2': { marginTop: '0.5rem', marginBottom: '0.5rem' },
  'my-4': { marginTop: '1rem', marginBottom: '1rem' },
  'my-6': { marginTop: '1.5rem', marginBottom: '1.5rem' },
  'my-8': { marginTop: '2rem', marginBottom: '2rem' },
  
  // Typography
  'text-xs': { fontSize: '0.75rem', lineHeight: '1rem' },
  'text-sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
  'text-base': { fontSize: '1rem', lineHeight: '1.5rem' },
  'text-lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
  'text-xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
  'text-2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
  'text-3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
  'text-4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
  'text-5xl': { fontSize: '3rem', lineHeight: '1' },
  'text-6xl': { fontSize: '3.75rem', lineHeight: '1' },
  'text-7xl': { fontSize: '4.5rem', lineHeight: '1' },
  'text-8xl': { fontSize: '6rem', lineHeight: '1' },
  
  'font-thin': { fontWeight: '100' },
  'font-light': { fontWeight: '300' },
  'font-normal': { fontWeight: '400' },
  'font-medium': { fontWeight: '500' },
  'font-semibold': { fontWeight: '600' },
  'font-bold': { fontWeight: '700' },
  'font-extrabold': { fontWeight: '800' },
  
  'text-center': { textAlign: 'center' },
  'text-left': { textAlign: 'left' },
  'text-right': { textAlign: 'right' },
  
  'leading-tight': { lineHeight: '1.25' },
  'leading-snug': { lineHeight: '1.375' },
  'leading-normal': { lineHeight: '1.5' },
  'leading-relaxed': { lineHeight: '1.625' },
  'leading-loose': { lineHeight: '2' },
  
  'tracking-tighter': { letterSpacing: '-0.05em' },
  'tracking-tight': { letterSpacing: '-0.025em' },
  'tracking-normal': { letterSpacing: '0em' },
  'tracking-wide': { letterSpacing: '0.025em' },
  'tracking-wider': { letterSpacing: '0.05em' },
  
  // Colors
  'text-primary': { color: 'hsl(var(--primary))' },
  'text-secondary': { color: 'hsl(var(--secondary))' },
  'text-muted-foreground': { color: 'hsl(var(--muted-foreground))' },
  'text-foreground': { color: 'hsl(var(--foreground))' },
  'text-gold': { color: 'hsl(var(--gold))' },
  'text-gold-muted': { color: 'hsl(var(--gold-muted))' },
  'text-gold-bright': { color: 'hsl(var(--gold-bright))' },
  'text-white': { color: '#ffffff' },
  'text-black': { color: '#000000' },
  
  'bg-primary': { backgroundColor: 'hsl(var(--primary))' },
  'bg-secondary': { backgroundColor: 'hsl(var(--secondary))' },
  'bg-muted': { backgroundColor: 'hsl(var(--muted))' },
  'bg-background': { backgroundColor: 'hsl(var(--background))' },
  'bg-card': { backgroundColor: 'hsl(var(--card))' },
  'bg-white': { backgroundColor: '#ffffff' },
  'bg-black': { backgroundColor: '#000000' },
  'bg-transparent': { backgroundColor: 'transparent' },
  
  'border-primary': { borderColor: 'hsl(var(--primary))' },
  'border-secondary': { borderColor: 'hsl(var(--secondary))' },
  'border-muted': { borderColor: 'hsl(var(--border))' },
  'border-gold': { borderColor: 'hsl(var(--gold))' },
  'border-transparent': { borderColor: 'transparent' },
  
  // Borders
  'border': { borderWidth: '1px' },
  'border-0': { borderWidth: '0' },
  'border-2': { borderWidth: '2px' },
  'border-t': { borderTopWidth: '1px' },
  'border-b': { borderBottomWidth: '1px' },
  'border-l': { borderLeftWidth: '1px' },
  'border-r': { borderRightWidth: '1px' },
  
  'rounded': { borderRadius: 'var(--radius)' },
  'rounded-sm': { borderRadius: 'calc(var(--radius) - 4px)' },
  'rounded-md': { borderRadius: 'calc(var(--radius) - 2px)' },
  'rounded-lg': { borderRadius: 'calc(var(--radius) + 2px)' },
  'rounded-xl': { borderRadius: 'calc(var(--radius) + 4px)' },
  'rounded-full': { borderRadius: '9999px' },
  'rounded-none': { borderRadius: '0' },
  
  // Shadows
  'shadow-sm': { boxShadow: 'var(--shadow-sm)' },
  'shadow-md': { boxShadow: 'var(--shadow-md)' },
  'shadow-lg': { boxShadow: 'var(--shadow-lg)' },
  'shadow-none': { boxShadow: 'none' },
  
  // Position
  'relative': { position: 'relative' },
  'absolute': { position: 'absolute' },
  'fixed': { position: 'fixed' },
  'sticky': { position: 'sticky' },
  
  // Width & Height
  'w-full': { width: '100%' },
  'w-auto': { width: 'auto' },
  'h-full': { height: '100%' },
  'h-auto': { height: 'auto' },
  'h-screen': { height: '100vh' },
  
  // Overflow
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-auto': { overflow: 'auto' },
  'overflow-scroll': { overflow: 'scroll' },
  
  // Transitions
  'transition-all': { transition: 'all var(--transition-base)' },
  'transition-colors': { transition: 'color var(--transition-base), background-color var(--transition-base), border-color var(--transition-base)' },
  'transition-transform': { transition: 'transform var(--transition-base)' },
  
  // Transform
  '-translate-y-1': { transform: 'translateY(-0.25rem)' },
  '-translate-y-2': { transform: 'translateY(-0.5rem)' },
  'scale-105': { transform: 'scale(1.05)' },
  'scale-110': { transform: 'scale(1.1)' },
  
  // Cursor
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-default': { cursor: 'default' },
  'cursor-not-allowed': { cursor: 'not-allowed' },
  
  // Opacity
  'opacity-0': { opacity: '0' },
  'opacity-25': { opacity: '0.25' },
  'opacity-50': { opacity: '0.5' },
  'opacity-75': { opacity: '0.75' },
  'opacity-100': { opacity: '1' },
  
  // Z-Index
  'z-0': { zIndex: '0' },
  'z-10': { zIndex: '10' },
  'z-20': { zIndex: '20' },
  'z-30': { zIndex: '30' },
  'z-40': { zIndex: '40' },
  'z-50': { zIndex: '50' },
};

// Responsive breakpoints mapping
export const responsiveBreakpoints = {
  'sm': '640px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
};

// Pseudo-class variants mapping
export const pseudoClassVariants = {
  'hover': ':hover',
  'focus': ':focus',
  'active': ':active',
  'disabled': ':disabled',
  'first': ':first-child',
  'last': ':last-child',
  'odd': ':nth-child(odd)',
  'even': ':nth-child(even)'
};

/**
 * Extract Tailwind classes from a className string
 * @param {string} classNames - Space-separated class names
 * @returns {string[]} Array of individual class names
 */
export function extractTailwindClasses(classNames) {
  if (!classNames || typeof classNames !== 'string') return [];
  return classNames.trim().split(/\s+/).filter(Boolean);
}

/**
 * Parse a Tailwind class to extract responsive prefix, pseudo-class variant, and base class
 * @param {string} className - Single Tailwind class name
 * @returns {Object} Parsed class information
 */
export function parseTailwindClass(className) {
  const parts = className.split(':');
  
  if (parts.length === 1) {
    return {
      responsive: null,
      pseudoClass: null,
      baseClass: parts[0]
    };
  }
  
  if (parts.length === 2) {
    const [prefix, baseClass] = parts;
    if (responsiveBreakpoints[prefix]) {
      return {
        responsive: prefix,
        pseudoClass: null,
        baseClass
      };
    } else if (pseudoClassVariants[prefix]) {
      return {
        responsive: null,
        pseudoClass: prefix,
        baseClass
      };
    }
  }
  
  if (parts.length === 3) {
    const [responsive, pseudoClass, baseClass] = parts;
    return {
      responsive: responsiveBreakpoints[responsive] ? responsive : null,
      pseudoClass: pseudoClassVariants[pseudoClass] ? pseudoClass : null,
      baseClass
    };
  }
  
  return {
    responsive: null,
    pseudoClass: null,
    baseClass: className
  };
}

/**
 * Convert a single Tailwind class to CSS properties
 * @param {string} className - Tailwind class name
 * @returns {Object} CSS properties object
 */
export function convertTailwindClass(className) {
  const parsed = parseTailwindClass(className);
  const cssProperties = tailwindToCSSMap[parsed.baseClass];
  
  if (!cssProperties) {
    console.warn(`Unknown Tailwind class: ${parsed.baseClass}`);
    return null;
  }
  
  return {
    ...parsed,
    cssProperties
  };
}

/**
 * Generate CSS module content from Tailwind classes
 * @param {string[]} tailwindClasses - Array of Tailwind class names
 * @param {string} componentName - Name of the component for scoped class names
 * @returns {string} CSS module content
 */
export function generateCSSModule(tailwindClasses, componentName) {
  const cssRules = new Map();
  const mediaQueries = new Map();
  
  tailwindClasses.forEach(className => {
    const converted = convertTailwindClass(className);
    if (!converted) return;
    
    const { responsive, pseudoClass, baseClass, cssProperties } = converted;
    
    // Generate scoped class name
    const scopedClassName = generateScopedClassName(baseClass, componentName);
    
    // Build CSS rule
    let selector = `.${scopedClassName}`;
    if (pseudoClass) {
      selector += pseudoClassVariants[pseudoClass];
    }
    
    const cssRule = Object.entries(cssProperties)
      .map(([prop, value]) => `  ${camelToKebab(prop)}: ${value};`)
      .join('\n');
    
    if (responsive) {
      // Add to media query
      const breakpoint = responsiveBreakpoints[responsive];
      if (!mediaQueries.has(breakpoint)) {
        mediaQueries.set(breakpoint, new Map());
      }
      mediaQueries.get(breakpoint).set(selector, cssRule);
    } else {
      // Add to regular rules
      cssRules.set(selector, cssRule);
    }
  });
  
  // Generate CSS content
  let cssContent = '';
  
  // Regular rules
  cssRules.forEach((rule, selector) => {
    cssContent += `${selector} {\n${rule}\n}\n\n`;
  });
  
  // Media queries
  mediaQueries.forEach((rules, breakpoint) => {
    cssContent += `@media (min-width: ${breakpoint}) {\n`;
    rules.forEach((rule, selector) => {
      cssContent += `  ${selector} {\n  ${rule.replace(/\n/g, '\n  ')}\n  }\n\n`;
    });
    cssContent += '}\n\n';
  });
  
  return cssContent.trim();
}

/**
 * Generate a scoped CSS class name
 * @param {string} baseClass - Base Tailwind class
 * @param {string} componentName - Component name
 * @returns {string} Scoped class name
 */
export function generateScopedClassName(baseClass, componentName) {
  const cleanBase = baseClass.replace(/[^a-zA-Z0-9]/g, '');
  const cleanComponent = componentName.replace(/[^a-zA-Z0-9]/g, '');
  return `${cleanComponent}__${cleanBase}`;
}

/**
 * Convert camelCase to kebab-case
 * @param {string} str - camelCase string
 * @returns {string} kebab-case string
 */
export function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Update className usage in component code to use CSS modules
 * @param {string} componentCode - React component code
 * @param {Object} cssModuleMap - Mapping of Tailwind classes to CSS module classes
 * @returns {string} Updated component code
 */
export function updateClassNames(componentCode, cssModuleMap) {
  // This is a simplified implementation
  // In practice, you'd want to use a proper AST parser
  let updatedCode = componentCode;
  
  // Replace className strings with CSS module imports
  Object.entries(cssModuleMap).forEach(([tailwindClass, moduleClass]) => {
    const regex = new RegExp(`"([^"]*\\s)?${tailwindClass}(\\s[^"]*)?"|'([^']*\\s)?${tailwindClass}(\\s[^']*)?'`, 'g');
    updatedCode = updatedCode.replace(regex, (match) => {
      // This would need more sophisticated logic to handle multiple classes
      return match.replace(tailwindClass, `\${styles.${moduleClass}}`);
    });
  });
  
  return updatedCode;
}

/**
 * Main conversion function - converts Tailwind classes to CSS module
 * @param {string} classNames - Space-separated Tailwind class names
 * @param {string} componentName - Name of the component
 * @returns {Object} Conversion result with CSS content and class mapping
 */
export function convertTailwindToCSS(classNames, componentName) {
  const tailwindClasses = extractTailwindClasses(classNames);
  const cssContent = generateCSSModule(tailwindClasses, componentName);
  
  // Create mapping for class name updates
  const classMapping = {};
  tailwindClasses.forEach(className => {
    const parsed = parseTailwindClass(className);
    const scopedName = generateScopedClassName(parsed.baseClass, componentName);
    classMapping[className] = scopedName;
  });
  
  return {
    cssContent,
    classMapping,
    tailwindClasses
  };
}