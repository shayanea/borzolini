'use client';

import { NAVIGATION_ITEMS, SECONDARY_NAVIGATION_ITEMS } from '@/constants';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
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
            <div className='flex flex-col'>
              <span className='text-lg font-bold'>Borzolini</span>
              <span className='text-xs text-slate-500'>Professional Veterinary Care</span>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-8'>
            <nav className='flex items-center gap-6'>
              {pathname === '/' ? (
                <>
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.title}
                    </NavLink>
                  ))}
                </>
              ) : (
                <>
                  <NavLink href='/'>Home</NavLink>
                  {SECONDARY_NAVIGATION_ITEMS.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.title}
                    </NavLink>
                  ))}
                </>
              )}
            </nav>

            <Button variant='secondary' size='sm' className='shadow-sm hover:shadow-md transition-all duration-300'>
              Sign In
            </Button>

            <Button
              variant='primary'
              size='sm'
              className='bg-blue-500 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              Get Started
            </Button>
          </div>

          <MobileMenuButton onClick={() => setIsMenuOpen(true)} />
        </div>
      </Container>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </motion.header>
  );
}
