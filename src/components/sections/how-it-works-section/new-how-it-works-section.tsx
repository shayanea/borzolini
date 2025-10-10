'use client';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 'STEP 01',
    title: 'Discover & Onboard',
    description: 'Simple onboarding that centers pet calm and owner routines.',
    icon: '/images/icon-discover.svg',
  },
  {
    number: 'STEP 02',
    title: 'Continuous Monitoring',
    description: 'Advanced monitoring signals catch issues early—before they turn urgent.',
    icon: '/images/icon-monitoring.svg',
  },
  {
    number: 'STEP 03',
    title: 'Tele-Consult First',
    description: 'Fast answers in context, minimizing stress and unnecessary trips.',
    icon: '/images/icon-teleconsult.svg',
  },
  {
    number: 'STEP 04',
    title: 'Vetted Home Visit',
    description: 'When needed, trusted clinicians come to you—calm, prepared, precise.',
    icon: '/images/icon-homevisit.svg',
  },
];

const StepCard = ({ step, index }: { step: (typeof steps)[0]; index: number }) => {
  return (
    <motion.div
      className='relative'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
      custom={index * 0.2}
    >
      <div className='bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-6 relative overflow-hidden h-full'>
        {/* Background gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-50 rounded-2xl'></div>

        {/* Step content */}
        <div className='relative z-10'>
          {/* Icon placeholder - replace with actual icons */}
          <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg'>
            <svg className='w-8 h-8 text-white' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              {index === 0 && (
                <path
                  d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              )}
              {index === 1 && (
                <path
                  d='M22 12H18L15 21L9 3L6 12H2'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              )}
              {index === 2 && (
                <>
                  <path
                    d='M15 10L20 15L15 20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 4L9 9L4 14'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 15H4'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </>
              )}
              {index === 3 && (
                <>
                  <path
                    d='M3 9L12 15L21 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 9L10 3H14L21 9'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </>
              )}
            </svg>
          </div>

          {/* Step number */}
          <div className='text-xs font-semibold text-blue-600 mb-2'>{step.number}</div>

          {/* Step title */}
          <h3 className='text-xl font-bold text-slate-900 mb-2'>{step.title}</h3>

          {/* Step description */}
          <p className='text-slate-600 leading-relaxed'>{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function NewHowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden'
    >
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-gradient-mesh-organic opacity-20'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl'></div>

      <Container className='relative z-10'>
        <motion.div
          className='text-center mb-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={animations.fadeInUp}
        >
          <h2 className='text-section font-bold text-slate-900 mb-6 leading-tight tracking-tight'>
            A Modern Care Journey That Meets Owners Where They Are
          </h2>
          <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
            Proactive signals plus human expertise—so decisions are timely, informed, and simple.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
