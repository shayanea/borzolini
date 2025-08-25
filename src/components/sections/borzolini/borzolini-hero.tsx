'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { animations, commonAnimationProps } from '@/lib/animations';

export const BorzoliniHero = (): React.JSX.Element => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      <motion.div variants={animations.fadeInUp}>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6'>
          Meet{' '}
          <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Borzolini</span>,
          Our Pet Care Hero
        </h2>
        <p className='text-xl text-slate-600 leading-relaxed mb-8'>
          Borzolini represents everything we believe about pet care - it should be smart, accessible, and tailored to
          each unique companion. Our platform brings that vision to life.
        </p>
      </motion.div>

      <motion.div variants={animations.fadeInLeft}>
        <div className='relative'>
          <div
            className='w-full h-96 rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl'
            style={{
              backgroundImage: `url('/images/borzolini-hero.webp')`,
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-3xl'></div>
            <div className='absolute bottom-6 left-6 text-white'>
              <p className='text-2xl font-bold drop-shadow-lg'>
                Borzolini <Sparkles className='inline w-6 h-6 text-yellow-400' />
              </p>
              <p className='text-lg opacity-90 drop-shadow-md'>Our Pet Hero</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
