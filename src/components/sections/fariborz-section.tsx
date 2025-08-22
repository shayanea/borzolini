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
            🐱 Meet Our AI Pioneer
          </Badge>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>Fariborz: The World's First Cat with AI Healthcare</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>See how AI transforms Persian cat care through real-time health monitoring and predictive insights. Borzolini started with one special cat - now every Persian can benefit!</p>
        </motion.div>

        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden'>
          <div className='grid lg:grid-cols-2'>
            {/* Left: Fariborz Photo */}
            <motion.div className='relative' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInLeft}>
              {/* Placeholder for Fariborz's actual photo */}
              <div className='w-full h-full min-h-[500px] bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center relative'>
                <div className='text-center text-gray-600'>
                  <div className='text-8xl mb-4'>🐱</div>
                  <p className='text-2xl font-bold mb-2'>Fariborz</p>
                  <p className='text-lg opacity-75'>The Original Borzolini</p>
                </div>

                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>

                {/* Cat info overlay */}
                <div className='absolute bottom-6 left-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>Fariborz 🐱</h3>
                  <p className='text-lg opacity-90'>Persian Mix • Male • 3 years old</p>
                  <p className='text-sm opacity-75 mt-1'>The inspiration behind Borzolini</p>
                </div>
              </div>
            </motion.div>

            {/* Right: AI Dashboard */}
            <motion.div className='p-8 lg:p-12 space-y-8' initial='initial' whileInView='animate' viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>AI Health Command Center</h3>
                <p className='text-gray-600'>Real-time health monitoring with Persian breed specialization</p>
              </motion.div>

              {/* Health Score */}
              <motion.div className='bg-green-50 rounded-2xl p-6 border border-green-100' variants={fadeInUp}>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-900'>Overall Health Score</h4>
                  <span className='text-3xl font-bold text-green-600'>94/100</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3 mb-4'>
                  <motion.div className='bg-green-500 h-3 rounded-full' initial={{ width: 0 }} whileInView={{ width: '94%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
                </div>
                <p className='text-sm text-gray-600'>Excellent health with proactive AI monitoring</p>
              </motion.div>

              {/* AI Insights */}
              <motion.div className='space-y-4' variants={staggerContainer}>
                <motion.h4 className='font-semibold text-gray-900' variants={fadeInUp}>
                  🤖 AI Insights This Week
                </motion.h4>

                <motion.div className='bg-blue-50 rounded-xl p-4 border border-blue-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <Droplets className='w-5 h-5 text-blue-600 mt-1' />
                    <div>
                      <p className='font-medium text-blue-800'>Water Intake Increased 15%</p>
                      <p className='text-sm text-blue-600'>Excellent for Persian kidney health!</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className='bg-orange-50 rounded-xl p-4 border border-orange-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <Calendar className='w-5 h-5 text-orange-600 mt-1' />
                    <div>
                      <p className='font-medium text-orange-800'>Dental Checkup Due</p>
                      <p className='text-sm text-orange-600'>Persian cats need extra dental care</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className='bg-green-50 rounded-xl p-4 border border-green-100' variants={fadeInUp}>
                  <div className='flex items-start gap-3'>
                    <TrendingUp className='w-5 h-5 text-green-600 mt-1' />
                    <div>
                      <p className='font-medium text-green-800'>Weight Stable at 4.2kg</p>
                      <p className='text-sm text-green-600'>Perfect for his frame and age</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Predictive Alerts */}
              <motion.div className='bg-purple-50 rounded-2xl p-6 border border-purple-100' variants={fadeInUp}>
                <h4 className='font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                  <Zap className='w-5 h-5 text-purple-600' />
                  Predictive Health Alerts
                </h4>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Kidney Disease Risk (2 years)</span>
                    <span className='font-medium text-green-600'>Low (15%)</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Dental Issues (6 months)</span>
                    <span className='font-medium text-orange-600'>Medium (40%)</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Respiratory Problems</span>
                    <span className='font-medium text-green-600'>Low (8%)</span>
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
                  "Fariborz inspired Borzolini when we realized how much we worried about his health. Persian cats are prone to specific issues, and we wanted AI to help us catch problems early. Now Fariborz is the healthiest he's ever
                  been, and every Persian cat can benefit from what we learned!"
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
