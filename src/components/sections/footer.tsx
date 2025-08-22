'use client';

import { Facebook, Heart, Instagram, Linkedin, Shield, Twitter, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <Container>
        <motion.div
          className='grid lg:grid-cols-4 gap-8 mb-12'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Company Info */}
          <motion.div className='lg:col-span-2' variants={fadeInUp}>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center'>
                <Heart className='w-6 h-6 text-white' />
              </div>
              <span className='text-2xl font-bold'>Borzolini</span>
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>
              The world's first AI-powered predictive healthcare platform for pets. Named after Fariborz, transforming pet care from reactive to predictive, one Persian cat at a time.
            </p>
            <div className='flex gap-4'>
              <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white'>
                <Twitter className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white'>
                <Instagram className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white'>
                <Facebook className='w-5 h-5' />
              </Button>
              <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white'>
                <Linkedin className='w-5 h-5' />
              </Button>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeInUp}>
            <h3 className='font-semibold mb-4'>Product</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <a href='#features' className='hover:text-white transition-colors'>
                  AI Features
                </a>
              </li>
              <li>
                <a href='#fariborz' className='hover:text-white transition-colors'>
                  Fariborz Story
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Persian Cat Care
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Beta Access
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={fadeInUp}>
            <h3 className='font-semibold mb-4'>Support</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='text-gray-400 text-sm'>© 2024 Borzolini. All rights reserved. Named after Fariborz 🐱</p>
          <div className='flex items-center gap-6 text-sm text-gray-400 mt-4 md:mt-0'>
            <span className='flex items-center gap-2'>
              <Shield className='w-4 h-4' />
              HIPAA Compliant
            </span>
            <span className='flex items-center gap-2'>
              <Award className='w-4 h-4' />
              Vet Approved
            </span>
            <span className='flex items-center gap-2'>
              <Heart className='w-4 h-4' />
              Made with ❤️ for Persian cats
            </span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
