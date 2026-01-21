/**
 * Dialog Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./dialog.module.css";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

/**
 * Dialog overlay component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DialogOverlay component
 */
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * Dialog content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DialogContent component
 */
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(styles.content, className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={styles.closeButton}>
        <X className={styles.closeIcon} />
        <span className={styles.srOnly}>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/**
 * Dialog header component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} DialogHeader component
 */
const DialogHeader = ({ className, ...props }) => (
  <div className={cn(styles.header, className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

/**
 * Dialog footer component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} DialogFooter component
 */
const DialogFooter = ({ className, ...props }) => (
  <div className={cn(styles.footer, className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

/**
 * Dialog title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DialogTitle component
 */
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(styles.title, className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * Dialog description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DialogDescription component
 */
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn(styles.description, className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// PropTypes
const dialogPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DialogOverlay.propTypes = dialogPropTypes;
DialogContent.propTypes = dialogPropTypes;
DialogHeader.propTypes = dialogPropTypes;
DialogFooter.propTypes = dialogPropTypes;
DialogTitle.propTypes = dialogPropTypes;
DialogDescription.propTypes = dialogPropTypes;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};