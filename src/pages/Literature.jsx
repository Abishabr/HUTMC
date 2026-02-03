import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { BookOpen, Users, Award, Feather, Sparkles, PenTool } from 'lucide-react';
import heroImage from '@/assets/about-hero.jpg'; // Using about-hero as placeholder
import styles from './Literature.module.css';

const works = [
  {
    id: 1,
    title: 'Voices of the Valley',
    year: '2025',
    type: 'Poetry Collection',
    author: 'Literature Club',
    description: 'A collection of poems celebrating the natural beauty and cultural heritage of the Haramaya region.',
    image: heroImage,
    featured: true,
    contributors: 15,
  },
  {
    id: 2,
    title: 'Stories from the Highlands',
    year: '2024',
    type: 'Short Stories',
    author: 'Various Authors',
    description: 'An anthology of short stories exploring themes of identity, tradition, and modern Ethiopian life.',
    image: heroImage,
    featured: false,
    contributors: 12,
  },
  {
    id: 3,
    title: 'The Student Chronicles',
    year: '2024',
    type: 'Essays',
    author: 'Literature Club',
    description: 'Reflective essays on university life, academic pursuits, and personal growth.',
    image: heroImage,
    featured: false,
    contributors: 8,
  },
  {
    id: 4,
    title: 'Echoes of Tradition',
    year: '2023',
    type: 'Cultural Analysis',
    author: 'Research Team',
    description: 'Academic papers exploring the intersection of traditional and contemporary Ethiopian literature.',
    image: heroImage,
    featured: false,
    contributors: 6,
  },
];

const stats = [
  { label: 'Publications', value: '20+', icon: BookOpen },
  { label: 'Writers', value: '80+', icon: Users },
  { label: 'Awards', value: '8', icon: Award },
];

const genres = [
  { name: 'Poetry', description: 'Traditional and contemporary verse' },
  { name: 'Short Stories', description: 'Narrative fiction and creative writing' },
  { name: 'Essays', description: 'Academic and personal reflections' },
  { name: 'Cultural Studies', description: 'Research on Ethiopian literature' },
];

const Literature = () => {
  const featuredWork = works.find(w => w.featured);
  const otherWorks = works.filter(w => !w.featured);

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
            alt="Literature and writing"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroOverlaySides} />
          
          {/* Floating Elements */}
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
              <span className={styles.heroTitleGold}>Literature</span>
              <span className={styles.heroTitleSubtext}>
                Words That Inspire
              </span>
            </h1>
            
            <p className={styles.heroDescription}>
              Celebrating the power of written word through poetry, prose, and creative expression that reflects our culture and experiences.
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

      {/* Genres Section */}
      <section className={styles.genresSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.genresHeader}
          >
            <h2 className={styles.genresTitle}>Literary Genres</h2>
            <p className={styles.genresDescription}>
              Our diverse collection spans multiple forms of literary expression.
            </p>
          </motion.div>

          <div className={styles.genresGrid}>
            {genres.map((genre, index) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.genreCard}
              >
                <Feather className={styles.genreIcon} />
                <h3 className={styles.genreName}>{genre.name}</h3>
                <p className={styles.genreDescription}>{genre.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      {featuredWork && (
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
              <p className={styles.featuredSubtitle}>Featured Work</p>
              <h2 className={styles.featuredTitle}>Latest Publication</h2>
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
                    src={featuredWork.image}
                    alt={featuredWork.title}
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredImageOverlay} />
                  
                  <motion.div 
                    className={styles.featuredPlayOverlay}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.featuredPlayButton}>
                      <BookOpen size={32} className={styles.featuredPlayIcon} />
                    </div>
                  </motion.div>
                </div>
                
                <div className={styles.featuredContent}>
                  <div className={styles.featuredBadges}>
                    <span className={styles.featuredBadge}>
                      <Award size={12} />
                      Featured
                    </span>
                    <span className={styles.featuredYear}>{featuredWork.year}</span>
                  </div>
                  
                  <h2 className={styles.featuredWorkTitle}>
                    {featuredWork.title}
                  </h2>
                  
                  <p className={styles.featuredDescription}>
                    {featuredWork.description}
                  </p>
                  
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredMetaItem}>
                      <PenTool size={16} className={styles.featuredMetaIcon} />
                      {featuredWork.type}
                    </span>
                    <span className={styles.featuredMetaItem}>
                      <Users size={16} className={styles.featuredMetaIcon} />
                      {featuredWork.contributors} Contributors
                    </span>
                  </div>

                  <button className={styles.featuredButton}>
                    Read More
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

      {/* All Works */}
      <section className={styles.worksSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.worksHeader}
          >
            <p className={styles.worksSubtitle}>Archive</p>
            <h2 className={styles.worksTitle}>Literary Works</h2>
            <p className={styles.worksDescription}>
              A collection of our published works, each piece a testament to the creative spirit of our writers.
            </p>
          </motion.div>

          <div className={styles.worksGrid}>
            {otherWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.workCard}
              >
                <div className={styles.workCardInner}>
                  <div className={styles.workImageContainer}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className={styles.workImage}
                    />
                    <div className={styles.workImageOverlay} />
                    
                    <div className={styles.workYearBadge}>
                      <span className={styles.workYear}>{work.year}</span>
                    </div>

                    <div className={styles.workPlayOverlay}>
                      <div className={styles.workPlayButton}>
                        <BookOpen size={24} className={styles.workPlayIcon} />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.workContent}>
                    <div className={styles.workTypeBadge}>
                      <span className={styles.workTypeLine} />
                      <span className={styles.workType}>
                        {work.type}
                      </span>
                    </div>
                    
                    <h3 className={styles.workTitle}>
                      {work.title}
                    </h3>
                    
                    <p className={styles.workDescription}>
                      {work.description}
                    </p>

                    <div className={styles.workMeta}>
                      <span className={styles.workMetaItem}>
                        <PenTool size={14} className={styles.workMetaIcon} />
                        {work.author}
                      </span>
                      <span className={styles.workMetaItem}>
                        <Users size={14} className={styles.workMetaIcon} />
                        {work.contributors} Contributors
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
            <BookOpen className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>
              Ready to Share Your Voice?
            </h2>
            <p className={styles.ctaDescription}>
              Join our literary community and contribute to our growing collection of creative works.
            </p>
            <a
              href="/join"
              className={styles.ctaButton}
            >
              Join the Literature Club
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Literature;