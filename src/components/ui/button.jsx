/**
 * Button Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./button.module.css";

/**
 * Button component with multiple variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'} [props.variant='default'] - Button variant
 * @param {'default'|'sm'|'lg'|'icon'} [props.size='default'] - Button size
 * @param {boolean} [props.asChild=false] - Render as child component using Slot
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Button component
 */
const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  
  // Build CSS classes based on variant and size
  const buttonClasses = cn(
    styles.button,
    styles[`variant${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    className
  );
  
  return <Comp className={buttonClasses} ref={ref} {...props} />;
});

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  asChild: PropTypes.bool,
  children: PropTypes.node,
};

export { Button };