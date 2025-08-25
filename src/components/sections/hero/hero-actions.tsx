'use client';

import { Button } from '@/components/ui/button';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useScrollTo } from '@/hooks/use-scroll-to';

export const HeroActions = (): React.JSX.Element => {
  const { scrollToSection } = useScrollTo();

  return (
    <motion.div
      className='flex flex-col sm:flex-row gap-4 justify-center items-center'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      <Button
        size='lg'
        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
        onClick={() => scrollToSection('features')}
      >
        Get Started Free
      </Button>
      <Button
        size='lg'
        variant='outline'
        className='border-2 border-slate-300 hover:border-slate-400 px-8 py-4 text-lg font-semibold hover:bg-slate-50 transition-all duration-300'
        onClick={() => scrollToSection('how-it-works')}
      >
        Learn How It Works
      </Button>
    </motion.div>
  );
};
