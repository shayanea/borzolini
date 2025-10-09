'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const UserStoriesHero = () => {
  return (
    <section className='relative overflow-hidden border-b border-slate-200/60 bg-white'>
      <Container className='py-14 md:py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center'>
          <div>
            <motion.h1
              className='text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Real stories. Calm care at home.
            </motion.h1>
            <motion.p
              className='mt-3 text-slate-600 text-base md:text-lg max-w-prose'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              See how pet owners and clinics use Borzolini to reduce stress and build trust. It started with Fariborz,
              my British Shorthair kitten, and a noisy clinic visit. Now we focus on calm care at home, verified
              reviews, and results that feel real.
            </motion.p>
          </div>

          <motion.div
            className='relative h-40 md:h-44 lg:h-48 rounded-xl overflow-hidden shadow-md ring-1 ring-slate-200'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src='/images/borzolini-hero.webp'
              alt='Pet care at home with Borzolini'
              fill
              sizes='(max-width: 768px) 100vw, 40vw'
              priority
              className='object-cover'
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
