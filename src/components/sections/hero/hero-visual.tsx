'use client';

import { Award, Brain, Clock, Heart, Shield, Stethoscope, Users } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const medicalFeatures = [
  {
    id: 1,
    icon: Stethoscope,
    title: 'Expert Diagnosis',
    description: 'Professional assessment',
    color: 'bg-blue-500',
    delay: 0,
  },
  {
    id: 2,
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Loving treatment',
    color: 'bg-red-500',
    delay: 100,
  },
  {
    id: 3,
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Protected data',
    color: 'bg-green-500',
    delay: 200,
  },
  {
    id: 4,
    icon: Clock,
    title: '24/7 Available',
    description: 'Always ready',
    color: 'bg-purple-500',
    delay: 300,
  },
];

const stats = [
  { label: 'Happy Pets', value: '10K+', icon: Heart },
  { label: 'Expert Vets', value: '500+', icon: Users },
  { label: 'Years Experience', value: '15+', icon: Award },
];

export const HeroVisual = () => {
  return (
    <motion.div className='relative' initial='initial' animate='animate' variants={animations.slideUp}>
      <div className='relative'>
        {/* Main medical card */}
        <Card className='relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden'>
          {/* Medical-themed background */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80'></div>
          <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-2xl'></div>

          {/* Medical cross decoration */}
          <div className='absolute top-4 right-4 w-8 h-8 opacity-10'>
            <div className='absolute top-1/2 left-1/2 w-6 h-1 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
            <div className='absolute top-1/2 left-1/2 w-1 h-6 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
          </div>

          {/* Content */}
          <div className='relative z-10'>
            <div className='text-center mb-8'>
              <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                <Stethoscope className='w-10 h-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>Professional Veterinary Care</h3>
              <p className='text-slate-600 text-sm'>Expert medical services for your pets</p>
            </div>

            {/* Medical feature grid */}
            <div className='grid grid-cols-2 gap-4 text-sm mb-6'>
              {medicalFeatures.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group border border-white/30`}
                  style={{ animationDelay: `${feature.delay}ms` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay / 1000 }}
                >
                  <div
                    className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className='w-5 h-5 text-white' />
                  </div>
                  <p className='font-semibold text-slate-900 mb-1'>{feature.title}</p>
                  <p className='text-slate-600 text-xs'>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats section */}
            <div className='border-t border-slate-200/50 pt-6'>
              <div className='grid grid-cols-3 gap-4 text-center'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className='space-y-1'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className='flex items-center justify-center mb-1'>
                      <stat.icon className='w-4 h-4 text-blue-600 mr-1' />
                      <span className='text-lg font-bold text-slate-900'>{stat.value}</span>
                    </div>
                    <p className='text-xs text-slate-500'>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Floating medical elements */}
        <motion.div
          className='absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg'
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart className='w-8 h-8 text-white' />
        </motion.div>

        <motion.div
          className='absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Brain className='w-6 h-6 text-white' />
        </motion.div>
      </div>
    </motion.div>
  );
};
