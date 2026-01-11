import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Mail, MapPin, Phone, Send, Instagram, Youtube, Facebook } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Haramaya University\nHaramaya, Ethiopia',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'humtc@haramaya.edu.et',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 25 553 0325',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </p>
            <h1 className="text-hero mb-6">
              <span className="text-gold-gradient">Contact</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with questions, collaboration ideas, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-section-title text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-10">
                Whether you're interested in joining the club, booking a performance, 
                or exploring collaboration opportunities, we're here to help.
              </p>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-body text-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-body text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="p-8 lg:p-10 bg-card rounded-sm border border-border/30">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Send a Message
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-body text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="booking">Performance Booking</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                      placeholder="Write your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:shadow-gold transition-all duration-300"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
