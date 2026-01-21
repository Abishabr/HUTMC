/**
 * Functional Testing Utilities
 * Provides tools for testing user interactions, workflows, and application behavior
 */

/**
 * Test categories for functional testing
 */
export const TEST_CATEGORIES = {
  NAVIGATION: 'navigation',
  FORMS: 'forms',
  INTERACTIONS: 'interactions',
  STATE: 'state',
  API: 'api',
  ROUTING: 'routing'
};

/**
 * Test scenarios for comprehensive functional testing
 */
export const FUNCTIONAL_TEST_SCENARIOS = {
  navigation: [
    {
      name: 'Main Navigation Links',
      description: 'Test all main navigation menu links',
      steps: [
        { action: 'click', selector: 'nav a[href="/"]', expected: 'Navigate to home page' },
        { action: 'click', selector: 'nav a[href="/about"]', expected: 'Navigate to about page' },
        { action: 'click', selector: 'nav a[href="/theatre"]', expected: 'Navigate to theatre page' },
        { action: 'click', selector: 'nav a[href="/music"]', expected: 'Navigate to music page' },
        { action: 'click', selector: 'nav a[href="/events"]', expected: 'Navigate to events page' },
        { action: 'click', selector: 'nav a[href="/gallery"]', expected: 'Navigate to gallery page' },
        { action: 'click', selector: 'nav a[href="/members"]', expected: 'Navigate to members page' },
        { action: 'click', selector: 'nav a[href="/join"]', expected: 'Navigate to join page' },
        { action: 'click', selector: 'nav a[href="/contact"]', expected: 'Navigate to contact page' }
      ]
    },
    {
      name: 'Mobile Navigation',
      description: 'Test mobile menu functionality',
      steps: [
        { action: 'resize', width: 375, height: 667, expected: 'Switch to mobile layout' },
        { action: 'click', selector: '[class*="mobile"]', expected: 'Open mobile menu' },
        { action: 'visible', selector: '[class*="mobile-nav"]', expected: 'Mobile menu is visible' },
        { action: 'click', selector: '[class*="mobile-nav"] a[href="/about"]', expected: 'Navigate via mobile menu' },
        { action: 'hidden', selector: '[class*="mobile-nav"]', expected: 'Mobile menu closes after navigation' }
      ]
    },
    {
      name: 'Browser Navigation',
      description: 'Test browser back/forward functionality',
      steps: [
        { action: 'navigate', url: '/', expected: 'Load home page' },
        { action: 'navigate', url: '/about', expected: 'Load about page' },
        { action: 'back', expected: 'Return to home page' },
        { action: 'forward', expected: 'Return to about page' }
      ]
    }
  ],
  forms: [
    {
      name: 'Contact Form Validation',
      description: 'Test contact form validation and submission',
      steps: [
        { action: 'navigate', url: '/contact', expected: 'Load contact page' },
        { action: 'click', selector: 'button[type="submit"]', expected: 'Show validation errors' },
        { action: 'visible', selector: '[class*="error"]', expected: 'Validation errors are visible' },
        { action: 'type', selector: 'input[name="name"]', value: 'Test User', expected: 'Name field accepts input' },
        { action: 'type', selector: 'input[name="email"]', value: 'test@example.com', expected: 'Email field accepts input' },
        { action: 'select', selector: 'select[name="subject"]', value: 'general', expected: 'Subject can be selected' },
        { action: 'type', selector: 'textarea[name="message"]', value: 'This is a test message for functional testing.', expected: 'Message field accepts input' },
        { action: 'click', selector: 'button[type="submit"]', expected: 'Form submits successfully' },
        { action: 'visible', selector: '[class*="success"]', expected: 'Success message is shown' }
      ]
    },
    {
      name: 'Form Field Interactions',
      description: 'Test individual form field behaviors',
      steps: [
        { action: 'navigate', url: '/contact', expected: 'Load contact page' },
        { action: 'focus', selector: 'input[name="name"]', expected: 'Input receives focus styling' },
        { action: 'blur', selector: 'input[name="name"]', expected: 'Input loses focus styling' },
        { action: 'type', selector: 'input[name="email"]', value: 'invalid-email', expected: 'Invalid email shows error' },
        { action: 'clear', selector: 'input[name="email"]', expected: 'Field can be cleared' }
      ]
    }
  ],
  interactions: [
    {
      name: 'Gallery Interactions',
      description: 'Test gallery filtering and lightbox functionality',
      steps: [
        { action: 'navigate', url: '/gallery', expected: 'Load gallery page' },
        { action: 'click', selector: '[class*="category"]:nth-child(2)', expected: 'Filter gallery by category' },
        { action: 'count', selector: '[class*="gallery-item"]', expected: 'Gallery items are filtered' },
        { action: 'click', selector: '[class*="gallery-item"]:first-child', expected: 'Open lightbox' },
        { action: 'visible', selector: '[class*="lightbox"]', expected: 'Lightbox is visible' },
        { action: 'click', selector: '[class*="lightbox-close"]', expected: 'Close lightbox' },
        { action: 'hidden', selector: '[class*="lightbox"]', expected: 'Lightbox is hidden' }
      ]
    },
    {
      name: 'Button Interactions',
      description: 'Test various button interactions throughout the site',
      steps: [
        { action: 'navigate', url: '/', expected: 'Load home page' },
        { action: 'hover', selector: 'button', expected: 'Button shows hover state' },
        { action: 'click', selector: 'a[href="/theatre"]', expected: 'CTA button navigates correctly' },
        { action: 'scroll', selector: 'footer', expected: 'Page scrolls to footer' }
      ]
    }
  ],
  state: [
    {
      name: 'Gallery State Management',
      description: 'Test gallery category state persistence',
      steps: [
        { action: 'navigate', url: '/gallery', expected: 'Load gallery page' },
        { action: 'click', selector: '[class*="category"]:nth-child(3)', expected: 'Select Theatre category' },
        { action: 'refresh', expected: 'Page refreshes' },
        { action: 'check', selector: '[class*="category"]:nth-child(1)', expected: 'Category resets to All' }
      ]
    },
    {
      name: 'Form State Management',
      description: 'Test form state during user interaction',
      steps: [
        { action: 'navigate', url: '/contact', expected: 'Load contact page' },
        { action: 'type', selector: 'input[name="name"]', value: 'Test User', expected: 'Form state updates' },
        { action: 'type', selector: 'input[name="email"]', value: 'test@example.com', expected: 'Form state updates' },
        { action: 'check', selector: 'input[name="name"]', value: 'Test User', expected: 'Form retains values' },
        { action: 'check', selector: 'input[name="email"]', value: 'test@example.com', expected: 'Form retains values' }
      ]
    }
  ],
  routing: [
    {
      name: 'Route Parameters',
      description: 'Test URL routing and parameters',
      steps: [
        { action: 'navigate', url: '/', expected: 'Home route loads correctly' },
        { action: 'navigate', url: '/about', expected: 'About route loads correctly' },
        { action: 'navigate', url: '/invalid-route', expected: '404 page loads' },
        { action: 'visible', selector: '[class*="not-found"]', expected: '404 content is visible' }
      ]
    },
    {
      name: 'Deep Linking',
      description: 'Test direct navigation to deep routes',
      steps: [
        { action: 'navigate', url: '/gallery', expected: 'Gallery loads directly' },
        { action: 'navigate', url: '/contact', expected: 'Contact loads directly' },
        { action: 'navigate', url: '/join', expected: 'Join loads directly' }
      ]
    }
  ]
};

