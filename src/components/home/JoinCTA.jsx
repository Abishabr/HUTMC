/**
 * JoinCTA Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import membersImage from '@/assets/members-group.jpg';
import styles from './JoinCTA.module.css';

/**
 * Join CTA section component for the home page
 * @returns {React.ReactElement} JoinCTA component
 */
export const JoinCTA = () => {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.background}>
        <img
          src={membersImage}
          alt="HUMTC members"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.contentWrapper}
        >
          <p className={styles.eyebrow}>
            Become a Member
          </p>
          <h2 className={styles.title}>
            Join Our Creative <br />
            <span className={styles.titleGradient}>Community</span>
          </h2>
          <p className={styles.description}>
            Whether you're an experienced performer or just discovering your passion
            for the arts, HUMTC welcomes you. Be part of something extraordinary.
          </p>
          <div className={styles.buttons}>
            <Link
              to="/join"
              className={styles.primaryButton}
            >
              Apply to Join
              <ArrowRight size={18} className={styles.buttonIcon} />
            </Link>
            <Link
              to="/members"
              className={styles.secondaryButton}
            >
              Meet Our Members
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />
    </section>
  );
};

JoinCTA.propTypes = {
  // No props for this component
};