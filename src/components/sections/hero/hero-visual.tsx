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
        {/* Modern mesh gradient card */}
        <Card className='relative glass-morphism rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden backdrop-blur-xl'>
          {/* Modern background decoration */}
          <div className='absolute inset-0 bg-gradient-mesh-primary opacity-60'></div>
          <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-full blur-3xl animate-bounce-gentle'></div>
          <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2'></div>

          {/* Content */}
          <div className='relative z-10'>
            <div className='text-center mb-8'>
              <div className='w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl hover:shadow-glow transition-all duration-300 group'>
                <Brain className='w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>AI-Powered Pet Care</h3>
              <p className='text-slate-600 text-sm'>Smart recommendations for every pet</p>
            </div>

            {/* Modern feature grid */}
            <div className='grid grid-cols-2 gap-4 text-sm'>
              {features.map((feature) => (
                <div key={feature.id} className={`text-center p-3 bg-white/60 rounded-lg ${feature.color}`}>
                  <feature.icon className='w-6 h-6 text-white mx-auto mb-2' />
                  <p className='font-medium text-slate-900'>{feature.title}</p>
                  <p className='text-slate-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
