/**
 * Mobile detection hook
 * Converted from TypeScript to JavaScript
 */

import * as React from "react";
import PropTypes from "prop-types";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook to detect if the current viewport is mobile-sized
 * @returns {boolean} True if viewport is mobile-sized, false otherwise
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

// PropTypes for development validation
useIsMobile.propTypes = {};

/**
 * Hook to get current viewport width
 * @returns {number} Current viewport width in pixels
 */
export function useViewportWidth() {
  const [width, setWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

/**
 * Hook to detect if viewport matches a specific breakpoint
 * @param {number} breakpoint - Breakpoint in pixels
 * @returns {boolean} True if viewport is below the breakpoint
 */
export function useBreakpoint(breakpoint = MOBILE_BREAKPOINT) {
  const [matches, setMatches] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setMatches(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setMatches(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!matches;
}

useBreakpoint.propTypes = {
  breakpoint: PropTypes.number
};