import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Drama, Music } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';
import musicImage from '@/assets/music-performance.jpg';

const portfolioItems = [
  {
    title: 'Theatre',
    subtitle: 'Portfolio',
    description: 'Dramatic performances that captivate audiences and bring stories to life through powerful acting and stagecraft.',
    image: theatreImage,
    icon: Drama,
    link: '/theatre',
    cta: 'Explore Theatre',
  },
  {
    title: 'Music',
    subtitle: 'Portfolio',
    description: 'Traditional and contemporary musical performances celebrating Ethiopian heritage and global influences.',
    image: musicImage,
    icon: Music,
    link: '/music',
    cta: 'Explore Music',
  },
];

export const PortfolioPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-deep spotlight">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Our Work
          </p>
          <h2 className="text-section-title text-foreground">
            Showcasing Excellence
          </h2>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={item.link}
                className="group block relative rounded-sm overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} performances`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 border border-primary/30">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <p className="font-body text-xs uppercase tracking-wider text-primary">
                      {item.subtitle}
                    </p>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-sm">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 border border-border/30 rounded-sm group-hover:border-primary/30 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
