'use client';

import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
  text?: string;
}

export function Loading({ size = 'md', variant = 'spinner', className, text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const renderSpinner = () => (
    <div className={cn('animate-spin rounded-full border-2 border-gray-300 border-t-blue-600', sizeClasses[size])} />
  );

  const renderDots = () => (
    <div className='flex space-x-1'>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-gray-400 rounded-full animate-pulse',
            size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-6 h-6'
          )}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => <div className={cn('bg-blue-600 rounded-full animate-pulse', sizeClasses[size])} />;

  const renderSkeleton = () => (
    <div className='space-y-3'>
      <div className='h-4 bg-gray-200 rounded animate-pulse' />
      <div className='h-4 bg-gray-200 rounded animate-pulse w-5/6' />
      <div className='h-4 bg-gray-200 rounded animate-pulse w-4/6' />
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {renderLoader()}
      {text && <p className='mt-2 text-sm text-gray-600 text-center'>{text}</p>}
    </div>
  );
}

// Specialized loading components
export function PageLoading() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <Loading size='xl' text='Loading...' />
    </div>
  );
}

export function SectionLoading() {
  return (
    <div className='py-20 flex items-center justify-center'>
      <Loading size='lg' text='Loading content...' />
    </div>
  );
}

export function CardLoading() {
  return (
    <div className='p-6'>
      <Loading variant='skeleton' />
    </div>
  );
}

export function ButtonLoading({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className='flex items-center gap-2'>
      <Loading size={size} variant='spinner' />
      <span>Loading...</span>
    </div>
  );
}

// Skeleton components for content placeholders
interface SkeletonProps {
  className?: string;
  lines?: number;
}

export function Skeleton({ className, lines = 3 }: SkeletonProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={cn('h-4 bg-gray-200 rounded animate-pulse', i === lines - 1 ? 'w-4/6' : 'w-full')} />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('bg-white rounded-lg p-6 border border-gray-200', className)}>
      <div className='flex items-center space-x-4 mb-4'>
        <div className='w-12 h-12 bg-gray-200 rounded-full animate-pulse' />
        <div className='flex-1 space-y-2'>
          <div className='h-4 bg-gray-200 rounded animate-pulse w-3/4' />
          <div className='h-3 bg-gray-200 rounded animate-pulse w-1/2' />
        </div>
      </div>
      <Skeleton lines={3} />
    </div>
  );
}
