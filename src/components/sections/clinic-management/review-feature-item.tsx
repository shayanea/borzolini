'use client';

import { motion } from 'framer-motion';

import type { ReviewFeature } from '@/types/clinic';

interface ReviewFeatureItemProps {
  feature: ReviewFeature;
  index: number;
}

export const ReviewFeatureItem = ({ feature, index }: ReviewFeatureItemProps): React.JSX.Element => {
  return (
    <motion.div
      className='flex items-start space-x-5'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center shadow-lg'>
        <feature.icon className='w-7 h-7 text-yellow-600' />
      </div>
      <div>
        <h4 className='font-semibold text-slate-900 mb-2 text-lg'>{feature.title}</h4>
        <p className='text-slate-600 text-base leading-relaxed font-medium'>{feature.description}</p>
      </div>
    </motion.div>
  );
};
