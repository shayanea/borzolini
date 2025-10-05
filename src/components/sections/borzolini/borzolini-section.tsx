'use client';

import { BorzoliniFeatures } from './borzolini-features';
import { Container } from '@/components/ui/container';

export const BorzoliniSection = () => {
  return (
    <section
      className='section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'
      id='borzolini'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container className='relative z-10'>
        <BorzoliniFeatures />
      </Container>
    </section>
  );
};
