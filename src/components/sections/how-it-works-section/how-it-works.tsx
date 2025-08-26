import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants';
import { Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <motion.div
      className='text-center mb-16 lg:mb-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-4 py-2 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm mb-6'>
        <Sparkles className='w-4 h-4 text-blue-500' />
        How It Works
      </div>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
        How{' '}
        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Borzolini</span>{' '}
        Works
      </h2>
      <p className='text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        Simple 4-step process to get your pet the care they deserve
      </p>
    </motion.div>
  );
};
