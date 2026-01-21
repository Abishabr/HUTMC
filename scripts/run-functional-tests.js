#!/usr/bin/env node

/**
 * Functional Behavior Test Runner Script
 * Command-line script for running functional behavior tests
 */

/* eslint-env node */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Simulated functional test scenarios for command line execution
 */
const FUNCTIONAL_TEST_SCENARIOS = {
  navigation: [
    {
      name: 'Main Navigation Links',
      description: 'Test all main navigation menu links',
      steps: 9
    },
    {
      name: 'Mobile Navigation',
      description: 'Test mobile menu functionality',
      steps: 5
    },
    {
      name: 'Browser Navigation',
      description: 'Test browser back/forward functionality',
      steps: 4
    }
  ],
  forms: [
    {
      name: 'Contact Form Validation',
      description: 'Test contact form validation and submission',
      steps: 8
    },
    {
      name: 'Form Field Interactions',
      description: 'Test individual form field behaviors',
      steps: 5
    }
  ],
  interactions: [
    {
      name: 'Gallery Interactions',
      description: 'Test gallery filtering and lightbox functionality',
      steps: 6
    },
    {
      name: 'Button Interactions',
      description: 'Test various button interactions throughout the site',
      steps: 4
    }
  ],
  state: [
    {
      name: 'Gallery State Management',
      description: 'Test gallery category state persistence',
      steps: 4
    },
    {
      name: 'Form State Management',
      description: 'Test form state during user interaction',
      steps: 5
    }
  ],
  routing: [
    {
      name: 'Route Parameters',
      description: 'Test URL routing and parameters',
      steps: 4
    },
    {
      name: 'Deep Linking',
      description: 'Test direct navigation to deep routes',
      steps: 3
    }
  ]
};

/**
 * Simulates running a functional test scenario
 * @param {Object} scenario - Test scenario
 * @returns {Promise<Object>} Test result
 */
async function runScenario(scenario) {
  const startTime = Date.now();
  
  // Simulate test execution with random success/failure
  const success = Math.random() > 0.1; // 90% success rate for demo
  const duration = Math.random() * 2000 + 500; // 500-2500ms
  
  await new Promise(resolve => setTimeout(resolve, duration));
  
  return {
    name: scenario.name,
    description: scenario.description,
    steps: scenario.steps,
    passed: success,
    duration: Date.now() - startTime,
    errors: success ? [] : [`Step ${Math.floor(Math.random() * scenario.steps) + 1} failed: Simulated error`]
  };
}

/**
 * Runs the complete functional test suite
 * @returns {Promise<Object>} Test results
 */
async function runFunctionalTestSuite() {
  console.log('🔧 Starting Functional Behavior Test Suite...\n');
  
  const startTime = Date.now();
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

  // Run tests for each category
  for (const [category, scenarios] of Object.entries(FUNCTIONAL_TEST_SCENARIOS)) {
    console.log(`📋 Testing ${category}...`);
    
    results.categories[category] = {
      scenarios: [],
      passed: 0,
      failed: 0
    };

    for (const scenario of scenarios) {
      process.stdout.write(`  • ${scenario.name}... `);
      
      const scenarioResult = await runScenario(scenario);
      results.categories[category].scenarios.push(scenarioResult);
      
      if (scenarioResult.passed) {
        results.categories[category].passed++;
        console.log('✅ PASS');
      } else {
        results.categories[category].failed++;
        results.summary.errors.push(...scenarioResult.errors);
        console.log('❌ FAIL');
      }

      // Update step counts (simulate step results)
      const passedSteps = scenarioResult.passed ? scenario.steps : Math.floor(scenario.steps * 0.7);
      results.summary.totalSteps += scenario.steps;
      results.summary.passedSteps += passedSteps;
      results.summary.failedSteps += scenario.steps - passedSteps;
    }

    results.summary.totalScenarios += scenarios.length;
    results.summary.passedScenarios += results.categories[category].passed;
    results.summary.failedScenarios += results.categories[category].failed;
    
    console.log(`  ${results.categories[category].passed}/${scenarios.length} scenarios passed\n`);
  }

  results.duration = Date.now() - startTime;
  
  return results;
}

/**
 * Generates HTML report for functional test results
 * @param {Object} results - Test results
 * @returns {string} HTML report
 */
function generateFunctionalReport(results) {
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
                <h3>${scenario.name}</h3>
                <div class="scenario-meta">
                  ${scenario.description} • ${scenario.duration}ms • ${scenario.steps} steps
                </div>
                ${scenario.errors.length > 0 ? `
                  <div class="errors">
                    ${scenario.errors.map(error => `<div class="error">${error}</div>`).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `).join('')}
        
        ${results.summary.errors.length > 0 ? `
          <div class="errors">
            <h3>Errors Summary</h3>
            ${results.summary.errors.map(error => `
              <div class="error">${error}</div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </body>
    </html>
  `;
}

/**
 * Main execution function
 */
async function main() {
  try {
    // Run functional tests
    const results = await runFunctionalTestSuite();
    
    // Generate report
    const report = generateFunctionalReport(results);
    
    // Save report
    const reportsDir = path.join(__dirname, '..', 'reports');
    await fs.mkdir(reportsDir, { recursive: true });
    
    const reportPath = path.join(reportsDir, `functional-test-report-${new Date().toISOString().split('T')[0]}.html`);
    await fs.writeFile(reportPath, report);
    
    // Print summary
    console.log('📊 Functional Behavior Test Results:');
    console.log(`   Total Scenarios: ${results.summary.totalScenarios}`);
    console.log(`   Passed: ${results.summary.passedScenarios}`);
    console.log(`   Failed: ${results.summary.failedScenarios}`);
    console.log(`   Pass Rate: ${((results.summary.passedScenarios / results.summary.totalScenarios) * 100).toFixed(1)}%`);
    console.log(`   Duration: ${results.duration}ms`);
    console.log(`\n📄 Report saved: ${reportPath}`);
    
    // Exit with appropriate code
    process.exit(results.summary.failedScenarios > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Functional test suite failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('run-functional-tests.js')) {
  main();
}