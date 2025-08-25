'use client';

import { Calendar, Shield, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function CTASection() {
  return (
    <section className='py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800'>
      <Container>
        <motion.div
          className='text-center max-w-4xl mx-auto'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant='info' className='mb-6'>
              Get Started Today
            </Badge>
          </motion.div>

          <motion.h2
            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
            variants={fadeInUp}
          >
            Ready to Give Your Pet the{' '}
            <span className='bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'>
              Best Care
            </span>{' '}
            Possible?
          </motion.h2>

          <motion.p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto' variants={fadeInUp}>
            Join thousands of pet owners who trust our platform for smarter, more affordable pet healthcare.
          </motion.p>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <motion.div
              className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl'
              variants={fadeInUp}
            >
              <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Sparkles className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Smart Recommendations</h3>
              <p className='text-slate-600'>AI-powered care suggestions tailored to your pet's needs</p>
            </motion.div>

            <motion.div
              className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl'
              variants={fadeInUp}
            >
              <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Calendar className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Easy Scheduling</h3>
              <p className='text-slate-600'>Book appointments with top-rated vets in minutes</p>
            </motion.div>

            <motion.div
              className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl'
              variants={fadeInUp}
            >
              <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='text-xl font-semibold text-slate-900 mb-2'>Trusted Care</h3>
              <p className='text-slate-600'>Verified clinics and vet-reviewed recommendations</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
