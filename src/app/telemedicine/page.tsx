import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Footer } from '@/components/sections/footer';
import { HowItWorksSection } from '@/components/sections/how-it-works-section/how-it-works-section';

export const metadata = {
  title: 'Telemedicine | Borzolini',
  description: 'Telemedicine for pets: virtual vet consults and guidance tailored to your pet.',
};

export default function TelemedicinePage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <HowItWorksSection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
