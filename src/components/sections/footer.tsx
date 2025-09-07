'use client';

import { Award, Heart, Shield } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function Footer() {
  return (
    <footer className='bg-slate-900 text-white py-6 relative overflow-hidden'>
      <Container className='relative z-10'>
        <motion.div
          className=' flex flex-col md:flex-row justify-between items-center'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='text-slate-400 text-body font-medium'>
            © 2024 Borzolini. All rights reserved. Named after Borzolini 🐾
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm text-slate-400 md:mt-0'>
            <span className='flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg shadow-sm'>
              <Shield className='w-4 h-4 flex-shrink-0 text-blue-400' />
              <span className='font-medium'>HIPAA Compliant</span>
            </span>
            <span className='flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg shadow-sm'>
              <Award className='w-4 h-4 flex-shrink-0 text-green-400' />
              <span className='font-medium'>Vet Approved</span>
            </span>
            <span className='flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg shadow-sm'>
              <Heart className='w-4 h-4 flex-shrink-0 text-pink-400' />
              <span className='font-medium'>Made with ❤️ for all pets</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
