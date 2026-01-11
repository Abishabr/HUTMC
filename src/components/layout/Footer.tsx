import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'About Us', path: '/about' },
    { name: 'Theatre', path: '/theatre' },
    { name: 'Music', path: '/music' },
    { name: 'Events', path: '/events' },
  ],
  community: [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
    { name: 'Join Club', path: '/join' },
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
    <footer className="bg-charcoal-deep border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-6">
                <span className="font-display text-3xl font-semibold text-foreground tracking-tight">
                  HUMTC
                </span>
              </Link>
              <p className="font-body text-muted-foreground max-w-sm leading-relaxed mb-8">
                Haramaya University Theatre and Music Club. Where creativity meets
                culture, and every performance tells a story.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* Explore Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm uppercase tracking-widest text-stone-dark mb-6">
                Explore
              </h4>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-sm uppercase tracking-widest text-stone-dark mb-6">
                Community
              </h4>
              <ul className="space-y-4">
                {footerLinks.community.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Haramaya University Theatre & Music Club
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Haramaya University, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};
