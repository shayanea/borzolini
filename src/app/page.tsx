import { AboutBorzoliniSection } from '@/components/sections/about-borzolini-section';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { HeroSection } from '@/components/sections/hero';
import { ImpactGoalsSection } from '@/components/sections/impact-goals-section';
import { MedicalCareSection } from '@/components/sections/medical-care-section';
import { NewFooter } from '@/components/sections/new-footer';
import { NewHowItWorksSection } from '@/components/sections/how-it-works-section/new-how-it-works-section';

export default function HomePage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <HeroSection />
        <MedicalCareSection />
        <NewHowItWorksSection />
        <ImpactGoalsSection />
        <AboutBorzoliniSection />
        <NewFooter />
      </main>
    </ErrorBoundary>
  );
}
