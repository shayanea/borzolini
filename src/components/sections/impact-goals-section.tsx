'use client';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const impactGoals = [
  {
    value: '-20%',
    title: 'Reduction in Cancellations',
    description: 'via reminders & AI triage',
    icon: (
      <svg className='w-8 h-8 text-blue-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M16 2V6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M8 2V6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M3 10H21' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M9 16L11 18L15 14'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    value: '4.6+',
    title: 'Home Visit Satisfaction',
    description: 'CSAT rating from pet owners',
    icon: (
      <svg className='w-8 h-8 text-purple-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M8 12H16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M12 8V16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    value: '4.3+',
    title: 'Tele-Consult Satisfaction',
    description: 'CSAT rating for virtual care',
    icon: (
      <svg className='w-8 h-8 text-green-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 12H18L15 21L9 3L6 12H2'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    value: '+25%',
    title: 'Treatment Adherence',
    description: 'improved in 14 days',
    icon: (
      <svg className='w-8 h-8 text-amber-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M12 6V12L16 14' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
];

const ImpactCard = ({ goal, index }: { goal: (typeof impactGoals)[0]; index: number }) => {
  return (
    <motion.div
      className='bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-6 relative overflow-hidden'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
      custom={index * 0.2}
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-50 rounded-2xl'></div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Icon */}
        <div className='mb-4'>{goal.icon}</div>

        {/* Value */}
        <div className='text-3xl font-bold text-blue-600 mb-1'>{goal.value}</div>

        {/* Title */}
        <div className='text-lg font-semibold text-slate-900 mb-1'>{goal.title}</div>

        {/* Description */}
        <p className='text-sm text-slate-600'>{goal.description}</p>
      </div>
    </motion.div>
  );
};

export function ImpactGoalsSection() {
  return (
    <section className='section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container className='relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={animations.fadeInUp}
        >
          <h2 className='text-section font-bold text-slate-900 mb-6 leading-tight tracking-tight'>Impact Goals</h2>
          <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
            What we aim to improve through our innovative approach to veterinary care.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {impactGoals.map((goal, index) => (
            <ImpactCard key={index} goal={goal} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
