'use client';

import { Container } from '@/components/ui/container';
import { AdvancedSearchAndFiltering } from './advanced-search-filtering';
import { ClinicManagementCTA } from './clinic-management-cta';
import { ClinicFeatures } from './clinic-features';
import { ClinicHeader } from './clinic-header';
import { MultiRoleSystem } from './multi-role-system';
import { ReviewAndRatingSystem } from './review-rating-system';
import { ServiceCategories } from './service-categories';
import { StaffManagement } from './staff-management';

export function ClinicManagementSection() {
  return (
    <section className='section-padding bg-gradient-clinic relative overflow-hidden' id='clinic-management'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-dots opacity-10' />

      <Container size='xl' className='relative z-10'>
        <ClinicHeader />
        <ClinicFeatures />
        <MultiRoleSystem />
        <AdvancedSearchAndFiltering />
        <StaffManagement />
        <ServiceCategories />
        <ReviewAndRatingSystem />
        <ClinicManagementCTA />
      </Container>
    </section>
  );
}
