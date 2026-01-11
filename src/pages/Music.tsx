import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Music2, Users, Clock } from 'lucide-react';
import musicImage from '@/assets/music-performance.jpg';

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
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={musicImage}
            alt="Music performance"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Portfolio
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-gold-gradient">Music</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional melodies and contemporary sounds celebrating Ethiopian musical heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-16 bg-charcoal-deep">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruments.map((instrument, index) => (
              <motion.div
                key={instrument.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="font-display text-lg text-primary mb-1">{instrument.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{instrument.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performances Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-section-title text-foreground mb-4">
              Musical Performances
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl">
              Our repertoire spans traditional Ethiopian music to contemporary fusion, 
              showcasing the depth and diversity of our musical heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {performances.map((performance, index) => (
              <motion.div
                key={performance.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-sm border border-border/30 overflow-hidden card-hover hover:border-primary/30"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={performance.image}
                      alt={performance.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-xs uppercase tracking-wider text-primary">
                        {performance.genre}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {performance.year}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {performance.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {performance.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users size={14} className="text-primary/60" />
                      <span className="font-body text-sm">{performance.performers}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MusicPage;
