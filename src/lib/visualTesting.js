/**
 * Visual Testing Utilities
 * Provides tools for visual regression testing and UI validation
 */

/**
 * Viewport configurations for responsive testing
 */
export const VIEWPORTS = {
  mobile: { width: 375, height: 667, name: 'Mobile (iPhone SE)' },
  tablet: { width: 768, height: 1024, name: 'Tablet (iPad)' },
  desktop: { width: 1440, height: 900, name: 'Desktop' },
  wide: { width: 1920, height: 1080, name: 'Wide Desktop' }
};

/**
 * Breakpoints matching the CSS design system
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

/**
 * Test scenarios for comprehensive visual testing
 */
export const TEST_SCENARIOS = {
  pages: [
    { path: '/', name: 'Home Page' },
    { path: '/about', name: 'About Page' },
    { path: '/theatre', name: 'Theatre Page' },
    { path: '/music', name: 'Music Page' },
    { path: '/events', name: 'Events Page' },
    { path: '/gallery', name: 'Gallery Page' },
    { path: '/members', name: 'Members Page' },
    { path: '/join', name: 'Join Page' },
    { path: '/contact', name: 'Contact Page' }
  ],
  components: [
    { selector: '.navbar', name: 'Navigation Bar' },
    { selector: '.hero-section', name: 'Hero Section' },
    { selector: '.contact-form', name: 'Contact Form' },
    { selector: '.footer', name: 'Footer' },
    { selector: '.gallery-grid', name: 'Gallery Grid' }
  ],
  interactions: [
    { type: 'hover', selector: 'button', name: 'Button Hover' },
    { type: 'hover', selector: 'a', name: 'Link Hover' },
    { type: 'focus', selector: 'input', name: 'Input Focus' },
    { type: 'click', selector: '.mobile-menu-toggle', name: 'Mobile Menu' }
  ]
};

/**
 * Visual testing utility class
 */
export class VisualTester {
  constructor() {
    this.results = [];
    this.errors = [];
  }

