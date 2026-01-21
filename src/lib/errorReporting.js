/**
 * Error Reporting Service
 * Handles error logging, monitoring, and reporting for the application
 */

/**
 * Error severity levels
 */
export const ERROR_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

/**
 * Error categories
 */
export const ERROR_CATEGORY = {
  JAVASCRIPT: 'javascript',
  NETWORK: 'network',
  API: 'api',
  RENDER: 'render',
  NAVIGATION: 'navigation',
  USER_ACTION: 'user_action'
};

/**
 * Error reporting configuration
 */
const ERROR_CONFIG = {
  maxErrors: 50, // Maximum errors to store locally
  reportingEnabled: import.meta.env.PROD, // Only report in production
  consoleLogging: import.meta.env.DEV, // Console logging in development
  apiEndpoint: import.meta.env.VITE_ERROR_REPORTING_URL || null
};

/**
 * Local error storage for debugging and batch reporting
 */
class ErrorStorage {
  constructor() {
    this.errors = [];
    this.maxSize = ERROR_CONFIG.maxErrors;
  }

  /**
   * Adds an error to local storage
   * @param {Object} errorData - Error data to store
   */
  add(errorData) {
    this.errors.unshift(errorData);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxSize) {
      this.errors = this.errors.slice(0, this.maxSize);
    }
  }

  /**
   * Gets all stored errors
   * @returns {Array} Array of error data
   */
  getAll() {
    return [...this.errors];
  }

  /**
   * Gets errors by category
   * @param {string} category - Error category
   * @returns {Array} Filtered errors
   */
  getByCategory(category) {
    return this.errors.filter(error => error.category === category);
  }

  /**
   * Clears all stored errors
   */
  clear() {
    this.errors = [];
  }

  /**
   * Gets error statistics
   * @returns {Object} Error statistics
   */
  getStats() {
    const stats = {
      total: this.errors.length,
      categories: {},
      severity: {},
      recent: this.errors.slice(0, 10)
    };

    this.errors.forEach(error => {
      // Count by category
      stats.categories[error.category] = (stats.categories[error.category] || 0) + 1;
      
      // Count by severity
      stats.severity[error.severity] = (stats.severity[error.severity] || 0) + 1;
    });

    return stats;
  }
}

// Global error storage instance
const errorStorage = new ErrorStorage();

/**
 * Creates standardized error data object
 * @param {Error} error - The error object
 * @param {Object} context - Additional context information
 * @returns {Object} Standardized error data
 */
function createErrorData(error, context = {}) {
  return {
    // Error details
    message: error.message || 'Unknown error',
    stack: error.stack || '',
    name: error.name || 'Error',
    
    // Context information
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    
    // Application context
    category: context.category || ERROR_CATEGORY.JAVASCRIPT,
    severity: context.severity || ERROR_SEVERITY.MEDIUM,
    component: context.component || null,
    route: context.route || window.location.pathname,
    userId: context.userId || null,
    sessionId: context.sessionId || getSessionId(),
    
    // Additional context
    ...context,
    
    // Unique error ID
    errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  };
}

/**
 * Gets or creates a session ID for error tracking
 * @returns {string} Session ID
 */
function getSessionId() {
  let sessionId = sessionStorage.getItem('error_session_id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('error_session_id', sessionId);
  }
  
  return sessionId;
}

/**
 * Reports error to external monitoring service
 * @param {Object} errorData - Error data to report
 */
async function reportToService(errorData) {
  if (!ERROR_CONFIG.reportingEnabled || !ERROR_CONFIG.apiEndpoint) {
    return;
  }

  try {
    await fetch(ERROR_CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData)
    });
  } catch (reportingError) {
    // Don't let error reporting errors break the app
    console.warn('Failed to report error to monitoring service:', reportingError);
  }
}

/**
 * Main error reporting function
 * @param {Error} error - The error to report
 * @param {Object} context - Additional context information
 */
