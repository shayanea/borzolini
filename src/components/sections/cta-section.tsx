'use client';

import { Heart, Phone, Stethoscope } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const medicalServices = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency veterinary services for urgent pet health situations',
    icon: Phone,
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50',
    iconColor: 'text-red-600',
  },
  {
    id: 2,
    title: 'Expert Diagnosis',
    description: 'Professional medical assessments from licensed veterinarians',
    icon: Stethoscope,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Preventive Care',
    description: 'Comprehensive health monitoring and wellness programs',
    icon: Heart,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
  },
];

const MedicalServiceCard = ({ service }: { service: (typeof medicalServices)[0] }) => {
  return (
    <motion.div variants={animations.fadeInUp} className='group' whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <div className='relative h-full p-8 bg-white/95 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200/50'>
        {/* Medical cross decoration */}
        <div className='absolute top-4 right-4 w-6 h-6 opacity-5'>
          <div className='absolute top-1/2 left-1/2 w-4 h-0.5 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
          <div className='absolute top-1/2 left-1/2 w-0.5 h-4 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
        </div>

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-30 rounded-3xl`}></div>

        <div className='relative z-10'>
          {/* Icon */}
          <div
            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon className='w-8 h-8 text-white' />
          </div>

          {/* Content */}
          <h3 className='text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
            {service.title}
          </h3>
          <p className='text-slate-600 leading-relaxed'>{service.description}</p>
        </div>

        {/* Hover effect overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    </motion.div>
  );
};

export function CTASection() {
  return (
    <section
      id='cta'
      className='section-padding bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden'
    >
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-pattern-organic opacity-10' />
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl' />

      {/* Medical cross pattern overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-2 h-8 bg-white rotate-45' />
        <div className='absolute top-20 left-20 w-8 h-2 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-2 h-6 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-6 h-2 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-2 h-6 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-6 h-2 bg-white rotate-45' />
      </div>

      <Container className='relative z-10'>
        <motion.div
          className='text-center max-w-7xl mx-auto'
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
          {/* Header */}
          <motion.div variants={animations.fadeInUp}>
            <div className='inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg mb-8'>
              <Stethoscope className='w-5 h-5 text-white' />
              <span className='text-white'>Professional Veterinary Care</span>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
            </div>
          </motion.div>

          <motion.h2 className='text-section font-bold text-white mb-6 leading-tight' variants={animations.fadeInUp}>
            Ready to Give Your Pet{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300'>
              Expert Medical Care
            </span>
            ?
          </motion.h2>

          <motion.p
            className='text-body-large text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed'
            variants={animations.fadeInUp}
          >
            Join thousands of pet owners who trust our platform for professional veterinary services, emergency care,
            and specialized medical treatments.
          </motion.p>

          {/* Medical Services Grid */}
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {medicalServices.map((service) => (
              <MedicalServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
