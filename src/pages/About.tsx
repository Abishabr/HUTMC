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

const milestones = [
  { year: '2015', title: 'Founded', description: 'HUMTC was established by a group of passionate students.' },
  { year: '2017', title: 'First Major Production', description: 'Staged our first full-length theatrical production.' },
  { year: '2020', title: 'National Recognition', description: 'Won Best University Arts Club at the National Festival.' },
  { year: '2024', title: 'Growing Strong', description: 'Expanded to over 50 active members with annual productions.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="HUMTC performers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-eyebrow">About Us</p>
            </div>
            <h1 className="text-hero mb-6 text-balance">
              <span className="text-foreground">Our </span>
              <span className="text-gold-gradient">Story</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              A journey of passion, creativity, and cultural celebration at Haramaya University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <h2 className="text-section-title text-foreground mb-8">
                Where Creativity
                <br />
                <span className="text-gold-gradient">Meets Culture</span>
              </h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  The Haramaya University Theatre and Music Club (HUMTC) was founded with a vision 
                  to create a space where students could explore, express, and excel in the performing arts.
                </p>
                <p>
                  Over the years, we have grown into one of the most vibrant cultural organizations 
                  on campus, producing memorable performances that celebrate our rich Ethiopian heritage 
                  while embracing global artistic influences.
                </p>
                <p>
                  Our mission is to nurture artistic talent, preserve cultural traditions, and 
                  create powerful performances that inspire and unite our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative corner-accent">
                <div className="image-frame aspect-square">
                  <img
                    src={membersImage}
                    alt="HUMTC members group photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 lg:py-40 bg-charcoal-deep spotlight relative">
        <div className="absolute top-0 left-0 right-0 divider-gold" />
        
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary/50" />
              <p className="text-eyebrow">What We Stand For</p>
              <div className="w-12 h-px bg-primary/50" />
            </div>
            <h2 className="text-section-title text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <value.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 tracking-tight">
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

      {/* Timeline Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary/50" />
              <p className="text-eyebrow">Our Journey</p>
              <div className="w-12 h-px bg-primary/50" />
            </div>
            <h2 className="text-section-title text-foreground">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-8 lg:gap-12 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="font-display text-3xl lg:text-4xl text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-1 border-l border-border/30 pl-8 lg:pl-12">
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
