'use client';

import { Container } from '@/components/ui/container';

import { BorzoliniHero } from './borzolini-hero';
import { BorzoliniFeatures } from './borzolini-features';

export const BorzoliniSection = (): React.JSX.Element => {
  return (
    <section className='py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50' id='borzolini'>
      <Container>
        <BorzoliniHero />
        <BorzoliniFeatures />
      </Container>
    </section>
  );
};
