'use client';

import { HeroActions } from './hero-actions';
import { HeroBadge } from './hero-badge';
import { HeroDescription } from './hero-description';
import { HeroTitle } from './hero-title';
import { HeroTrustStrip } from './hero-trust-strip';
import { HeroVisual } from './hero-visual';

export const HeroSection = () => {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden'>
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-pattern-organic opacity-30'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl'></div>

      {/* Medical cross pattern overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-2 h-8 bg-blue-400 rotate-45'></div>
        <div className='absolute top-20 left-20 w-8 h-2 bg-blue-400 rotate-45'></div>
        <div className='absolute top-40 right-32 w-2 h-6 bg-indigo-400 rotate-45'></div>
        <div className='absolute top-40 right-32 w-6 h-2 bg-indigo-400 rotate-45'></div>
        <div className='absolute bottom-32 left-1/3 w-2 h-6 bg-cyan-400 rotate-45'></div>
        <div className='absolute bottom-32 left-1/3 w-6 h-2 bg-cyan-400 rotate-45'></div>
      </div>

      <div className='container-modern relative z-10 pt-20 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]'>
          <div className='space-y-8'>
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
            <HeroTrustStrip />
          </div>

          <div className='flex justify-center lg:justify-end'>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
