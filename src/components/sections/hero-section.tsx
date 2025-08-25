'use client';

import { ArrowDown, Heart, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollTo } from '@/hooks/use-scroll-to';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
};

const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Hero Section Components
function HeroBadge() {
  return (
    <motion.div initial='initial' animate='animate' variants={fadeInUp}>
      <Badge
        variant='info'
        className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 px-6 py-3 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm backdrop-blur-sm'
      >
        <Sparkles className='w-4 h-4 text-blue-600' />
        Smart Pet Healthcare Platform for All Pets
      </Badge>
    </motion.div>
  );
}

function HeroTitle() {
  return (
    <motion.h1
      className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      Smart Pet Care Made{' '}
      <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Simple</span> for{' '}
      <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>All Pets</span>
    </motion.h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      className='text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      Get personalized care recommendations, easily schedule vet appointments, and find the best clinics for any pet.
      Starting with Borzolini!
    </motion.p>
  );
}

function HeroVisual() {
  return (
    <motion.div className='relative' initial='initial' animate='animate' variants={slideUp}>
      <Card className='bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md'>
        {/* AI-Powered badge */}
        <div className='flex justify-end mb-6'>
          <Badge
            variant='secondary'
            className='inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg border border-orange-200 text-xs font-medium'
          >
            <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
            </svg>
            AI-Powered 24/7 Help
          </Badge>
        </div>

        {/* Main icon and title */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-slate-900 mb-2'>AI-Powered Pet Care</h3>
          <p className='text-slate-600 text-sm'>Smart recommendations tailored to your pet's needs</p>
        </div>

        {/* Statistics */}
        <div className='space-y-4'>
          <div className='flex items-center gap-3 p-3 rounded-xl bg-gray-50'>
            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
              <svg className='w-5 h-5 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='flex-1'>
              <p className='font-medium text-slate-900 text-sm'>Early Detection Rate</p>
              <p className='text-green-600 font-bold text-lg'>98%</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 rounded-xl bg-gray-50'>
            <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
              <Heart className='w-5 h-5 text-blue-600' />
            </div>
            <div className='flex-1'>
              <p className='font-medium text-slate-900 text-sm'>Care Success Rate</p>
              <p className='text-blue-600 font-bold text-lg'>99.2%</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 rounded-xl bg-gray-50'>
            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
              <svg className='w-5 h-5 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <div className='flex-1'>
              <p className='font-medium text-slate-900 text-sm'>Smart Tips Daily</p>
              <p className='text-blue-600 font-bold text-lg'>24/7</p>
              <Badge variant='secondary' className='mt-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded'>
                Save Up To 2 Hours Daily
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function ScrollIndicator() {
  const { scrollToSection } = useScrollTo();

  return (
    <motion.div
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      <button
        onClick={() => scrollToSection('features')}
        className='text-slate-400 hover:text-slate-600 transition-colors p-3 rounded-full hover:bg-white/20 backdrop-blur-sm'
        aria-label='Scroll to features'
      >
        <ArrowDown className='w-6 h-6 animate-bounce' />
      </button>
    </motion.div>
  );
}

// Main Hero Section Component
export function HeroSection() {
  return (
    <section className='relative bg-white overflow-hidden min-h-screen flex items-center'>
      <div className='w-full max-w-7xl mx-auto px-6 py-20'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Content */}
          <motion.div className='space-y-8' initial='initial' animate='animate' variants={staggerContainer}>
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />

            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial='initial'
              animate='animate'
              variants={fadeInUp}
            >
              <Button
                size='lg'
                className='text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Get Started Free
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 py-4 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300'
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <div className='flex justify-center lg:justify-end'>
            <HeroVisual />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
