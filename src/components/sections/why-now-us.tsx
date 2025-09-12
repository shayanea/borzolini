'use client';

import { Activity, CheckCircle2, Compass, Home, Sparkles, Video, type LucideIcon } from 'lucide-react';
import { animations, commonAnimationProps } from '@/lib/animations';

import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { motion } from 'framer-motion';

export const WhyNowUsSection = (): React.JSX.Element => {
  interface JourneyStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }

  const journey: JourneyStep[] = [
    {
      id: 1,
      title: 'Discover & onboard',
      description: 'Simple onboarding that centers pet calm and owner routines.',
      icon: Compass,
    },
    {
      id: 2,
      title: 'Continuous monitoring',
      description: 'AI‑assisted signals catch issues early—before they turn urgent.',
      icon: Activity,
    },
    {
      id: 3,
      title: 'Tele‑consult first',
      description: 'Fast answers in context, minimizing stress and unnecessary trips.',
      icon: Video,
    },
    {
      id: 4,
      title: 'Vetted home visit',
      description: 'When needed, trusted clinicians come to you—calm, prepared, precise.',
      icon: Home,
    },
  ];

  return (
    <section className='section-padding bg-gradient-to-b from-white to-slate-50/50' id='why-now'>
      <Container size='xl'>
        <motion.div className='mb-10 text-center' {...commonAnimationProps} variants={animations.fadeInUp}>
          <p className='mb-2 text-sm font-medium uppercase tracking-widest text-slate-500'>Why now • Why us</p>
          <h2 className='mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl'>
            A modern care journey that meets owners where they are
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-pretty text-slate-600'>
            Proactive signals plus human expertise—so decisions are timely, informed, and simple.
          </p>
        </motion.div>

        <motion.div
          className='grid gap-8 sm:gap-10 lg:grid-cols-2'
          {...commonAnimationProps}
          variants={animations.fadeInUp}
        >
          <div className='rounded-3xl ring-1 ring-slate-200 bg-white/80 p-8 sm:p-10 shadow-sm backdrop-blur transition-shadow hover:shadow-md'>
            <h3 className='mb-5 text-2xl font-semibold text-slate-900 tracking-tight'>Why us</h3>
            <ul className='space-y-4 text-slate-700'>
              <li className='flex gap-3'>
                <Icon icon={CheckCircle2} size='md' className='mt-0.5 text-green-600' />
                <span className='leading-relaxed'>Tele‑first model reduces unnecessary visits and anxiety.</span>
              </li>
              <li className='flex gap-3'>
                <Icon icon={CheckCircle2} size='md' className='mt-0.5 text-green-600' />
                <span className='leading-relaxed'>Operationally rigorous in‑home logistics for true scale.</span>
              </li>
            </ul>
          </div>

          <div className='rounded-3xl ring-1 ring-slate-200 bg-white/80 p-8 sm:p-10 shadow-sm backdrop-blur transition-shadow hover:shadow-md'>
            <h3 className='mb-1 text-2xl font-semibold text-slate-900 tracking-tight'>Journey outcomes</h3>
            <p className='mb-6 text-slate-600'>How the experience flows—from first signal to resolution.</p>
            <ol className='space-y-5'>
              {journey.map((step: JourneyStep) => (
                <li
                  key={step.id}
                  className='relative rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 p-4 sm:p-5'
                >
                  <div className='flex items-start gap-3'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200'>
                      <Icon icon={step.icon} size='md' />
                    </div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <span className='text-xs font-semibold tracking-widest text-blue-600'>STEP {step.id}</span>
                        <Sparkles size={16} className='text-blue-400' />
                      </div>
                      <h4 className='mt-1 text-base font-semibold text-slate-900'>{step.title}</h4>
                      <p className='mt-1 text-sm leading-relaxed text-slate-700'>{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
