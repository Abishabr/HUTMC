/**
 * Visual Test Runner Component
 * Provides a UI for running visual regression tests in the browser
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Play, Download, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { runVisualRegressionTests, VIEWPORTS, TEST_SCENARIOS } from '@/lib/visualTesting';
import styles from './VisualTestRunner.module.css';

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
 * Visual Test Runner component
 * @returns {React.ReactElement} Test runner interface
 */
const VisualTestRunner = () => {
  const [testStatus, setTestStatus] = useState(TEST_STATUS.IDLE);
  const [testResults, setTestResults] = useState(null);
  const [currentTest, setCurrentTest] = useState('');
  const [progress, setProgress] = useState(0);
  const reportRef = useRef(null);

  /**
   * Runs the complete visual test suite
   */
  const runTests = async () => {
    setTestStatus(TEST_STATUS.RUNNING);
    setProgress(0);
    setCurrentTest('Initializing tests...');

    try {
      // Simulate progress updates
      const progressSteps = [
        'Testing responsive breakpoints...',
        'Testing hover states...',
        'Testing animations...',
        'Testing theme functionality...',
        'Generating report...'
      ];

      for (let i = 0; i < progressSteps.length; i++) {
        setCurrentTest(progressSteps[i]);
        setProgress(((i + 1) / progressSteps.length) * 100);
        
        // Add delay to show progress
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Run actual tests
      const { results, report, passed } = await runVisualRegressionTests();
      
      setTestResults({ results, report, passed });
      setTestStatus(TEST_STATUS.COMPLETED);
      setCurrentTest('Tests completed');
      setProgress(100);

    } catch (error) {
      console.error('Visual tests failed:', error);
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
    a.download = `visual-test-report-${new Date().toISOString().split('T')[0]}.html`;
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

  return (
    <div className={styles.testRunner}>
      <div className={styles.header}>
        <h2 className={styles.title}>Visual Regression Test Runner</h2>
        <p className={styles.description}>
          Run comprehensive visual tests to validate UI consistency across breakpoints,
          hover states, animations, and theme functionality.
        </p>
      </div>

      {/* Test Configuration */}
      <div className={styles.configuration}>
        <h3 className={styles.sectionTitle}>Test Configuration</h3>
        
        <div className={styles.configGrid}>
          <div className={styles.configSection}>
            <h4>Viewports ({Object.keys(VIEWPORTS).length})</h4>
            <ul className={styles.configList}>
              {Object.entries(VIEWPORTS).map(([key, viewport]) => (
                <li key={key} className={styles.configItem}>
                  <span className={styles.configName}>{viewport.name}</span>
                  <span className={styles.configValue}>
                    {viewport.width}×{viewport.height}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.configSection}>
            <h4>Pages ({TEST_SCENARIOS.pages.length})</h4>
            <ul className={styles.configList}>
              {TEST_SCENARIOS.pages.slice(0, 5).map((page) => (
                <li key={page.path} className={styles.configItem}>
                  <span className={styles.configName}>{page.name}</span>
                  <span className={styles.configValue}>{page.path}</span>
                </li>
              ))}
              {TEST_SCENARIOS.pages.length > 5 && (
                <li className={styles.configItem}>
                  <span className={styles.configMore}>
                    +{TEST_SCENARIOS.pages.length - 5} more...
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className={styles.configSection}>
            <h4>Test Types</h4>
            <ul className={styles.configList}>
              <li className={styles.configItem}>
                <span className={styles.configName}>Responsive Breakpoints</span>
              </li>
              <li className={styles.configItem}>
                <span className={styles.configName}>Hover States</span>
              </li>
              <li className={styles.configItem}>
                <span className={styles.configName}>Animations</span>
              </li>
              <li className={styles.configItem}>
                <span className={styles.configName}>Theme Functionality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Test Controls */}
      <div className={styles.controls}>
        {testStatus === TEST_STATUS.IDLE && (
          <button
            onClick={runTests}
            className={styles.runButton}
          >
            <Play size={18} className={styles.buttonIcon} />
            Run Visual Tests
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
                  All visual tests passed!
                </div>
              ) : (
                <div className={styles.errorMessage}>
                  <XCircle size={20} className={styles.statusIcon} />
                  Some visual tests failed. Check the report for details.
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
                {testResults.results.summary.total}
              </span>
              <span className={styles.metricLabel}>Total Tests</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {testResults.results.summary.passed}
              </span>
              <span className={styles.metricLabel}>Passed</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {testResults.results.summary.failed}
              </span>
              <span className={styles.metricLabel}>Failed</span>
            </div>
            
            <div className={styles.metric}>
              <span className={styles.metricValue}>
                {((testResults.results.summary.passed / testResults.results.summary.total) * 100).toFixed(1)}%
              </span>
              <span className={styles.metricLabel}>Pass Rate</span>
            </div>
          </div>

          {testResults.results.summary.errors.length > 0 && (
            <div className={styles.errors}>
              <h4>Errors</h4>
              {testResults.results.summary.errors.map((error, index) => (
                <div key={index} className={styles.error}>
                  <strong>{error.test}:</strong> {error.error}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

VisualTestRunner.propTypes = {
  // No props for this component
};

export default VisualTestRunner;