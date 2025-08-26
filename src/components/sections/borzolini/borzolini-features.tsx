'use client';

import { Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import { animations, commonAnimationProps } from '@/lib/animations';

import { motion } from 'framer-motion';

const borzoliniFeatures = [
  {
    title: 'All Pets Welcome',
    description: 'Dogs, pets, birds, reptiles, and exotic pets',
    icon: Heart,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Vet Verified',
    description: 'All recommendations reviewed by professionals',
    icon: Shield,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Smart Insights',
    description: 'AI-powered care recommendations and insights',
    icon: Lightbulb,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Lightning Fast',
    description: 'Instant access to care information and scheduling',
    icon: Zap,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

export const BorzoliniFeatures = () => {
  return (
    <motion.div
      className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      {borzoliniFeatures.map((feature, index) => (
        <motion.div key={index} variants={animations.fadeInUp}>
          <div className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'>
            <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
            </div>
            <h4 className='font-semibold text-slate-900 text-lg mb-2'>{feature.title}</h4>
            <p className='text-slate-600 text-sm'>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
