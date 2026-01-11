import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-hero.jpg';

const stats = [
  { value: '50+', label: 'Members' },
  { value: '30+', label: 'Performances' },
  { value: '10+', label: 'Years' },
];

export const AboutPreview = () => {
  return (
    <section className="py-32 lg:py-40 bg-background relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative corner-accent">
              <div className="image-frame aspect-[4/5]">
                <img
                  src={aboutImage}
                  alt="HUMTC performers on stage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <p className="text-eyebrow">Our Story</p>
            </div>
            
            <h2 className="text-section-title text-foreground mb-8">
              Celebrating Culture
              <br />
              <span className="text-gold-gradient">Through Art</span>
            </h2>
            
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Founded at Haramaya University, HUMTC has become a beacon of artistic
              expression and cultural preservation. Our club brings together passionate
              students who share a love for theatre and music.
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              We believe in the transformative power of performance—how it connects
              communities, preserves traditions, and inspires the next generation of
              artists.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mb-10 py-8 border-y border-border/30">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="btn-ghost group">
              <span className="link-underline">Learn More About Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
