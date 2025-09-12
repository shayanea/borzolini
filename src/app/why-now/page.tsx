import { CTASection } from '@/components/sections/cta-section';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HowItWorksSection } from '@/components/sections/how-it-works-section/how-it-works-section';
import { WhyNowUsSection } from '@/components/sections/why-now-us';

export const metadata = {
  title: 'Why now | Borzolini',
  description: 'Why now is the right time for calm, at‑home veterinary care and telemedicine.',
};

export default function WhyNowPage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <FeaturesSection />
        <WhyNowUsSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
