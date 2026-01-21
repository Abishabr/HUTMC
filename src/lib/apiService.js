/**
 * API Service for handling HTTP requests with validation
 * Replaces TypeScript interfaces with runtime validation
 */

import { validateContactResponse, createSafeErrorMessage } from './validation.js';
import { reportApiError, reportNetworkError } from './errorReporting.js';

/**
 * API configuration
 */
const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000, // 10 seconds
  retries: 3
};

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

/**
 * Makes an HTTP request with timeout and error handling
 * @param {string} url - Request URL
 * @param {Object} options - Fetch options
 * @returns {Promise<Response>} Fetch response
 */
async function makeRequest(url, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
    
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      const timeoutError = new ApiError('Request timeout', 408, 'TIMEOUT');
      reportNetworkError(timeoutError, { url, timeout: API_CONFIG.timeout });
      throw timeoutError;
    }
    
    const networkError = new ApiError('Network error', 0, 'NETWORK_ERROR');
    reportNetworkError(networkError, { url, originalError: error.message });
    throw networkError;
  }
}

/**
 * Makes an HTTP request with retries
 * @param {string} url - Request URL
 * @param {Object} options - Fetch options
 * @param {number} retries - Number of retries remaining
 * @returns {Promise<Response>} Fetch response
 */
async function makeRequestWithRetries(url, options = {}, retries = API_CONFIG.retries) {
  try {
    return await makeRequest(url, options);
  } catch (error) {
    if (retries > 0 && (error.code === 'NETWORK_ERROR' || error.status >= 500)) {
      // Wait before retrying (exponential backoff)
      const delay = Math.pow(2, API_CONFIG.retries - retries) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      
      return makeRequestWithRetries(url, options, retries - 1);
    }
    
    throw error;
  }
}

/**
 * Processes API response and validates it
 * @param {Response} response - Fetch response
 * @param {Function} validator - Response validator function
 * @returns {Promise<Object>} Validated response data
 */
async function processResponse(response, validator) {
  let data;
  
  try {
    data = await response.json();
  } catch (error) {
    throw new ApiError('Invalid JSON response', response.status, 'INVALID_JSON');
  }
  
  // Validate response structure
  const validation = validator(data);
  if (!validation.isValid) {
    console.error('API Response validation failed:', validation.error);
    throw new ApiError(
      'Invalid response format from server',
      response.status,
      'INVALID_RESPONSE'
    );
  }
  
  // Check if response indicates an error
  if (!response.ok) {
    const errorMessage = data.error || data.message || 'Server error';
    throw new ApiError(errorMessage, response.status, data.code || 'SERVER_ERROR');
  }
  
  return validation.validatedData;
}

/**
 * Submits contact form data to the API
 * @param {Object} formData - Validated form data
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Promise<Object>} API response
 */
export async function submitContactForm(formData) {
  const url = `${API_CONFIG.baseUrl}/contact`;
  
  try {
    const response = await makeRequestWithRetries(url, {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    
    return await processResponse(response, validateContactResponse);
  } catch (error) {
    // Log error for debugging (in production, send to error tracking service)
    console.error('Contact form submission failed:', error);
    
    // Report API error
    reportApiError(error, {
      endpoint: url,
      method: 'POST',
      formData: formData
    });
    
    // Re-throw with safe message for user display
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError('Failed to submit contact form', 500, 'SUBMISSION_ERROR');
  }
}

/**
 * Mock API service for development/testing
 * Simulates API responses when no backend is available
 */
export class MockApiService {
  /**
   * Simulates contact form submission
   * @param {Object} formData - Form data
   * @returns {Promise<Object>} Mock response
   */
  static async submitContactForm(formData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Simulate occasional errors for testing
    if (Math.random() < 0.1) { // 10% chance of error
      throw new ApiError('Server temporarily unavailable', 503, 'SERVICE_UNAVAILABLE');
    }
    
    // Return mock success response
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Determines whether to use mock API or real API
 * @returns {Object} API service to use
 */
export function getApiService() {
  // Use mock API in development or when no API URL is configured
  const useMockApi = import.meta.env.DEV || !import.meta.env.VITE_API_URL;
  
  return useMockApi ? MockApiService : { submitContactForm };
}

/**
 * Generic error handler for API calls
 * @param {Error} error - Error to handle
 * @returns {Object} Error information for UI display
 */
export function handleApiError(error) {
  if (error instanceof ApiError) {
    return {
      message: createSafeErrorMessage(error.message),
      code: error.code,
      status: error.status,
      isRetryable: error.status >= 500 || error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT'
    };
  }
  
  return {
    message: 'An unexpected error occurred. Please try again.',
    code: 'UNKNOWN_ERROR',
    status: 0,
    isRetryable: true
  };
}