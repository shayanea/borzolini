'use client';

import { Zap, ZapOff } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { MobileMenu } from './mobile-menu';
import { MobileMenuButton } from './mobile-menu-button';
import { NavLink } from './nav-link';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [forceReducedMotion, setForceReducedMotion] = useState(false);

  const toggleReducedMotion = () => {
    setForceReducedMotion(!forceReducedMotion);
    // You could also store this preference in localStorage
    localStorage.setItem('forceReducedMotion', (!forceReducedMotion).toString());
  };

  useEffect(() => {
    const stored = localStorage.getItem('forceReducedMotion');
    if (stored) {
      setForceReducedMotion(stored === 'true');
    }
  }, []);

  const shouldReduceMotion = prefersReducedMotion || forceReducedMotion;

  return (
    <motion.header
      className='sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
    >
      <Container>
        <div className='flex items-center justify-between h-16'>
          <Logo />

          <div className='hidden md:flex items-center gap-6'>
            <nav className='flex items-center gap-8'>
              <NavLink href='#features'>Features</NavLink>
              <NavLink href='#how-it-works'>How It Works</NavLink>
              <NavLink href='#clinic-management'>For Vets</NavLink>
            </nav>

            <div className='flex items-center gap-3'>
              <Button
                variant='ghost'
                size='sm'
                onClick={toggleReducedMotion}
                className='p-2'
                title={shouldReduceMotion ? 'Enable animations' : 'Reduce animations'}
              >
                {shouldReduceMotion ? <ZapOff className='w-4 h-4' /> : <Zap className='w-4 h-4' />}
              </Button>
              <Button variant='outline' size='sm'>
                Sign In
              </Button>
              <Button variant='primary' size='sm'>
                Sign Up
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
