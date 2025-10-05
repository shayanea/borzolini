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
        AI‑assisted monitoring + tele‑consults + vetted home visits.{' '}
        <span className='text-slate-800 font-semibold'>Fewer emergencies</span>,{' '}
        <span className='text-slate-800 font-semibold'>higher adherence</span>,{' '}
        <span className='text-slate-800 font-semibold'>happier pets</span>.
      </motion.p>
    </motion.div>
  );
};
