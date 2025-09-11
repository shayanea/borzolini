'use client';

import { Button } from '@/components/ui/button';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';
import { CalendarClock, Home } from 'lucide-react';
import Link from 'next/link';

export const HeroActions = () => {
  return (
    <motion.div
      className='flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      <Button size='xl' variant='primary' className='px-8 py-4 text-lg font-semibold shadow-lg' asChild>
        <Link href='#cta'>
          <CalendarClock className='w-5 h-5 mr-2' />
          Schedule demo
        </Link>
      </Button>

      <Button size='xl' variant='outline' className='px-8 py-4 text-lg font-semibold border-2' asChild>
        <Link href='/book?type=home_visit'>
          <Home className='w-5 h-5 mr-2' />
          Book home visit
        </Link>
      </Button>
    </motion.div>
  );
};
