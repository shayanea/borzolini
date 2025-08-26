'use client';

import { motion } from 'framer-motion';
import { animations } from '@/lib/animations';

export const HeroDescription = () => {
  return (
    <motion.p
      className='text-body-large text-slate-600 leading-relaxed max-w-3xl font-medium'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      Get personalized care recommendations, easily schedule vet appointments, and find the best clinics for any pet.
      Starting with Borzolini!
    </motion.p>
  );
};
