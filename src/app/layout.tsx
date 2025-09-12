import './globals.css';

import { AnalyticsProvider } from '@/components/analytics';
import { Header } from '@/components/sections/header';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import messages from '../../messages/en.json';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://borzolini.com'),
  title: messages.seo.title,
  description: messages.seo.description,
  keywords: messages.seo.keywords.split(', '),
  authors: [{ name: 'Borzolini' }],
  creator: 'Borzolini',
  publisher: 'Borzolini',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borzolini.com',
    title: messages.seo.title,
    description: messages.seo.description,
    siteName: 'Borzolini',
    images: [
      {
        url: '/images/borzolini-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Borzolini - Smart Pet Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: messages.seo.title,
    description: messages.seo.description,
    creator: '@borzolini',
    images: ['/images/borzolini-hero.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon-180x180.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d3557',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Borzolini',
    url: 'https://borzolini.com',
    description: messages.seo.siteDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Borzolini',
      url: 'https://borzolini.com',
    },
  };

  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`} suppressHydrationWarning>
        <AnalyticsProvider>
          <Header />
          {children}
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
