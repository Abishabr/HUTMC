import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Users, Music } from 'lucide-react';
import musicImage from '@/assets/music-performance.jpg';
import styles from './Music.module.css';

const performances = [
  {
    id: 1,
    title: 'Roots & Rhythms',
    year: '2025',
    genre: 'Traditional Ethiopian',
    performers: '12 musicians',
    description: 'A celebration of traditional Ethiopian instruments and melodies from across the regions.',
    image: musicImage,
  },
  {
    id: 2,
    title: 'Harmony of Haramaya',
    year: '2024',
    genre: 'Contemporary Fusion',
    performers: '8 musicians',
    description: 'Blending traditional sounds with modern arrangements for a unique listening experience.',
    image: musicImage,
  },
  {
    id: 3,
    title: 'Songs of the Highlands',
    year: '2024',
    genre: 'Folk',
    performers: '6 musicians',
    description: 'Acoustic folk performances featuring vocals and traditional string instruments.',
    image: musicImage,
  },
  {
    id: 4,
    title: 'Campus Jam Sessions',
    year: '2023',
    genre: 'Mixed',
    performers: 'Various',
    description: 'Open-format performances showcasing diverse musical talents from across the university.',
    image: musicImage,
  },
];

const instruments = [
  { name: 'Masinko', description: 'Traditional single-stringed fiddle' },
  { name: 'Krar', description: 'Five or six stringed lyre' },
  { name: 'Kebero', description: 'Traditional drums' },
  { name: 'Washint', description: 'Bamboo flute' },
];

const MusicPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src={musicImage}
            alt="Music performance"
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
              Explore
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Music</span>
            </h1>
            <p className={styles.heroDescription}>
              Traditional melodies and contemporary sounds celebrating Ethiopian musical heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className={styles.instrumentsSection}>
        <div className={styles.container}>
          <div className={styles.instrumentsGrid}>
            {instruments.map((instrument, index) => (
              <motion.div
                key={instrument.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.instrumentCard}
              >
                <h3 className={styles.instrumentName}>{instrument.name}</h3>
                <p className={styles.instrumentDescription}>{instrument.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performances Grid */}
      <section className={styles.performancesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.performancesHeader}
          >
            <h2 className={styles.performancesTitle}>
              Musical Performances
            </h2>
            <p className={styles.performancesDescription}>
              Our repertoire spans traditional Ethiopian music to contemporary fusion, 
              showcasing the depth and diversity of our musical heritage.
            </p>
          </motion.div>

          <div className={styles.performancesGrid}>
            {performances.map((performance, index) => (
              <motion.div
                key={performance.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.performanceCard}
              >
                <div className={styles.performanceCardGrid}>
                  <div className={styles.performanceImageContainer}>
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className={styles.performanceImage}
                    />
                  </div>
                  <div className={styles.performanceContent}>
                    <div className={styles.performanceMeta}>
                      <span className={styles.performanceGenre}>
                        {performance.genre}
                      </span>
                      <span className={styles.performanceYear}>
                        {performance.year}
                      </span>
                    </div>
                    <h3 className={styles.performanceTitle}>
                      {performance.title}
                    </h3>
                    <p className={styles.performanceDescription}>
                      {performance.description}
                    </p>
                    <div className={styles.performancePerformers}>
                      <Users size={14} className={styles.performancePerformersIcon} />
                      <span className={styles.performancePerformersText}>{performance.performers}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground} />
        <div className={styles.ctaBackgroundGlow}>
          <div className={styles.ctaBackgroundGlowInner} />
        </div>
        
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <Music className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>
              Ready to Make Music?
            </h2>
            <p className={styles.ctaDescription}>
              Join our club and be part of musical performances that celebrate our rich cultural heritage alongside other creative arts.
            </p>
            <a
              href="/join"
              className={styles.ctaButton}
            >
              Join the Club
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MusicPage;