import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Calendar, Clock, Award, Play, Sparkles, Theater, Users, Star } from 'lucide-react';
import theatreImage from '@/assets/theatre-performance.jpg';

const productions = [
  {
    id: 1,
    title: 'The Dawn of Unity',
    year: '2025',
    type: 'Drama',
    duration: '2 hours',
    description: 'A powerful narrative exploring themes of community and resilience in modern Ethiopia.',
    image: theatreImage,
    featured: true,
    cast: 24,
    color: 'violet',
  },
  {
    id: 2,
    title: 'Echoes of Harar',
    year: '2024',
    type: 'Historical Drama',
    duration: '1.5 hours',
    description: 'A journey through the ancient streets of Harar, celebrating its rich cultural tapestry.',
    image: theatreImage,
    featured: false,
    cast: 18,
    color: 'rose',
  },
  {
    id: 3,
    title: 'The Student\'s Dream',
    year: '2024',
    type: 'Comedy',
    duration: '1 hour',
    description: 'A lighthearted comedy about the adventures and misadventures of university life.',
    image: theatreImage,
    featured: false,
    cast: 12,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Voices of the Valley',
    year: '2023',
    type: 'Musical Drama',
    duration: '2 hours',
    description: 'An original musical celebrating the farmers and traditions of the Haramaya region.',
    image: theatreImage,
    featured: false,
    cast: 30,
    color: 'amber',
  },
];

const stats = [
  { label: 'Productions', value: '25+', icon: Theater, color: 'text-violet' },
  { label: 'Cast Members', value: '150+', icon: Users, color: 'text-rose' },
  { label: 'Awards', value: '12', icon: Award, color: 'text-amber' },
];

const colorVariants = {
  violet: {
    badge: 'bg-violet/15 text-violet border-violet/30',
    glow: 'hover:shadow-[0_20px_60px_-15px_hsl(var(--violet)/0.3)]',
    accent: 'text-violet',
    border: 'hover:border-violet/40',
  },
  rose: {
    badge: 'bg-rose/15 text-rose border-rose/30',
    glow: 'hover:shadow-[0_20px_60px_-15px_hsl(var(--rose)/0.3)]',
    accent: 'text-rose',
    border: 'hover:border-rose/40',
  },
  cyan: {
    badge: 'bg-cyan/15 text-cyan border-cyan/30',
    glow: 'hover:shadow-[0_20px_60px_-15px_hsl(var(--cyan)/0.3)]',
    accent: 'text-cyan',
    border: 'hover:border-cyan/40',
  },
  amber: {
    badge: 'bg-amber/15 text-amber border-amber/30',
    glow: 'hover:shadow-[0_20px_60px_-15px_hsl(var(--amber)/0.3)]',
    accent: 'text-amber',
    border: 'hover:border-amber/40',
  },
};

