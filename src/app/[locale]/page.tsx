import { BorzoliniSection } from '@/components/sections/borzolini-section';
import { ClinicManagementSection } from '@/components/sections/clinic-management-section';
import { CTASection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ErrorBoundary } from '@/components/ui/error-boundary';

export default function HomePage() {
  console.log('🔍 LOCALE PAGE DEBUG: HomePage function called');

  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ClinicManagementSection />
        <BorzoliniSection />
        <CTASection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
