/**
 * Checkbox Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./checkbox.module.css";

/**
 * Checkbox component with custom styling
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.checked] - Checked state
 * @param {Function} [props.onCheckedChange] - Callback when checked state changes
 * @param {boolean} [props.disabled] - Disabled state
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Checkbox component
 */
const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(styles.checkbox, className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={styles.indicator}>
      <Check className={styles.checkIcon} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

export { Checkbox };