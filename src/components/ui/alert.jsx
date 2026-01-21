/**
 * Alert Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./alert.module.css";

/**
 * Alert component for displaying important messages
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'destructive'} [props.variant='default'] - Alert variant
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Alert component
 */
const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const alertClasses = cn(
    styles.alert,
    styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    className
  );
  
  return <div ref={ref} role="alert" className={alertClasses} {...props} />;
});
Alert.displayName = "Alert";

/**
 * Alert title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} AlertTitle component
 */
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn(styles.title, className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

/**
 * Alert description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} AlertDescription component
 */
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.description, className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

// PropTypes
const alertPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Alert.propTypes = {
  ...alertPropTypes,
  variant: PropTypes.oneOf(['default', 'destructive']),
};
AlertTitle.propTypes = alertPropTypes;
AlertDescription.propTypes = alertPropTypes;

export { Alert, AlertTitle, AlertDescription };