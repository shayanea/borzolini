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
        <motion.h3 className='mb-6 text-xl font-semibold text-white' variants={animations.fadeInUp}>
          Clinic ROI at a Glance
        </motion.h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {metrics.map((m) => (
            <motion.div
              key={m.id}
              className='flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-sm'
              variants={animations.fadeInUp}
            >
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600'>
                <m.icon className='h-5 w-5 text-white' />
              </div>
              <div>
                <div className='text-sm opacity-80'>{m.label}</div>
                <div className='text-lg font-bold'>{m.value}</div>
                {m.note ? <div className='text-xs opacity-70'>{m.note}</div> : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};
