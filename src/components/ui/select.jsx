/**
 * Select Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./select.module.css";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

/**
 * Select trigger component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectTrigger component
 */
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(styles.trigger, className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={styles.triggerIcon} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/**
 * Select scroll up button component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectScrollUpButton component
 */
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(styles.scrollButton, className)}
    {...props}
  >
    <ChevronUp className={styles.scrollIcon} />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/**
 * Select scroll down button component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectScrollDownButton component
 */
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(styles.scrollButton, className)}
    {...props}
  >
    <ChevronDown className={styles.scrollIcon} />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

/**
 * Select content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {'popper'|'item-aligned'} [props.position='popper'] - Content position
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectContent component
 */
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        styles.content,
        position === "popper" && styles.contentPopper,
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          styles.viewport,
          position === "popper" && styles.viewportPopper
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

/**
 * Select label component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectLabel component
 */
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn(styles.label, className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/**
 * Select item component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectItem component
 */
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(styles.item, className)}
    {...props}
  >
    <span className={styles.itemIndicatorWrapper}>
      <SelectPrimitive.ItemIndicator>
        <Check className={styles.itemIndicatorIcon} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

/**
 * Select separator component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} SelectSeparator component
 */
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn(styles.separator, className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// PropTypes
const selectPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SelectTrigger.propTypes = selectPropTypes;
SelectContent.propTypes = {
  ...selectPropTypes,
  position: PropTypes.oneOf(['popper', 'item-aligned']),
};
SelectLabel.propTypes = selectPropTypes;
SelectItem.propTypes = selectPropTypes;
SelectSeparator.propTypes = selectPropTypes;
SelectScrollUpButton.propTypes = selectPropTypes;
SelectScrollDownButton.propTypes = selectPropTypes;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};