import { CTASection } from '@/components/sections/cta-section';
import { FariborzSection } from '@/components/sections/fariborz-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ErrorBoundary } from '@/components/ui/error-boundary';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FariborzSection />
        <CTASection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