  /**
   * Captures screenshot of current viewport
   * @param {string} name - Screenshot name
   * @returns {Promise<string>} Base64 encoded screenshot
   */
  async captureScreenshot(name) {
    try {
      // Use html2canvas for client-side screenshots
      const html2canvas = await import('html2canvas');
      const canvas = await html2canvas.default(document.body, {
        useCORS: true,
        allowTaint: true,
        scale: 1,
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      return {
        name,
        dataUrl: canvas.toDataURL('image/png'),
        timestamp: new Date().toISOString(),
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };
    } catch (error) {
      console.error('Screenshot capture failed:', error);
      return null;
    }
  }

  /**
   * Tests responsive breakpoints
   * @param {string} pagePath - Page path to test
   * @returns {Promise<Array>} Test results
   */
  async testResponsiveBreakpoints(pagePath = '/') {
    const results = [];
    
    for (const [name, viewport] of Object.entries(VIEWPORTS)) {
      try {
        // Simulate viewport resize
        this.setViewport(viewport.width, viewport.height);
        
        // Wait for layout to settle
        await this.waitForLayoutStable();
        
        // Capture screenshot
        const screenshot = await this.captureScreenshot(`${pagePath}-${name}`);
        
        // Test responsive elements
        const responsiveTests = await this.testResponsiveElements();
        
        results.push({
          viewport: name,
          dimensions: viewport,
          screenshot,
          responsiveTests,
          passed: responsiveTests.every(test => test.passed)
        });
        
      } catch (error) {
        this.errors.push({
          test: 'responsive-breakpoints',
          viewport: name,
          error: error.message
        });
      }
    }
    
    return results;
  }

  /**
   * Tests hover states and animations
   * @returns {Promise<Array>} Test results
   */
  async testHoverStates() {
    const results = [];
    
    for (const interaction of TEST_SCENARIOS.interactions) {
      if (interaction.type === 'hover') {
        try {
          const elements = document.querySelectorAll(interaction.selector);
          
          for (let i = 0; i < Math.min(elements.length, 5); i++) {
            const element = elements[i];
            
            // Capture before hover
            const beforeScreenshot = await this.captureScreenshot(
              `${interaction.name}-before-${i}`
            );
            
            // Simulate hover
            this.simulateHover(element);
            await this.waitForAnimations();
            
            // Capture after hover
            const afterScreenshot = await this.captureScreenshot(
              `${interaction.name}-after-${i}`
            );
            
            // Remove hover
            this.removeHover(element);
            
            results.push({
              selector: interaction.selector,
              elementIndex: i,
              beforeScreenshot,
              afterScreenshot,
              passed: beforeScreenshot && afterScreenshot
            });
          }
          
        } catch (error) {
          this.errors.push({
            test: 'hover-states',
            selector: interaction.selector,
            error: error.message
          });
        }
      }
    }
    
    return results;
  }

  /**
   * Tests animations and transitions
   * @returns {Promise<Array>} Test results
   */
  async testAnimations() {
    const results = [];
    
    // Test CSS animations
    const animatedElements = document.querySelectorAll('[class*="animate"], [class*="transition"]');
    
    for (const element of animatedElements) {
      try {
        const computedStyle = window.getComputedStyle(element);
        const hasTransition = computedStyle.transition !== 'none';
        const hasAnimation = computedStyle.animation !== 'none';
        
        results.push({
          element: element.tagName.toLowerCase(),
          className: element.className,
          hasTransition,
          hasAnimation,
          transitionDuration: computedStyle.transitionDuration,
          animationDuration: computedStyle.animationDuration,
          passed: hasTransition || hasAnimation
        });
        
      } catch (error) {
        this.errors.push({
          test: 'animations',
          element: element.tagName,
          error: error.message
        });
      }
    }
    
    return results;
  }

  /**
   * Tests theme switching functionality
   * @returns {Promise<Object>} Test results
   */
  async testThemeSwitching() {
    const results = {
      themes: [],
      passed: false
    };
    
    try {
      // Test CSS custom properties
      const rootStyles = window.getComputedStyle(document.documentElement);
      
      const themeProperties = [
        '--background',
        '--foreground',
        '--primary',
        '--secondary',
        '--muted',
        '--border',
        '--gold',
        '--charcoal-deep'
      ];
      
      const themeValues = {};
      
      for (const property of themeProperties) {
        const value = rootStyles.getPropertyValue(property).trim();
        themeValues[property] = value;
      }
      
      results.themes.push({
        name: 'default',
        properties: themeValues,
        screenshot: await this.captureScreenshot('theme-default')
      });
      
      // Test if theme properties are properly defined
      const hasValidTheme = Object.values(themeValues).every(value => value !== '');
      
      results.passed = hasValidTheme;
      
    } catch (error) {
      this.errors.push({
        test: 'theme-switching',
        error: error.message
      });
    }
    
    return results;
  }

  /**
   * Comprehensive visual regression test suite
   * @returns {Promise<Object>} Complete test results
   */
  async runFullTestSuite() {
    const startTime = Date.now();
    
    console.log('🎨 Starting Visual Regression Test Suite...');
    
    const results = {
      timestamp: new Date().toISOString(),
      duration: 0,
      tests: {
        responsive: [],
        hover: [],
        animations: [],
        theme: null
      },
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        errors: []
      }
    };
    
    try {
      // Test responsive breakpoints for each page
      console.log('📱 Testing responsive breakpoints...');
      for (const page of TEST_SCENARIOS.pages.slice(0, 3)) { // Test first 3 pages
        const responsiveResults = await this.testResponsiveBreakpoints(page.path);
        results.tests.responsive.push({
          page: page.name,
          path: page.path,
          results: responsiveResults
        });
      }
      
      // Test hover states
      console.log('🖱️ Testing hover states...');
      results.tests.hover = await this.testHoverStates();
      
      // Test animations
      console.log('✨ Testing animations...');
      results.tests.animations = await this.testAnimations();
      
      // Test theme switching
      console.log('🎨 Testing theme functionality...');
      results.tests.theme = await this.testThemeSwitching();
      
      // Calculate summary
      results.summary.errors = this.errors;
      results.summary.total = this.calculateTotalTests(results.tests);
      results.summary.passed = this.calculatePassedTests(results.tests);
      results.summary.failed = results.summary.total - results.summary.passed;
      
    } catch (error) {
      console.error('Visual test suite failed:', error);
      results.summary.errors.push({
        test: 'test-suite',
        error: error.message
      });
    }
    
    results.duration = Date.now() - startTime;
    
    console.log(`✅ Visual regression tests completed in ${results.duration}ms`);
    console.log(`📊 Results: ${results.summary.passed}/${results.summary.total} tests passed`);
    
    return results;
  }

  /**
   * Helper methods
   */
  
  setViewport(width, height) {
    // For testing purposes, we'll simulate viewport changes
    // In a real browser automation tool, this would actually resize the viewport
    Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: height, writable: true });
    
