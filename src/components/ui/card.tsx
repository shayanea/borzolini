'use client';

import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outlined' | 'elevated' | 'glass' | 'primary';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

const cardVariants = {
  default: 'bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm',
  gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-sm',
  outlined: 'bg-transparent border-2 border-slate-200 shadow-sm',
  elevated: 'bg-white/95 backdrop-blur-sm shadow-lg border border-slate-200/50',
  glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-lg',
  primary: 'bg-blue-500 text-white shadow-lg hover:shadow-xl',
};

const paddingVariants = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
  onClick,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl h-full transition-all duration-300',
        cardVariants[variant],
        paddingVariants[padding],
        hover && 'hover:shadow-xl hover:-translate-y-2 cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-6', className)}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('space-y-4', className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-6 pt-6 border-t border-slate-200/50', className)}>{children}</div>;
}

// Specialized card components for common use cases
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  variant?: 'blue' | 'green' | 'purple' | 'orange';
  className?: string;
}

export function FeatureCard({ icon, title, description, benefits, variant = 'blue', className }: FeatureCardProps) {
  const variantClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200/50 hover:shadow-blue-100/50',
    green: 'from-green-50 to-green-100 border-green-200/50 hover:shadow-green-100/50',
    purple: 'from-purple-50 to-purple-100 border-purple-200/50 hover:shadow-purple-100/50',
    orange: 'from-orange-50 to-orange-100 border-orange-200/50 hover:shadow-orange-100/50',
  };

  return (
    <Card
      variant='default'
      className={cn(
        'bg-gradient-to-br',
        variantClasses[variant],
        'border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        className
      )}
      hover
    >
      <CardHeader>
        {icon}
        <h3 className='text-xl font-bold text-slate-900 mt-4 leading-tight'>{title}</h3>
      </CardHeader>

      <CardContent>
        <p className='text-slate-600 mb-6 leading-relaxed font-medium'>{description}</p>

        <ul className='space-y-3 text-sm text-slate-600'>
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-center gap-3'>
              <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-green-600 text-xs font-bold'>✓</span>
              </div>
              <span className='font-medium'>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface StatsCardProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'stable';
  className?: string;
}

export function StatsCard({ value, label, trend, className }: StatsCardProps) {
  const trendIcon = {
    up: '↗',
    down: '↘',
    stable: '→',
  };

  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-slate-600',
  };

  return (
    <Card variant='elevated' className={cn('text-center', className)}>
      <div className='p-4'>
        <div className='flex items-center justify-center gap-2 mb-2'>
          <p className='text-2xl font-bold text-slate-900'>{value}</p>
          {trend && <span className={cn('text-sm', trendColor[trend])}>{trendIcon[trend]}</span>}
        </div>
        <p className='text-sm text-slate-600 font-medium'>{label}</p>
      </div>
    </Card>
  );
}

// Professional clinic card variant
interface ClinicCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ClinicCard({ icon, title, description, className }: ClinicCardProps) {
  return (
    <Card
      variant='primary'
      className={cn('text-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300', className)}
      hover
    >
      <div className='mb-6'>{icon}</div>
      <h3 className='text-xl font-bold text-slate-900 mb-4 leading-tight'>{title}</h3>
      <p className='text-slate-600 leading-relaxed'>{description}</p>
    </Card>
  );
}

// Professional pet care card variant
interface PetCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function PetCard({ icon, title, description, className }: PetCardProps) {
  return (
    <Card
      variant='primary'
      className={cn('text-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300', className)}
      hover
    >
      <div className='mb-6'>{icon}</div>
      <h3 className='text-xl font-bold text-slate-900 mb-4 leading-tight'>{title}</h3>
      <p className='text-slate-600 leading-relaxed'>{description}</p>
    </Card>
  );
}
