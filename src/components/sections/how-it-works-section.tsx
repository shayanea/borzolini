'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, CheckCircle, Clock, Shield, Sparkles, Users } from 'lucide-react';

import { Container } from '@/components/ui/container';

const steps = [
  {
    icon: CheckCircle,
    title: '1. Add Your Pet',
    description: 'Create a profile for your pet with breed, age, and health history',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderColor: 'border-blue-200/50',
  },
  {
    icon: Brain,
    title: '2. Get Smart Tips',
    description: "Receive personalized care recommendations based on your pet's profile",
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    borderColor: 'border-green-200/50',
  },
  {
    icon: Calendar,
    title: '3. Schedule Appointments',
    description: "Book vet consultations with specialists who understand your pet's needs",
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    borderColor: 'border-purple-200/50',
  },
  {
    icon: Shield,
    title: '4. Track Progress',
    description: "Monitor your pet's health improvements and care milestones",
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    borderColor: 'border-orange-200/50',
  },
];

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
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-4 sm:px-0'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                className={`${step.bgColor} rounded-2xl p-8 border ${step.borderColor} text-center shadow-sm hover:shadow-lg transition-all duration-300`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <IconComponent className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-slate-900 mb-4 leading-tight'>{step.title}</h3>
                <p className='text-slate-600 font-medium leading-relaxed'>{step.description}</p>
              </motion.div>
            );
          })}
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
