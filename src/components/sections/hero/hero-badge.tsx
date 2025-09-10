'use client';

import { motion } from 'framer-motion';
import { Shield, Heart } from 'lucide-react';

import { animations } from '@/lib/animations';

export const HeroBadge = () => {
  return (
    <motion.div initial='initial' animate='animate' variants={animations.fadeInUp} className='inline-block'>
      <div className='inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
        <div className='flex items-center gap-2'>
          <Shield className='w-5 h-5 text-blue-600' />
          <Heart className='w-5 h-5 text-red-500' />
        </div>
        <span className='text-slate-700'>Trusted Veterinary Care Platform</span>
        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
      </div>
    </motion.div>
  );
};
