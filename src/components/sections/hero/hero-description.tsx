'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroDescription = () => {
  return (
    <motion.div className='space-y-4' initial='initial' animate='animate' variants={animations.fadeInUp}>
      <p className='text-body-large text-slate-600 leading-relaxed max-w-2xl font-medium'>
        AI‑assisted monitoring + tele‑consults + vetted home visits. Fewer emergencies, higher adherence, happier pets.
      </p>
    </motion.div>
  );
};
