import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/sections/contact/contact-form';

import { Container } from '@/components/ui/container';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Footer } from '@/components/sections/footer';
import { Logo } from '@/components/ui/logo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Borzolini',
  description: 'Get in touch with the Borzolini team for inquiries and support.',
};

export default function ContactPage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen'>
        <section className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden'>
          <div className='absolute inset-0 bg-pattern-grid opacity-15' />
          <Container className='relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='flex items-center justify-center mb-4'>
                <Logo />
              </div>
              <h1 className='text-section font-bold text-slate-900 mb-3'>Contact us</h1>
              <p className='text-body-large text-slate-600 mb-10'>
                We’d love to hear from you. Reach out for product questions, support, partnerships, or press.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
              <a
                href='mailto:hello@borzolini.com'
                className='group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all'
              >
                <Mail className='w-6 h-6 text-blue-600 mb-3' />
                <div className='font-semibold text-slate-900'>Email</div>
                <div className='text-slate-600'>hello@borzolini.com</div>
              </a>

              <a
                href='tel:+10000000000'
                className='group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all'
              >
                <Phone className='w-6 h-6 text-blue-600 mb-3' />
                <div className='font-semibold text-slate-900'>Phone</div>
                <div className='text-slate-600'>+1 (000) 000-0000</div>
              </a>

              <div className='rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm'>
                <MapPin className='w-6 h-6 text-blue-600 mb-3' />
                <div className='font-semibold text-slate-900'>Location</div>
                <div className='text-slate-600'>Remote-first, global team</div>
              </div>
            </div>
            <div className='mt-12'>
              <ContactForm />
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </ErrorBoundary>
  );
}
