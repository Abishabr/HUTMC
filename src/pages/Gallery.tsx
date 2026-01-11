import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { X } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';
import musicImage from '@/assets/music-performance.jpg';
import aboutImage from '@/assets/about-hero.jpg';
import heroImage from '@/assets/hero-theatre.jpg';
import membersImage from '@/assets/members-group.jpg';

const galleryImages = [
  { id: 1, src: theatreImage, alt: 'Theatre performance', category: 'Theatre' },
  { id: 2, src: musicImage, alt: 'Music performance', category: 'Music' },
  { id: 3, src: aboutImage, alt: 'Performers on stage', category: 'Theatre' },
  { id: 4, src: heroImage, alt: 'Stage with lighting', category: 'Venue' },
  { id: 5, src: membersImage, alt: 'Club members', category: 'Members' },
  { id: 6, src: theatreImage, alt: 'Drama scene', category: 'Theatre' },
  { id: 7, src: musicImage, alt: 'Traditional music', category: 'Music' },
  { id: 8, src: aboutImage, alt: 'Dance performance', category: 'Theatre' },
];

const categories = ['All', 'Theatre', 'Music', 'Venue', 'Members'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-charcoal-deep spotlight">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Visual Stories
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments captured from our performances, rehearsals, and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 font-body text-sm rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square overflow-hidden rounded-sm image-frame">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-sm"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-card/80 rounded-full text-foreground hover:bg-card transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/80 backdrop-blur-sm rounded-sm">
                <span className="font-body text-xs uppercase tracking-wider text-primary">
                  {selectedImage.category}
                </span>
                <p className="font-display text-lg text-foreground mt-1">
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
