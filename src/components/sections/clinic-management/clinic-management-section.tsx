'use client';

import { motion } from 'framer-motion';
import { Calendar, Brain, Users } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { AdvancedSearchAndFiltering } from './advanced-search-filtering';
import { ClinicManagementCTA } from './clinic-management-cta';
import { MultiRoleSystem } from './multi-role-system';
import { ReviewAndRatingSystem } from './review-rating-system';
import { ServiceCategories } from './service-categories';
import { StaffManagement } from './staff-management';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function ClinicManagementSection() {
  return (
    <section className='py-24 bg-gradient-to-br from-purple-600 to-indigo-700' id='clinic-management'>
      <Container size='xl'>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
              Smart{' '}
              <span className='bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'>
                Clinic Management
              </span>{' '}
              for Modern Vets
            </h2>
            <p className='text-xl text-blue-100 leading-relaxed mb-8'>
              Streamline your veterinary practice with intelligent scheduling, patient management, and automated care
              recommendations. Focus on what matters most - your patients.
            </p>
          </motion.div>

          <motion.div variants={slideInLeft}>
            <div className='relative'>
              <div className='w-full h-96 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-xl flex items-center justify-center'>
                <div className='text-center'>
                  <div className='w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6'>
                    <Calendar className='w-12 h-12 text-blue-600' />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 mb-2'>Smart Scheduling</h3>
                  <p className='text-slate-600'>AI-powered appointment optimization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Calendar className='w-8 h-8 text-blue-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>Smart Scheduling</h4>
              <p className='text-slate-600 text-sm'>AI-optimized appointment booking</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-green-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>Patient Management</h4>
              <p className='text-slate-600 text-sm'>Comprehensive health records</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Brain className='w-8 h-8 text-purple-600' />
              </div>
              <h4 className='font-semibold text-slate-900 text-lg mb-2'>AI Insights</h4>
              <p className='text-slate-600 text-sm'>Predictive care recommendations</p>
            </div>
          </motion.div>
        </motion.div>

        <MultiRoleSystem />
        <AdvancedSearchAndFiltering />
        <StaffManagement />
        <ServiceCategories />
        <ReviewAndRatingSystem />
        <ClinicManagementCTA />
      </Container>
    </section>
  );
}
