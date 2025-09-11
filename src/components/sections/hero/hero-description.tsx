'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroDescription = () => {
  return (
    <motion.div className='space-y-4' initial='initial' animate='animate' variants={animations.fadeInUp}>
      <p className='text-body-large text-slate-600 leading-relaxed max-w-2xl font-medium'>
        Clinic visits can be chaotic—ours were. We built a calmer way: trusted vets come to you, with guidance tailored
        to your pet at home.
      </p>
    </motion.div>
  );
};
