'use client';

import { Brain, Calendar, Heart, Shield, Zap } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: Calendar,
    title: 'Schedule',
    description: 'Easy booking',
    bgColor: 'bg-white',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    isSelected: false,
  },
  {
    id: 2,
    icon: Heart,
    title: 'Care',
    description: 'Personalized',
    bgColor: 'bg-white',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    isSelected: false,
  },
  {
    id: 3,
    icon: Shield,
    title: 'Trust',
    description: 'Vet verified',
    bgColor: 'bg-white',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    isSelected: false,
  },
  {
    id: 4,
    icon: Zap,
    title: 'Fast',
    description: 'Instant access',
    bgColor: 'bg-blue-500',
    titleColor: 'text-white',
    subtitleColor: 'text-white',
    isSelected: true,
  },
];

export const HeroVisual = () => {
  return (
    <motion.div className='relative' initial='initial' animate='animate' variants={animations.slideUp}>
      <div className='relative'>
        {/* Main gradient card */}
        <Card className='relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl p-8 border border-blue-200/30 overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20'></div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl'></div>

          {/* Content */}
          <div className='relative z-10'>
            <div className='text-center mb-8'>
              <div className='w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                <Brain className='w-10 h-10 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>AI-Powered Pet Care</h3>
              <p className='text-slate-600 text-sm'>Smart recommendations for every pet</p>
            </div>

            {/* Feature grid */}
            <div className='grid grid-cols-2 gap-4 text-sm'>
              {features.map((feature) => (
                <div key={feature.id} className={`text-center p-3 rounded-lg shadow-md ${feature.bgColor}`}>
                  <feature.icon
                    className={`w-6 h-6 ${feature.isSelected ? 'text-white' : 'text-gray-500'} mx-auto mb-2`}
                  />
                  <p className={`text-sm ${feature.titleColor} font-bold`}>{feature.title}</p>
                  <p className={`text-sm ${feature.subtitleColor}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
