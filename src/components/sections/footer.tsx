'use client';

import { Award, Heart, Shield } from 'lucide-react';

import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { footerLinks } from '@/constants/footer';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const homeLinks = [
    { href: '/', label: 'Home', ariaLabel: 'Go to homepage' },
    { href: '/#cta', label: 'Contact us', ariaLabel: 'Contact us' },
  ] as const;

  const linksToRender = isHome ? footerLinks : homeLinks;
  return (
    <footer className='bg-slate-900 text-white py-8 border-t border-slate-800 relative overflow-hidden'>
      <Container className='relative z-10'>
        <motion.div
          className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-[42rem]'>
            © 2024 Borzolini. All rights reserved. Named after Borzolini 🐾
          </p>
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
              <Award className='w-4 h-4 flex-shrink-0 text-green-400' />
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
            <nav aria-label='Footer navigation' className='pl-1'>
              <ul className='flex items-center gap-6 text-slate-400' role='list'>
                {linksToRender.map(({ href, label, ariaLabel }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-label={ariaLabel ?? label}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn('transition-colors', isActive ? 'text-white font-semibold' : 'hover:text-white')}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
