import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Calendar } from 'lucide-react';
import aboutImage from '@/assets/about-hero.jpg';

const stats = [
  { value: '50+', label: 'Members', icon: Users, color: 'text-violet' },
  { value: '30+', label: 'Performances', icon: Star, color: 'text-rose' },
  { value: '10+', label: 'Years', icon: Calendar, color: 'text-amber' },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(var(--violet) / 0.3) 0%, transparent 70%)' }}
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, hsl(var(--rose) / 0.3) 0%, transparent 70%)' }}
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden image-frame group">
              <img
                src={aboutImage}
                alt="HUMTC performers on stage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet/20 via-transparent to-rose/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-violet/30 rounded-xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-20 h-20 border border-rose/30 rounded-xl -z-10"
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              <span className="font-body text-sm uppercase tracking-[0.2em] text-violet">Our Story</span>
            </div>
            
            <h2 className="text-section-title text-foreground mb-6">
              Celebrating Culture <br />
              <span className="text-gradient-primary">Through Art</span>
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
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon size={16} className={stat.color} />
                    <p className="font-display text-3xl text-foreground">{stat.value}</p>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-lg font-body text-foreground hover:border-violet/50 hover:bg-violet/5 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-violet transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};