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
      Professional veterinary care, delivered calmly at home.
    </motion.h1>
  );
};
