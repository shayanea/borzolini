'use client';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className='text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 text-sm'>
      {children}
    </a>
  );
}
