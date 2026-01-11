import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import membersImage from '@/assets/members-group.jpg';

const benefits = [
  'Access to professional training workshops',
  'Perform in annual productions and events',
  'Network with fellow artists and industry professionals',
  'Develop leadership and teamwork skills',
  'Preserve and celebrate Ethiopian cultural heritage',
  'Build lifelong friendships and memories',
];

const requirements = [
  'Must be a registered student at Haramaya University',
  'Commitment to attend regular rehearsals and meetings',
  'Passion for theatre, music, or performing arts',
  'Willingness to learn and collaborate with others',
];

const Join = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={membersImage}
            alt="HUMTC members"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Become a Member
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-foreground">Join </span>
              <span className="text-gold-gradient">HUMTC</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards an extraordinary artistic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-section-title text-foreground mb-6">
                Why Join <span className="text-gold-gradient">Us?</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Joining HUMTC opens doors to incredible opportunities for personal growth, 
                artistic development, and cultural connection.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span className="font-body text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-8 lg:p-10 bg-card rounded-sm border border-border/30">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Requirements
                </h3>
                <ul className="space-y-4 mb-8">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="font-body text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="divider-gold mb-8" />

                <h3 className="font-display text-2xl text-foreground mb-4">
                  Application Process
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    { step: '1', text: 'Fill out the application form below' },
                    { step: '2', text: 'Attend an audition or interview session' },
                    { step: '3', text: 'Receive confirmation and welcome kit' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary">
                        {item.step}
                      </span>
                      <span className="font-body text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:shadow-gold transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 lg:py-32 bg-charcoal-deep">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section-title text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              We're here to help! Reach out to us with any questions about membership or the club.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-body text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
