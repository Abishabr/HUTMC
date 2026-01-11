import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Drama, Music, Paintbrush } from 'lucide-react';

const leadership = [
  {
    name: 'Abebe Tadesse',
    role: 'President',
    department: 'Theatre Arts',
    image: null,
  },
  {
    name: 'Selam Mekonnen',
    role: 'Vice President',
    department: 'Music',
    image: null,
  },
  {
    name: 'Dawit Hailu',
    role: 'Creative Director',
    department: 'Drama',
    image: null,
  },
  {
    name: 'Tigist Bekele',
    role: 'Music Director',
    department: 'Traditional Music',
    image: null,
  },
];

const departments = [
  {
    name: 'Theatre & Drama',
    icon: Drama,
    members: 20,
    description: 'Actors, directors, and stage crew bringing stories to life.',
  },
  {
    name: 'Music & Vocals',
    icon: Music,
    members: 15,
    description: 'Musicians and vocalists preserving our musical heritage.',
  },
  {
    name: 'Production & Design',
    icon: Paintbrush,
    members: 10,
    description: 'Set designers, costume makers, and technical crew.',
  },
];

const Members = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-charcoal-deep spotlight">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our People
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-gold-gradient">Members</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who make HUMTC extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-section-title text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl">
              Our dedicated leaders guiding the club's vision and operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square mb-6 rounded-sm overflow-hidden bg-card border border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal-light to-card">
                    <span className="font-display text-6xl text-primary/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-primary text-sm mb-1">{member.role}</p>
                <p className="font-body text-muted-foreground text-sm">{member.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 lg:py-32 bg-charcoal-deep">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our Teams
            </p>
            <h2 className="text-section-title text-foreground">
              Departments
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-sm border border-border/30 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <dept.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {dept.name}
                </h3>
                <p className="font-display text-3xl text-primary mb-3">
                  {dept.members}+
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Members */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Growing Together
            </p>
            <p className="font-display text-8xl lg:text-9xl text-gold-gradient mb-4">
              50+
            </p>
            <p className="font-body text-xl text-muted-foreground">
              Active Members and Counting
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;
