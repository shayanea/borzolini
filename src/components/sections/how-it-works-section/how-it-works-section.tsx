'use client';

import { Container } from '@/components/ui/container';
import { HowItWorks } from './how-it-works';
import { HowItWorksFeatures } from './how-it-works-features';
import { HowItWorksIndicators } from './how-it-works-indicators';

export function HowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden'
    >
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-gradient-mesh-organic opacity-20'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl'></div>

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
