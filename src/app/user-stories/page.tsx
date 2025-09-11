import { CTASection } from '@/components/sections/cta-section';
import { ClinicROIMetrics } from '@/components/sections/clinic-management/clinic-roi-metrics';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Footer } from '@/components/sections/footer';
import { ReviewAndRatingSystem } from '@/components/sections/clinic-management/review-rating-system';
import { ReviewSystemSection } from '@/components/sections/clinic-management/review-system-section';
import { UserStoriesHero } from '@/components/sections/user-stories/hero';
import { UserStoryExamples } from '@/components/sections/user-stories/examples';

export const metadata = {
  title: 'User stories | Borzolini',
  description: 'Real stories from pet owners and clinics using Borzolini for calm care at home.',
};

export default function UserStoriesPage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <UserStoriesHero />
        <UserStoryExamples />
        <ReviewSystemSection />
        <ReviewAndRatingSystem />
        <ClinicROIMetrics />
        <CTASection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
