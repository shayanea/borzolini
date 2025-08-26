import { BorzoliniSection } from '@/components/sections/borzolini';
import { ClinicManagementSection } from '@/components/sections/clinic-management';
import { CTASection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works-section/how-it-works-section';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { AnalyticsProvider, ConsentBanner } from '@/components/analytics';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <AnalyticsProvider>
        <ConsentBanner />
        <main className='min-h-screen'>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <ClinicManagementSection />
          <BorzoliniSection />
          <CTASection />
          <Footer />
        </main>
      </AnalyticsProvider>
    </ErrorBoundary>
  );
}
