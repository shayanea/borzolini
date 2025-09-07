'use client';

import { Clock, Globe, MapPin, Search, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

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

export function AdvancedSearchAndFiltering() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Advanced Search & Filtering</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Powerful search capabilities with intelligent filtering to help you find exactly what you need quickly and
          efficiently.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div variants={fadeInUp}>
          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Search className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Smart Search</h4>
                <p className='text-blue-100'>
                  AI-powered search that understands context and provides relevant results even with partial
                  information.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Settings className='w-6 h-6 text-purple-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Advanced Filters</h4>
                <p className='text-blue-100'>
                  Filter by location, specialization, availability, ratings, and more to narrow down your search
                  results.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Clock className='w-6 h-6 text-green-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Real-time Updates</h4>
                <p className='text-blue-100'>
                  Live availability updates and instant notifications when new appointments become available.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className='p-8 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <MapPin className='w-5 h-5 text-blue-600' />
                <span className='text-slate-700 font-medium'>Location</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Globe className='w-5 h-5 text-green-600' />
                <span className='text-slate-700 font-medium'>Specialization</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Clock className='w-5 h-5 text-purple-600' />
                <span className='text-slate-700 font-medium'>Availability</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Search className='w-5 h-5 text-orange-600' />
                <span className='text-slate-700 font-medium'>Services</span>
              </div>
            </div>

            <div className='mt-8 pt-6 border-t border-slate-200'>
              <Button className='w-full bg-blue-500 text-white hover:bg-blue-700 '>Apply Filters</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
