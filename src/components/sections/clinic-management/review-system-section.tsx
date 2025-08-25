'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { animations, commonAnimationProps } from '@/lib/animations';
import { mockClinics, reviewFeatures } from '@/data/mock-clinics';

import { ClinicCard } from './clinic-card';
import { ReviewFeatureItem } from './review-feature-item';

export const ReviewSystemSection = (): React.JSX.Element => {
  return (
    <motion.div className='mb-24' {...commonAnimationProps} variants={animations.fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl mb-6 shadow-lg'>
          <Star className='w-10 h-10 text-yellow-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Verified Review & Rating System
        </h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Build trust with verified reviews and comprehensive rating systems that help pet owners make informed
          decisions
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <motion.div variants={animations.slideInLeft}>
          <div className='space-y-8'>
            {reviewFeatures.map((feature, idx) => (
              <ReviewFeatureItem key={idx} feature={feature} index={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={animations.slideInRight}>
          <Card className='p-8 border-2 border-yellow-200/50 shadow-lg'>
            <h4 className='font-semibold text-slate-900 mb-6 text-center text-xl'>Clinic Ratings & Reviews</h4>
            <div className='space-y-5'>
              {mockClinics.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
