'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export function NewFooter() {
  return (
    <footer className='bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden'>
      {/* Background gradients */}
      <div className='absolute top-0 right-0 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl'></div>

      <Container className='relative z-10'>
        {/* CTA Section */}
        <motion.div
          className='bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 mb-16 shadow-xl'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={animations.fadeInUp}
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              Ready to Give Your Pet Expert Medical Care?
            </h2>
            <p className='text-lg text-blue-100 mb-8'>
              Join thousands of pet owners who trust our platform for professional veterinary services.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-grow px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30'
              />
              <Button variant='primary' size='lg' className='px-8 py-4 bg-white text-blue-900 hover:bg-blue-50'>
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Borzolini</h3>
            <p className='text-slate-400 mb-6'>Professional veterinary care delivered calmly at home.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  Tele-Consults
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  Home Visits
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  AI Monitoring
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  Medical Records
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  For Veterinarians
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='text-slate-400 hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              {/* Social Icons */}
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.5 6.5H17.51'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 9H2V21H6V9Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-slate-500 text-sm border-t border-slate-800 pt-8'>
          © 2025 Borzolini. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
