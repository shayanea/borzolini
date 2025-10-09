'use client';

import { Award, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function Footer() {
  return (
    <footer className='bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden'>
      <Container className='relative z-10'>
        <motion.div
          className='flex flex-col gap-8'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Main Content Row */}
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-col gap-3'>
              <p className='text-slate-400 text-sm md:text-base font-medium leading-relaxed'>
                © 2025 Borzolini. All rights reserved.
              </p>
              {/* Legal Links */}
              <div className='flex flex-wrap gap-4 text-sm'>
                <Link href='/privacy-policy' className='text-slate-400 hover:text-white transition-colors duration-200'>
                  Privacy Policy
                </Link>
                <span className='text-slate-600'>•</span>
                <Link
                  href='/terms-and-conditions'
                  className='text-slate-400 hover:text-white transition-colors duration-200'
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-300'>
              <span
                className='flex items-center gap-2 bg-slate-800/60 px-3 py-1.5 rounded-lg shadow-sm'
                aria-label='HIPAA compliant platform'
                role='status'
              >
                <Shield className='w-4 h-4 flex-shrink-0 text-blue-400' />
                <span className='font-medium'>HIPAA Compliant</span>
              </span>
              <span
                className='flex items-center gap-2 bg-slate-800/60 px-3 py-1.5 rounded-lg shadow-sm'
                aria-label='Vet approved product'
                role='status'
              >
                <Award className='w-4 h-4 flex-shrink-0 text-[#3DAD8C]' />
                <span className='font-medium'>Vet Approved</span>
              </span>
              <span
                className='flex items-center gap-2 bg-slate-800/60 px-3 py-1.5 rounded-lg shadow-sm'
                aria-label='Made with love for all pets'
                role='status'
              >
                <Heart className='w-4 h-4 flex-shrink-0 text-pink-400' />
                <span className='font-medium'>Made with ❤️ for all pets</span>
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
