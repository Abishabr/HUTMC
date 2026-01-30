import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { EventsPreview } from '@/components/home/EventsPreview';
import { JoinCTA } from '@/components/home/JoinCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      {/* Portfolio preview removed per request */}
      <EventsPreview />
      <JoinCTA />
    </Layout>
  );
};

export default Index;