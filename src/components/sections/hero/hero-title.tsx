'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroTitle = () => {
  return (
    <motion.h1
      className='text-hero font-bold text-slate-900 leading-tight tracking-tight'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      Professional{' '}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
        Veterinary Care
      </span>{' '}
      for Your{' '}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Beloved Pets</span>
    </motion.h1>
  );
};
