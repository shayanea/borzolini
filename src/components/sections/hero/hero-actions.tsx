'use client';

import { Button } from '@/components/ui/button';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useScrollTo } from '@/hooks/use-scroll-to';

export const HeroActions = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <motion.div
      className='flex flex-col sm:flex-row gap-4 justify-center items-center'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      <Button
        size='xl'
        variant='pet'
        className='px-10 py-4 text-lg font-semibold'
        onClick={() => scrollToSection('features')}
      >
        Get Started Free
      </Button>
      <Button
        size='xl'
        variant='outline'
        className='px-10 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
        onClick={() => scrollToSection('how-it-works')}
      >
        Learn How It Works
      </Button>
    </motion.div>
  );
};
