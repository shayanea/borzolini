'use client';

import { ProductCapabilitiesSection } from './product-capabilities-section';
import { Container } from '@/components/ui/container';
import { ClinicROIMetrics } from './clinic-roi-metrics';

export function ClinicManagementSection() {
  return (
    <section
      className='section-padding bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden'
      id='clinic-management'
    >
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-pattern-organic opacity-10' />
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl' />

      {/* Medical cross pattern overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-2 h-8 bg-white rotate-45' />
        <div className='absolute top-20 left-20 w-8 h-2 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-2 h-6 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-6 h-2 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-2 h-6 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-6 h-2 bg-white rotate-45' />
      </div>

      <Container size='xl' className='relative z-10'>
        <ProductCapabilitiesSection />
        <ClinicROIMetrics />
      </Container>
    </section>
  );
}
