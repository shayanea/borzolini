'use client';

import { Button } from '@/components/ui/button';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useScrollTo } from '@/hooks/use-scroll-to';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

export const HeroActions = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <motion.div
      className='flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center'
      initial='initial'
      animate='animate'
      variants={animations.fadeInUp}
    >
      <Button
        size='xl'
        variant='primary'
        className='px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'
        onClick={() => scrollToSection('features')}
      >
        <Calendar className='w-5 h-5 mr-2' />
        Book Appointment
        <ArrowRight className='w-5 h-5 ml-2' />
      </Button>

      <Button
        size='xl'
        variant='outline'
        className='px-8 py-4 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300'
        onClick={() => scrollToSection('how-it-works')}
      >
        <Phone className='w-5 h-5 mr-2' />
        Emergency Call
      </Button>
    </motion.div>
  );
};
