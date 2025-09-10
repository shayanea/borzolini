'use client';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroDescription = () => {
  return (
    <motion.div className='space-y-4' initial='initial' animate='animate' variants={animations.fadeInUp}>
      <p className='text-body-large text-slate-600 leading-relaxed max-w-2xl font-medium'>
        Connect with licensed veterinarians, schedule appointments, and get expert care for your pets. Our platform
        makes professional veterinary services accessible and convenient.
      </p>
      <div className='flex flex-wrap gap-4 text-sm text-slate-500'>
        <div className='flex items-center gap-2'>
          <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
          <span>Emergency Care Available</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-1.5 h-1.5 bg-green-500 rounded-full'></div>
          <span>Licensed Professionals</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-1.5 h-1.5 bg-purple-500 rounded-full'></div>
          <span>AI-Powered</span>
        </div>
      </div>
    </motion.div>
  );
};
