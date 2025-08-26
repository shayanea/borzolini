'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { animations, commonAnimationProps } from '@/lib/animations';

export const BorzoliniHero = (): React.JSX.Element => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      <motion.div variants={animations.fadeInUp} className='space-y-8'>
        <h2 className='text-section font-bold text-slate-900 leading-tight'>
          Meet <span className='text-gradient-primary'>Borzolini</span>, Our Pet Care Hero
        </h2>
        <p className='text-body-large text-slate-600 leading-relaxed'>
          Borzolini represents everything we believe about pet care - it should be smart, accessible, and tailored to
          each unique companion. Our platform brings that vision to life.
        </p>
      </motion.div>

      <motion.div variants={animations.fadeInLeft}>
        <div className='relative'>
          <div
            className='w-full h-96 rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105'
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
