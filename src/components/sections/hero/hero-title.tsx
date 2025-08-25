'use client';

import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

export const HeroTitle = (): React.JSX.Element => {
  return (
    <motion.h1
      className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      Smart Pet Care Made{' '}
      <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Simple</span> for{' '}
      <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>All Pets</span>
    </motion.h1>
  );
};
