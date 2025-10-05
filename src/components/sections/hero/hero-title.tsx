'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroTitle = () => {
  return (
    <div className='space-y-4'>
      <motion.h1
        className='text-hero font-bold leading-tight tracking-tight'
        initial='initial'
        animate='animate'
        variants={animations.fadeInUp}
      >
        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'>
          Professional veterinary care,
        </span>
        <span className='block text-slate-800 mt-2'>delivered calmly at home.</span>
      </motion.h1>
    </div>
  );
};
