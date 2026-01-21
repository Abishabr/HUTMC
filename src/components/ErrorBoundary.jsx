/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree and displays a fallback UI
 */

import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';

/**
 * Error Boundary class component
 * Implements componentDidCatch and getDerivedStateFromError for error handling
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
    
    // Bind methods
    this.handleRetry = this.handleRetry.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  /**
   * Static method to update state when an error occurs
   * @param {Error} error - The error that was thrown
   * @returns {Object} New state object
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error: error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  /**
   * Lifecycle method called when an error occurs
   * @param {Error} error - The error that was thrown
   * @param {Object} errorInfo - Information about the error
   */
  componentDidCatch(error, errorInfo) {
    // Update state with error details
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log error for debugging and monitoring
    this.logError(error, errorInfo);

    // Report error to monitoring service in production
    if (this.props.onError) {
      this.props.onError(error, errorInfo, this.state.errorId);
    }
  }

  /**
   * Logs error details for debugging
   * @param {Error} error - The error that was thrown
   * @param {Object} errorInfo - Information about the error
   */
  logError(error, errorInfo) {
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorId: this.state.errorId
    };

    // Log to console in development
    if (import.meta.env.DEV) {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Details:', errorDetails);
      console.groupEnd();
    }

    // In production, send to error tracking service
    // Example: Sentry, LogRocket, Bugsnag, etc.
    if (import.meta.env.PROD) {
      // Replace with your error tracking service
      // errorTrackingService.captureException(error, errorDetails);
    }
  }

  /**
   * Handles retry action
   */
  handleRetry() {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  }

  /**
   * Handles page reload
   */
  handleReload() {
    window.location.reload();
  }

  /**
   * Creates a safe error message for display
   * @param {Error} error - The error object
   * @returns {string} Safe error message
   */
  getSafeErrorMessage(error) {
    if (!error) return 'An unexpected error occurred';
    
    // In development, show detailed error messages
    if (import.meta.env.DEV) {
      return error.message || 'An unexpected error occurred';
    }
    
    // In production, show generic messages for security
    return 'Something went wrong. Please try again.';
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI provided by parent
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleRetry);
      }

      // Default error UI
      return (
        <div className={styles.errorBoundary}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
              <AlertTriangle size={48} className={styles.errorIconSvg} />
            </div>
            
            <h1 className={styles.errorTitle}>
              Oops! Something went wrong
            </h1>
            
            <p className={styles.errorMessage}>
              {this.getSafeErrorMessage(this.state.error)}
            </p>

            {import.meta.env.DEV && this.state.errorInfo && (
              <details className={styles.errorDetails}>
                <summary className={styles.errorDetailsSummary}>
                  Technical Details (Development Only)
                </summary>
                <div className={styles.errorDetailsContent}>
                  <h3>Error Stack:</h3>
                  <pre className={styles.errorStack}>
                    {this.state.error.stack}
                  </pre>
                  <h3>Component Stack:</h3>
                  <pre className={styles.errorStack}>
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}

            <div className={styles.errorActions}>
              <button
                onClick={this.handleRetry}
                className={styles.retryButton}
              >
                <RefreshCw size={18} className={styles.buttonIcon} />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className={styles.reloadButton}
              >
                <RefreshCw size={18} className={styles.buttonIcon} />
                Reload Page
              </button>
              
              <Link to="/" className={styles.homeButton}>
                <Home size={18} className={styles.buttonIcon} />
                Go Home
              </Link>
            </div>

            {this.state.errorId && (
              <p className={styles.errorId}>
                Error ID: {this.state.errorId}
              </p>
            )}
          </div>
        </div>
      );
    }

    // No error, render children normally
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.func,
  onError: PropTypes.func,
};

/**
 * Higher-order component to wrap components with error boundary
 * @param {React.Component} Component - Component to wrap
 * @param {Object} errorBoundaryProps - Props for error boundary
 * @returns {React.Component} Wrapped component
 */
export function withErrorBoundary(Component, errorBoundaryProps = {}) {
  const WrappedComponent = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

/**
 * Hook for error reporting in functional components
 * @returns {Function} Error reporting function
 */
export function useErrorHandler() {
  return React.useCallback((error, errorInfo = {}) => {
    // Create error boundary-like behavior for functional components
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...errorInfo
    };

    // Log error
    console.error('Manual Error Report:', error, errorDetails);

    // In production, send to error tracking service
    if (import.meta.env.PROD) {
      // Replace with your error tracking service
      // errorTrackingService.captureException(error, errorDetails);
    }

    // Re-throw error to trigger error boundary
    throw error;
  }, []);
}

export default ErrorBoundary;