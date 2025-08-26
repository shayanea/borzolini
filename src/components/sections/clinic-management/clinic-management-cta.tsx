'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

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

const benefits = [
  'Reduce administrative workload by 60%',
  'Improve patient satisfaction scores',
  'Streamline appointment scheduling',
  'Enhanced staff productivity',
  'Better patient record management',
  'Real-time analytics and insights',
];

export function ClinicManagementCTA() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-6'>Ready to Transform Your Veterinary Practice?</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto mb-8'>
          Join hundreds of veterinary clinics that have already modernized their operations with our comprehensive
          management platform.
        </p>
      </motion.div>

      <motion.div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' variants={fadeInUp}>
        <div className='space-y-6'>
          <h4 className='text-2xl font-semibold text-white mb-6'>Key Benefits:</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-center space-x-3'>
                <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                <span className='text-blue-100'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20'>
            <h4 className='text-2xl font-bold text-white mb-4'>Start Your Free Trial</h4>
            <p className='text-blue-100 mb-6'>
              No credit card required • 14-day free trial • Full access to all features
            </p>
            <div className='space-y-4'>
              <Button size='lg' className='w-full bg-white text-slate-900 hover:bg-blue-50'>
                Get Started Free
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className='text-center mt-12' variants={fadeInUp}>
        <p className='text-blue-100'>
          Questions? Contact our team at{' '}
          <a href='mailto:support@clinicmanagement.com' className='text-white underline hover:text-blue-200'>
            support@borzolini.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
