/**
 * Layout Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './Layout.module.css';

/**
 * Main layout component that wraps all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @returns {React.ReactElement} Layout component
 */
export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};