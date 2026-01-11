import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Target, Heart, Users, Award } from 'lucide-react';
import aboutImage from '@/assets/about-hero.jpg';
import membersImage from '@/assets/members-group.jpg';

const values = [
  {
    icon: Target,
    title: 'Artistic Excellence',
    description: 'We strive for the highest standards in every performance, pushing boundaries and refining our craft.',
  },
  {
    icon: Heart,
    title: 'Cultural Preservation',
    description: 'We honor and celebrate Ethiopian heritage through traditional music, dance, and storytelling.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive environment where artists grow together and lifelong bonds are formed.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We blend tradition with contemporary expression, creating unique performances that resonate.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="HUMTC performers"
            className="w-full h-full object-cover opacity-40"
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
              About Us
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-foreground">Our </span>
              <span className="text-gold-gradient">Story</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of passion, creativity, and cultural celebration at Haramaya University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-section-title text-foreground mb-6">
                Where Creativity <br />
                <span className="text-gold-gradient">Meets Culture</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                The Haramaya University Theatre and Music Club (HUMTC) was founded with a vision 
                to create a space where students could explore, express, and excel in the performing arts.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Over the years, we have grown into one of the most vibrant cultural organizations 
                on campus, producing memorable performances that celebrate our rich Ethiopian heritage 
                while embracing global artistic influences.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our mission is to nurture artistic talent, preserve cultural traditions, and 
                create powerful performances that inspire and unite our community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-sm overflow-hidden image-frame">
                <img
                  src={membersImage}
                  alt="HUMTC members group photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-charcoal-deep spotlight">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              What We Stand For
            </p>
            <h2 className="text-section-title text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-sm border border-border/30 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our Journey
            </p>
            <h2 className="text-section-title text-foreground">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {[
              { year: '2015', title: 'Founded', description: 'HUMTC was established by a group of passionate students.' },
              { year: '2017', title: 'First Major Production', description: 'Staged our first full-length theatrical production.' },
              { year: '2020', title: 'National Recognition', description: 'Won Best University Arts Club at the National Festival.' },
              { year: '2024', title: 'Growing Strong', description: 'Expanded to over 50 active members with annual productions.' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-8"
              >
                <span className="font-display text-4xl text-primary flex-shrink-0">
                  {milestone.year}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {milestone.description}
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

export default About;
