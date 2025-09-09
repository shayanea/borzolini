import { Brain, Calendar, Users } from 'lucide-react';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const ClinicFeatures = () => {
  return (
    <motion.div
      className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.staggerContainer}
    >
      <motion.div variants={animations.fadeInUp}>
        <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
          <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <Calendar className='w-8 h-8 text-blue-600' />
          </div>
          <h4 className='font-semibold text-slate-900 text-lg mb-2'>Smart Scheduling</h4>
          <p className='text-slate-600 text-sm'>AI-optimized appointment booking</p>
        </div>
      </motion.div>

      <motion.div variants={animations.fadeInUp}>
        <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
          <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <Users className='w-8 h-8 text-green-600' />
          </div>
          <h4 className='font-semibold text-slate-900 text-lg mb-2'>Patient Management</h4>
          <p className='text-slate-600 text-sm'>Comprehensive health records</p>
        </div>
      </motion.div>

      <motion.div variants={animations.fadeInUp}>
        <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
          <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <Brain className='w-8 h-8 text-purple-600' />
          </div>
          <h4 className='font-semibold text-slate-900 text-lg mb-2'>AI Insights</h4>
          <p className='text-slate-600 text-sm'>Predictive care recommendations</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
