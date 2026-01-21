import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { EventsPreview } from '@/components/home/EventsPreview';
import { JoinCTA } from '@/components/home/JoinCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <PortfolioPreview />
      <EventsPreview />
      <JoinCTA />
    </Layout>
  );
};

export default Index;