'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroDescription = () => {
  return (
    <motion.div className='space-y-6' initial='initial' animate='animate' variants={animations.staggerContainer}>
      <motion.p
        className='text-body-large text-slate-600 leading-relaxed max-w-2xl font-medium'
        variants={animations.fadeInUp}
      >
        I started this after my kitten Fariborz got anxious at a noisy clinic. We make care calmer: smart health
        monitoring, quick video consults, and trusted vets who come home. Simple things done well.
      </motion.p>
    </motion.div>
  );
};
