'use client';

import { motion } from 'framer-motion';
import { Brain, CheckCircle, Clock, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function CTASection() {
  return (
    <section
      id='cta'
      className='py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10'></div>

      <Container>
        <motion.div
          className='text-center max-w-5xl mx-auto relative z-10'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 text-sm font-semibold mb-8'
            variants={fadeInUp}
          >
            <Sparkles className='w-4 h-4 text-blue-300' />
            Join the Beta
          </motion.div>

          <motion.h2
            className='text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6 lg:mb-8 leading-tight tracking-tight'
            variants={fadeInUp}
          >
            Ready to Simplify Your{' '}
            <span className='bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent'>
              Pet's Care?
            </span>
          </motion.h2>

          <motion.p
            className='text-xl sm:text-2xl lg:text-3xl mb-8 lg:mb-12 text-blue-100 px-4 font-medium leading-relaxed'
            variants={fadeInUp}
          >
            Get smart care recommendations, find great vets, and schedule appointments - all in one simple app for any
            pet
          </motion.p>

          <motion.div
            className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-8 lg:mb-12 border border-white/20 shadow-2xl mx-4 lg:mx-0'
            variants={fadeInUp}
          >
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4'>
                  <CheckCircle className='w-8 h-8 text-green-400' />
                </div>
                <div className='text-3xl font-bold mb-3'>Free</div>
                <p className='text-blue-100 font-medium'>Beta access for early adopters</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4'>
                  <Clock className='w-8 h-8 text-blue-400' />
                </div>
                <div className='text-3xl font-bold mb-3'>Simple</div>
                <p className='text-blue-100 font-medium'>Easy vet scheduling & tips</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4'>
                  <Brain className='w-8 h-8 text-purple-400' />
                </div>
                <div className='text-3xl font-bold mb-3'>Smart</div>
                <p className='text-blue-100 font-medium'>Intelligent care recommendations</p>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex flex-col sm:flex-row gap-6 justify-center px-4 lg:px-0' variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size='lg'
                className='bg-white text-slate-900 hover:bg-white/90 shadow-xl hover:shadow-2xl text-lg px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1'
              >
                🐾 Get Care Tips for My Pet
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-xl hover:shadow-2xl text-lg px-10 py-4 rounded-xl font-semibold transition-all duration-300'
              >
                📅 Find Pet Care Vets
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm font-medium'
            variants={fadeInUp}
          >
            <span className='flex items-center gap-2'>
              <CheckCircle className='w-4 h-4 text-green-400' />
              No credit card required
            </span>
            <span className='flex items-center gap-2'>
              <CheckCircle className='w-4 h-4 text-green-400' />
              Free for all pet owners
            </span>
            <span className='flex items-center gap-2'>
              <CheckCircle className='w-4 h-4 text-green-400' />
              HIPAA compliant
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
