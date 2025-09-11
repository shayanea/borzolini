'use client';

import { motion } from 'framer-motion';
import { Instagram, Shield, Star } from 'lucide-react';

import type { Clinic } from '@/types/clinic';

const hasInstagramHandle = (
  clinic: Clinic | (Clinic & { instagramHandle?: string })
): clinic is Clinic & { instagramHandle: string } => {
  return (
    typeof (clinic as { instagramHandle?: unknown }).instagramHandle === 'string' &&
    (clinic as { instagramHandle?: unknown }).instagramHandle !== ''
  );
};

interface ClinicCardProps {
  clinic: Clinic;
}

export const ClinicCard = ({ clinic }: ClinicCardProps): React.JSX.Element => {
  return (
    <motion.div
      className='relative p-px rounded-xl shadow-lg'
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-200/70 via-yellow-100/70 to-yellow-200/70 opacity-70 blur-sm' />
      <div className='relative p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl z-10'>
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

        <div className='flex flex-wrap gap-2 items-center'>
          {clinic.specializations.slice(0, 2).map((spec, idx) => (
            <span key={idx} className='px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-medium'>
              {spec}
            </span>
          ))}
          {hasInstagramHandle(clinic) && (
            <span className='flex items-center gap-1 px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-full font-medium'>
              <Instagram className='w-3 h-3' />@{clinic.instagramHandle}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
