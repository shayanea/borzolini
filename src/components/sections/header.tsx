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
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'>
      <Container>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <Logo variant='full' size='sm' className='lg:hidden' />
            <Logo variant='full' size='md' className='hidden lg:block' />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navigationItems.slice(0, -1).map((item) => (
              <a
                key={item.title}
                href={item.href}
                className='text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-sm'
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='sm'
              className='text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
            >
              Sign In
            </Button>
            <Button
              size='sm'
              className='bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200'
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
              className='lg:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-sm'
            >
              <div className='py-6 space-y-4'>
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className='block text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-base px-4 py-2 rounded-lg hover:bg-slate-50'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <div className='pt-4 border-t border-slate-200/50 space-y-3 px-4'>
                  <Button
                    variant='ghost'
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
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
