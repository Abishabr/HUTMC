import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';

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
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:contact@humtc.edu', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-semibold text-foreground">
                HUMTC
              </span>
            </Link>
            <p className="mt-4 font-body text-muted-foreground max-w-md leading-relaxed">
              Haramaya University Theatre and Music Club. Where creativity meets
              culture, and every performance tells a story.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-stone-dark mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-stone-dark mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Haramaya University Theatre & Music Club.
            All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Haramaya University, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};
