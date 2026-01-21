/**
 * HeroSection Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import PropTypes from 'prop-types';
import heroImage from '@/assets/hero-theatre.jpg';
import styles from './HeroSection.module.css';

/**
 * Hero section component for the home page
 * @returns {React.ReactElement} HeroSection component
 */
export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src={heroImage}
          alt="Theatre stage with dramatic lighting"
          className={styles.backgroundImage}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.sideGradient} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.contentWrapper}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.eyebrow}
          >
            Haramaya University
          </motion.p>

          {/* Main Title */}
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>Theatre &</span>
            <br />
            <span className={styles.titleGradient}>Music Club</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={styles.subtitle}
          >
            Where artistry meets culture. Experience the power of performance,
            the rhythm of tradition, and the spirit of creativity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className={styles.ctaButtons}
          >
            <Link
              to="/theatre"
              className={styles.primaryButton}
            >
              View Performances
              <ArrowRight size={18} className={styles.buttonIcon} />
            </Link>
            <button className={styles.secondaryButton}>
              <Play size={18} className={styles.playIcon} />
              Watch Showreel
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className={styles.scrollLine}
        />
      </motion.div>
    </section>
  );
};

HeroSection.propTypes = {
  // No props for this component
};