const Theatre = () => {
  const featuredProduction = productions.find(p => p.featured);
  const otherProductions = productions.filter(p => !p.featured);

  return (
    <Layout>
      {/* Hero Section with Dramatic Spotlight */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={theatreImage}
            alt="Theatre performance"
            className="w-full h-full object-cover"
          />
          {/* Dramatic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, hsl(var(--violet) / 0.3) 0%, transparent 60%)' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, hsl(var(--rose) / 0.3) 0%, transparent 60%)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, hsl(var(--cyan) / 0.3) 0%, transparent 60%)' }}
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${10 + i * 9}%`,
                top: `${15 + (i % 5) * 18}%`,
                width: 4 + (i % 3) * 2,
                height: 4 + (i % 3) * 2,
                backgroundColor: i % 4 === 0 ? 'hsl(var(--violet))' : i % 4 === 1 ? 'hsl(var(--rose))' : i % 4 === 2 ? 'hsl(var(--cyan))' : 'hsl(var(--amber))',
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-violet via-rose to-amber mx-auto mb-8"
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet/10 border border-violet/20 mb-6"
            >
              <Sparkles size={14} className="text-violet" />
              <span className="font-body text-sm uppercase tracking-[0.3em] text-violet">Portfolio</span>
              <Sparkles size={14} className="text-violet" />
            </motion.div>
            
            <h1 className="text-hero mb-8">
              <span className="text-gradient-primary">Theatre</span>
              <span className="block text-foreground/80 text-3xl md:text-4xl mt-4 font-normal">
                Where Stories Come Alive
              </span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful performances that captivate, inspire, and tell the stories of our culture and times through the magic of live theatre.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs uppercase tracking-widest">Explore</span>
                <div className="w-0.5 h-12 bg-gradient-to-b from-violet via-rose to-transparent rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 border-y border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-rose/5 to-amber/5" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} />
                </motion.div>
                <p className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.value}</p>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Production - Cinematic Layout */}
      {featuredProduction && (
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet/10 blur-[150px] rounded-full" />
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-rose/10 blur-[150px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star size={14} className="text-amber fill-amber" />
                <p className="font-body text-sm uppercase tracking-[0.2em] text-amber">Now Showing</p>
              </div>
              <h2 className="text-section-title text-foreground">Featured Production</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-5 gap-0 bg-card rounded-xl overflow-hidden border border-border/30 hover:border-violet/40 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_hsl(var(--violet)/0.2)]">
                {/* Image - Takes 3 columns */}
                <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredProduction.image}
                    alt={featuredProduction.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card lg:opacity-100" />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-violet to-rose flex items-center justify-center backdrop-blur-sm cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={32} className="text-foreground ml-1" />
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Content - Takes 2 columns */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-violet/20 to-rose/20 rounded-full font-body text-xs text-foreground border border-violet/30">
                      <Award size={12} className="text-amber" />
                      Featured
                    </span>
                    <span className="font-body text-sm text-muted-foreground">{featuredProduction.year}</span>
                  </div>
                  
                  <h2 className="font-display text-3xl lg:text-5xl text-foreground mb-4 leading-tight">
                    {featuredProduction.title}
                  </h2>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-8 text-lg">
                    {featuredProduction.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                    <span className="inline-flex items-center gap-2 font-body text-sm">
                      <Calendar size={16} className="text-violet" />
                      {featuredProduction.type}
                    </span>
                    <span className="inline-flex items-center gap-2 font-body text-sm">
                      <Clock size={16} className="text-rose" />
                      {featuredProduction.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 font-body text-sm">
                      <Users size={16} className="text-cyan" />
                      {featuredProduction.cast} Cast
                    </span>
                  </div>

                  <motion.button 
                    className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet to-rose text-foreground font-body text-sm uppercase tracking-wider rounded-lg transition-all duration-300 w-fit hover:shadow-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Production</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Productions - Masonry-style Grid */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-cyan mb-2">Archive</p>
            <h2 className="text-section-title text-foreground mb-4">Past Productions</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              A collection of our theatrical journey, each production a milestone in our artistic expression.
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan via-violet to-rose mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProductions.map((production, index) => {
              const colors = colorVariants[production.color as keyof typeof colorVariants];
              return (
                <motion.div
                  key={production.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className={`bg-card rounded-xl overflow-hidden border border-border/30 ${colors.border} ${colors.glow} transition-all duration-500`}>
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={production.image}
                        alt={production.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      
                      {/* Year Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border backdrop-blur-sm ${colors.badge}`}>
                        <span className="font-body text-xs">{production.year}</span>
                      </div>

                      {/* Hover Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-gradient-to-r from-violet to-rose flex items-center justify-center backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play size={24} className="text-foreground ml-0.5" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-block w-8 h-0.5 rounded-full bg-gradient-to-r from-${production.color} to-transparent`} 
                              style={{ background: `linear-gradient(to right, hsl(var(--${production.color})), transparent)` }} />
                        <span className={`font-body text-xs uppercase tracking-wider ${colors.accent}`}>
                          {production.type}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
                        {production.title}
                      </h3>
                      
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                        {production.description}
                      </p>

                      <div className="flex items-center gap-4 text-muted-foreground/70 text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className={colors.accent} />
                          {production.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Users size={14} className={colors.accent} />
                          {production.cast} Cast
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-rose/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block"
            >
              <Theater className="w-14 h-14 mx-auto mb-6 text-violet" />
            </motion.div>
            <h2 className="text-section-title text-foreground mb-6">
              Ready to Take the <span className="text-gradient-primary">Stage</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Join our theatre ensemble and be part of productions that inspire and transform.
            </p>
            <motion.a
              href="/join"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet to-rose text-foreground font-body text-sm uppercase tracking-wider rounded-lg hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Theatre Club
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Theatre;