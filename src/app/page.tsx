import { CTASection } from '@/components/sections/cta-section';
import { FariborzSection } from '@/components/sections/fariborz-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <FeaturesSection />
      <FariborzSection />
      <CTASection />
      <Footer />
    </main>
  );
}
