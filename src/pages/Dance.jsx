import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Users, Award, Music, Sparkles, Heart, Zap } from 'lucide-react';
import heroImage from '@/assets/members-group.jpg'; // Using members-group as placeholder
import styles from './Dance.module.css';

const performances = [
  {
    id: 1,
    title: 'Rhythms of Ethiopia',
    year: '2025',
    style: 'Traditional Ethiopian',
    dancers: '20 dancers',
    description: 'A vibrant showcase of traditional Ethiopian dances from different regions, celebrating our rich cultural heritage.',
    image: heroImage,
    featured: true,
    duration: '45 minutes',
  },
  {
    id: 2,
    title: 'Modern Fusion',
    year: '2024',
    style: 'Contemporary Fusion',
    dancers: '12 dancers',
    description: 'A contemporary interpretation blending traditional movements with modern choreography.',
    image: heroImage,
    featured: false,
    duration: '30 minutes',
  },
  {
    id: 3,
    title: 'Campus Celebration',
    year: '2024',
    style: 'Mixed Styles',
    dancers: '15 dancers',
    description: 'An energetic performance celebrating student life and university spirit through dance.',
    image: heroImage,
    featured: false,
    duration: '25 minutes',
  },
  {
    id: 4,
    title: 'Cultural Expressions',
    year: '2023',
    style: 'Folk Dance',
    dancers: '18 dancers',
    description: 'Traditional folk dances that tell stories of our ancestors and cultural traditions.',
    image: heroImage,
    featured: false,
    duration: '40 minutes',
  },
];

const stats = [
  { label: 'Performances', value: '30+', icon: Music },
  { label: 'Dancers', value: '120+', icon: Users },
  { label: 'Awards', value: '15', icon: Award },
];

const danceStyles = [
  { name: 'Eskista', description: 'Traditional shoulder dance' },
  { name: 'Gurage', description: 'Energetic folk dance' },
  { name: 'Tigray', description: 'Northern regional dance' },
  { name: 'Contemporary', description: 'Modern fusion styles' },
];

const Dance = () => {
  const featuredPerformance = performances.find(p => p.featured);
  const otherPerformances = performances.filter(p => !p.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroBackground}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Dance performance"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroOverlaySides} />
          
          {/* Floating Elements */}
          <div className={styles.heroParticles}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.heroParticle}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.heroContentInner}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.heroDecorativeLine}
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={styles.heroSubtitle}
            >
              <Sparkles size={14} />
              Explore
              <Sparkles size={14} />
            </motion.p>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Dance</span>
              <span className={styles.heroTitleSubtext}>
                Movement & Expression
              </span>
            </h1>
            
            <p className={styles.heroDescription}>
              Celebrating culture through movement, rhythm, and the universal language of dance that connects hearts and souls.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className={styles.heroScrollIndicator}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={styles.heroScrollIndicatorInner}
              >
                <span className={styles.heroScrollText}>Explore</span>
                <div className={styles.heroScrollLine} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.statItem}
              >
                <stat.icon className={styles.statIcon} />
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className={styles.stylesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.stylesHeader}
          >
            <h2 className={styles.stylesTitle}>Dance Styles</h2>
            <p className={styles.stylesDescription}>
              Our repertoire spans traditional Ethiopian dances to contemporary fusion styles.
            </p>
          </motion.div>

          <div className={styles.stylesGrid}>
            {danceStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.styleCard}
              >
                <Heart className={styles.styleIcon} />
                <h3 className={styles.styleName}>{style.name}</h3>
                <p className={styles.styleDescription}>{style.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Performance */}
      {featuredPerformance && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredBackground}>
            <div className={styles.featuredBackgroundGlow} />
          </div>

          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={styles.featuredHeader}
            >
              <p className={styles.featuredSubtitle}>Featured Performance</p>
              <h2 className={styles.featuredTitle}>Latest Showcase</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.featuredCard}
            >
              <div className={styles.featuredCardGrid}>
                <div className={styles.featuredImageContainer}>
                  <img
                    src={featuredPerformance.image}
                    alt={featuredPerformance.title}
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredImageOverlay} />
                  
                  <motion.div 
                    className={styles.featuredPlayOverlay}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.featuredPlayButton}>
                      <Music size={32} className={styles.featuredPlayIcon} />
                    </div>
                  </motion.div>
                </div>
                
                <div className={styles.featuredContent}>
                  <div className={styles.featuredBadges}>
                    <span className={styles.featuredBadge}>
                      <Award size={12} />
                      Featured
                    </span>
                    <span className={styles.featuredYear}>{featuredPerformance.year}</span>
                  </div>
                  
                  <h2 className={styles.featuredPerformanceTitle}>
                    {featuredPerformance.title}
                  </h2>
                  
                  <p className={styles.featuredDescription}>
                    {featuredPerformance.description}
                  </p>
                  
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredMetaItem}>
                      <Zap size={16} className={styles.featuredMetaIcon} />
                      {featuredPerformance.style}
                    </span>
                    <span className={styles.featuredMetaItem}>
                      <Users size={16} className={styles.featuredMetaIcon} />
                      {featuredPerformance.dancers}
                    </span>
                  </div>

                  <button className={styles.featuredButton}>
                    Watch Performance
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Performances */}
      <section className={styles.performancesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.performancesHeader}
          >
            <p className={styles.performancesSubtitle}>Archive</p>
            <h2 className={styles.performancesTitle}>Dance Performances</h2>
            <p className={styles.performancesDescription}>
              A collection of our dance performances, each one a celebration of movement, culture, and artistic expression.
            </p>
          </motion.div>

          <div className={styles.performancesGrid}>
            {otherPerformances.map((performance, index) => (
              <motion.div
                key={performance.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.performanceCard}
              >
                <div className={styles.performanceCardInner}>
                  <div className={styles.performanceImageContainer}>
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className={styles.performanceImage}
                    />
                    <div className={styles.performanceImageOverlay} />
                    
                    <div className={styles.performanceYearBadge}>
                      <span className={styles.performanceYear}>{performance.year}</span>
                    </div>

                    <div className={styles.performancePlayOverlay}>
                      <div className={styles.performancePlayButton}>
                        <Music size={24} className={styles.performancePlayIcon} />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.performanceContent}>
                    <div className={styles.performanceTypeBadge}>
                      <span className={styles.performanceTypeLine} />
                      <span className={styles.performanceType}>
                        {performance.style}
                      </span>
                    </div>
                    
                    <h3 className={styles.performanceTitle}>
                      {performance.title}
                    </h3>
                    
                    <p className={styles.performanceDescription}>
                      {performance.description}
                    </p>

                    <div className={styles.performanceMeta}>
                      <span className={styles.performanceMetaItem}>
                        <Users size={14} className={styles.performanceMetaIcon} />
                        {performance.dancers}
                      </span>
                      <span className={styles.performanceMetaItem}>
                        <Music size={14} className={styles.performanceMetaIcon} />
                        {performance.duration}
                      </span>
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
            <Heart className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>
              Ready to Move with Us?
            </h2>
            <p className={styles.ctaDescription}>
              Join our dance community and express yourself through the beautiful art of movement and rhythm.
            </p>
            <a
              href="/join"
              className={styles.ctaButton}
            >
              Join the Dance Club
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dance;