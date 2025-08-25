import './globals.css';

import { Inter, Poppins } from 'next/font/google';

import { Header } from '@/components/sections/header';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Borzolini - Smart Pet Healthcare for All Pets',
  description:
    'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Starting with Borzolini! Borzolini is named after our beloved companion.',
  keywords: [
    'pet healthcare',
    'care recommendations',
    'veterinary',
    'all pets',
    'dogs',
    'pets',
    'appointment scheduling',
    'clinic ratings',
    'Borzolini',
    'Borzolini',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borzolini.com',
    title: 'Borzolini - Smart Pet Healthcare for All Pets',
    description:
      'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Named after Borzolini, our beloved companion.',
    siteName: 'Borzolini',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borzolini - Smart Pet Healthcare for All Pets',
    description:
      'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Named after Borzolini, our beloved companion.',
    creator: '@borzolini',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/app-icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