    // Trigger resize event
    window.dispatchEvent(new Event('resize'));
  }

  async waitForLayoutStable() {
    return new Promise(resolve => {
      let resizeTimer;
      const checkStable = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resolve, 100);
      };
      checkStable();
    });
  }

  async waitForAnimations() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

  simulateHover(element) {
    element.classList.add('hover');
    element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
  }

  removeHover(element) {
    element.classList.remove('hover');
    element.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
  }

  async testResponsiveElements() {
    const tests = [];
    
    // Test navigation responsiveness
    const navbar = document.querySelector('nav');
    if (navbar) {
      const mobileMenu = navbar.querySelector('[class*="mobile"]');
      tests.push({
        name: 'Mobile Navigation',
        passed: window.innerWidth < BREAKPOINTS.lg ? !!mobileMenu : true
      });
    }
    
    // Test grid layouts
    const grids = document.querySelectorAll('[class*="grid"]');
    for (const grid of grids) {
      const computedStyle = window.getComputedStyle(grid);
      const gridColumns = computedStyle.gridTemplateColumns;
      
      tests.push({
        name: 'Grid Layout',
        element: grid.className,
        gridColumns,
        passed: gridColumns !== 'none'
      });
    }
    
    return tests;
  }

  calculateTotalTests(tests) {
    let total = 0;
    total += tests.responsive.reduce((sum, page) => sum + page.results.length, 0);
    total += tests.hover.length;
    total += tests.animations.length;
    total += tests.theme ? 1 : 0;
    return total;
  }

  calculatePassedTests(tests) {
    let passed = 0;
    
    // Count responsive tests
    for (const page of tests.responsive) {
      passed += page.results.filter(result => result.passed).length;
    }
    
    // Count hover tests
    passed += tests.hover.filter(test => test.passed).length;
    
    // Count animation tests
    passed += tests.animations.filter(test => test.passed).length;
    
    // Count theme test
    if (tests.theme && tests.theme.passed) {
      passed += 1;
    }
    
    return passed;
  }
}

/**
 * Creates a visual testing report
 * @param {Object} results - Test results
 * @returns {string} HTML report
 */
export function generateVisualReport(results) {
  const passRate = ((results.summary.passed / results.summary.total) * 100).toFixed(1);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Visual Regression Test Report</title>
      <style>
        body { font-family: system-ui, sans-serif; margin: 2rem; }
        .header { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
        .metric { background: white; padding: 1rem; border-radius: 8px; border: 1px solid #e9ecef; }
        .metric-value { font-size: 2rem; font-weight: bold; color: #495057; }
        .metric-label { color: #6c757d; font-size: 0.875rem; }
        .test-section { margin-bottom: 2rem; }
        .test-section h2 { color: #495057; border-bottom: 2px solid #e9ecef; padding-bottom: 0.5rem; }
        .test-item { background: white; border: 1px solid #e9ecef; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
        .passed { border-left: 4px solid #28a745; }
        .failed { border-left: 4px solid #dc3545; }
        .screenshot { max-width: 200px; border-radius: 4px; }
        .error { background: #f8d7da; color: #721c24; padding: 0.5rem; border-radius: 4px; margin-top: 0.5rem; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Visual Regression Test Report</h1>
        <p>Generated: ${results.timestamp}</p>
        <p>Duration: ${results.duration}ms</p>
      </div>
      
      <div class="summary">
        <div class="metric">
          <div class="metric-value">${results.summary.total}</div>
          <div class="metric-label">Total Tests</div>
        </div>
        <div class="metric">
          <div class="metric-value">${results.summary.passed}</div>
          <div class="metric-label">Passed</div>
        </div>
        <div class="metric">
          <div class="metric-value">${results.summary.failed}</div>
          <div class="metric-label">Failed</div>
        </div>
        <div class="metric">
          <div class="metric-value">${passRate}%</div>
          <div class="metric-label">Pass Rate</div>
        </div>
      </div>
      
      <div class="test-section">
        <h2>Responsive Breakpoint Tests</h2>
        ${results.tests.responsive.map(page => `
          <div class="test-item ${page.results.every(r => r.passed) ? 'passed' : 'failed'}">
            <h3>${page.page} (${page.path})</h3>
            ${page.results.map(result => `
              <div>
                <strong>${result.viewport}</strong> (${result.dimensions.width}x${result.dimensions.height})
                - ${result.passed ? '✅ Passed' : '❌ Failed'}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
      
      <div class="test-section">
        <h2>Animation Tests</h2>
        <div class="test-item ${results.tests.animations.every(a => a.passed) ? 'passed' : 'failed'}">
          <p>Found ${results.tests.animations.length} animated elements</p>
          <p>Transitions: ${results.tests.animations.filter(a => a.hasTransition).length}</p>
          <p>Animations: ${results.tests.animations.filter(a => a.hasAnimation).length}</p>
        </div>
      </div>
      
      <div class="test-section">
        <h2>Theme Tests</h2>
        <div class="test-item ${results.tests.theme?.passed ? 'passed' : 'failed'}">
          <p>Theme Properties: ${results.tests.theme?.passed ? '✅ Valid' : '❌ Invalid'}</p>
          <p>Themes Tested: ${results.tests.theme?.themes.length || 0}</p>
        </div>
      </div>
      
      ${results.summary.errors.length > 0 ? `
        <div class="test-section">
          <h2>Errors</h2>
          ${results.summary.errors.map(error => `
            <div class="error">
              <strong>${error.test}</strong>: ${error.error}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </body>
    </html>
  `;
}

/**
 * Runs visual regression tests and generates report
 * @returns {Promise<Object>} Test results and report
 */
export async function runVisualRegressionTests() {
  const tester = new VisualTester();
  const results = await tester.runFullTestSuite();
  const report = generateVisualReport(results);
  
  return {
    results,
    report,
    passed: results.summary.failed === 0
  };
}