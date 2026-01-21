import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Mail, MapPin, Phone, Send, Instagram, Youtube, Facebook, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';
import { getApiService, handleApiError } from '@/lib/apiService';
import { useErrorReporting } from '@/lib/errorReporting';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Haramaya University\nHaramaya, Ethiopia',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'humtc@haramaya.edu.et',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 25 553 0325',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
    apiError: null,
    successMessage: null
  });

  const apiService = getApiService();
  const { reportUserActionError } = useErrorReporting();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset form state
    setFormState(prev => ({
      ...prev,
      errors: {},
      apiError: null,
      isSubmitting: true
    }));

    // Validate form data
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setFormState(prev => ({
        ...prev,
        errors: validation.errors,
        isSubmitting: false
      }));
      return;
    }

    try {
      // Submit form data
      const response = await apiService.submitContactForm(validation.validatedData);
      
      // Handle successful submission
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        successMessage: response.message,
        apiError: null
      }));
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      // Handle API errors
      const errorInfo = handleApiError(error);
      
      // Report user action error
      reportUserActionError(error, {
        action: 'contact_form_submission',
        formData: {
          subject: formData.subject,
          hasName: !!formData.name,
          hasEmail: !!formData.email,
          hasMessage: !!formData.message
        }
      });
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        apiError: errorInfo
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: null }
      }));
    }
  };

  const handleRetry = () => {
    setFormState(prev => ({
      ...prev,
      apiError: null
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>
              Get in Touch
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Contact</span>
            </h1>
            <p className={styles.heroDescription}>
              We'd love to hear from you. Reach out with questions, collaboration ideas, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.contactTitle}>
                Let's Connect
              </h2>
              <p className={styles.contactDescription}>
                Whether you're interested in joining the club, booking a performance, 
                or exploring collaboration opportunities, we're here to help.
              </p>

              <div className={styles.contactInfoList}>
                {contactInfo.map((item) => (
                  <div key={item.label} className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <item.icon size={20} className={styles.contactInfoIconSvg} />
                    </div>
                    <div>
                      <p className={styles.contactInfoLabel}>{item.label}</p>
                      <p className={styles.contactInfoValue}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className={styles.socialLabel}>Follow Us</p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={styles.socialLink}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <h3 className={styles.formTitle}>
                  Send a Message
                </h3>

                {/* Success Message */}
                {formState.isSubmitted && formState.successMessage && (
                  <div className={styles.successMessage}>
                    <CheckCircle size={20} className={styles.successIcon} />
                    <p>{formState.successMessage}</p>
                  </div>
                )}

                {/* API Error Message */}
                {formState.apiError && (
                  <div className={styles.errorMessage}>
                    <AlertCircle size={20} className={styles.errorIcon} />
                    <div>
                      <p>{formState.apiError.message}</p>
                      {formState.apiError.isRetryable && (
                        <button
                          type="button"
                          onClick={handleRetry}
                          className={styles.retryButton}
                        >
                          Try Again
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <div className={styles.formFields}>
                  <div>
                    <label htmlFor="name" className={styles.formLabel}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${styles.formInput} ${formState.errors.name ? styles.formInputError : ''}`}
                      placeholder="Enter your name"
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.name && (
                      <p className={styles.fieldError}>{formState.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${styles.formInput} ${formState.errors.email ? styles.formInputError : ''}`}
                      placeholder="Enter your email"
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.email && (
                      <p className={styles.fieldError}>{formState.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${styles.formSelect} ${formState.errors.subject ? styles.formInputError : ''}`}
                      disabled={formState.isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="booking">Performance Booking</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                    </select>
                    {formState.errors.subject && (
                      <p className={styles.fieldError}>{formState.errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${styles.formTextarea} ${formState.errors.message ? styles.formInputError : ''}`}
                      placeholder="Write your message..."
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.message && (
                      <p className={styles.fieldError}>{formState.errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitButton} ${formState.isSubmitting ? styles.submitButtonLoading : ''}`}
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} className={styles.submitButtonIcon} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;