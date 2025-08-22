'use client';

import { Brain, Calendar, Droplets, Heart, TrendingUp, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
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
  transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FariborzSection() {
  return (
    <section className='py-20 bg-gradient-to-r from-purple-50 to-blue-50' id='fariborz'>
      <Container>
        <motion.div className='text-center mb-16' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
          <Badge variant='info' className='bg-orange-50 text-orange-600 px-6 py-3 rounded-full text-lg mb-6 border border-orange-200'>
            🐾 Meet Our Beta Tester
          </Badge>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>Meet Fariborz: Our Pet Beta Tester</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>See how Borzolini helps Fariborz get better care through smart recommendations, easy vet scheduling, and quality clinic ratings. Simple, effective, and made for all pets!</p>
        </motion.div>

        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 min-h-[600px]'>
            {/* Left: Fariborz Photo */}
            <motion.div className='relative' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInLeft}>
              {/* Fariborz Hero Photo */}
              <div
                className='w-full h-full min-h-[500px] bg-gradient-to-br from-gray-100 to-gray-300 bg-cover bg-center bg-no-repeat relative'
                style={{
                  backgroundImage: `url('/images/fariborz-hero.webp')`,
                }}
              >
                {/* Fallback content if image doesn't load */}
                <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100'>
                  <div className='text-center text-gray-700'>
                    <div className='text-8xl mb-4'>🐱</div>
                    <p className='text-2xl font-bold mb-2'>Fariborz</p>
                    <p className='text-lg opacity-75'>The Original Borzolini</p>
                  </div>
                </div>

                {/* Enhanced overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent'></div>

                {/* Cat info overlay with trendy Poppins font */}
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='text-3xl font-bold mb-2 font-poppins drop-shadow-lg'>Fariborz 😎</h3>
                  <p className='text-xl opacity-95 font-poppins font-semibold drop-shadow-md'>Cat • Male • 8 months old</p>
                  <p className='text-base opacity-85 mt-2 font-poppins font-medium drop-shadow-md'>The inspiration behind Borzolini</p>
                </div>
              </div>
            </motion.div>

            {/* Right: AI Dashboard */}
            <motion.div className='p-8 lg:p-12 space-y-8' initial='initial' whileInView='animate' viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Fariborz's Care Dashboard</h3>
                <p className='text-gray-600'>Smart recommendations and vet scheduling for comprehensive pet care</p>
              </motion.div>

              {/* Health Score */}
              <motion.div className='bg-green-50 rounded-2xl p-6 border border-green-100' variants={fadeInUp}>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>Next Vet Visit</h4>
                  <span className='text-2xl font-bold text-blue-600'>Dr. Smith</span>
                </div>
                <div className='bg-blue-100 rounded-lg p-3'>
                  <p className='text-sm text-blue-800 font-medium'>📅 Scheduled for March 15, 2024</p>
                  <p className='text-sm text-blue-600'>Pet care specialist • 4.9★ rating</p>
                </div>
              </motion.div>

              {/* AI Insights */}
              <motion.div className='space-y-4' variants={staggerContainer}>
                <motion.h4 className='font-semibold text-gray-900' variants={fadeInUp}>
                  💡 Smart Care Recommendations
                </motion.h4>

                <motion.div className='bg-blue-50 rounded-xl p-4 border border-blue-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <Brain className='w-5 h-5 text-blue-600 mt-1' />
                    <div>
                      <p className='font-medium text-blue-800'>Daily Brushing Reminder</p>
                      <p className='text-sm text-blue-600'>Regular grooming keeps pets healthy and happy</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className='bg-orange-50 rounded-xl p-4 border border-orange-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <Calendar className='w-5 h-5 text-orange-600 mt-1' />
                    <div>
                      <p className='font-medium text-orange-800'>Schedule Dental Checkup</p>
                      <p className='text-sm text-orange-600'>All pets benefit from regular dental care</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className='bg-green-50 rounded-xl p-4 border border-green-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <Heart className='w-5 h-5 text-green-600 mt-1' />
                    <div>
                      <p className='font-medium text-green-800'>Great Progress!</p>
                      <p className='text-sm text-green-600'>Following 3 of 4 recommended care routines</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Nearby Clinics */}
              <motion.div className='bg-purple-50 rounded-2xl p-6 border border-purple-100' variants={fadeInUp}>
                <h4 className='font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                  <Zap className='w-5 h-5 text-purple-600' />
                  Nearby Pet Care Specialists
                </h4>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <span className='font-medium text-gray-800'>Dr. Smith's Pet Clinic</span>
                      <p className='text-gray-600'>All pets specialist • 0.8 miles</p>
                    </div>
                    <span className='font-medium text-green-600'>4.9★</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div>
                      <span className='font-medium text-gray-800'>City Vet Hospital</span>
                      <p className='text-gray-600'>Cat specialist • 1.2 miles</p>
                    </div>
                    <span className='font-medium text-blue-600'>4.7★</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div>
                      <span className='font-medium text-gray-800'>Paws & Claws Clinic</span>
                      <p className='text-gray-600'>General vet • 0.5 miles</p>
                    </div>
                    <span className='font-medium text-orange-600'>4.5★</span>
                  </div>
                </div>
              </motion.div>

              {/* Fariborz's Story */}
              <motion.div className='bg-gray-50 rounded-2xl p-6 border border-gray-200' variants={fadeInUp}>
                <h4 className='font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                  <Heart className='w-5 h-5 text-red-500' />
                  Fariborz's Story
                </h4>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  "As a pet owner, finding the right vet and knowing what care Fariborz needed was overwhelming. Borzolini makes it simple - I get personalized tips, easy vet scheduling, and can see which clinics really understand different
                  pet needs. It's exactly what every pet owner needs!"
                </p>
                <p className='text-xs text-gray-500 mt-3 italic'>- Shayan, Fariborz's human & Borzolini founder</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
