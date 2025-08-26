'use client';

import { Brain, Calendar, Heart, Lightbulb, Shield, Sparkles, Star, Zap } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function BorzoliniSection() {
  return (
    <section className='py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50' id='borzolini'>
      <Container>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6'>
              Meet{' '}
              <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>
                Borzolini
              </span>
              , Our Pet Care Hero
            </h2>
            <p className='text-xl text-slate-600 leading-relaxed mb-8'>
              Borzolini represents everything we believe about pet care - it should be smart, accessible, and tailored
              to each unique companion. Our platform brings that vision to life.
            </p>
          </motion.div>

          <motion.div variants={fadeInLeft}>
            <div className='relative'>
              <div className='relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden'>
                <Image
                  src='/images/borzolini-hero.webp'
                  alt='Borzolini - Our Pet Hero'
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-3xl'></div>
                <div className='absolute bottom-6 left-6 text-white'>
                  <p className='text-2xl font-bold drop-shadow-lg'>
                    Borzolini <Sparkles className='inline w-6 h-6 text-yellow-400' />
                  </p>
                  <p className='text-lg opacity-90 drop-shadow-md'>Our Pet Hero</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'>
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Heart className='w-8 h-8 text-blue-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>All Pets Welcome</h4>
              <p className='text-slate-600 text-sm'>Dogs, pets, birds, reptiles, and exotic pets</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'>
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-green-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>Vet Verified</h4>
              <p className='text-slate-600 text-sm'>All recommendations reviewed by professionals</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'>
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Brain className='w-8 h-8 text-purple-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>AI Powered</h4>
              <p className='text-slate-600 text-sm'>Smart insights for better pet health</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-shadow duration-200'>
              <div className='w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Sparkles className='w-8 h-8 text-orange-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>Always Available</h4>
              <p className='text-slate-600 text-sm'>24/7 access to care resources for all pets</p>
            </div>
          </motion.div>
        </motion.div>

        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto border border-slate-200/50'>
          <div className='grid lg:grid-cols-2 min-h-[600px]'>
            {/* Left: Borzolini Photo */}
            <motion.div
              className='relative'
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {/* Borzolini Hero Photo */}
              <div className='relative w-full h-full min-h-[500px] bg-gradient-to-br from-slate-100 to-slate-300 overflow-hidden'>
                <Image
                  src='/images/borzolini-hero.webp'
                  alt='Borzolini - The Original Borzolini'
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  className='object-cover'
                  priority
                />
                {/* Enhanced overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent'></div>

                {/* Pet info overlay with trendy Poppins font */}
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='text-3xl font-bold mb-2 font-poppins drop-shadow-lg'>
                    Borzolini <Sparkles className='inline w-7 h-7 text-yellow-400' />
                  </h3>
                  <p className='text-xl opacity-95 font-poppins font-semibold drop-shadow-md'>
                    Beloved Companion • 8 months old
                  </p>
                  <p className='text-base opacity-85 mt-2 font-poppins font-medium drop-shadow-md'>
                    The inspiration behind Borzolini
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: AI Dashboard */}
            <motion.div
              className='p-8 lg:p-12 space-y-8'
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h3 className='text-3xl font-bold text-slate-900 mb-4 leading-tight'>Borzolini's Care Dashboard</h3>
                <p className='text-slate-600 font-medium leading-relaxed'>
                  Smart recommendations and vet scheduling for comprehensive pet care
                </p>
              </motion.div>

              {/* Health Score */}
              <motion.div
                className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-sm'
                variants={fadeInUp}
              >
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-slate-900'>Next Vet Visit</h4>
                  <span className='text-2xl font-bold text-blue-600'>Dr. Smith</span>
                </div>
                <div className='bg-blue-100/50 rounded-lg p-3'>
                  <p className='text-sm text-blue-800 font-medium'>
                    <Calendar className='inline w-4 h-4 mr-1' />
                    Scheduled for March 15, 2024
                  </p>
                  <p className='text-sm text-blue-600'>
                    Pet care specialist • 4.9
                    <Star className='inline w-3 h-3 ml-1 text-yellow-500' /> rating
                  </p>
                </div>
              </motion.div>

              {/* AI Insights */}
              <motion.div className='space-y-4' variants={staggerContainer}>
                <motion.h4 className='font-semibold text-slate-900 text-lg' variants={fadeInUp}>
                  <Lightbulb className='inline w-4 h-4 mr-1 text-yellow-500' />
                  Smart Care Recommendations
                </motion.h4>

                <motion.div
                  className='bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200/50 shadow-sm'
                  variants={fadeInUp}
                >
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Brain className='w-4 h-4 text-blue-600' />
                    </div>
                    <div>
                      <p className='font-medium text-blue-800'>Daily Brushing Reminder</p>
                      <p className='text-sm text-blue-600'>Regular grooming keeps pets healthy and happy</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200/50 shadow-sm'
                  variants={fadeInUp}
                >
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Calendar className='w-4 h-4 text-orange-600' />
                    </div>
                    <div>
                      <p className='font-medium text-orange-800'>Schedule Dental Checkup</p>
                      <p className='text-sm text-orange-600'>All pets benefit from regular dental care</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200/50 shadow-sm'
                  variants={fadeInUp}
                >
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Heart className='w-4 h-4 text-green-600' />
                    </div>
                    <div>
                      <p className='font-medium text-green-800'>Great Progress!</p>
                      <p className='text-sm text-green-600'>Following 3 of 4 recommended care routines</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Nearby Clinics */}
              <motion.div
                className='bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200/50 shadow-sm'
                variants={fadeInUp}
              >
                <h4 className='font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg'>
                  <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <Zap className='w-4 h-4 text-purple-600' />
                  </div>
                  Nearby Pet Care Specialists
                </h4>
                <div className='space-y-4 text-sm'>
                  <div className='flex justify-between items-center bg-white/50 rounded-lg p-3'>
                    <div>
                      <span className='font-medium text-slate-800'>Dr. Smith's Pet Clinic</span>
                      <p className='text-slate-600'>All pets specialist • 0.8 miles</p>
                    </div>
                    <span className='font-medium text-green-600'>
                      4.9
                      <Star className='inline w-3 h-3 ml-1 text-yellow-500' />
                    </span>
                  </div>
                  <div className='flex justify-between items-center bg-white/50 rounded-lg p-3'>
                    <div>
                      <span className='font-medium text-slate-800'>City Vet Hospital</span>
                      <p className='text-slate-600'>Pet specialist • 1.2 miles</p>
                    </div>
                    <span className='font-medium text-blue-600'>
                      4.7
                      <Star className='inline w-3 h-3 ml-1 text-yellow-500' />
                    </span>
                  </div>
                  <div className='flex justify-between items-center bg-white/50 rounded-lg p-3'>
                    <div>
                      <span className='font-medium text-slate-800'>Paws & Claws Clinic</span>
                      <p className='text-slate-600'>General vet • 0.5 miles</p>
                    </div>
                    <span className='font-medium text-orange-600'>
                      4.5
                      <Star className='inline w-3 h-3 ml-1 text-yellow-500' />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Borzolini's Story */}
              <motion.div
                className='bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200/50 shadow-sm'
                variants={fadeInUp}
              >
                <h4 className='font-semibold text-slate-900 mb-4 flex items-center gap-2 text-lg'>
                  <div className='w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center'>
                    <Heart className='w-4 h-4 text-red-500' />
                  </div>
                  Borzolini's Story
                </h4>
                <p className='text-sm text-slate-600 leading-relaxed font-medium'>
                  "As a pet owner, finding the right vet and knowing what care Borzolini needed was overwhelming.
                  Borzolini makes it simple - I get personalized tips, easy vet scheduling, and can see which clinics
                  really understand different pet needs. It's exactly what every pet owner needs!"
                </p>
                <p className='text-xs text-slate-500 mt-3 italic font-medium'>
                  - Shayan, Borzolini's human & Borzolini founder
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
