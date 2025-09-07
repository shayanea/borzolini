'use client';

import { HeroActions } from './hero-actions';
import { HeroBadge } from './hero-badge';
import { HeroDescription } from './hero-description';
import { HeroTitle } from './hero-title';
import { HeroVisual } from './hero-visual';

export const HeroSection = () => {
  return (
    <section className='section-padding bg-gradient-mesh-hero relative overflow-hidden'>
      <div className='container-modern relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          <div className='space-y-8'>
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
          </div>

          <div className='flex justify-center lg:justify-end'>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
