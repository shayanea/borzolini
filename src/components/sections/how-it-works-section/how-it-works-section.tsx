'use client';

import { Container } from '@/components/ui/container';
import { HowItWorksIndicators } from './how-it-works-indicators';
import { HowItWorksFeatures } from './how-it-works-features';
import { HowItWorks } from './how-it-works';

export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50'>
      <Container>
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
