'use client';

import { type LucideIcon, type LucideProps } from 'lucide-react';

import { cn } from '@/lib/utils';

interface IconProps extends Omit<LucideProps, 'size'> {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48,
} as const;

export function Icon({ icon: IconComponent, size = 'md', className, ...props }: IconProps) {
  return <IconComponent size={sizeMap[size]} className={cn('inline-block', className)} {...props} />;
}

// Specialized icon components for common use cases
interface FeatureIconProps {
  icon: LucideIcon;
  variant?: 'blue' | 'green' | 'purple' | 'orange';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function FeatureIcon({ icon, variant = 'blue', size = 'lg', className, ...props }: FeatureIconProps) {
  const variantClasses = {
    blue: 'text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50',
    green: 'text-white bg-[#3DAD8C] border border-[#3DAD8C]/50',
    purple: 'text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50',
    orange: 'text-orange-600 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50',
  };

  return (
    <div
      className={cn(
        'w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm',
        variantClasses[variant],
        className
      )}
    >
      <Icon icon={icon} size={size} {...props} />
    </div>
  );
}

interface StatusIconProps {
  icon: LucideIcon;
  status: 'success' | 'warning' | 'error' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function StatusIcon({ icon, status, size = 'md', className, ...props }: StatusIconProps) {
  const statusClasses = {
    success: 'text-[#3DAD8C]',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-blue-600',
  };

  return <Icon icon={icon} size={size} className={cn(statusClasses[status], className)} {...props} />;
}
