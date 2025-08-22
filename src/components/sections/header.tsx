'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';

const navigationItems = [
  { title: 'Features', href: '#features' },
  { title: 'How it Works', href: '#how-it-works' },
  { title: 'Borzolini', href: '#borzolini' },
  { title: 'Get Started', href: '#cta' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'>
      <Container>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <Logo variant='full' size='sm' className='lg:hidden' />
            <Logo variant='full' size='md' className='hidden lg:block' />
          </div>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button variant='ghost' size='sm' className='text-gray-700 hover:text-blue-600'>
              Sign In
            </Button>
            <Button size='sm' className='bg-blue-600 hover:bg-blue-700 text-white'>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors'
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden border-t border-gray-100'
            >
              <div className='py-4 space-y-4'>
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <div className='pt-4 border-t border-gray-100 space-y-3'>
                  <Button variant='ghost' size='sm' className='w-full text-gray-700 hover:text-blue-600'>
                    Sign In
                  </Button>
                  <Button size='sm' className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
