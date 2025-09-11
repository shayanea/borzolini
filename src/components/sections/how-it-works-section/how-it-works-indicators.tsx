import { Home, Target, TrendingDown, TrendingUp, Video } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HowItWorksIndicators = (): React.JSX.Element => {
  return (
    <motion.div
      className='text-center mt-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.fadeInUp}
    >
      <div className='relative max-w-4xl mx-auto rounded-3xl p-10 bg-white/80 backdrop-blur-md shadow-xl border border-slate-200/60 ring-1 ring-slate-100/70'>
        {/* Soft gradient accents */}
        <div className='pointer-events-none absolute -top-10 -right-16 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl'></div>
        <div className='pointer-events-none absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl'></div>

        {/* Eyebrow */}
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 mb-5 shadow-sm'>
          <Target className='h-3.5 w-3.5 text-slate-500' /> Impact goals
        </div>

        {/* Heading */}
        <h3 className='text-2xl sm:text-3xl font-bold mb-6 leading-tight'>
          <span className='text-slate-900'>What we aim to </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>improve</span>
        </h3>

        {/* Metrics */}
        <div className='flex flex-wrap justify-center gap-3'>
          <Badge variant='warning' className='gap-2'>
            <TrendingDown className='h-3.5 w-3.5' /> −20% cancellations (target)
          </Badge>
          <Badge variant='success' className='gap-2'>
            <Home className='h-3.5 w-3.5' /> CSAT ≥ 4.6 (home visits)
          </Badge>
          <Badge variant='info' className='gap-2'>
            <Video className='h-3.5 w-3.5' /> CSAT ≥ 4.3 (tele‑consults)
          </Badge>
          <Badge variant='success' className='gap-2'>
            <TrendingUp className='h-3.5 w-3.5' /> +25% adherence in 14 days
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};
