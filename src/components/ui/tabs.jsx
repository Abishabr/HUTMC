/**
 * Tabs Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./tabs.module.css";

const Tabs = TabsPrimitive.Root;

/**
 * Tabs list component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} TabsList component
 */
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(styles.list, className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/**
 * Tabs trigger component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} TabsTrigger component
 */
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(styles.trigger, className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * Tabs content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} TabsContent component
 */
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// PropTypes
const tabsPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TabsList.propTypes = tabsPropTypes;
TabsTrigger.propTypes = {
  ...tabsPropTypes,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};
TabsContent.propTypes = {
  ...tabsPropTypes,
  value: PropTypes.string,
};

export { Tabs, TabsList, TabsTrigger, TabsContent };