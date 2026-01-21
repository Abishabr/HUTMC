import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Heart, Users, Award } from 'lucide-react';
import aboutImage from '@/assets/about-hero.jpg';
import membersImage from '@/assets/members-group.jpg';
import styles from './About.module.css';

const values = [
  {
    icon: Target,
    title: 'Artistic Excellence',
    description: 'We strive for the highest standards in every performance, pushing boundaries and refining our craft.',
  },
  {
    icon: Heart,
    title: 'Cultural Preservation',
    description: 'We honor and celebrate Ethiopian heritage through traditional music, dance, and storytelling.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive environment where artists grow together and lifelong bonds are formed.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We blend tradition with contemporary expression, creating unique performances that resonate.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src={aboutImage}
            alt="HUMTC performers"
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
              About Us
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText}>Our </span>
              <span className={styles.heroTitleGold}>Story</span>
            </h1>
            <p className={styles.heroDescription}>
              A journey of passion, creativity, and cultural celebration at Haramaya University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.missionTitle}>
                Where Creativity <br />
                <span className={styles.missionTitleGold}>Meets Culture</span>
              </h2>
              <p className={styles.missionText}>
                The Haramaya University Theatre and Music Club (HUMTC) was founded with a vision 
                to create a space where students could explore, express, and excel in the performing arts.
              </p>
              <p className={styles.missionText}>
                Over the years, we have grown into one of the most vibrant cultural organizations 
                on campus, producing memorable performances that celebrate our rich Ethiopian heritage 
                while embracing global artistic influences.
              </p>
              <p className={styles.missionText}>
                Our mission is to nurture artistic talent, preserve cultural traditions, and 
                create powerful performances that inspire and unite our community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.missionImageContainer}
            >
              <div className={styles.missionImage}>
                <img
                  src={membersImage}
                  alt="HUMTC members group photo"
                  className={styles.missionImageImg}
                />
              </div>
              <div className={styles.missionImageDecor} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.valuesHeader}
          >
            <p className={styles.valuesSubtitle}>
              What We Stand For
            </p>
            <h2 className={styles.valuesTitle}>
              Our Values
            </h2>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}>
                  <value.icon size={24} className={styles.valueIconSvg} />
                </div>
                <h3 className={styles.valueTitle}>
                  {value.title}
                </h3>
                <p className={styles.valueDescription}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.historyHeader}
          >
            <p className={styles.historySubtitle}>
              Our Journey
            </p>
            <h2 className={styles.historyTitle}>
              Milestones
            </h2>
          </motion.div>

          <div className={styles.timeline}>
            {[
              { year: '2015', title: 'Founded', description: 'HUMTC was established by a group of passionate students.' },
              { year: '2017', title: 'First Major Production', description: 'Staged our first full-length theatrical production.' },
              { year: '2020', title: 'National Recognition', description: 'Won Best University Arts Club at the National Festival.' },
              { year: '2024', title: 'Growing Strong', description: 'Expanded to over 50 active members with annual productions.' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.timelineItem}
              >
                <span className={styles.timelineYear}>
                  {milestone.year}
                </span>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>
                    {milestone.title}
                  </h3>
                  <p className={styles.timelineDescription}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;