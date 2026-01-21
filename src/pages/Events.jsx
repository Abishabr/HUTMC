import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import styles from './Events.module.css';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Theatre Festival',
    date: 'March 15, 2026',
    time: '7:00 PM',
    location: 'Main Auditorium',
    type: 'Theatre',
    description: 'Our flagship annual event featuring three original productions by club members.',
  },
  {
    id: 2,
    title: 'Traditional Music Night',
    date: 'March 22, 2026',
    time: '6:30 PM',
    location: 'Open Air Stage',
    type: 'Music',
    description: 'An evening of traditional Ethiopian music featuring masinko, krar, and kebero.',
  },
  {
    id: 3,
    title: 'Spring Cultural Showcase',
    date: 'April 5, 2026',
    time: '5:00 PM',
    location: 'University Hall',
    type: 'Combined',
    description: 'A celebration of arts featuring theatre, music, and dance performances.',
  },
];

const achievements = [
  {
    year: '2024',
    title: 'Best University Arts Club',
    event: 'National University Festival',
  },
  {
    year: '2023',
    title: 'First Place - Drama',
    event: 'Eastern Ethiopia Arts Competition',
  },
  {
    year: '2023',
    title: 'Excellence in Cultural Preservation',
    event: 'Ministry of Culture Award',
  },
  {
    year: '2022',
    title: 'Best Original Production',
    event: 'Inter-University Arts Festival',
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>
              What's Happening
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText}>Events & </span>
              <span className={styles.heroTitleGold}>Achievements</span>
            </h1>
            <p className={styles.heroDescription}>
              Join us for upcoming performances and celebrate our milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.eventsHeader}
          >
            <h2 className={styles.eventsTitle}>
              Upcoming Events
            </h2>
            <p className={styles.eventsDescription}>
              Mark your calendars for these exciting upcoming performances and gatherings.
            </p>
          </motion.div>

          <div className={styles.eventsList}>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.eventCard}
              >
                <div className={styles.eventCardGrid}>
                  <div className={styles.eventContent}>
                    <span className={styles.eventType}>
                      {event.type}
                    </span>
                    <h3 className={styles.eventTitle}>
                      {event.title}
                    </h3>
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>
                  </div>
                  <div className={styles.eventDetails}>
                    <div className={styles.eventDetail}>
                      <Calendar size={16} className={styles.eventDetailIcon} />
                      <span className={styles.eventDetailText}>{event.date}</span>
                    </div>
                    <div className={styles.eventDetail}>
                      <Clock size={16} className={styles.eventDetailIcon} />
                      <span className={styles.eventDetailText}>{event.time}</span>
                    </div>
                    <div className={styles.eventDetail}>
                      <MapPin size={16} className={styles.eventDetailIcon} />
                      <span className={styles.eventDetailText}>{event.location}</span>
                    </div>
                  </div>
                  <div className={styles.eventAction}>
                    <button className={styles.eventButton}>
                      Learn More
                      <ArrowRight size={14} className={styles.eventButtonIcon} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.achievementsHeader}
          >
            <p className={styles.achievementsSubtitle}>
              Recognition
            </p>
            <h2 className={styles.achievementsTitle}>
              Our Achievements
            </h2>
          </motion.div>

          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.achievementCard}
              >
                <span className={styles.achievementYear}>{achievement.year}</span>
                <h3 className={styles.achievementTitle}>
                  {achievement.title}
                </h3>
                <p className={styles.achievementEvent}>
                  {achievement.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;