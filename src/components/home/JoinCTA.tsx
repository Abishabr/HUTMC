import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const JoinCTA = () => {
  return (
    <section className="relative py-40 lg:py-52 overflow-hidden bg-charcoal-deep">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(38_70%_55%_/_0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(38_70%_55%_/_0.05),transparent_50%)]" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles size={24} className="text-primary" />
          </motion.div>

          <p className="text-eyebrow mb-6">Become a Member</p>
          
          <h2 className="text-section-title text-foreground mb-8 text-balance">
            Join Our Creative
            <br />
            <span className="text-gold-gradient">Community</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you're an experienced performer or just discovering your passion
            for the arts, HUMTC welcomes you. Be part of something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/join" className="btn-primary group">
              Apply to Join
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/members" className="btn-secondary">
              Meet Our Members
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
