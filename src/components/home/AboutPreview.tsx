import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-hero.jpg';

export const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden image-frame">
              <img
                src={aboutImage}
                alt="HUMTC performers on stage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our Story
            </p>
            <h2 className="text-section-title text-foreground mb-6">
              Celebrating Culture <br />
              <span className="text-gold-gradient">Through Art</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Founded at Haramaya University, HUMTC has become a beacon of artistic
              expression and cultural preservation. Our club brings together passionate
              students who share a love for theatre and music.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              We believe in the transformative power of performance—how it connects
              communities, preserves traditions, and inspires the next generation of
              artists.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '50+', label: 'Members' },
                { value: '30+', label: 'Performances' },
                { value: '10+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-primary">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-body text-foreground hover:text-primary transition-colors duration-300"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
