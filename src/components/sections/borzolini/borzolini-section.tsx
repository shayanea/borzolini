'use client';

import { Container } from '@/components/ui/container';

import { BorzoliniHero } from './borzolini-hero';
import { BorzoliniFeatures } from './borzolini-features';

export const BorzoliniSection = () => {
  return (
    <section
      className='section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden'
      id='borzolini'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container className='relative z-10'>
        <BorzoliniHero />
        <BorzoliniFeatures />
      </Container>
    </section>
  );
};
