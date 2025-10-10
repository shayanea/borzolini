'use client';

import { Activity, Award, Calendar, Clock, FileText, HeartPulse, Stethoscope, Users } from 'lucide-react';
import { animations, commonAnimationProps } from '@/lib/animations';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const medicalFeatures = [
  {
    id: 'expert-diagnosis',
    title: 'Expert Diagnosis',
    description: 'Professional assessment from licensed veterinarians with years of experience.',
    icon: Stethoscope,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    id: 'tele-consults',
    title: 'Tele-Consults',
    description: 'Fast answers in context, minimizing stress and unnecessary trips.',
    icon: Calendar,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
  },
  {
    id: 'home-visits',
    title: 'Home Visits',
    description: 'Trusted clinicians come to you—calm, prepared, and precise.',
    icon: Users,
    color: 'from-purple-500 to-fuchsia-600',
    bgColor: 'from-purple-50 to-fuchsia-50',
  },
  {
    id: 'smart-monitoring',
    title: 'Smart Monitoring',
    description: 'Proactive monitoring that analyzes signals to detect anomalies early and predict issues.',
    icon: Activity,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'from-orange-50 to-amber-50',
  },
  {
    id: 'medical-records',
    title: 'Medical Records',
    description: 'Secure digital medical records management for complete pet health history.',
    icon: FileText,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'from-cyan-50 to-blue-50',
  },
  {
    id: 'specialist-referrals',
    title: 'Specialist Referrals',
    description: 'Access to veterinary specialists for complex medical conditions.',
    icon: Award,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'from-pink-50 to-rose-50',
  },
  {
    id: 'realtime-monitoring',
    title: 'Real-time Monitoring',
    description: 'Continuous health insights and predictive alerts for your pet.',
    icon: HeartPulse,
    color: 'from-red-500 to-rose-600',
    bgColor: 'from-red-50 to-rose-50',
  },
  {
    id: 'available-247',
    title: '24/7 Available',
    description: 'Round-the-clock support and emergency care when you need it most.',
    icon: Clock,
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'from-teal-50 to-emerald-50',
  },
];

const MedicalFeatureCard = ({ feature }: { feature: (typeof medicalFeatures)[0] }) => {
  return (
    <motion.div variants={animations.fadeInUp} className='group' whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <div className='relative h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200/50'>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-30 rounded-2xl`}></div>

        <div className='relative z-10'>
          {/* Icon */}
          <div
            className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <feature.icon className='w-7 h-7 text-white' />
          </div>

          {/* Content */}
          <h3 className='text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
            {feature.title}
          </h3>
          <p className='text-slate-600 text-sm leading-relaxed'>{feature.description}</p>
        </div>

        {/* Hover effect overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    </motion.div>
  );
};

const FeaturesHeader = () => {
  return (
    <motion.div className='text-center mb-16' {...commonAnimationProps} variants={animations.fadeInUp}>
      <h2 className='text-section font-bold text-slate-900 mb-6 leading-tight tracking-tight'>
        Comprehensive Medical Care for Your Beloved Pets
      </h2>

      <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        From clinic chaos to care that simply works. Trusted vets come to you or meet virtually, with guidance tailored
        to your pet at home.
      </p>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      {medicalFeatures.map((feature) => (
        <MedicalFeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.div>
  );
};

export const MedicalCareSection = () => {
  return (
    <section
      className='section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden'
      id='services'
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
