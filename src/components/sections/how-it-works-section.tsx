'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, CheckCircle, Clock, Shield, Users } from 'lucide-react';

import { Container } from '@/components/ui/container';

const steps = [
  {
    icon: CheckCircle,
    title: '1. Add Your Pet',
    description: 'Create a profile for your pet with breed, age, and health history',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Brain,
    title: '2. Get Smart Tips',
    description: "Receive personalized care recommendations based on your pet's profile",
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Calendar,
    title: '3. Schedule Appointments',
    description: "Book vet consultations with specialists who understand your pet's needs",
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Shield,
    title: '4. Track Progress',
    description: "Monitor your pet's health improvements and care milestones",
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='py-20 bg-gradient-to-br from-slate-50 to-blue-50'>
      <Container>
        <motion.div
          className='text-center mb-12 lg:mb-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-6'>How Borzolini Works</h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            Simple 4-step process to get your pet the care they deserve
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-0'
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
                className={`${step.bgColor} rounded-2xl p-8 border ${step.borderColor} text-center`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                >
                  <IconComponent className='w-6 h-6 lg:w-8 lg:h-8 text-white' />
                </div>

                <h3 className='text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4'>{step.title}</h3>
                <p className='text-sm lg:text-base text-gray-600'>{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className='text-center mt-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Trusted by Pet Owners</h3>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='flex items-center gap-3'>
                <Users className='w-8 h-8 text-blue-600' />
                <div className='text-left'>
                  <div className='text-2xl font-bold text-gray-900'>1000+</div>
                  <div className='text-gray-600'>Happy pets</div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Clock className='w-8 h-8 text-green-600' />
                <div className='text-left'>
                  <div className='text-2xl font-bold text-gray-900'>24/7</div>
                  <div className='text-gray-600'>Support available</div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Shield className='w-8 h-8 text-purple-600' />
                <div className='text-left'>
                  <div className='text-2xl font-bold text-gray-900'>100%</div>
                  <div className='text-gray-600'>Free to use</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
