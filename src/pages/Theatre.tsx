import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, Award } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';

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
  },
];

const Theatre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={theatreImage}
            alt="Theatre performance"
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
              <span className="text-gold-gradient">Theatre</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful performances that captivate, inspire, and tell the stories of our culture and times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Productions Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Featured Production */}
          {productions.filter(p => p.featured).map((production) => (
            <motion.div
              key={production.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 bg-card rounded-sm border border-border/30">
                <div className="aspect-[16/10] rounded-sm overflow-hidden image-frame">
                  <img
                    src={production.image}
                    alt={production.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full font-body text-xs text-primary">
                      <Award size={12} />
                      Featured
                    </span>
                    <span className="font-body text-sm text-muted-foreground">{production.year}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                    {production.title}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {production.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 font-body text-sm">
                      <Calendar size={14} className="text-primary/60" />
                      {production.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm">
                      <Clock size={14} className="text-primary/60" />
                      {production.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* All Productions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productions.filter(p => !p.featured).map((production, index) => (
              <motion.div
                key={production.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-sm border border-border/30 overflow-hidden card-hover hover:border-primary/30"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={production.image}
                    alt={production.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-xs uppercase tracking-wider text-primary">
                      {production.type}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">
                      {production.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {production.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {production.description}
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

export default Theatre;