/**
 * Functional testing utility class
 */
export class FunctionalTester {
  constructor() {
    this.results = [];
    this.errors = [];
    this.currentTest = null;
  }

  /**
   * Executes a single test step
   * @param {Object} step - Test step configuration
   * @returns {Promise<Object>} Step result
   */
  async executeStep(step) {
    const startTime = Date.now();
    let result = {
      step,
      passed: false,
      error: null,
      duration: 0,
      actualResult: null
    };

    try {
      switch (step.action) {
        case 'click':
          result.actualResult = await this.clickElement(step.selector);
          break;
        case 'type':
          result.actualResult = await this.typeInElement(step.selector, step.value);
          break;
        case 'select':
          result.actualResult = await this.selectOption(step.selector, step.value);
          break;
        case 'navigate':
          result.actualResult = await this.navigateToUrl(step.url);
          break;
        case 'visible':
          result.actualResult = await this.checkElementVisible(step.selector);
          break;
        case 'hidden':
          result.actualResult = await this.checkElementHidden(step.selector);
          break;
        case 'focus':
          result.actualResult = await this.focusElement(step.selector);
          break;
        case 'blur':
          result.actualResult = await this.blurElement(step.selector);
          break;
        case 'hover':
          result.actualResult = await this.hoverElement(step.selector);
          break;
        case 'scroll':
          result.actualResult = await this.scrollToElement(step.selector);
          break;
        case 'resize':
          result.actualResult = await this.resizeViewport(step.width, step.height);
          break;
        case 'back':
          result.actualResult = await this.navigateBack();
          break;
        case 'forward':
          result.actualResult = await this.navigateForward();
          break;
        case 'refresh':
          result.actualResult = await this.refreshPage();
          break;
        case 'clear':
          result.actualResult = await this.clearElement(step.selector);
          break;
        case 'count':
          result.actualResult = await this.countElements(step.selector);
          break;
        case 'check':
          result.actualResult = await this.checkElementValue(step.selector, step.value);
          break;
        default:
          throw new Error(`Unknown action: ${step.action}`);
      }

      result.passed = result.actualResult !== false;
      
    } catch (error) {
      result.error = error.message;
      result.passed = false;
    }

    result.duration = Date.now() - startTime;
    return result;
  }

