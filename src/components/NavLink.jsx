/**
 * NavLink Component
 * Converted from TypeScript to JavaScript
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * Enhanced NavLink component with active and pending state support
 * @param {Object} props - Component props
 * @param {string} props.className - Base CSS class
 * @param {string} props.activeClassName - CSS class for active state
 * @param {string} props.pendingClassName - CSS class for pending state
 * @param {string} props.to - Navigation target
 * @param {React.Ref} ref - Forwarded ref
 * @returns {React.ReactElement} NavLink component
 */
const NavLink = forwardRef(({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive, isPending }) =>
        cn(className, isActive && activeClassName, isPending && pendingClassName)
      }
      {...props}
    />
  );
});

NavLink.displayName = 'NavLink';

NavLink.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  pendingClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export { NavLink };