import { Clock, Shield, Users } from 'lucide-react';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HowItWorksIndicators = () => {
  return (
    <motion.div
      className='text-center mt-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
    >
      <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 max-w-5xl mx-auto'>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight'>Trusted by Pet Owners</h3>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center'>
              <Users className='w-6 h-6 text-blue-600' />
            </div>
            <div className='text-left'>
              <div className='text-3xl font-bold text-slate-900'>1000+</div>
              <div className='text-slate-600 font-medium'>Happy pets</div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center'>
              <Clock className='w-6 h-6 text-green-600' />
            </div>
            <div className='text-left'>
              <div className='text-3xl font-bold text-slate-900'>24/7</div>
              <div className='text-slate-600 font-medium'>AI health monitoring</div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center'>
              <Shield className='w-6 h-6 text-purple-600' />
            </div>
            <div className='text-left'>
              <div className='text-3xl font-bold text-slate-900'>100%</div>
              <div className='text-slate-600 font-medium'>Free to use</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
