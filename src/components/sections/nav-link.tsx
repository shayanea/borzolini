'use client';

import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={className ?? 'text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-sm'}
    >
      {children}
    </Link>
  );
}
