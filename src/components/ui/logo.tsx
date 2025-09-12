'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'full', size = 'md', className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const iconElement = (
    <div
      className={cn(
        'bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold',
        sizeClasses[size]
      )}
    >
      <span className={cn('font-extrabold tracking-tight', textSizeClasses[size])}>B</span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <Link href='/' aria-label='Go to homepage' className={cn('flex items-center', className)}>
        {iconElement}
      </Link>
    );
  }

  if (variant === 'text') {
    return (
      <Link
        href='/'
        aria-label='Go to homepage'
        className={cn('font-extrabold tracking-tight text-slate-900', textSizeClasses[size], className)}
      >
        Borzolini
      </Link>
    );
  }

  // Full logo (icon + text)
  return (
    <Link href='/' aria-label='Go to homepage' className={cn('flex items-center gap-3', className)}>
      {iconElement}
      {showText && (
        <span className={cn('font-extrabold tracking-tight text-slate-900', textSizeClasses[size])}>Borzolini</span>
      )}
    </Link>
  );
}

// Favicon component for use in layout
export function Favicon() {
  return (
    <div className='w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold'>
      <span className='text-lg font-extrabold tracking-tight'>B</span>
    </div>
  );
}
