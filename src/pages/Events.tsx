import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Theatre Festival',
    date: 'March 15, 2026',
    time: '7:00 PM',
    location: 'Main Auditorium',
    type: 'Theatre',
    description: 'Our flagship annual event featuring three original productions by club members.',
  },
  {
    id: 2,
    title: 'Traditional Music Night',
    date: 'March 22, 2026',
    time: '6:30 PM',
    location: 'Open Air Stage',
    type: 'Music',
    description: 'An evening of traditional Ethiopian music featuring masinko, krar, and kebero.',
  },
  {
    id: 3,
    title: 'Spring Cultural Showcase',
    date: 'April 5, 2026',
    time: '5:00 PM',
    location: 'University Hall',
    type: 'Combined',
    description: 'A celebration of arts featuring theatre, music, and dance performances.',
  },
];

const achievements = [
  {
    year: '2024',
    title: 'Best University Arts Club',
    event: 'National University Festival',
  },
  {
    year: '2023',
    title: 'First Place - Drama',
    event: 'Eastern Ethiopia Arts Competition',
  },
  {
    year: '2023',
    title: 'Excellence in Cultural Preservation',
    event: 'Ministry of Culture Award',
  },
  {
    year: '2022',
    title: 'Best Original Production',
    event: 'Inter-University Arts Festival',
  },
];

const Events = () => {
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
              What's Happening
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-foreground">Events & </span>
              <span className="text-gold-gradient">Achievements</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for upcoming performances and celebrate our milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl">
              Mark your calendars for these exciting upcoming performances and gatherings.
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-sm border border-border/30 hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-2">
                    <span className="inline-block font-body text-xs uppercase tracking-wider text-primary mb-2">
                      {event.type}
                    </span>
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} className="text-primary/60" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} className="text-primary/60" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} className="text-primary/60" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body text-sm rounded-sm hover:bg-secondary/80 transition-colors duration-300 group/btn">
                      Learn More
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              Recognition
            </p>
            <h2 className="text-section-title text-foreground">
              Our Achievements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-card rounded-sm border border-border/30 text-center"
              >
                <span className="font-display text-4xl text-primary">{achievement.year}</span>
                <h3 className="font-display text-lg text-foreground mt-4 mb-2">
                  {achievement.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {achievement.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
