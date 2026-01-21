import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import membersImage from '@/assets/members-group.jpg';
import styles from './Join.module.css';

const benefits = [
  'Access to professional training workshops',
  'Perform in annual productions and events',
  'Network with fellow artists and industry professionals',
  'Develop leadership and teamwork skills',
  'Preserve and celebrate Ethiopian cultural heritage',
  'Build lifelong friendships and memories',
];

const requirements = [
  'Must be a registered student at Haramaya University',
  'Commitment to attend regular rehearsals and meetings',
  'Passion for theatre, music, or performing arts',
  'Willingness to learn and collaborate with others',
];

const Join = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src={membersImage}
            alt="HUMTC members"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>
              Become a Member
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText}>Join </span>
              <span className={styles.heroTitleGold}>HUMTC</span>
            </h1>
            <p className={styles.heroDescription}>
              Take the first step towards an extraordinary artistic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.benefitsTitle}>
                Why Join <span className={styles.benefitsTitleGold}>Us?</span>
              </h2>
              <p className={styles.benefitsDescription}>
                Joining HUMTC opens doors to incredible opportunities for personal growth, 
                artistic development, and cultural connection.
              </p>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.benefitItem}
                  >
                    <span className={styles.benefitIcon}>
                      <Check size={12} className={styles.benefitIconSvg} />
                    </span>
                    <span className={styles.benefitText}>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.applicationCard}>
                <h3 className={styles.applicationTitle}>
                  Requirements
                </h3>
                <ul className={styles.requirementsList}>
                  {requirements.map((req, index) => (
                    <li key={index} className={styles.requirementItem}>
                      <span className={styles.requirementBullet} />
                      <span className={styles.requirementText}>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.divider} />

                <h3 className={styles.processTitle}>
                  Application Process
                </h3>
                <div className={styles.processList}>
                  {[
                    { step: '1', text: 'Fill out the application form below' },
                    { step: '2', text: 'Attend an audition or interview session' },
                    { step: '3', text: 'Receive confirmation and welcome kit' },
                  ].map((item) => (
                    <div key={item.step} className={styles.processItem}>
                      <span className={styles.processStep}>
                        {item.step}
                      </span>
                      <span className={styles.processText}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={styles.applyButton}
                >
                  Apply Now
                  <ArrowRight size={18} className={styles.applyButtonIcon} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.faqContent}
          >
            <h2 className={styles.faqTitle}>
              Have Questions?
            </h2>
            <p className={styles.faqDescription}>
              We're here to help! Reach out to us with any questions about membership or the club.
            </p>
            <Link
              to="/contact"
              className={styles.faqLink}
            >
              Contact Us
              <ArrowRight size={16} className={styles.faqLinkIcon} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;