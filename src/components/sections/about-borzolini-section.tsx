'use client';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg className='w-6 h-6 text-blue-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    text: 'Dogs, cats, birds, reptiles, and exotic pets',
  },
  {
    icon: (
      <svg className='w-6 h-6 text-blue-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M22 4L12 14.01L9 11.01'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    text: 'All recommendations reviewed by professionals',
  },
  {
    icon: (
      <svg className='w-6 h-6 text-blue-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M12 17H12.01' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
    text: 'Professional care recommendations and insights',
  },
  {
    icon: (
      <svg className='w-6 h-6 text-blue-500' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 16.92V19.92C22 20.4704 21.7893 20.9991 21.4142 21.3742C21.0391 21.7493 20.5104 21.96 19.96 21.96C16.4289 21.79 13.0266 20.6521 10.08 18.67C7.35756 16.8826 5.12508 14.6501 3.33765 11.9277C1.34858 8.97096 0.210111 5.55164 0.0399952 2C0.0399952 1.44956 0.250674 0.920859 0.625721 0.545812C1.00077 0.170766 1.52946 -0.040039 2.07999 -0.040039H5.07999C5.57245 -0.0359335 6.04576 0.151677 6.41062 0.486226C6.77547 0.820775 7.00766 1.28069 7.05999 1.77C7.16234 2.91015 7.39749 4.03428 7.75999 5.12C7.89351 5.51473 7.90712 5.94206 7.79923 6.34521C7.69134 6.74835 7.46722 7.10813 7.15999 7.38L5.84999 8.69C7.50243 11.5149 9.77509 13.7875 12.6 15.44L13.91 14.13C14.1819 13.8228 14.5416 13.5986 14.9448 13.4907C15.3479 13.3829 15.7752 13.3965 16.17 13.53C17.2557 13.8925 18.3798 14.1276 19.52 14.23C20.0137 14.2826 20.4769 14.5177 20.8114 14.8878C21.1459 15.2579 21.3275 15.7375 21.32 16.23L22 16.92Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    text: 'Instant access to care information and scheduling',
  },
];

export function AboutBorzoliniSection() {
  return (
    <section
      id='about'
      className='section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-grid opacity-15' />

      <Container className='relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Image */}
          <motion.div
            className='relative'
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={animations.fadeInRight}
          >
            <div className='relative rounded-3xl overflow-hidden shadow-xl'>
              <Image
                src='/images/borzolini-hero.webp'
                alt='Happy pets receiving care'
                width={600}
                height={450}
                className='w-full h-auto object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className='space-y-6'
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={animations.fadeInLeft}
          >
            <div className='text-sm font-semibold text-blue-600 mb-2'>About Borzolini</div>

            <h2 className='text-section font-bold text-slate-900 leading-tight tracking-tight'>
              Meet Borzolini, Your Pet Care Hero
            </h2>

            <p className='text-body-large text-slate-600 font-medium leading-relaxed'>
              Borzolini represents everything we believe about pet care - it should be smart, accessible, and tailored
              to each unique companion. Our platform brings that vision to life.
            </p>

            {/* Features */}
            <div className='space-y-4 mt-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex items-center gap-4'
                  variants={animations.fadeInUp}
                  custom={index * 0.2}
                >
                  <div className='bg-blue-50 rounded-full p-3 flex-shrink-0'>{feature.icon}</div>
                  <div className='text-slate-700'>{feature.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
