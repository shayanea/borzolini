'use client';

import Image from 'next/image';
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
      className={cn(
        'font-extrabold tracking-tight text-transparent flex items-center bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
        textSizeClasses[size],
        className
      )}
    >
      <Image src='/logo.png' alt='Borzolini' width={35} height={35} className='mr-2' />
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