  /**
   * Runs a complete test scenario
   * @param {Object} scenario - Test scenario configuration
   * @returns {Promise<Object>} Scenario result
   */
  async runScenario(scenario) {
    const startTime = Date.now();
    const results = {
      scenario: scenario.name,
      description: scenario.description,
      steps: [],
      passed: true,
      duration: 0,
      errors: []
    };

    for (const step of scenario.steps) {
      const stepResult = await this.executeStep(step);
      results.steps.push(stepResult);

      if (!stepResult.passed) {
        results.passed = false;
        results.errors.push({
          step: step.action,
          selector: step.selector,
          error: stepResult.error || 'Step failed'
        });
      }

      // Add delay between steps for stability
      await this.wait(100);
    }

    results.duration = Date.now() - startTime;
    return results;
  }

  /**
   * Runs the complete functional test suite
   * @returns {Promise<Object>} Complete test results
   */
  async runFullTestSuite() {
    const startTime = Date.now();
    
    console.log('🔧 Starting Functional Behavior Test Suite...');
    
    const results = {
      timestamp: new Date().toISOString(),
      duration: 0,
      categories: {},
      summary: {
        totalScenarios: 0,
        passedScenarios: 0,
        failedScenarios: 0,
        totalSteps: 0,
        passedSteps: 0,
        failedSteps: 0,
        errors: []
      }
    };

    try {
      // Run tests for each category
      for (const [category, scenarios] of Object.entries(FUNCTIONAL_TEST_SCENARIOS)) {
        console.log(`📋 Testing ${category}...`);
        
        results.categories[category] = {
          scenarios: [],
          passed: 0,
          failed: 0
        };

        for (const scenario of scenarios) {
          const scenarioResult = await this.runScenario(scenario);
          results.categories[category].scenarios.push(scenarioResult);
          
          if (scenarioResult.passed) {
            results.categories[category].passed++;
          } else {
            results.categories[category].failed++;
            results.summary.errors.push(...scenarioResult.errors);
          }

          // Update step counts
          results.summary.totalSteps += scenarioResult.steps.length;
          results.summary.passedSteps += scenarioResult.steps.filter(s => s.passed).length;
          results.summary.failedSteps += scenarioResult.steps.filter(s => !s.passed).length;
        }

        results.summary.totalScenarios += scenarios.length;
        results.summary.passedScenarios += results.categories[category].passed;
        results.summary.failedScenarios += results.categories[category].failed;
      }
      
    } catch (error) {
      console.error('Functional test suite failed:', error);
      results.summary.errors.push({
        category: 'test-suite',
        error: error.message
      });
    }

    results.duration = Date.now() - startTime;
    
    console.log(`✅ Functional behavior tests completed in ${results.duration}ms`);
    console.log(`📊 Results: ${results.summary.passedScenarios}/${results.summary.totalScenarios} scenarios passed`);
    
    return results;
  }

  /**
   * Helper methods for test actions
   */

  async clickElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.click();
    await this.wait(100);
    return true;
  }

  async typeInElement(selector, value) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.focus();
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    await this.wait(100);
    return true;
  }

  async selectOption(selector, value) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.value = value;
    element.dispatchEvent(new Event('change', { bubbles: true }));
    await this.wait(100);
    return true;
  }

  async navigateToUrl(url) {
    // In a real browser environment, this would navigate
    // For testing purposes, we'll simulate navigation
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
    await this.wait(200);
    return window.location.pathname === url;
  }

  async checkElementVisible(selector) {
    const element = document.querySelector(selector);
    if (!element) return false;
    
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
  }

  async checkElementHidden(selector) {
    const element = document.querySelector(selector);
    if (!element) return true;
    
    const style = window.getComputedStyle(element);
    return style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0';
  }

  async focusElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.focus();
    await this.wait(100);
    return document.activeElement === element;
  }

  async blurElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.blur();
    await this.wait(100);
    return document.activeElement !== element;
  }

  async hoverElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await this.wait(100);
    return true;
  }

  async scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.scrollIntoView({ behavior: 'smooth' });
    await this.wait(300);
    return true;
  }

  async resizeViewport(width, height) {
    // Simulate viewport resize
    Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: height, writable: true });
    window.dispatchEvent(new Event('resize'));
    await this.wait(200);
    return true;
  }

  async navigateBack() {
    window.history.back();
    await this.wait(200);
    return true;
  }

  async navigateForward() {
    window.history.forward();
    await this.wait(200);
    return true;
  }

  async refreshPage() {
    window.location.reload();
    await this.wait(500);
    return true;
  }

  async clearElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    element.value = '';
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    await this.wait(100);
    return true;
  }

  async countElements(selector) {
    const elements = document.querySelectorAll(selector);
    return elements.length;
  }

  async checkElementValue(selector, expectedValue) {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    
    return element.value === expectedValue;
  }

  async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Creates a functional testing report
 * @param {Object} results - Test results
 * @returns {string} HTML report
 */
