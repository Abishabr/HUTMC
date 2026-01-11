import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Drama, Music } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';
import musicImage from '@/assets/music-performance.jpg';

const portfolioItems = [
  {
    title: 'Theatre',
    subtitle: 'Dramatic Arts',
    description: 'Captivating performances that bring stories to life through powerful acting and immersive stagecraft.',
    image: theatreImage,
    icon: Drama,
    link: '/theatre',
  },
  {
    title: 'Music',
    subtitle: 'Musical Arts',
    description: 'Traditional and contemporary performances celebrating Ethiopian heritage and global influences.',
    image: musicImage,
    icon: Music,
    link: '/music',
  },
];

export const PortfolioPreview = () => {
  return (
    <section className="py-32 lg:py-40 bg-charcoal-deep spotlight relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/50" />
            <p className="text-eyebrow">Our Work</p>
            <div className="w-12 h-px bg-primary/50" />
          </div>
          <h2 className="text-section-title text-foreground">
            Showcasing Excellence
          </h2>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to={item.link}
                className="group block relative overflow-hidden rounded-sm"
              >
                {/* Image with Zoom */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} performances`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  {/* Icon Badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-sm">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-2 font-body text-sm text-foreground">
                    <span className="link-underline">Explore {item.title}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-border/20 rounded-sm group-hover:border-primary/30 transition-colors duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