export function reportError(error, context = {}) {
  const errorData = createErrorData(error, context);
  
  // Store error locally
  errorStorage.add(errorData);
  
  // Console logging in development
  if (ERROR_CONFIG.consoleLogging) {
    console.group(`🚨 Error Report [${errorData.severity.toUpperCase()}]`);
    console.error('Error:', error);
    console.log('Error Data:', errorData);
    console.groupEnd();
  }
  
  // Report to external service
  reportToService(errorData);
  
  return errorData.errorId;
}

/**
 * Reports JavaScript errors caught by error boundaries
 * @param {Error} error - The error object
 * @param {Object} errorInfo - React error info
 * @param {Object} additionalContext - Additional context
 */
export function reportBoundaryError(error, errorInfo, additionalContext = {}) {
  return reportError(error, {
    category: ERROR_CATEGORY.RENDER,
    severity: ERROR_SEVERITY.HIGH,
    componentStack: errorInfo.componentStack,
    ...additionalContext
  });
}

/**
 * Reports API errors
 * @param {Error} error - The API error
 * @param {Object} requestContext - Request context (URL, method, etc.)
 */
export function reportApiError(error, requestContext = {}) {
  return reportError(error, {
    category: ERROR_CATEGORY.API,
    severity: ERROR_SEVERITY.MEDIUM,
    ...requestContext
  });
}

/**
 * Reports network errors
 * @param {Error} error - The network error
 * @param {Object} networkContext - Network context
 */
export function reportNetworkError(error, networkContext = {}) {
  return reportError(error, {
    category: ERROR_CATEGORY.NETWORK,
    severity: ERROR_SEVERITY.MEDIUM,
    ...networkContext
  });
}

/**
 * Reports navigation errors
 * @param {Error} error - The navigation error
 * @param {Object} navigationContext - Navigation context
 */
export function reportNavigationError(error, navigationContext = {}) {
  return reportError(error, {
    category: ERROR_CATEGORY.NAVIGATION,
    severity: ERROR_SEVERITY.LOW,
    ...navigationContext
  });
}

/**
 * Reports user action errors
 * @param {Error} error - The error from user action
 * @param {Object} actionContext - Action context
 */
export function reportUserActionError(error, actionContext = {}) {
  return reportError(error, {
    category: ERROR_CATEGORY.USER_ACTION,
    severity: ERROR_SEVERITY.LOW,
    ...actionContext
  });
}

/**
 * Gets error statistics and recent errors
 * @returns {Object} Error statistics
 */
export function getErrorStats() {
  return errorStorage.getStats();
}

/**
 * Gets all stored errors
 * @returns {Array} All stored errors
 */
export function getAllErrors() {
  return errorStorage.getAll();
}

/**
 * Clears all stored errors
 */
export function clearErrors() {
  errorStorage.clear();
}

/**
 * Sets up global error handlers
 */
export function setupGlobalErrorHandlers() {
  // Handle unhandled JavaScript errors
  window.addEventListener('error', (event) => {
    reportError(event.error || new Error(event.message), {
      category: ERROR_CATEGORY.JAVASCRIPT,
      severity: ERROR_SEVERITY.HIGH,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
    
    reportError(error, {
      category: ERROR_CATEGORY.JAVASCRIPT,
      severity: ERROR_SEVERITY.HIGH,
      type: 'unhandled_promise_rejection'
    });
  });

  // Handle network errors (optional, for fetch monitoring)
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      
      // Report HTTP errors
      if (!response.ok) {
        reportNetworkError(new Error(`HTTP ${response.status}: ${response.statusText}`), {
          url: args[0],
          status: response.status,
          statusText: response.statusText
        });
      }
      
      return response;
    } catch (error) {
      reportNetworkError(error, {
        url: args[0],
        type: 'fetch_error'
      });
      throw error;
    }
  };
}

/**
 * Error reporting hook for React components
 * @returns {Function} Error reporting function
 */
export function useErrorReporting() {
  return {
    reportError: (error, context) => reportError(error, context),
    reportApiError: (error, context) => reportApiError(error, context),
    reportUserActionError: (error, context) => reportUserActionError(error, context),
    getStats: () => getErrorStats(),
    clearErrors: () => clearErrors()
  };
}