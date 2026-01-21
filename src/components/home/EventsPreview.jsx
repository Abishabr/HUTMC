/**
 * EventsPreview Component
 * Converted from TypeScript to JavaScript with CSS modules
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import PropTypes from 'prop-types';
import styles from './EventsPreview.module.css';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Theatre Festival',
    date: 'March 15, 2026',
    location: 'Main Auditorium',
    type: 'Theatre',
  },
  {
    id: 2,
    title: 'Traditional Music Night',
    date: 'March 22, 2026',
    location: 'Open Air Stage',
    type: 'Music',
  },
  {
    id: 3,
    title: 'Spring Cultural Showcase',
    date: 'April 5, 2026',
    location: 'University Hall',
    type: 'Combined',
  },
];

/**
 * Events preview section component for the home page
 * @returns {React.ReactElement} EventsPreview component
 */
export const EventsPreview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <p className={styles.eyebrow}>
              Upcoming
            </p>
            <h2 className={styles.title}>
              Events & <br />
              <span className={styles.titleGradient}>Performances</span>
            </h2>
            <p className={styles.description}>
              Join us for captivating performances, cultural celebrations, and artistic
              showcases throughout the academic year.
            </p>
            <Link
              to="/events"
              className={styles.viewAllButton}
            >
              View All Events
              <ArrowRight size={16} className={styles.buttonIcon} />
            </Link>
          </motion.div>

          {/* Right Column - Event List */}
          <div className={styles.eventList}>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/events/${event.id}`}
                  className={styles.eventCard}
                >
                  <div className={styles.eventContent}>
                    <div className={styles.eventInfo}>
                      <span className={styles.eventType}>
                        {event.type}
                      </span>
                      <h3 className={styles.eventTitle}>
                        {event.title}
                      </h3>
                      <div className={styles.eventMeta}>
                        <span className={styles.eventDate}>
                          <Calendar size={14} className={styles.metaIcon} />
                          {event.date}
                        </span>
                        <span className={styles.eventLocation}>
                          <MapPin size={14} className={styles.metaIcon} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={20} className={styles.eventArrow} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

EventsPreview.propTypes = {
  // No props for this component
};