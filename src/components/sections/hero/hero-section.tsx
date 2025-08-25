'use client';

import { HeroActions } from './hero-actions';
import { HeroBadge } from './hero-badge';
import { HeroDescription } from './hero-description';
import { HeroTitle } from './hero-title';
import { HeroVisual } from './hero-visual';

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className='p-14 bg-gradient-to-br from-white via-slate-50 to-blue-50 flex justify-between items-center'>
      <div className='flex flex-col gap-4 w-2/3'>
        <HeroBadge />
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
      </div>

      <div className='flex justify-center w-1/3'>
        <HeroVisual />
      </div>
    </section>
  );
};