export function generateFunctionalReport(results) {
  const scenarioPassRate = ((results.summary.passedScenarios / results.summary.totalScenarios) * 100).toFixed(1);
  const stepPassRate = ((results.summary.passedSteps / results.summary.totalSteps) * 100).toFixed(1);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Functional Behavior Test Report</title>
      <style>
        body { font-family: system-ui, sans-serif; margin: 2rem; background: #f8f9fa; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem; text-align: center; }
        .header h1 { color: #2c3e50; margin-bottom: 0.5rem; }
        .header p { color: #7f8c8d; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
        .metric { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
        .metric-value { font-size: 2rem; font-weight: bold; color: #3498db; display: block; margin-bottom: 0.5rem; }
        .metric-label { color: #7f8c8d; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .category { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem; }
        .category h2 { color: #2c3e50; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid #ecf0f1; }
        .scenario { border: 1px solid #ecf0f1; border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem; }
        .scenario.passed { border-left: 4px solid #27ae60; background: #f8fff9; }
        .scenario.failed { border-left: 4px solid #e74c3c; background: #fff8f8; }
        .scenario h3 { color: #2c3e50; margin-bottom: 0.5rem; }
        .scenario-meta { color: #7f8c8d; font-size: 0.875rem; margin-bottom: 1rem; }
        .steps { margin-top: 1rem; }
        .step { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #ecf0f1; }
        .step:last-child { border-bottom: none; }
        .step-action { font-family: monospace; font-size: 0.875rem; color: #2c3e50; }
        .step-status { font-weight: bold; }
        .step-status.passed { color: #27ae60; }
        .step-status.failed { color: #e74c3c; }
        .errors { background: #fff8f8; border: 1px solid #e74c3c; border-radius: 8px; padding: 1rem; margin-top: 2rem; }
        .errors h3 { color: #e74c3c; margin-bottom: 1rem; }
        .error { background: white; padding: 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; font-size: 0.875rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Functional Behavior Test Report</h1>
          <p>Generated: ${results.timestamp}</p>
          <p>Duration: ${results.duration}ms</p>
        </div>
        
        <div class="summary">
          <div class="metric">
            <span class="metric-value">${results.summary.totalScenarios}</span>
            <span class="metric-label">Total Scenarios</span>
          </div>
          <div class="metric">
            <span class="metric-value">${results.summary.passedScenarios}</span>
            <span class="metric-label">Passed Scenarios</span>
          </div>
          <div class="metric">
            <span class="metric-value">${results.summary.totalSteps}</span>
            <span class="metric-label">Total Steps</span>
          </div>
          <div class="metric">
            <span class="metric-value">${scenarioPassRate}%</span>
            <span class="metric-label">Scenario Pass Rate</span>
          </div>
        </div>
        
        ${Object.entries(results.categories).map(([category, data]) => `
          <div class="category">
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)} Tests</h2>
            <p>Scenarios: ${data.passed}/${data.scenarios.length} passed</p>
            
            ${data.scenarios.map(scenario => `
              <div class="scenario ${scenario.passed ? 'passed' : 'failed'}">
                <h3>${scenario.scenario}</h3>
                <div class="scenario-meta">
                  ${scenario.description} • ${scenario.duration}ms • ${scenario.steps.filter(s => s.passed).length}/${scenario.steps.length} steps passed
                </div>
                
                <div class="steps">
                  ${scenario.steps.map(step => `
                    <div class="step">
                      <span class="step-action">${step.step.action}${step.step.selector ? ` "${step.step.selector}"` : ''}${step.step.value ? ` = "${step.step.value}"` : ''}</span>
                      <span class="step-status ${step.passed ? 'passed' : 'failed'}">
                        ${step.passed ? '✅ Pass' : '❌ Fail'}${step.error ? ` (${step.error})` : ''}
                      </span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
        
        ${results.summary.errors.length > 0 ? `
          <div class="errors">
            <h3>Errors Summary</h3>
            ${results.summary.errors.map(error => `
              <div class="error">
                <strong>${error.step || error.category}:</strong> ${error.error}
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </body>
    </html>
  `;
}

/**
 * Runs functional behavior tests and generates report
 * @returns {Promise<Object>} Test results and report
 */
export async function runFunctionalBehaviorTests() {
  const tester = new FunctionalTester();
  const results = await tester.runFullTestSuite();
  const report = generateFunctionalReport(results);
  
  return {
    results,
    report,
    passed: results.summary.failedScenarios === 0
  };
}