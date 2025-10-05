'use client';

import Image from 'next/image';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className='relative'>
      {/* Main pet image container */}
      <motion.div
        className='relative w-96 h-96 mx-auto'
        initial='initial'
        animate='animate'
        variants={animations.scaleIn}
      >
        {/* Glowing background */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl'
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Central pet image */}
        <motion.div
          className='relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center'
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src='/images/borzolini-hero.webp'
            alt='Happy pet receiving care at Borzolini'
            width={320}
            height={320}
            className='object-cover w-full h-full rounded-full shadow-2xl'
            priority
          />

          {/* Overlay gradient for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full' />
        </motion.div>

        {/* Floating care indicators around the image */}
        <motion.div
          className='absolute -top-4 -right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center'
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
            <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className='absolute -bottom-4 -left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center'
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <div className='w-7 h-7 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center'>
            <svg className='w-3.5 h-3.5 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className='absolute top-1/2 -right-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center'
          animate={{
            x: [0, 5, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className='w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center'>
            <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Additional floating elements for visual interest */}
      <motion.div
        className='absolute top-10 -left-10 w-6 h-6 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-60'
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className='absolute bottom-10 -right-8 w-4 h-4 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-60'
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className='absolute top-1/3 -left-6 w-5 h-5 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full opacity-60'
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />
    </div>
  );
};
