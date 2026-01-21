/**
 * Route Error Boundary Component
 * Specialized error boundary for route-level errors with navigation context
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import styles from './RouteErrorBoundary.module.css';

/**
 * Route-specific error fallback component
 * @param {Error} error - The error that occurred
 * @param {Function} retry - Function to retry the failed operation
 * @returns {React.ReactElement} Error fallback UI
 */
function RouteErrorFallback({ error, retry }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.routeError}>
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>
          <AlertTriangle size={40} className={styles.errorIconSvg} />
        </div>
        
        <h1 className={styles.errorTitle}>
          Page Error
        </h1>
        
        <p className={styles.errorMessage}>
          Something went wrong while loading this page.
        </p>

        <div className={styles.errorLocation}>
          <span className={styles.errorLocationLabel}>Current page:</span>
          <code className={styles.errorLocationPath}>{location.pathname}</code>
        </div>

        {import.meta.env.DEV && (
          <div className={styles.errorDetails}>
            <h3>Error Details (Development):</h3>
            <pre className={styles.errorStack}>
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </div>
        )}

        <div className={styles.errorActions}>
          <button
            onClick={retry}
            className={styles.retryButton}
          >
            <RefreshCw size={16} className={styles.buttonIcon} />
            Try Again
          </button>
          
          <button
            onClick={handleGoBack}
            className={styles.backButton}
          >
            <ArrowLeft size={16} className={styles.buttonIcon} />
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className={styles.homeButton}
          >
            <Home size={16} className={styles.buttonIcon} />
            Home
          </button>
          
          <button
            onClick={handleReload}
            className={styles.reloadButton}
          >
            <RefreshCw size={16} className={styles.buttonIcon} />
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

RouteErrorFallback.propTypes = {
  error: PropTypes.instanceOf(Error),
  retry: PropTypes.func.isRequired,
};

/**
 * Route Error Boundary wrapper component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Function} props.onError - Error callback function
 * @returns {React.ReactElement} Route error boundary
 */
function RouteErrorBoundary({ children, onError }) {
  const location = useLocation();

  const handleError = (error, errorInfo) => {
    // Add route context to error info
    const routeErrorInfo = {
      ...errorInfo,
      route: location.pathname,
      search: location.search,
      hash: location.hash,
      state: location.state
    };

    // Call parent error handler if provided
    if (onError) {
      onError(error, routeErrorInfo);
    }

    // Log route-specific error
    console.error('Route Error:', {
      error: error.message,
      route: location.pathname,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <ErrorBoundary
      fallback={(error, retry) => <RouteErrorFallback error={error} retry={retry} />}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
}

RouteErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onError: PropTypes.func,
};

export default RouteErrorBoundary;