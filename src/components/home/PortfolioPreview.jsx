/**
 * PortfolioPreview Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Drama, Music } from 'lucide-react';
import PropTypes from 'prop-types';
import theatreImage from '@/assets/theatre-performance.jpg';
import musicImage from '@/assets/music-performance.jpg';
import styles from './PortfolioPreview.module.css';

const portfolioItems = [
  {
    title: 'Theatre',
    subtitle: 'Portfolio',
    description: 'Dramatic performances that captivate audiences and bring stories to life through powerful acting and stagecraft.',
    image: theatreImage,
    icon: Drama,
    link: '/theatre',
    cta: 'Explore Theatre',
  },
  {
    title: 'Music',
    subtitle: 'Portfolio',
    description: 'Traditional and contemporary musical performances celebrating Ethiopian heritage and global influences.',
    image: musicImage,
    icon: Music,
    link: '/music',
    cta: 'Explore Music',
  },
];

/**
 * Portfolio preview section component for the home page
 * @returns {React.ReactElement} PortfolioPreview component
 */
export const PortfolioPreview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className={styles.eyebrow}>
            Our Work
          </p>
          <h2 className={styles.title}>
            Showcasing Excellence
          </h2>
        </motion.div>

        {/* Portfolio Cards */}
        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={item.link}
                className={styles.card}
              >
                {/* Image */}
                <div className={styles.imageContainer}>
                  <img
                    src={item.image}
                    alt={`${item.title} performances`}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </div>

                {/* Content Overlay */}
                <div className={styles.content}>
                  <div className={styles.iconSection}>
                    <div className={styles.iconWrapper}>
                      <item.icon size={20} className={styles.icon} />
                    </div>
                    <p className={styles.subtitle}>
                      {item.subtitle}
                    </p>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                  <div className={styles.cta}>
                    {item.cta}
                    <ArrowRight size={16} className={styles.ctaIcon} />
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className={styles.borderGlow} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

PortfolioPreview.propTypes = {
  // No props for this component
};