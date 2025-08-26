'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { animations } from '@/lib/animations';

export const HeroBadge = () => {
  return (
    <motion.div initial='initial' animate='animate' variants={animations.fadeInUp} className='inline-block'>
      <div className='badge-pet inline-flex items-center gap-3 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
        <Sparkles className='w-5 h-5 text-cyan-500' />
        Smart Pet Healthcare Platform for All Pets
      </div>
    </motion.div>
  );
};
