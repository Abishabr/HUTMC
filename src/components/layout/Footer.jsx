/**
 * Footer Component
 * Site footer with links, contact info, and social media
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
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
          {/* Left: Logo and Description */}
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

          {/* Middle: Navigation Links */}
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

          {/* Right: Developer Credits (Large) */}
          <div className={styles.developerCreditsSection}>
            <p className={styles.developedByText}>Developed by</p>
            <div className={styles.developersColumn}>
              <div className={styles.developerItemLarge}>
                <img 
                  src="https://github.com/Abishabr.png" 
                  alt="Abrham Habtamu"
                  className={styles.developerAvatarLarge}
                />
                <div className={styles.developerInfoLarge}>
                  <span className={styles.developerNameLarge}>Abrham Habtamu</span>
                  <span className={styles.developerRole}>Fullstack Web Developer</span>
                  <span className={styles.githubUsernameLarge}>@Abishabr</span>
                  <div className={styles.developerSocials}>
                    <a 
                      href="https://github.com/Abishabr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="GitHub"
                    >
                      <Github size={18} className={styles.socialIcon} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/abrham-habtamu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="LinkedIn"
                    >
                      <svg className={styles.socialIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a 
                      href="mailto:abrham@example.com" 
                      className={styles.socialIconLink}
                      aria-label="Email"
                    >
                      <Mail size={18} className={styles.socialIcon} />
                    </a>
                    <a 
                      href="https://t.me/abrhamhabtamu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="Telegram"
                    >
                      <svg className={styles.socialIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.developerItemLarge}>
                <img 
                  src="https://github.com/amanumoke.png" 
                  alt="Amanuel Mekuant"
                  className={styles.developerAvatarLarge}
                />
                <div className={styles.developerInfoLarge}>
                  <span className={styles.developerNameLarge}>Amanuel Mekuant</span>
                  <span className={styles.developerRole}>Fullstack Web Developer</span>
                  <span className={styles.githubUsernameLarge}>@amanumoke</span>
                  <div className={styles.developerSocials}>
                    <a 
                      href="https://github.com/amanumoke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="GitHub"
                    >
                      <Github size={18} className={styles.socialIcon} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/amanuel-mekuant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="LinkedIn"
                    >
                      <svg className={styles.socialIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a 
                      href="mailto:amanuel@example.com" 
                      className={styles.socialIconLink}
                      aria-label="Email"
                    >
                      <Mail size={18} className={styles.socialIcon} />
                    </a>
                    <a 
                      href="https://t.me/amanuelmekuant" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIconLink}
                      aria-label="Telegram"
                    >
                      <svg className={styles.socialIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </a>
                  </div>
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
