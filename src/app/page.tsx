import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en');
}

// This is needed to prevent static generation
export const dynamic = 'force-dynamic';
