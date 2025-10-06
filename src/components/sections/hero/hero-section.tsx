'use client';

import { HeroActions } from './hero-actions';
import { HeroDescription } from './hero-description';
import { HeroTitle } from './hero-title';
import { HeroVisual } from './hero-visual';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden'>
      {/* Enhanced background with pet-themed gradients */}
      <div className='absolute inset-0 bg-gradient-mesh-organic opacity-20'></div>
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse animation-delay-1000'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl'></div>

      {/* Floating pet care icons */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Stethoscope icon */}
        <motion.div
          className='absolute top-20 left-10 text-blue-400/30'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg className='w-12 h-12' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z' />
          </svg>
        </motion.div>

        {/* Paw print icon */}
        <motion.div
          className='absolute top-32 right-20 text-purple-400/30'
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        </motion.div>

        {/* Heart icon */}
        <motion.div
          className='absolute bottom-40 left-20 text-pink-400/30'
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
          </svg>
        </motion.div>

        {/* Medical cross icon */}
        <motion.div
          className='absolute bottom-32 right-32 text-cyan-400/30'
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </motion.div>

        {/* Syringe icon */}
        <motion.div
          className='absolute top-1/3 right-10 text-indigo-400/30'
          animate={{
            x: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
            />
          </svg>
        </motion.div>
      </div>

      <div className='container-modern relative z-10 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]'>
          <motion.div className='space-y-8' initial='initial' animate='animate' variants={animations.fadeInUp}>
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
          </motion.div>

          <motion.div
            className='flex justify-center lg:justify-end'
            initial='initial'
            animate='animate'
            variants={animations.fadeInLeft}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
