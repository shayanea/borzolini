'use client';

import { motion } from 'framer-motion';
import { Award, Facebook, Heart, Instagram, Linkedin, Shield, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-20'>
      <Container>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'
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
            <div className='mb-6'>
              <Logo size='lg' className='text-white' />
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>
              Smart pet healthcare platform for all pets. Named after Fariborz, making pet care simple with personalized
              recommendations and easy vet scheduling.
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
            <h3 className='font-semibold mb-4 text-white'>Product</h3>
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
                  Pet Care Tips
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
            <h3 className='font-semibold mb-4 text-white'>Support</h3>
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
          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400 mt-4 md:mt-0'>
            <span className='flex items-center gap-2'>
              <Shield className='w-4 h-4 flex-shrink-0' />
              HIPAA Compliant
            </span>
            <span className='flex items-center gap-2'>
              <Award className='w-4 h-4 flex-shrink-0' />
              Vet Approved
            </span>
            <span className='flex items-center gap-2'>
              <Heart className='w-4 h-4 flex-shrink-0' />
              Made with ❤️ for all pets
            </span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
