'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, Clock, Search, Shield, Sparkles, Users } from 'lucide-react';

import { Container } from '@/components/ui/container';

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

export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50'>
      <Container>
        <motion.div
          className='text-center mb-16 lg:mb-20'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-4 py-2 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm mb-6'>
            <Sparkles className='w-4 h-4 text-blue-500' />
            How It Works
          </div>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
            How{' '}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Borzolini
            </span>{' '}
            Works
          </h2>
          <p className='text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
            Simple 4-step process to get your pet the care they deserve
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className='text-center group' variants={fadeInUp}>
            <div className='w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
              <Search className='w-10 h-10 text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Find Your Perfect Vet</h3>
            <p className='text-slate-600 leading-relaxed'>
              Search through our curated list of top-rated veterinary clinics, filtered by location, specialty, and pet
              type.
            </p>
          </motion.div>

          <motion.div className='text-center group' variants={fadeInUp}>
            <div className='w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
              <Calendar className='w-10 h-10 text-green-600' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Book Appointments Instantly</h3>
            <p className='text-slate-600 leading-relaxed'>
              Schedule visits with real-time availability, get reminders, and manage your pet's care calendar
              effortlessly.
            </p>
          </motion.div>

          <motion.div className='text-center group' variants={fadeInUp}>
            <div className='w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
              <Brain className='w-10 h-10 text-purple-600' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Get Smart Care Tips</h3>
            <p className='text-slate-600 leading-relaxed'>
              Receive personalized health recommendations, nutrition advice, and preventive care reminders tailored to
              your pet.
            </p>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className='text-center mt-20'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-slate-200/50 max-w-5xl mx-auto'>
            <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight'>Trusted by Pet Owners</h3>
            <div className='grid md:grid-cols-3 gap-10'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center'>
                  <Users className='w-6 h-6 text-blue-600' />
                </div>
                <div className='text-left'>
                  <div className='text-3xl font-bold text-slate-900'>1000+</div>
                  <div className='text-slate-600 font-medium'>Happy pets</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-green-600' />
                </div>
                <div className='text-left'>
                  <div className='text-3xl font-bold text-slate-900'>24/7</div>
                  <div className='text-slate-600 font-medium'>Support available</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center'>
                  <Shield className='w-6 h-6 text-purple-600' />
                </div>
                <div className='text-left'>
                  <div className='text-3xl font-bold text-slate-900'>100%</div>
                  <div className='text-slate-600 font-medium'>Free to use</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
