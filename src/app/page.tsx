import { BorzoliniSection } from '@/components/sections/borzolini';
import { CTASection } from '@/components/sections/cta-section';
import { ClinicManagementSection } from '@/components/sections/clinic-management';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works-section/how-it-works-section';

export default function HomePage() {
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
