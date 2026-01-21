/**
 * Card Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import styles from "./card.module.css";

/**
 * Card container component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} Card component
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.card, className)} {...props} />
));
Card.displayName = "Card";

/**
 * Card header component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} CardHeader component
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardHeader, className)} {...props} />
));
CardHeader.displayName = "CardHeader";

/**
 * Card title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} CardTitle component
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn(styles.cardTitle, className)} {...props} />
));
CardTitle.displayName = "CardTitle";

/**
 * Card description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} CardDescription component
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn(styles.cardDescription, className)} {...props} />
));
CardDescription.displayName = "CardDescription";

/**
 * Card content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} CardContent component
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardContent, className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Card footer component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} CardFooter component
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardFooter, className)} {...props} />
));
CardFooter.displayName = "CardFooter";

// PropTypes for all components
const cardPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.propTypes = cardPropTypes;
CardHeader.propTypes = cardPropTypes;
CardTitle.propTypes = cardPropTypes;
CardDescription.propTypes = cardPropTypes;
CardContent.propTypes = cardPropTypes;
CardFooter.propTypes = cardPropTypes;

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };