'use client';

import { HeroActions } from './hero-actions';
import { HeroBadge } from './hero-badge';
import { HeroDescription } from './hero-description';
import { HeroTitle } from './hero-title';
import { HeroVisual } from './hero-visual';

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-dots opacity-30' />

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
