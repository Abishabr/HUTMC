/**
 * Layout Component
 * Main layout wrapper using the existing Navbar
 */

import React from 'react';
import { Navbar } from './Navbar';

/**
 * Layout component that wraps pages with navigation
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} Layout component
 */
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;