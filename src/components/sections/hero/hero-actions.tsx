'use client';

import { Home, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HeroActions = () => {
  return (
    <motion.div className='space-y-6' initial='initial' animate='animate' variants={animations.staggerContainer}>
      <motion.div
        className='flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center'
        variants={animations.fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size='xl' variant='primary' className='px-8 py-4 text-lg font-semibold shadow-lg group' asChild>
            <Link href='#contact'>
              <Home className='w-5 h-5 mr-2 group-hover:animate-pulse' />
              Book home visit
            </Link>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size='xl'
            variant='outline'
            className='px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm border-2 hover:bg-white hover:shadow-xl'
            asChild
          >
            <Link href='#contact'>
              <Phone className='w-5 h-5 mr-2' />
              Schedule a call
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
