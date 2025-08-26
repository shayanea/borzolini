'use client';

import { Container } from '@/components/ui/container';
import { HowItWorksIndicators } from './how-it-works-indicators';
import { HowItWorksFeatures } from './how-it-works-features';
import { HowItWorks } from './how-it-works';

export function HowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container className='relative z-10'>
        {/* How it works */}
        <HowItWorks />

        {/* Features */}
        <HowItWorksFeatures />

        {/* Trust indicators */}
        <HowItWorksIndicators />
      </Container>
    </section>
  );
}
