import { Badge } from '@/components/ui/badge';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HowItWorksIndicators = () => {
  return (
    <motion.div
      className='text-center mt-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
    >
      <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 max-w-3xl mx-auto'>
        <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight'>What we aim to improve</h3>
        <div className='flex flex-wrap justify-center gap-3'>
          <Badge>−20% cancellations (target)</Badge>
          <Badge>CSAT ≥ 4.6 (home visits)</Badge>
          <Badge>CSAT ≥ 4.3 (tele‑consults)</Badge>
          <Badge>+25% adherence in 14 days</Badge>
        </div>
      </div>
    </motion.div>
  );
};
