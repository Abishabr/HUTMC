import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Theatre Festival',
    date: 'March 15, 2026',
    location: 'Main Auditorium',
    type: 'Theatre',
  },
  {
    id: 2,
    title: 'Traditional Music Night',
    date: 'March 22, 2026',
    location: 'Open Air Stage',
    type: 'Music',
  },
  {
    id: 3,
    title: 'Spring Cultural Showcase',
    date: 'April 5, 2026',
    location: 'University Hall',
    type: 'Combined',
  },
];

export const EventsPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Upcoming
            </p>
            <h2 className="text-section-title text-foreground mb-6">
              Events & <br />
              <span className="text-gold-gradient">Performances</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-md">
              Join us for captivating performances, cultural celebrations, and artistic
              showcases throughout the academic year.
            </p>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body rounded-sm hover:bg-secondary/80 transition-colors duration-300"
            >
              View All Events
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right Column - Event List */}
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/events/${event.id}`}
                  className="group block p-6 bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block font-body text-xs uppercase tracking-wider text-primary mb-2">
                        {event.type}
                      </span>
                      <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5 font-body text-sm">
                          <Calendar size={14} className="text-primary/60" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-body text-sm">
                          <MapPin size={14} className="text-primary/60" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
