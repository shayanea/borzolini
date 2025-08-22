'use client';

import { ArrowDown, Award, Brain, DollarSign, Heart, Shield } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 },
};

export function HeroSection() {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl' />
      </div>

      <Container className='relative z-10'>
        {/* Hero Logo */}
        <motion.div className='text-center mb-12' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Logo variant='full' size='xl' className='mx-auto' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <motion.div
            className='space-y-8'
            initial='initial'
            animate='animate'
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant='info' className='bg-orange-50 text-orange-600 px-6 py-3 rounded-full border border-orange-200 text-base font-semibold'>
                🐾 Smart Pet Healthcare Platform for All Pets
              </Badge>
            </motion.div>

            <motion.h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight' variants={fadeInUp}>
              Smart Pet Care Made <span className='text-blue-600'>Simple</span> for <span className='text-orange-500'>All Pets</span>
            </motion.h1>

            <motion.p className='text-xl text-gray-600 leading-relaxed max-w-2xl' variants={fadeInUp}>
              Get personalized care recommendations, easily schedule vet appointments, and find the best clinics for any pet. Starting with Fariborz!
            </motion.p>

            {/* Cost Savings Highlight */}
            <motion.div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100' variants={fadeInUp}>
              <div className='flex items-center gap-4'>
                <div className='bg-green-100 p-3 rounded-full'>
                  <DollarSign className='w-8 h-8 text-green-600' />
                </div>
                <div>
                  <p className='text-2xl font-bold text-green-600'>Better Care, Less Stress</p>
                  <p className='text-gray-600'>Find the right vet and get smart care tips instantly</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className='flex flex-col sm:flex-row gap-4' variants={fadeInUp}>
              <Button size='xl' className='bg-slate-800 hover:bg-slate-900 text-white shadow-lg'>
                🐾 Get Care Tips for My Pet
              </Button>
              <Button variant='outline' size='xl' className='border-2 border-slate-800 text-slate-800 hover:bg-slate-50'>
                📅 Find a Vet Nearby
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className='flex items-center gap-6 text-sm text-gray-500' variants={fadeInUp}>
              <div className='flex items-center gap-2'>
                <Shield className='w-5 h-5' />
                <span>HIPAA Compliant</span>
              </div>
              <div className='flex items-center gap-2'>
                <Award className='w-5 h-5' />
                <span>Vet Approved</span>
              </div>
              <div className='flex items-center gap-2'>
                <Heart className='w-5 h-5' />
                <span>All Pet Breeds Supported</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div className='relative' variants={fadeInRight} initial='initial' animate='animate'>
            {/* Main Hero Image Container */}
            <motion.div className='relative bg-white rounded-3xl shadow-2xl p-8' variants={scaleIn}>
              {/* Fariborz Hero Image */}
              <div
                className='w-full h-96  rounded-2xl bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'
                style={{
                  backgroundImage: `url('/images/fariborz-hero.webp')`,
                }}
              >
                {/* Image overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>

                {/* Pet info overlay */}
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='text-lg font-bold drop-shadow-lg'>Fariborz 😎</p>
                  <p className='text-sm opacity-90 drop-shadow-md'>Our Pet Hero</p>
                </div>
              </div>

              {/* AI Health Dashboard Overlay */}
              <motion.div
                className='absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs'
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center'>
                    <Brain className='w-6 h-6 text-slate-700' />
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900'>Fariborz's Care Dashboard</p>
                    <p className='text-sm text-slate-500'>Smart recommendations</p>
                  </div>
                </div>

                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-slate-600'>Early Detection Rate</span>
                    <span className='text-lg font-bold text-green-600'>98%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <motion.div className='bg-green-500 h-2 rounded-full' initial={{ width: 0 }} animate={{ width: '98%' }} transition={{ duration: 1, delay: 1.2 }} />
                  </div>
                </div>

                <div className='mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200'>
                  <p className='text-sm text-orange-700 font-medium'>💡 Care Tip: Water intake increased 15% - excellent for pet health!</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div className='absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4' initial={{ opacity: 0, scale: 0.8, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <div className='text-center'>
                <p className='text-2xl font-bold text-orange-500'>98%</p>
                <p className='text-sm text-gray-600'>Early Detection Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div className='absolute bottom-8 left-1/2 transform -translate-x-1/2' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
        <motion.button
          onClick={() => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-white/20'
          aria-label='Scroll to features'
        >
          <ArrowDown className='w-6 h-6' />
        </motion.button>
      </motion.div>
    </section>
  );
}
