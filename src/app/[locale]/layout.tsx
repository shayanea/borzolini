import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import { Header } from '@/components/sections/header';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

const locales = ['en', 'fr', 'fa', 'ar'];

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  console.log('🔍 LOCALE LAYOUT DEBUG: Layout function called');

  const { locale } = await params;
  console.log('🔍 LOCALE LAYOUT DEBUG: Locale param:', locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    console.log('🔍 LOCALE LAYOUT DEBUG: Invalid locale, calling notFound()');
    notFound();
  }

  console.log('🔍 LOCALE LAYOUT DEBUG: Loading messages for locale:', locale);

  let messages;
  try {
    messages = (await import(`../../../public/locales/${locale}/common.json`)).default;
    console.log('🔍 LOCALE LAYOUT DEBUG: Messages loaded successfully:', Object.keys(messages).length, 'keys');
  } catch (error) {
    console.error('🔍 LOCALE LAYOUT DEBUG: Failed to load messages for locale:', locale, error);
    notFound();
  }

  console.log('🔍 LOCALE LAYOUT DEBUG: Rendering layout with locale:', locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  console.log('🔍 LOCALE LAYOUT DEBUG: generateStaticParams called');
  return locales.map((locale) => ({ locale }));
}
