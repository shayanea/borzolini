'use client';

import { Activity, Home, Users2, type LucideIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { motion } from 'framer-motion';

interface CapabilityCardProps {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

function CapabilityCard({ title, description, points, icon }: CapabilityCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className='h-full p-8 bg-white/95 backdrop-blur-sm border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
        <div className='flex flex-col h-full'>
          <div className='flex items-start gap-5 mb-6'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-200/50 shadow-sm'>
              <Icon icon={icon} size='lg' />
            </div>
            <div className='flex-1'>
              <h4 className='text-xl font-bold text-slate-900 mb-2'>{title}</h4>
              <p className='text-slate-600 leading-relaxed'>{description}</p>
            </div>
          </div>
          <ul className='space-y-3 text-slate-700 flex-1'>
            {points.map((p) => (
              <li key={p} className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                <span className='leading-relaxed text-sm'>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}

export function ProductCapabilitiesSection(): React.JSX.Element {
  return (
    <Container size='xl'>
      <motion.div
        className='text-center mb-16'
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className='text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight'>Product capabilities</h3>
        <p className='text-blue-100/90 max-w-3xl mx-auto text-lg leading-relaxed'>
          The essentials that make the tele‑first model work at scale.
        </p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={stagger}
      >
        <CapabilityCard
          icon={Users2}
          title='Multi‑role access'
          description='Clear permissions for owners, vets, and ops with an accessible UI.'
          points={['Owner app with guidance', 'Vet workspace & protocols', 'Ops tools for logistics']}
        />
        <CapabilityCard
          icon={Activity}
          title='Smart triage & monitoring'
          description='Signals and tele‑consults catch issues early and route the right care.'
          points={['AI‑assisted risk signals', 'Tele‑first consults', 'Contextual notes & history']}
        />
        <CapabilityCard
          icon={Home}
          title='In‑home visit ops'
          description='Reliable logistics for precise, prepared visits when needed.'
          points={['Routing & scheduling', 'Checklists & supplies', 'After‑visit summaries']}
        />
      </motion.div>
    </Container>
  );
}
