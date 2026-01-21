/**
 * Label Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./label.module.css";

/**
 * Label component for form inputs
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Label component
 */
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(styles.label, className)} {...props} />
));

Label.displayName = LabelPrimitive.Root.displayName;

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export { Label };