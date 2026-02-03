/**
 * Layout Component
 * Main layout wrapper using the existing Navbar and Footer
 */

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Layout component that wraps pages with navigation and footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} Layout component
 */
export const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;