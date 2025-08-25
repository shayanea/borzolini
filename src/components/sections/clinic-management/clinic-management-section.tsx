'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle, Star, Stethoscope, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { animations, commonAnimationProps } from '@/lib/animations';

import { FeatureBenefitsSection } from './feature-benefits-section';
import { ReviewSystemSection } from './review-system-section';

// Header section component
const ClinicManagementHeader = (): React.JSX.Element => (
  <motion.div className='text-center mb-16 lg:mb-20' {...commonAnimationProps} variants={animations.fadeInUp}>
    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-4 py-2 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm mb-6'>
      <Building2 className='w-4 h-4 text-blue-500' />
      Clinic Management
    </div>
    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
      Streamline Your{' '}
      <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
        Veterinary Practice
      </span>
    </h2>
    <p className='text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
      Manage appointments, staff, services, and reviews all in one intelligent platform designed specifically for
      veterinary clinics
    </p>
  </motion.div>
);

// Main features overview component
const MainFeaturesOverview = (): React.JSX.Element => (
  <motion.div className='mb-24' {...commonAnimationProps} variants={animations.fadeInUp}>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
      <motion.div variants={animations.slideInLeft}>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Everything You Need to Run a Successful Clinic
        </h3>
        <p className='text-slate-600 text-lg leading-relaxed mb-8'>
          From appointment scheduling to staff management, our platform provides all the tools you need to focus on what
          matters most - caring for pets.
        </p>
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <CheckCircle className='w-5 h-5 text-green-500' />
            <span className='text-slate-700 font-medium'>Intuitive appointment booking</span>
          </div>
          <div className='flex items-center space-x-3'>
            <CheckCircle className='w-5 h-5 text-green-500' />
            <span className='text-slate-700 font-medium'>Comprehensive staff management</span>
          </div>
          <div className='flex items-center space-x-3'>
            <CheckCircle className='w-5 h-5 text-green-500' />
            <span className='text-slate-700 font-medium'>Service catalog management</span>
          </div>
          <div className='flex items-center space-x-3'>
            <CheckCircle className='w-5 h-5 text-green-500' />
            <span className='text-slate-700 font-medium'>Verified review system</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={animations.slideInRight}>
        <Card className='p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200/50 shadow-xl'>
          <div className='text-center mb-6'>
            <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <Building2 className='w-8 h-8 text-blue-600' />
            </div>
            <h4 className='text-xl font-semibold text-slate-900 mb-2'>Clinic Dashboard</h4>
            <p className='text-slate-600 text-sm'>Centralized management hub</p>
          </div>

          <div className='grid grid-cols-2 gap-4 text-sm'>
            <div className='text-center p-3 bg-white/60 rounded-lg'>
              <Users className='w-6 h-6 text-blue-600 mx-auto mb-2' />
              <p className='font-medium text-slate-900'>Staff</p>
              <p className='text-slate-600'>Manage team</p>
            </div>
            <div className='text-center p-3 bg-white/60 rounded-lg'>
              <Calendar className='w-6 h-6 text-green-600 mx-auto mb-2' />
              <p className='font-medium text-slate-900'>Appointments</p>
              <p className='text-slate-600'>Schedule & track</p>
            </div>
            <div className='text-center p-3 bg-white/60 rounded-lg'>
              <Stethoscope className='w-6 h-6 text-purple-600 mx-auto mb-2' />
              <p className='font-medium text-slate-900'>Services</p>
              <p className='text-slate-600'>Catalog & pricing</p>
            </div>
            <div className='text-center p-3 bg-white/60 rounded-lg'>
              <Star className='w-6 h-6 text-yellow-600 mx-auto mb-2' />
              <p className='font-medium text-slate-900'>Reviews</p>
              <p className='text-slate-600'>Monitor feedback</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  </motion.div>
);

// CTA section component
const ClinicManagementCTA = (): React.JSX.Element => (
  <motion.div
    className='text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200/50'
    {...commonAnimationProps}
    variants={animations.fadeInUp}
  >
    <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
      Ready to Transform Your Clinic?
    </h3>
    <p className='text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto'>
      Join thousands of veterinary clinics already using our platform to streamline operations and improve patient care.
    </p>
    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
      <Button
        size='lg'
        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
      >
        Start Free Trial
      </Button>
      <Button size='lg' variant='outline' className='border-2 border-slate-300 hover:border-slate-400'>
        Schedule Demo
      </Button>
    </div>
  </motion.div>
);

// Main component
export const ClinicManagementSection = (): React.JSX.Element => {
  return (
    <section className='py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50' id='clinic-management'>
      <Container size='xl'>
        <ClinicManagementHeader />
        <MainFeaturesOverview />
        <FeatureBenefitsSection />
        <ReviewSystemSection />
        <ClinicManagementCTA />
      </Container>
    </section>
  );
};
