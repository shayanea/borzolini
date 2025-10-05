'use client';

import { motion } from 'framer-motion';
import type { FeatureBenefit } from '@/types/clinic';

interface FeatureBenefitItemProps {
  benefit: FeatureBenefit;
  index: number;
}

export const FeatureBenefitItem = ({ benefit, index }: FeatureBenefitItemProps): React.JSX.Element => {
  return (
    <motion.div
      className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className='w-16 h-16 bg-[#013187] rounded-2xl flex items-center justify-center mx-auto mb-4'>
        <benefit.icon className='w-8 h-8 text-blue-600' />
      </div>
      <h4 className='font-semibold text-slate-900 text-lg mb-2'>{benefit.title}</h4>
      <p className='text-slate-600 text-sm'>{benefit.description}</p>
    </motion.div>
  );
};
