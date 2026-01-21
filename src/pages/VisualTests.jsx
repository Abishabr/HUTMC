/**
 * Visual Tests Page
 * Development page for running visual regression tests
 */

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import VisualTestRunner from '@/components/VisualTestRunner';
import FunctionalTestRunner from '@/components/FunctionalTestRunner';
import { AlertTriangle } from 'lucide-react';
import styles from './VisualTests.module.css';

/**
 * Visual Tests page component
 * @returns {React.ReactElement} Visual tests page
 */
const VisualTests = () => {
  // Only show in development
  if (import.meta.env.PROD) {
    return (
      <Layout>
        <div className={styles.productionWarning}>
          <div className={styles.warningContainer}>
            <AlertTriangle size={48} className={styles.warningIcon} />
            <h1 className={styles.warningTitle}>
              Visual Tests Not Available
            </h1>
            <p className={styles.warningMessage}>
              Visual regression tests are only available in development mode.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.visualTestsPage}>
        {/* Development Notice */}
        <div className={styles.developmentNotice}>
          <p className={styles.noticeText}>
            🚧 Development Tool - This page is only available in development mode
          </p>
        </div>

        {/* Test Runners */}
        <div className={styles.testRunners}>
          <VisualTestRunner />
          <FunctionalTestRunner />
        </div>

        {/* Instructions */}
        <div className={styles.instructions}>
          <h3 className={styles.instructionsTitle}>How to Use Visual Tests</h3>
          
          <div className={styles.instructionsGrid}>
            <div className={styles.instructionCard}>
              <h4>1. Run Tests</h4>
              <p>
                Click "Run Visual Tests" to start the comprehensive test suite.
                Tests will check responsive breakpoints, hover states, animations,
                and theme functionality.
              </p>
            </div>
            
            <div className={styles.instructionCard}>
              <h4>2. Review Results</h4>
              <p>
                After tests complete, review the summary metrics and any errors.
                The pass rate indicates overall visual consistency.
              </p>
            </div>
            
            <div className={styles.instructionCard}>
              <h4>3. Generate Report</h4>
              <p>
                Download or view the detailed HTML report for comprehensive
                analysis of visual regression test results.
              </p>
            </div>
            
            <div className={styles.instructionCard}>
              <h4>4. Fix Issues</h4>
              <p>
                Use the error details to identify and fix visual inconsistencies.
                Re-run tests to verify fixes.
              </p>
            </div>
          </div>
        </div>

        {/* Test Coverage */}
        <div className={styles.coverage}>
          <h3 className={styles.coverageTitle}>Test Coverage</h3>
          
          <div className={styles.coverageGrid}>
            <div className={styles.coverageSection}>
              <h4>Responsive Testing</h4>
              <ul className={styles.coverageList}>
                <li>Mobile (375×667)</li>
                <li>Tablet (768×1024)</li>
                <li>Desktop (1440×900)</li>
                <li>Wide Desktop (1920×1080)</li>
              </ul>
            </div>
            
            <div className={styles.coverageSection}>
              <h4>Page Testing</h4>
              <ul className={styles.coverageList}>
                <li>Home Page</li>
                <li>About Page</li>
                <li>Theatre Page</li>
                <li>Music Page</li>
                <li>Events Page</li>
                <li>Gallery Page</li>
                <li>Members Page</li>
                <li>Join Page</li>
                <li>Contact Page</li>
              </ul>
            </div>
            
            <div className={styles.coverageSection}>
              <h4>Interaction Testing</h4>
              <ul className={styles.coverageList}>
                <li>Button Hover States</li>
                <li>Link Hover States</li>
                <li>Input Focus States</li>
                <li>Mobile Menu Toggle</li>
                <li>CSS Animations</li>
                <li>CSS Transitions</li>
              </ul>
            </div>
            
            <div className={styles.coverageSection}>
              <h4>Theme Testing</h4>
              <ul className={styles.coverageList}>
                <li>CSS Custom Properties</li>
                <li>Color Scheme Validation</li>
                <li>Typography System</li>
                <li>Design Token Consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisualTests;