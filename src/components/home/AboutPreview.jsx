/**
 * AboutPreview Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import aboutImage from '@/assets/about-hero.jpg';
import styles from './AboutPreview.module.css';

/**
 * About preview section component for the home page
 * @returns {React.ReactElement} AboutPreview component
 */
export const AboutPreview = () => {
  const stats = [
    { value: '50+', label: 'Members' },
    { value: '30+', label: 'Performances' },
    { value: '10+', label: 'Years' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.imageWrapper}
          >
            <div className={styles.imageContainer}>
              <img
                src={aboutImage}
                alt="HUMTC performers on stage"
                className={styles.image}
              />
            </div>
            {/* Decorative Element */}
            <div className={styles.decorativeElement} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.content}
          >
            <p className={styles.eyebrow}>
              Our Story
            </p>
            <h2 className={styles.title}>
              Celebrating Culture <br />
              <span className={styles.titleGradient}>Through Art</span>
            </h2>
            <p className={styles.description}>
              Founded at Haramaya University, HUMTC has become a beacon of artistic
              expression and cultural preservation. Our club brings together passionate
              students who share a love for theatre and music.
            </p>
            <p className={styles.description}>
              We believe in the transformative power of performance—how it connects
              communities, preserves traditions, and inspires the next generation of
              artists.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className={styles.learnMoreLink}
            >
              Learn More About Us
              <ArrowRight size={16} className={styles.linkIcon} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

AboutPreview.propTypes = {
  // No props for this component
};