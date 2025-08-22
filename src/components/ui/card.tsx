'use client';

import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  onClick?: () => void;
}

const cardVariants = {
  default: 'bg-white border border-gray-200',
  gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100',
  outlined: 'bg-transparent border-2 border-gray-200',
  elevated: 'bg-white shadow-lg border border-gray-100',
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
        'rounded-2xl h-full',
        cardVariants[variant],
        paddingVariants[padding],
        hover && 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
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
  return <div className={cn('mt-6 pt-6 border-t border-gray-100', className)}>{children}</div>;
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
    blue: 'from-blue-50 to-blue-100 border-blue-200',
    green: 'from-green-50 to-green-100 border-green-200',
    purple: 'from-purple-50 to-purple-100 border-purple-200',
    orange: 'from-orange-50 to-orange-100 border-orange-200',
  };

  return (
    <Card variant='default' className={cn('bg-gradient-to-br', variantClasses[variant], 'border', className)} hover>
      <CardHeader>
        {icon}
        <h3 className='text-xl font-bold text-gray-900 mt-4'>{title}</h3>
      </CardHeader>

      <CardContent>
        <p className='text-gray-600 mb-6'>{description}</p>

        <ul className='space-y-2 text-sm text-gray-600'>
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-center gap-2'>
              <div className='w-4 h-4 text-green-500 flex-shrink-0'>✓</div>
              <span>{benefit}</span>
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
    stable: 'text-gray-600',
  };

  return (
    <Card variant='elevated' className={cn('text-center', className)}>
      <div className='p-4'>
        <div className='flex items-center justify-center gap-2 mb-2'>
          <p className='text-2xl font-bold text-gray-900'>{value}</p>
          {trend && <span className={cn('text-sm', trendColor[trend])}>{trendIcon[trend]}</span>}
        </div>
        <p className='text-sm text-gray-600'>{label}</p>
      </div>
    </Card>
  );
}
