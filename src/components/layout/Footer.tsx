import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  explore: [
    { name: 'About Us', path: '/about' },
    { name: 'Theatre Portfolio', path: '/theatre' },
    { name: 'Music Portfolio', path: '/music' },
    { name: 'Events', path: '/events' },
  ],
  community: [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'Join the Club', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-rose hover:border-rose/50 hover:bg-rose/10' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-amber hover:border-amber/50 hover:bg-amber/10' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-cyan hover:border-cyan/50 hover:bg-cyan/10' },
  { icon: Mail, href: 'mailto:contact@humtc.edu', label: 'Email', color: 'hover:text-violet hover:border-violet/50 hover:bg-violet/10' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-charcoal-deep border-t border-border/30 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-violet/5 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-rose/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="font-display text-3xl font-semibold text-gradient-primary">
                HUMTC
              </span>
              <Sparkles size={16} className="text-amber" />
            </Link>
            <p className="mt-4 font-body text-muted-foreground max-w-md leading-relaxed">
              Haramaya University Theatre and Music Club. Where creativity meets
              culture, and every performance tells a story.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full border border-border/50 text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-violet mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-violet to-rose group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-rose mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-rose to-amber group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="divider-gradient mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Haramaya University Theatre & Music Club.
              All rights reserved.
            </p>
            <p className="font-body text-sm text-muted-foreground inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              Haramaya University, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};