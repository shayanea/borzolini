'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = 'full', size = 'md', className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const LogoIcon = ({ className }: { className?: string }) => (
    <div className={cn('relative flex items-center justify-center', className)}>
      {/* Shield background */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl shadow-lg' />

      {/* Heart shape */}
      <div className='relative z-10 flex items-center justify-center'>
        <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6 text-white' xmlns='http://www.w3.org/2000/svg'>
          {/* Heart + Paw combined shape */}
          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='currentColor' opacity='0.9' />
          {/* Paw print overlay */}
          <circle cx='12' cy='10' r='2' fill='#fca311' />
          <circle cx='10' cy='12' r='1' fill='#fca311' />
          <circle cx='14' cy='12' r='1' fill='#fca311' />
          <circle cx='12' cy='14' r='1' fill='#fca311' />
        </svg>
      </div>
    </div>
  );

  if (variant === 'icon') {
    return <LogoIcon className={cn(sizeClasses[size], className)} />;
  }

  if (variant === 'text') {
    return <span className={cn('font-bold text-slate-900', textSizeClasses[size], className)}>Borzolini</span>;
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoIcon className={sizeClasses[size]} />
      {showText && <span className={cn('font-bold text-slate-900', textSizeClasses[size])}>Borzolini</span>}
    </div>
  );
}

// Favicon component for use in layout
export function Favicon() {
  return (
    <div className='w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-700 rounded-lg flex items-center justify-center'>
      <div className='w-4 h-4 bg-orange-400 rounded-full' />
    </div>
  );
}
