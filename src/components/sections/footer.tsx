'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function Footer() {
  return (
    <footer className='bg-slate-900 text-white section-padding relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-dots opacity-5' />

      <Container className='relative z-10'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Company Info */}
          <motion.div className='lg:col-span-2' variants={fadeInUp}>
            <div className='mb-8'>
              <Logo size='lg' className='text-white' />
            </div>
            <p className='text-slate-400 mb-8 max-w-lg text-body-large leading-relaxed'>
              Smart pet healthcare platform for all pets. Named after Borzolini, making pet care simple with
              personalized recommendations and easy vet scheduling.
            </p>
            <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50/10 to-purple-50/10 text-slate-300 px-4 py-2 rounded-full border border-slate-700/50 text-sm font-medium shadow-sm'>
              <Sparkles className='w-4 h-4 text-blue-400' />
              AI-Powered Pet Care
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeInUp}>
            <h3 className='font-semibold mb-6 text-white text-lg'>Product</h3>
            <ul className='space-y-4 text-slate-400'>
              <li>
                <a href='#features' className='hover:text-white transition-colors duration-200 font-medium'>
                  AI Features
                </a>
              </li>
              <li>
                <a href='#borzolini' className='hover:text-white transition-colors duration-200 font-medium'>
                  Borzolini Story
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Pet Care Tips
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Beta Access
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={fadeInUp}>
            <h3 className='font-semibold mb-6 text-white text-lg'>Support</h3>
            <ul className='space-y-4 text-slate-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors duration-200 font-medium'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='text-slate-400 text-body font-medium'>
            © 2024 Borzolini. All rights reserved. Named after Borzolini 🐾
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm text-slate-400 mt-6 md:mt-0'>
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
