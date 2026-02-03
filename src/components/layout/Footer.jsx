/**
 * Footer Component
 * Site footer with links, contact info, and social media
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';
import logo from '@/assets/Logo.PNG';

const footerLinks = {
  categories: [
    { name: 'Literature', path: '/literature' },
    { name: 'Theatre', path: '/theatre' },
    { name: 'Music', path: '/music' },
    { name: 'Dance', path: '/dance' },
  ],
  about: [
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
  ],
  support: [
    { name: 'Join the Club', path: '/join' },
    { name: 'Contact Us', path: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
];

/**
 * Footer component with navigation links and contact information
 * @returns {React.ReactElement} Footer component
 */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Logo and Description */}
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.footerLogo}>
              <span className={styles.logoWrap}>
                <img src={logo} alt="HUTMC logo" className={styles.logoImage} />
              </span>
              <span className={styles.logoText}>HUTMC</span>
            </Link>
            <p className={styles.footerDescription}>
              Haramaya University Theatre and Music Club - Celebrating culture through 
              literature, theatre, music, and dance since our founding.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerLinks}>
            {/* Categories */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>Categories</h3>
              <ul className={styles.footerLinkList}>
                {footerLinks.categories.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>About</h3>
              <ul className={styles.footerLinkList}>
                {footerLinks.about.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>Get Involved</h3>
              <ul className={styles.footerLinkList}>
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerSectionTitle}>Contact</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <span className={styles.contactText}>
                    Haramaya University<br />
                    Dire Dawa, Ethiopia
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} />
                  <span className={styles.contactText}>
                    info@hutmc.edu.et
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} />
                  <span className={styles.contactText}>
                    +251 25 553 0000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Haramaya University Theatre and Music Club. All rights reserved.
            </p>
            <div className={styles.footerBottomLinks}>
              <a href="#" className={styles.footerBottomLink}>Privacy Policy</a>
              <a href="#" className={styles.footerBottomLink}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;