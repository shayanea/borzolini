'use client';

import { motion } from 'framer-motion';
import { Shield, Star } from 'lucide-react';

import type { Clinic } from '@/types/clinic';

interface ClinicCardProps {
  clinic: Clinic;
}

export const ClinicCard = ({ clinic }: ClinicCardProps): React.JSX.Element => {
  return (
    <motion.div
      className='p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200/50'
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex items-center justify-between mb-3'>
        <h5 className='font-medium text-slate-900 text-lg'>{clinic.name}</h5>
        <div className='flex items-center space-x-2'>
          <Star className='w-5 h-5 text-yellow-500 fill-current' />
          <span className='font-medium text-slate-900 text-lg'>{clinic.rating}</span>
        </div>
      </div>

      <div className='flex items-center space-x-5 text-sm text-slate-600 mb-3 font-medium'>
        <span>{clinic.totalReviews} reviews</span>
        <span>{clinic.location}</span>
        {clinic.verified && (
          <span className='flex items-center text-green-600 font-semibold'>
            <Shield className='w-4 h-4 mr-2' />
            Verified
          </span>
        )}
      </div>

      <div className='flex flex-wrap gap-2'>
        {clinic.specializations.slice(0, 2).map((spec, idx) => (
          <span key={idx} className='px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-medium'>
            {spec}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
