'use client';

import { Container } from '@/components/ui/container';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Story = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  width: number;
  height: number;
};

const stories: Story[] = [
  {
    id: 'home-visit',
    title: 'Home visits reduce anxiety',
    subtitle: 'Buddy rests better without the clinic wait room.',
    img: '/images/borzolini-hero.webp',
    width: 1200,
    height: 630,
  },
  {
    id: 'virtual-check',
    title: 'Virtual checks keep care on track',
    subtitle: 'Luna’s follow-ups happen on time via telemedicine.',
    img: '/images/borzolini-hero.webp',
    width: 1200,
    height: 630,
  },
  {
    id: 'roi',
    title: 'Clinics see measurable ROI',
    subtitle: 'Fewer no‑shows and higher adherence with reminders.',
    img: '/images/borzolini-hero.webp',
    width: 1200,
    height: 630,
  },
];

export const UserStoryExamples = () => {
  return (
    <section className='bg-gray-50 border-y border-slate-200'>
      <Container className='py-12 md:py-16'>
        <div className='mb-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Stories in pictures</h2>
          <p className='mt-2 text-slate-600'>A quick look at the calm care experience.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {stories.map((s) => (
            <motion.figure
              key={s.id}
              className='group rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className='relative aspect-[4/3]'>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='object-cover'
                />
              </div>
              <figcaption className='p-4'>
                <div className='font-semibold text-slate-900'>{s.title}</div>
                <div className='text-sm text-slate-600'>{s.subtitle}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
