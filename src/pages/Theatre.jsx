import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, Award, Play, Sparkles, Theater, Users } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';
import styles from './Theatre.module.css';

const productions = [
  {
    id: 1,
    title: 'The Dawn of Unity',
    year: '2025',
    type: 'Drama',
    duration: '2 hours',
    description: 'A powerful narrative exploring themes of community and resilience in modern Ethiopia.',
    image: theatreImage,
    featured: true,
    cast: 24,
  },
  {
    id: 2,
    title: 'Echoes of Harar',
    year: '2024',
    type: 'Historical Drama',
    duration: '1.5 hours',
    description: 'A journey through the ancient streets of Harar, celebrating its rich cultural tapestry.',
    image: theatreImage,
    featured: false,
    cast: 18,
  },
  {
    id: 3,
    title: 'The Student\'s Dream',
    year: '2024',
    type: 'Comedy',
    duration: '1 hour',
    description: 'A lighthearted comedy about the adventures and misadventures of university life.',
    image: theatreImage,
    featured: false,
    cast: 12,
  },
  {
    id: 4,
    title: 'Voices of the Valley',
    year: '2023',
    type: 'Musical Drama',
    duration: '2 hours',
    description: 'An original musical celebrating the farmers and traditions of the Haramaya region.',
    image: theatreImage,
    featured: false,
    cast: 30,
  },
];

const stats = [
  { label: 'Productions', value: '25+', icon: Theater },
  { label: 'Cast Members', value: '150+', icon: Users },
  { label: 'Awards', value: '12', icon: Award },
];

const Theatre = () => {
  const featuredProduction = productions.find(p => p.featured);
  const otherProductions = productions.filter(p => !p.featured);

  return (
    <Layout>
      {/* Hero Section with Dramatic Spotlight */}
      <section className={styles.heroSection}>
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className={styles.heroBackground}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={theatreImage}
            alt="Theatre performance"
            className={styles.heroImage}
          />
          {/* Dramatic Gradient Overlays */}
          <div className={styles.heroOverlay} />
          <div className={styles.heroOverlaySides} />
          
          {/* Spotlight Effect */}
          <div className={styles.heroSpotlight}>
            <div className={styles.heroSpotlightGlow} />
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className={styles.heroParticles}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.heroParticle}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.heroContentInner}
          >
            {/* Decorative Line */}
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
              Portfolio
              <Sparkles size={14} />
            </motion.p>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Theatre</span>
              <span className={styles.heroTitleSubtext}>
                Where Stories Come Alive
              </span>
            </h1>
            
            <p className={styles.heroDescription}>
              Powerful performances that captivate, inspire, and tell the stories of our culture and times through the magic of live theatre.
            </p>

            {/* Scroll Indicator */}
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

      {/* Featured Production - Cinematic Layout */}
      {featuredProduction && (
        <section className={styles.featuredSection}>
          {/* Background Glow */}
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
              <p className={styles.featuredSubtitle}>Now Showing</p>
              <h2 className={styles.featuredTitle}>Featured Production</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.featuredCard}
            >
              <div className={styles.featuredCardGrid}>
                {/* Image - Takes 3 columns */}
                <div className={styles.featuredImageContainer}>
                  <img
                    src={featuredProduction.image}
                    alt={featuredProduction.title}
                    className={styles.featuredImage}
                  />
                  {/* Image Overlay */}
                  <div className={styles.featuredImageOverlay} />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className={styles.featuredPlayOverlay}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.featuredPlayButton}>
                      <Play size={32} className={styles.featuredPlayIcon} />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content - Takes 2 columns */}
                <div className={styles.featuredContent}>
                  <div className={styles.featuredBadges}>
                    <span className={styles.featuredBadge}>
                      <Award size={12} />
                      Featured
                    </span>
                    <span className={styles.featuredYear}>{featuredProduction.year}</span>
                  </div>
                  
                  <h2 className={styles.featuredProductionTitle}>
                    {featuredProduction.title}
                  </h2>
                  
                  <p className={styles.featuredDescription}>
                    {featuredProduction.description}
                  </p>
                  
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredMetaItem}>
                      <Calendar size={16} className={styles.featuredMetaIcon} />
                      {featuredProduction.type}
                    </span>
                    <span className={styles.featuredMetaItem}>
                      <Clock size={16} className={styles.featuredMetaIcon} />
                      {featuredProduction.duration}
                    </span>
                    <span className={styles.featuredMetaItem}>
                      <Users size={16} className={styles.featuredMetaIcon} />
                      {featuredProduction.cast} Cast
                    </span>
                  </div>

                  <button className={styles.featuredButton}>
                    View Production
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

      {/* All Productions - Masonry-style Grid */}
      <section className={styles.productionsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.productionsHeader}
          >
            <p className={styles.productionsSubtitle}>Archive</p>
            <h2 className={styles.productionsTitle}>Past Productions</h2>
            <p className={styles.productionsDescription}>
              A collection of our theatrical journey, each production a milestone in our artistic expression.
            </p>
          </motion.div>

          <div className={styles.productionsGrid}>
            {otherProductions.map((production, index) => (
              <motion.div
                key={production.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.productionCard}
              >
                <div className={styles.productionCardInner}>
                  {/* Image Container */}
                  <div className={styles.productionImageContainer}>
                    <img
                      src={production.image}
                      alt={production.title}
                      className={styles.productionImage}
                    />
                    {/* Overlay on Hover */}
                    <div className={styles.productionImageOverlay} />
                    
                    {/* Year Badge */}
                    <div className={styles.productionYearBadge}>
                      <span className={styles.productionYear}>{production.year}</span>
                    </div>

                    {/* Hover Play Icon */}
                    <div className={styles.productionPlayOverlay}>
                      <div className={styles.productionPlayButton}>
                        <Play size={24} className={styles.productionPlayIcon} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={styles.productionContent}>
                    <div className={styles.productionTypeBadge}>
                      <span className={styles.productionTypeLine} />
                      <span className={styles.productionType}>
                        {production.type}
                      </span>
                    </div>
                    
                    <h3 className={styles.productionTitle}>
                      {production.title}
                    </h3>
                    
                    <p className={styles.productionDescription}>
                      {production.description}
                    </p>

                    <div className={styles.productionMeta}>
                      <span className={styles.productionMetaItem}>
                        <Clock size={14} className={styles.productionMetaIcon} />
                        {production.duration}
                      </span>
                      <span className={styles.productionMetaItem}>
                        <Users size={14} className={styles.productionMetaIcon} />
                        {production.cast} Cast
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
            <Theater className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>
              Ready to Take the Stage?
            </h2>
            <p className={styles.ctaDescription}>
              Join our theatre ensemble and be part of productions that inspire and transform.
            </p>
            <a
              href="/join"
              className={styles.ctaButton}
            >
              Join the Theatre Club
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Theatre;