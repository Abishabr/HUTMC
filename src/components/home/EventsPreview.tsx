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
    <section className="py-32 lg:py-40 bg-background relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-primary" />
                <p className="text-eyebrow">Upcoming</p>
              </div>
              
              <h2 className="text-section-title text-foreground mb-6">
                Events &
                <br />
                <span className="text-gold-gradient">Performances</span>
              </h2>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-10 max-w-md">
                Join us for captivating performances, cultural celebrations, and artistic
                showcases throughout the academic year.
              </p>
              
              <Link to="/events" className="btn-secondary group">
                View All Events
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Event List */}
          <div className="lg:col-span-7 space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to={`/events/${event.id}`}
                  className="group block p-6 lg:p-8 card-elevated"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-3">
                        {event.type}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                        <span className="inline-flex items-center gap-2 font-body text-sm">
                          <Calendar size={14} className="text-primary/60" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-2 font-body text-sm">
                          <MapPin size={14} className="text-primary/60" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
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
