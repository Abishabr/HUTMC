/**
 * Validation utilities for API responses and form data
 * Replaces TypeScript interfaces with runtime validation
 */

/**
 * Validates if a value is a non-empty string
 * @param {any} value - Value to validate
 * @param {string} fieldName - Name of the field for error messages
 * @returns {Object} Validation result with isValid and error
 */
export function validateString(value, fieldName) {
  if (typeof value !== 'string') {
    return {
      isValid: false,
      error: `${fieldName} must be a string`
    };
  }
  
  if (value.trim().length === 0) {
    return {
      isValid: false,
      error: `${fieldName} cannot be empty`
    };
  }
  
  return { isValid: true, error: null };
}

/**
 * Validates email format
 * @param {any} email - Email to validate
 * @returns {Object} Validation result with isValid and error
 */
export function validateEmail(email) {
  const stringValidation = validateString(email, 'Email');
  if (!stringValidation.isValid) {
    return stringValidation;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Email must be a valid email address'
    };
  }
  
  return { isValid: true, error: null };
}

/**
 * Validates contact form data
 * @param {Object} formData - Form data to validate
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Object} Validation result with isValid, errors, and validatedData
 */
export function validateContactForm(formData) {
  const errors = {};
  let isValid = true;
  
  // Validate name
  const nameValidation = validateString(formData.name, 'Name');
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
    isValid = false;
  }
  
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
    isValid = false;
  }
  
  // Validate subject
  const subjectValidation = validateString(formData.subject, 'Subject');
  if (!subjectValidation.isValid) {
    errors.subject = subjectValidation.error;
    isValid = false;
  }
  
  // Validate message
  const messageValidation = validateString(formData.message, 'Message');
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
    isValid = false;
  }
  
  return {
    isValid,
    errors,
    validatedData: isValid ? {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    } : null
  };
}

/**
 * Validates API response structure
 * @param {any} response - API response to validate
 * @param {Object} expectedSchema - Expected response schema
 * @returns {Object} Validation result with isValid, error, and validatedData
 */
export function validateApiResponse(response, expectedSchema) {
  if (!response || typeof response !== 'object') {
    return {
      isValid: false,
      error: 'Response must be an object',
      validatedData: null
    };
  }
  
  const errors = [];
  const validatedData = {};
  
  // Check required fields
  for (const [field, config] of Object.entries(expectedSchema)) {
    const value = response[field];
    
    // Check if required field is missing
    if (config.required && (value === undefined || value === null)) {
      errors.push(`Missing required field: ${field}`);
      continue;
    }
    
    // Skip validation if field is optional and not present
    if (!config.required && (value === undefined || value === null)) {
      continue;
    }
    
    // Validate field type
    if (config.type && typeof value !== config.type) {
      errors.push(`Field ${field} must be of type ${config.type}, got ${typeof value}`);
      continue;
    }
    
    // Custom validation
    if (config.validate && typeof config.validate === 'function') {
      const customValidation = config.validate(value);
      if (!customValidation.isValid) {
        errors.push(`Field ${field}: ${customValidation.error}`);
        continue;
      }
    }
    
    validatedData[field] = value;
  }
  
  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors.join(', ') : null,
    validatedData: errors.length === 0 ? validatedData : null
  };
}

/**
 * Contact form submission API response schema
 */
export const CONTACT_RESPONSE_SCHEMA = {
  success: {
    type: 'boolean',
    required: true
  },
  message: {
    type: 'string',
    required: true
  },
  id: {
    type: 'string',
    required: false
  },
  timestamp: {
    type: 'string',
    required: false,
    validate: (value) => {
      const date = new Date(value);
      return {
        isValid: !isNaN(date.getTime()),
        error: 'Timestamp must be a valid date string'
      };
    }
  }
};

/**
 * Generic error response schema
 */
export const ERROR_RESPONSE_SCHEMA = {
  success: {
    type: 'boolean',
    required: true
  },
  error: {
    type: 'string',
    required: true
  },
  code: {
    type: 'string',
    required: false
  }
};

/**
 * Validates contact form submission response
 * @param {any} response - API response from contact form submission
 * @returns {Object} Validation result
 */
export function validateContactResponse(response) {
  // First check if it's an error response
  if (response && response.success === false) {
    return validateApiResponse(response, ERROR_RESPONSE_SCHEMA);
  }
  
  // Otherwise validate as success response
  return validateApiResponse(response, CONTACT_RESPONSE_SCHEMA);
}

/**
 * Sanitizes user input to prevent XSS attacks
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Creates a safe error message for display to users
 * @param {Error|string} error - Error object or message
 * @returns {string} Safe error message
 */
export function createSafeErrorMessage(error) {
  if (typeof error === 'string') {
    return sanitizeInput(error);
  }
  
  if (error instanceof Error) {
    return sanitizeInput(error.message);
  }
  
  return 'An unexpected error occurred. Please try again.';
}