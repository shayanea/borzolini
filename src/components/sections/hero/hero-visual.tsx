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
    color: 'bg-blue-500',
  },
  {
    id: 2,
    icon: Heart,
    title: 'Care',
    description: 'Personalized',
    color: 'bg-red-500',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Trust',
    description: 'Vet verified',
    color: 'bg-green-500',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Fast',
    description: 'Instant access',
    color: 'bg-yellow-500',
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
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`text-center p-4 glass rounded-xl hover:glass-morphism transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className='w-5 h-5 text-white' />
                  </div>
                  <p className='font-semibold text-slate-900 mb-1'>{feature.title}</p>
                  <p className='text-slate-600 text-xs'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
