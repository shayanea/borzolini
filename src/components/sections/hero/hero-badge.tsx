'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { animations } from '@/lib/animations';

export const HeroBadge = (): React.JSX.Element => {
  return (
    <motion.div initial='initial' animate='animate' variants={animations.fadeInUp}>
      <Badge
        variant='info'
        className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 px-6 py-3 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm backdrop-blur-sm'
      >
        <Sparkles className='w-4 h-4 text-blue-600' />
        Smart Pet Healthcare Platform for All Pets
      </Badge>
    </motion.div>
  );
};
