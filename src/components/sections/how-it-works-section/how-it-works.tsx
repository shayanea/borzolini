import { Sparkles } from 'lucide-react';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  return (
    <motion.div
      className='text-center mb-16 lg:mb-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
    >
      <div className='badge-modern inline-flex items-center gap-2 mb-8'>
        <Sparkles className='w-4 h-4 text-blue-500' />
        How It Works
      </div>
      <h2 className='text-section font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
        How <span className='text-blue-500'>Borzolini</span> Works
      </h2>
      <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        Simple 4-step process to get your pet the care they deserve
      </p>
    </motion.div>
  );
};
