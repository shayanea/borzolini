'use client';

import { DollarSign, LineChart, ShieldCheck, TrendingDown } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

interface MetricItem {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  note?: string;
}

const metrics: MetricItem[] = [
  {
    id: 'no-shows',
    label: 'Reduction in no‑shows',
    value: '−20%',
    icon: TrendingDown,
    note: 'via reminders & AI triage',
  },
  {
    id: 'rev-patient',
    label: 'Revenue per patient',
    value: '+12%',
    icon: DollarSign,
    note: 'better adherence & bundles',
  },
  { id: 'ops-eff', label: 'Ops efficiency', value: '+18%', icon: LineChart, note: 'smart routing & scheduling' },
  { id: 'risk', label: 'Compliance risk', value: '↓', icon: ShieldCheck, note: 'RBAC, audit logs, encryption' },
];

export const ClinicROIMetrics = () => {
  return (
    <Container size='xl' className='relative z-10'>
      <motion.div
        className='mt-12 rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur-md'
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={animations.staggerContainer}
      >
        <motion.div className='flex items-center gap-4 mb-6' variants={animations.fadeInUp}>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-glow-indigo'>
            <LineChart className='h-6 w-6 text-white' />
          </div>
          <div>
            <motion.h3 className='text-xl font-semibold text-white mb-1'>Clinic ROI at a Glance</motion.h3>
            <p className='text-blue-100/70 text-sm'>Measurable improvements for your practice</p>
          </div>

          {/* Decorative element */}
          <div className='ml-auto hidden md:flex items-center'>
            <div className='h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent'></div>
            <div className='h-2 w-2 rounded-full bg-blue-400/50 mx-2'></div>
            <div className='h-0.5 w-8 bg-gradient-to-r from-blue-300/30 to-transparent'></div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {metrics.map((m) => (
            <motion.div
              key={m.id}
              className='flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-sm relative overflow-hidden group hover:bg-white/15 transition-all duration-300'
              variants={animations.fadeInUp}
            >
              {/* Background decoration */}
              <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:shadow-glow-blue transition-all duration-300'>
                <m.icon className='h-5 w-5 text-white' />
              </div>
              <div>
                <div className='text-sm opacity-80'>{m.label}</div>
                <div className='text-lg font-bold'>{m.value}</div>
                {m.note ? (
                  <div className='text-xs opacity-70 flex items-center gap-1'>
                    <span className='inline-block w-1.5 h-1.5 bg-blue-300/50 rounded-full'></span>
                    {m.note}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div className='flex justify-center mt-6' variants={animations.fadeInUp}>
          <div className='flex items-center gap-2'>
            <div className='h-0.5 w-8 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent'></div>
            <div className='h-1.5 w-1.5 rounded-full bg-blue-400/40'></div>
            <div className='h-0.5 w-16 bg-gradient-to-r from-blue-300/20 via-blue-300/30 to-blue-300/20'></div>
            <div className='h-1.5 w-1.5 rounded-full bg-blue-400/40'></div>
            <div className='h-0.5 w-8 bg-gradient-to-r from-blue-300/20 to-transparent'></div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};
