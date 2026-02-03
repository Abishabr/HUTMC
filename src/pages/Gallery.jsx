import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { X } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';
import musicImage from '@/assets/music-performance.jpg';
import aboutImage from '@/assets/about-hero.jpg';
import heroImage from '@/assets/hero-theatre.jpg';
import membersImage from '@/assets/members-group.jpg';
import styles from './Gallery.module.css';

const galleryImages = [
  { id: 1, src: theatreImage, alt: 'Theatre performance', category: 'Theatre' },
  { id: 2, src: musicImage, alt: 'Music performance', category: 'Music' },
  { id: 3, src: aboutImage, alt: 'Poetry reading session', category: 'Literature' },
  { id: 4, src: heroImage, alt: 'Stage with lighting', category: 'Venue' },
  { id: 5, src: membersImage, alt: 'Club members', category: 'Members' },
  { id: 6, src: theatreImage, alt: 'Drama scene', category: 'Theatre' },
  { id: 7, src: musicImage, alt: 'Traditional music', category: 'Music' },
  { id: 8, src: membersImage, alt: 'Dance performance', category: 'Dance' },
  { id: 9, src: aboutImage, alt: 'Literary workshop', category: 'Literature' },
  { id: 10, src: membersImage, alt: 'Traditional dance rehearsal', category: 'Dance' },
  { id: 11, src: theatreImage, alt: 'Dramatic monologue', category: 'Theatre' },
  { id: 12, src: aboutImage, alt: 'Creative writing session', category: 'Literature' },
  { id: 13, src: membersImage, alt: 'Contemporary dance practice', category: 'Dance' },
  { id: 14, src: musicImage, alt: 'Instrumental ensemble', category: 'Music' },
];

const categories = ['All', 'Literature', 'Theatre', 'Music', 'Dance', 'Venue', 'Members'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
              Visual Stories
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Gallery</span>
            </h1>
            <p className={styles.heroDescription}>
              Moments captured from our performances, rehearsals, and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.categoryFilter}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.categoryButtonActive : ''
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className={styles.galleryGrid}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={styles.galleryItem}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={styles.galleryImageContainer}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.galleryImage}
                    />
                    <div className={styles.galleryOverlay} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className={styles.lightboxImage}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className={styles.lightboxClose}
              >
                <X size={24} />
              </button>
              <div className={styles.lightboxInfo}>
                <span className={styles.lightboxCategory}>
                  {selectedImage.category}
                </span>
                <p className={styles.lightboxTitle}>
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;