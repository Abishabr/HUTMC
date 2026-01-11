import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import membersImage from '@/assets/members-group.jpg';

export const JoinCTA = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={membersImage}
          alt="HUMTC members"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Become a Member
          </p>
          <h2 className="text-section-title text-foreground mb-6">
            Join Our Creative <br />
            <span className="text-gold-gradient">Community</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you're an experienced performer or just discovering your passion
            for the arts, HUMTC welcomes you. Be part of something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:shadow-gold transition-all duration-300"
            >
              Apply to Join
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/members"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-body font-medium rounded-sm hover:border-primary/50 transition-all duration-300"
            >
              Meet Our Members
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
};
