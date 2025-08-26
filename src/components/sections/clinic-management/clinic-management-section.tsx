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
    <section className='py-24 bg-gradient-to-br from-purple-600 to-indigo-700' id='clinic-management'>
      <Container size='xl'>
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
