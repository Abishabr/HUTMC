/**
 * Navbar Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import styles from './Navbar.module.css';
import logo from '@/assets/Logo.PNG';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Literature', path: '/literature' },
  { name: 'Theatre', path: '/theatre' },
  { name: 'Music', path: '/music' },
  { name: 'Dance', path: '/dance' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Members', path: '/members' },
];

/**
 * Navigation bar component with responsive design
 * @returns {React.ReactElement} Navbar component
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoWrap}>
              <img src={logo} alt="HUMTC logo" className={styles.logoImage} />
            </span>
            <span className={styles.logoText}>HUTMC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  styles.navLink,
                  location.pathname === link.path ? styles.navLinkActive : styles.navLinkInactive
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={styles.activeIndicator}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <Link
              to="/contact"
              className={styles.contactLink}
            >
              Contact
            </Link>
            <Link
              to="/join"
              className={styles.joinButton}
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileNav}
          >
            <div className={styles.mobileNavContent}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    styles.mobileNavLink,
                    location.pathname === link.path ? styles.mobileNavLinkActive : styles.mobileNavLinkInactive
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className={styles.mobileNavCta}>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileContactLink}
                >
                  Contact
                </Link>
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileJoinButton}
                >
                  Join the Club
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};