'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className='md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-sm'
      >
        <div className='py-6 space-y-4'>
          <a
            href='#features'
            className='block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-base px-4 py-2 rounded-lg hover:bg-slate-50'
            onClick={onClose}
          >
            Features
          </a>
          <a
            href='#how-it-works'
            className='block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-base px-4 py-2 rounded-lg hover:bg-slate-50'
            onClick={onClose}
          >
            How It Works
          </a>
          <a
            href='#clinic-management'
            className='block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-base px-4 py-2 rounded-lg hover:bg-slate-50'
            onClick={onClose}
          >
            For Vets
          </a>
          <a
            href='#cta'
            className='block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-base px-4 py-2 rounded-lg hover:bg-slate-50'
            onClick={onClose}
          >
            Get Started
          </a>

          <div className='pt-4 border-t border-slate-200/50 space-y-3 px-4'>
            <Button
              variant='primary'
              size='sm'
              className='w-full text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
            >
              Sign In
            </Button>
            <Button size='sm' className='w-full bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-lg'>
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
