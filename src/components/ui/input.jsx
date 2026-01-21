/**
 * Input Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./input.module.css";

/**
 * Input component with consistent styling
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='text'] - Input type
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Input component
 */
const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(styles.input, className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export { Input };