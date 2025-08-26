'use client';

import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

export const HeroTitle = (): React.JSX.Element => {
  return (
    <motion.h1
      className='text-hero font-bold text-slate-900 leading-tight tracking-tight'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      Smart Pet Care Made <span className='text-gradient-pet'>Simple</span> for{' '}
      <span className='text-gradient-primary'>All Pets</span>
    </motion.h1>
  );
};
