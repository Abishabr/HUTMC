/**
 * Toast Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./toast.module.css";

const ToastProvider = ToastPrimitives.Provider;

/**
 * Toast viewport component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} ToastViewport component
 */
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(styles.viewport, className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

/**
 * Toast component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'destructive'} [props.variant='default'] - Toast variant
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Toast component
 */
const Toast = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const toastClasses = cn(
    styles.toast,
    styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    className
  );
  
  return <ToastPrimitives.Root ref={ref} className={toastClasses} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

/**
 * Toast action component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} ToastAction component
 */
const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(styles.action, className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

/**
 * Toast close component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} ToastClose component
 */
const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(styles.close, className)}
    toast-close=""
    {...props}
  >
    <X className={styles.closeIcon} />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

/**
 * Toast title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} ToastTitle component
 */
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn(styles.title, className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

/**
 * Toast description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} ToastDescription component
 */
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn(styles.description, className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// PropTypes
const toastPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ToastViewport.propTypes = toastPropTypes;
Toast.propTypes = {
  ...toastPropTypes,
  variant: PropTypes.oneOf(['default', 'destructive']),
};
ToastAction.propTypes = toastPropTypes;
ToastClose.propTypes = toastPropTypes;
ToastTitle.propTypes = toastPropTypes;
ToastDescription.propTypes = toastPropTypes;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};