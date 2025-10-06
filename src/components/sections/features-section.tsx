'use client';

import { Brain, Shield, Stethoscope, Users } from 'lucide-react';
import { animations, commonAnimationProps } from '@/lib/animations';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const medicalFeatures = [
  {
    id: 'ai-monitoring',
    title: 'AI Monitoring/Insights',
    description:
      'Proactive AI that analyzes signals to detect anomalies early, predict issues, and surface actionable insights.',
    icon: Brain,
    color: 'from-violet-500 to-fuchsia-600',
    bgColor: 'from-violet-50 to-fuchsia-50',
    benefits: ['Real-time anomaly detection', 'Predictive alerts', 'Continuous insights'],
  },
  {
    id: 'specialist-referrals',
    title: 'Specialist Referrals',
    description: 'Access to veterinary specialists for complex medical conditions and advanced treatments.',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50',
    benefits: ['Specialist network', 'Advanced treatments', 'Complex conditions'],
  },
  {
    id: 'medical-records',
    title: 'Medical Records',
    description: 'Secure digital medical records management for complete pet health history tracking.',
    icon: Shield,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
    benefits: ['Digital records', 'Health history', 'Secure storage'],
  },
];

const MedicalFeatureCard = ({ feature }: { feature: (typeof medicalFeatures)[0] }) => {
  return (
    <motion.div variants={animations.fadeInUp} className='group' whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <div className='relative h-full p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200/50'>
        {/* Medical cross decoration */}
        <div className='absolute top-4 right-4 w-6 h-6 opacity-5'>
          <div className='absolute top-1/2 left-1/2 w-4 h-0.5 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
          <div className='absolute top-1/2 left-1/2 w-0.5 h-4 bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
        </div>

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-30 rounded-3xl`}></div>

        <div className='relative z-10'>
          {/* Icon */}
          <div
            className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <feature.icon className='w-8 h-8 text-white' />
          </div>

          {/* Content */}
          <h3 className='text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
            {feature.title}
          </h3>
          <p className='text-slate-600 mb-6 leading-relaxed'>{feature.description}</p>

          {/* Benefits */}
          <ul className='space-y-2'>
            {feature.benefits.map((benefit, benefitIndex) => (
              <li key={benefitIndex} className='flex items-center gap-2 text-sm text-slate-500'>
                <div className='w-1.5 h-1.5 bg-blue-500 rounded-full'></div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover effect overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    </motion.div>
  );
};

const FeaturesHeader = () => {
  return (
    <motion.div className='text-center mb-16 lg:mb-20' {...commonAnimationProps} variants={animations.fadeInUp}>
      <div className='inline-flex items-center gap-3 px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full shadow-lg mb-8'>
        <Stethoscope className='w-5 h-5 text-blue-600' />
        <span className='text-slate-700'>Professional Veterinary Services</span>
        <div className='w-2 h-2 bg-[#3DAD8C] rounded-full animate-pulse'></div>
      </div>

      <h2 className='text-section font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
        Comprehensive{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>Medical Care</span>{' '}
        for Your{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>Beloved Pets</span>
      </h2>

      <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        From clinic chaos to care that simply works. Trusted vets come to you or meet virtually, with guidance tailored
        to your pet at home.
      </p>

      {/* Trust indicators */}
      <div className='flex flex-wrap justify-center gap-8 mt-8 text-sm text-slate-500'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-[#3DAD8C] rounded-full'></div>
          <span>Vet verified</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
          <span>Home visits + tele‑consults</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
          <span>AI-powered insights</span>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      {medicalFeatures.map((feature) => (
        <MedicalFeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section
      className='section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden'
      id='features'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container size='xl' className='relative z-10'>
        <FeaturesHeader />
        <FeaturesGrid />
      </Container>
    </section>
  );
};
