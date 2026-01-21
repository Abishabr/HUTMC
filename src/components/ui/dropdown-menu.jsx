/**
 * Dropdown Menu Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./dropdown-menu.module.css";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * Dropdown menu sub trigger component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.inset] - Whether to add left padding
 * @param {React.ReactNode} props.children - Child elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuSubTrigger component
 */
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      styles.subTrigger,
      inset && styles.inset,
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className={styles.chevronIcon} />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * Dropdown menu sub content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuSubContent component
 */
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(styles.subContent, className)}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

/**
 * Dropdown menu content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.sideOffset=4] - Offset from trigger
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuContent component
 */
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(styles.content, className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * Dropdown menu item component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.inset] - Whether to add left padding
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuItem component
 */
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      styles.item,
      inset && styles.inset,
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * Dropdown menu checkbox item component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {boolean} [props.checked] - Checked state
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuCheckboxItem component
 */
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(styles.checkboxItem, className)}
    checked={checked}
    {...props}
  >
    <span className={styles.indicatorWrapper}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={styles.checkIcon} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * Dropdown menu radio item component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuRadioItem component
 */
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(styles.radioItem, className)}
    {...props}
  >
    <span className={styles.indicatorWrapper}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={styles.radioIcon} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * Dropdown menu label component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.inset] - Whether to add left padding
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuLabel component
 */
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      styles.label,
      inset && styles.inset,
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * Dropdown menu separator component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} DropdownMenuSeparator component
 */
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn(styles.separator, className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * Dropdown menu shortcut component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} DropdownMenuShortcut component
 */
const DropdownMenuShortcut = ({ className, ...props }) => {
  return <span className={cn(styles.shortcut, className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// PropTypes
const dropdownMenuPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

DropdownMenuSubTrigger.propTypes = {
  ...dropdownMenuPropTypes,
  inset: PropTypes.bool,
};
DropdownMenuSubContent.propTypes = dropdownMenuPropTypes;
DropdownMenuContent.propTypes = {
  ...dropdownMenuPropTypes,
  sideOffset: PropTypes.number,
};
DropdownMenuItem.propTypes = {
  ...dropdownMenuPropTypes,
  inset: PropTypes.bool,
};
DropdownMenuCheckboxItem.propTypes = {
  ...dropdownMenuPropTypes,
  checked: PropTypes.bool,
};
DropdownMenuRadioItem.propTypes = dropdownMenuPropTypes;
DropdownMenuLabel.propTypes = {
  ...dropdownMenuPropTypes,
  inset: PropTypes.bool,
};
DropdownMenuSeparator.propTypes = dropdownMenuPropTypes;
DropdownMenuShortcut.propTypes = dropdownMenuPropTypes;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};