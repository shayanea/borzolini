'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 'md', className }: LogoProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <span
      className={cn('font-extrabold tracking-tight flex items-center text-blue-500', textSizeClasses[size], className)}
    >
      Borzolini
    </span>
  );
}

// Favicon component for use in layout
export function Favicon() {
  return (
    <span className='w-8 h-8 text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 flex items-center justify-center'>
      B
    </span>
  );
}
