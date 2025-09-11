'use client';

import { FileCheck2, Lock, ShieldCheck } from 'lucide-react';

export const HeroTrustStrip = () => {
  const items: Array<{ icon: React.ComponentType<{ className?: string }>; label: string }> = [
    { icon: ShieldCheck, label: 'HIPAA‑aligned security' },
    { icon: Lock, label: 'Encryption in transit & at rest' },
    { icon: FileCheck2, label: 'Audit trails & RBAC' },
  ];

  return (
    <div className='mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3'>
      {items.map(({ icon: Icon, label }, index) => (
        <div
          key={index}
          className='flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 p-2 backdrop-blur-sm shadow-sm'
        >
          <div className='flex h-9 w-9 min-h-9 min-w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white'>
            <Icon className='h-5 w-5 min-w-5 min-h-5' />
          </div>
          <span className='text-sm font-medium text-slate-700'>{label}</span>
        </div>
      ))}
    </div>
  );
};
