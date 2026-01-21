/**
 * Functional Test Runner Component
 * Provides a UI for running functional behavior tests in the browser
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Play, Download, Eye, CheckCircle, XCircle, Clock, Settings } from 'lucide-react';
import { runFunctionalBehaviorTests, FUNCTIONAL_TEST_SCENARIOS } from '@/lib/functionalTesting';
import styles from './FunctionalTestRunner.module.css';

/**
 * Test status constants
 */
const TEST_STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  COMPLETED: 'completed',
  ERROR: 'error'
};

/**
 * Functional Test Runner component
 * @returns {React.ReactElement} Test runner interface
 */
const FunctionalTestRunner = () => {
  const [testStatus, setTestStatus] = useState(TEST_STATUS.IDLE);
  const [testResults, setTestResults] = useState(null);
  const [currentTest, setCurrentTest] = useState('');
  const [progress, setProgress] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState(
    Object.keys(FUNCTIONAL_TEST_SCENARIOS)
  );

  /**
   * Runs the functional test suite
   */
  const runTests = async () => {
    setTestStatus(TEST_STATUS.RUNNING);
    setProgress(0);
    setCurrentTest('Initializing functional tests...');

    try {
      // Simulate progress updates
      const categories = Object.keys(FUNCTIONAL_TEST_SCENARIOS);
      
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        setCurrentTest(`Testing ${category}...`);
        setProgress(((i + 1) / categories.length) * 90); // Leave 10% for report generation
        
        // Add delay to show progress
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setCurrentTest('Generating report...');
      setProgress(95);

      // Run actual tests
      const { results, report, passed } = await runFunctionalBehaviorTests();
      
      setTestResults({ results, report, passed });
      setTestStatus(TEST_STATUS.COMPLETED);
      setCurrentTest('Tests completed');
      setProgress(100);

    } catch (error) {
      console.error('Functional tests failed:', error);
      setTestStatus(TEST_STATUS.ERROR);
      setCurrentTest(`Error: ${error.message}`);
    }
  };

  /**
   * Downloads the test report as HTML file
   */
  const downloadReport = () => {
    if (!testResults?.report) return;

    const blob = new Blob([testResults.report], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `functional-test-report-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /**
   * Opens the report in a new window
   */
  const viewReport = () => {
    if (!testResults?.report) return;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(testResults.report);
    newWindow.document.close();
  };

  /**
   * Resets the test runner
   */
  const resetTests = () => {
    setTestStatus(TEST_STATUS.IDLE);
    setTestResults(null);
    setCurrentTest('');
    setProgress(0);
  };

  /**
   * Toggles category selection
   */
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className={styles.testRunner}>
      <div className={styles.header}>
        <h2 className={styles.title}>Functional Behavior Test Runner</h2>
        <p className={styles.description}>
          Test user interactions, workflows, routing, navigation, form submissions,
          API calls, and state management to ensure identical functionality.
        </p>
      </div>

      {/* Test Configuration */}
      <div className={styles.configuration}>
        <h3 className={styles.sectionTitle}>
          <Settings size={20} className={styles.sectionIcon} />
          Test Configuration
        </h3>
        
        <div className={styles.configGrid}>
          <div className={styles.configSection}>
            <h4>Test Categories</h4>
            <div className={styles.categoryList}>
              {Object.entries(FUNCTIONAL_TEST_SCENARIOS).map(([category, scenarios]) => (
                <label key={category} className={styles.categoryItem}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className={styles.categoryCheckbox}
                  />
                  <span className={styles.categoryName}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  <span className={styles.categoryCount}>
                    ({scenarios.length} scenarios)
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.configSection}>
            <h4>Test Scenarios Overview</h4>
            <div className={styles.scenarioOverview}>
              {Object.entries(FUNCTIONAL_TEST_SCENARIOS).map(([category, scenarios]) => (
                <div key={category} className={styles.categoryOverview}>
                  <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
                  <ul className={styles.scenarioList}>
                    {scenarios.map((scenario, index) => (
                      <li key={index} className={styles.scenarioItem}>
                        <span className={styles.scenarioName}>{scenario.name}</span>
                        <span className={styles.scenarioSteps}>
                          {scenario.steps.length} steps
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Test Controls */}
      <div className={styles.controls}>
        {testStatus === TEST_STATUS.IDLE && (
          <button
            onClick={runTests}
            disabled={selectedCategories.length === 0}
            className={styles.runButton}
          >
            <Play size={18} className={styles.buttonIcon} />
            Run Functional Tests
            {selectedCategories.length > 0 && (
              <span className={styles.buttonBadge}>
                {selectedCategories.length} categories
              </span>
            )}
          </button>
        )}

        {testStatus === TEST_STATUS.RUNNING && (
          <div className={styles.runningState}>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={styles.progressText}>{progress.toFixed(0)}%</span>
            </div>
            <p className={styles.currentTest}>
              <Clock size={16} className={styles.statusIcon} />
              {currentTest}
            </p>
          </div>
        )}

        {testStatus === TEST_STATUS.COMPLETED && (
          <div className={styles.completedState}>
            <div className={styles.statusMessage}>
              {testResults.passed ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={20} className={styles.statusIcon} />
                  All functional tests passed!
                </div>
              ) : (
                <div className={styles.errorMessage}>
                  <XCircle size={20} className={styles.statusIcon} />
                  Some functional tests failed. Check the report for details.
                </div>
              )}
            </div>

            <div className={styles.resultActions}>
              <button
                onClick={viewReport}
                className={styles.viewButton}
              >
                <Eye size={18} className={styles.buttonIcon} />
                View Report
              </button>
              
              <button
                onClick={downloadReport}
                className={styles.downloadButton}
              >
                <Download size={18} className={styles.buttonIcon} />
                Download Report
              </button>
              
              <button
                onClick={resetTests}
                className={styles.resetButton}
              >
                Run Again
              </button>
            </div>
          </div>
        )}

        {testStatus === TEST_STATUS.ERROR && (
          <div className={styles.errorState}>
            <div className={styles.errorMessage}>
              <XCircle size={20} className={styles.statusIcon} />
              {currentTest}
            </div>
            <button
              onClick={resetTests}
              className={styles.resetButton}
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Test Results Summary */}
      {testResults && (
        <div className={styles.results}>
          <h3 className={styles.sectionTitle}>Test Results</h3>
          
          <div className={styles.resultsSummary}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {testResults.results.summary.totalScenarios}
              </span>
              <span className={styles.metricLabel}>Total Scenarios</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {testResults.results.summary.passedScenarios}
              </span>
              <span className={styles.metricLabel}>Passed</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {testResults.results.summary.totalSteps}
              </span>
              <span className={styles.metricLabel}>Total Steps</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {((testResults.results.summary.passedScenarios / testResults.results.summary.totalScenarios) * 100).toFixed(1)}%
              </span>
              <span className={styles.metricLabel}>Pass Rate</span>
            </div>
          </div>

          {/* Category Results */}
          <div className={styles.categoryResults}>
            {Object.entries(testResults.results.categories).map(([category, data]) => (
              <div key={category} className={styles.categoryResult}>
                <h4 className={styles.categoryResultTitle}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <div className={styles.categoryResultStats}>
                  <span className={styles.categoryResultStat}>
                    {data.passed}/{data.scenarios.length} scenarios passed
                  </span>
                  <span className={`${styles.categoryResultStatus} ${data.failed === 0 ? styles.passed : styles.failed}`}>
                    {data.failed === 0 ? '✅' : '❌'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {testResults.results.summary.errors.length > 0 && (
            <div className={styles.errors}>
              <h4>Errors Summary</h4>
              {testResults.results.summary.errors.slice(0, 5).map((error, index) => (
                <div key={index} className={styles.error}>
                  <strong>{error.step || error.category}:</strong> {error.error}
                </div>
              ))}
              {testResults.results.summary.errors.length > 5 && (
                <p className={styles.moreErrors}>
                  +{testResults.results.summary.errors.length - 5} more errors in detailed report
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

FunctionalTestRunner.propTypes = {
  // No props for this component
};

export default FunctionalTestRunner;