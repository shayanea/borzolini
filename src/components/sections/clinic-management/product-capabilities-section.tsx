'use client';

import { Activity, Home, Users2 } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { motion } from 'framer-motion';

interface CapabilityCardProps {
  title: string;
  description: string;
  points: string[];
  icon: any;
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
      <Card className='h-full p-6 sm:p-7 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl'>
        <div className='flex items-start gap-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200'>
            <Icon icon={icon} size='lg' />
          </div>
          <div>
            <h4 className='text-lg font-semibold text-slate-900'>{title}</h4>
            <p className='mt-1 text-sm text-slate-600'>{description}</p>
          </div>
        </div>
        <ul className='mt-5 space-y-2 text-sm text-slate-700'>
          {points.map((p) => (
            <li key={p} className='flex gap-2'>
              <span className='text-blue-500'>•</span>
              <span className='leading-relaxed'>{p}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export function ProductCapabilitiesSection(): React.JSX.Element {
  return (
    <section className='mt-24'>
      <Container size='xl'>
        <motion.div
          className='text-center mb-10'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className='text-3xl sm:text-4xl font-bold text-white mb-3'>Product capabilities</h3>
          <p className='text-blue-100 max-w-3xl mx-auto'>
            The essentials that make the tele‑first model work at scale.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'
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
    </section>
  );
}
