'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { MobileMenu } from './mobile-menu';
import { MobileMenuButton } from './mobile-menu-button';
import { NavLink } from './nav-link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [forceReducedMotion, setForceReducedMotion] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem('forceReducedMotion');
    if (stored) {
      setForceReducedMotion(stored === 'true');
    }
  }, []);

  const shouldReduceMotion = prefersReducedMotion || forceReducedMotion;

  return (
    <motion.header
      className='sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, delay: 0.1 }}
    >
      <Container>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center gap-3'>
            <Logo />
            <div className='hidden lg:block'>
              <div className='text-sm font-semibold text-slate-900'>PetCare Pro</div>
              <div className='text-xs text-slate-500'>Professional Veterinary Care</div>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-8'>
            <nav className='flex items-center gap-8'>
              {pathname === '/' ? (
                <>
                  <NavLink href='#features'>Services</NavLink>
                  <NavLink href='#how-it-works'>How It Works</NavLink>
                  <NavLink href='#clinic-management'>For Veterinarians</NavLink>
                  <NavLink href='#about'>About Us</NavLink>
                </>
              ) : (
                <>
                  <NavLink href='/'>Home</NavLink>
                  <NavLink href='/contact'>Contact us</NavLink>
                </>
              )}
            </nav>

            <div className='flex items-center gap-3'>
              <Button variant='outline' size='sm' className='border-blue-200 text-blue-700 hover:bg-blue-50'>
                Sign In
              </Button>
              <Button
                variant='primary'
                size='sm'
                className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Get Started
              </Button>
            </div>
          </div>

          <MobileMenuButton onClick={() => setIsMenuOpen(true)} />
        </div>
      </Container>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </motion.header>
  );
}
