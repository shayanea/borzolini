'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

import { animations, commonAnimationProps } from '@/lib/animations';
import { featureBenefits } from '@/data/mock-clinics';

import { FeatureBenefitItem } from './feature-benefit-item';

export const FeatureBenefitsSection = () => {
  return (
    <motion.div className='mb-24' {...commonAnimationProps} variants={animations.fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-[#013187] rounded-2xl mb-6 shadow-lg'>
          <Brain className='w-10 h-10 text-blue-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Smart Clinic Management Features
        </h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Streamline your clinic operations with intelligent tools designed for modern veterinary practices
        </p>
      </div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        variants={animations.staggerContainer}
      >
        {featureBenefits.map((benefit, index) => (
          <FeatureBenefitItem key={index} benefit={benefit} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};
