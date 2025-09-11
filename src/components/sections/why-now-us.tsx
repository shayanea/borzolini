'use client';

import { Container } from '@/components/ui/container';
import { animations, commonAnimationProps } from '@/lib/animations';
import { motion } from 'framer-motion';

export const WhyNowUsSection = (): React.JSX.Element => {
  return (
    <section className='section-padding bg-white' id='why-now'>
      <Container size='xl'>
        <motion.div className='grid gap-10 lg:grid-cols-2' {...commonAnimationProps} variants={animations.fadeInUp}>
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-8'>
            <h3 className='mb-4 text-2xl font-bold text-slate-900'>Why now</h3>
            <ul className='space-y-3 text-slate-700'>
              <li>In‑clinic experiences are often crowded and stressful, reducing adherence and satisfaction.</li>
              <li>Pet spending keeps rising; owners want convenience and high‑quality, contextual guidance.</li>
              <li>Telemedicine adoption accelerated; home‑service logistics are reliable enough for scale.</li>
            </ul>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-8'>
            <h3 className='mb-4 text-2xl font-bold text-slate-900'>Why us</h3>
            <ul className='space-y-3 text-slate-700'>
              <li>Built from a real founder experience: optimize for pet calm and owner convenience.</li>
              <li>AI monitoring + tele‑consults + vetted home visits with contextual advice.</li>
              <li>Clear value: fewer emergencies, better adherence, higher CSAT, measurable savings.</li>
              <li>Focused wedge: British Shorthair first (Fariborz), expanding by breed demand.</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
