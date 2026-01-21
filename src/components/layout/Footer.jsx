/**
 * Footer Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  explore: [
    { name: 'About Us', path: '/about' },
    { name: 'Theatre Portfolio', path: '/theatre' },
    { name: 'Music Portfolio', path: '/music' },
    { name: 'Events', path: '/events' },
  ],
  community: [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'Join the Club', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:contact@humtc.edu', label: 'Email' },
];

/**
 * Footer component with links and social media
 * @returns {React.ReactElement} Footer component
 */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.brandLink}>
              <span className={styles.brandText}>
                HUMTC
              </span>
            </Link>
            <p className={styles.brandDescription}>
              Haramaya University Theatre and Music Club. Where creativity meets
              culture, and every performance tells a story.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={styles.socialLink}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>
              Explore
            </h4>
            <ul className={styles.linkList}>
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>
              Community
            </h4>
            <ul className={styles.linkList}>
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Haramaya University Theatre & Music Club.
            All rights reserved.
          </p>
          <p className={styles.location}>
            Haramaya University, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};