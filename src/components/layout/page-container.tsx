'use client';

import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gradient';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-none',
};

const paddingClasses = {
  none: '',
  sm: 'px-4 py-8',
  md: 'px-6 py-12',
  lg: 'px-8 py-16',
  xl: 'px-10 py-20',
};

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-blue-50 via-white to-green-50',
};

export function PageContainer({
  children,
  className,
  maxWidth = 'xl',
  padding = 'md',
  background = 'white',
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto',
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </div>
  );
}

// Specialized page containers
export function HeroContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <PageContainer
      maxWidth='2xl'
      padding='xl'
      background='gradient'
      className={cn('min-h-screen flex items-center', className)}
    >
      {children}
    </PageContainer>
  );
}

export function SectionContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <PageContainer maxWidth='xl' padding='lg' background='white' className={cn('py-20', className)}>
      {children}
    </PageContainer>
  );
}

export function ContentContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <PageContainer maxWidth='lg' padding='md' background='white' className={className}>
      {children}
    </PageContainer>
  );
}
