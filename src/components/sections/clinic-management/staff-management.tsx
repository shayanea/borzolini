'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle, Star, Stethoscope, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

export function StaffManagement() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Comprehensive Staff Management</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Manage your veterinary team efficiently with detailed profiles, scheduling, and performance tracking.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div variants={fadeInUp}>
          <Card className='p-8 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-4 mb-6'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Stethoscope className='w-8 h-8 text-blue-600' />
                </div>
                <div>
                  <h4 className='text-xl font-semibold text-slate-900'>Dr. Sarah Wilson</h4>
                  <p className='text-slate-600'>Lead Veterinarian</p>
                  <div className='flex items-center space-x-2 mt-1'>
                    <Award className='w-4 h-4 text-yellow-500' />
                    <span className='text-sm text-slate-500'>5 years experience</span>
                  </div>
                </div>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-600'>Specialization</span>
                  <span className='text-slate-900 font-medium'>Feline Medicine</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-600'>Availability</span>
                  <span className='text-green-600 font-medium'>Mon-Fri, 9AM-5PM</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-600'>Rating</span>
                  <div className='flex items-center space-x-1'>
                    <span className='text-slate-900 font-medium'>4.9</span>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='pt-4 border-t border-slate-200'>
                <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'>
                  View Full Profile
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Users className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Team Overview</h4>
                <p className='text-blue-100'>
                  Get a complete view of your staff with detailed profiles, specializations, and availability schedules.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <CheckCircle className='w-6 h-6 text-green-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Performance Tracking</h4>
                <p className='text-blue-100'>
                  Monitor staff performance, patient satisfaction ratings, and appointment completion rates.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Award className='w-6 h-6 text-purple-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Certification Management</h4>
                <p className='text-blue-100'>
                  Track licenses, certifications, and continuing education requirements for all staff members.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
