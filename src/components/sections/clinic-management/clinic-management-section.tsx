'use client';

import { Dna, HeartPulse, Microscope, Pill, Stethoscope, Syringe } from 'lucide-react';

import { ClinicROIMetrics } from './clinic-roi-metrics';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { ProductCapabilitiesSection } from './product-capabilities-section';
import { motion } from 'framer-motion';

export function ClinicManagementSection() {
  return (
    <section className='section-padding bg-[#013187] relative overflow-hidden' id='clinic-management'>
      {/* Medical-themed background patterns */}
      <div className='absolute inset-0 bg-gradient-mesh-organic opacity-10' />
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl' />

      {/* Medical cross pattern overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-2 h-8 bg-white rotate-45' />
        <div className='absolute top-20 left-20 w-8 h-2 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-2 h-6 bg-white rotate-45' />
        <div className='absolute top-40 right-32 w-6 h-2 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-2 h-6 bg-white rotate-45' />
        <div className='absolute bottom-32 left-1/3 w-6 h-2 bg-white rotate-45' />
      </div>

      {/* Floating medical icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-24 left-12 text-blue-300/40'
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon icon={Stethoscope} size='xl' />
        </motion.div>

        <motion.div
          className='absolute top-40 right-24 text-indigo-300/40'
          animate={{
            y: [0, 12, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Icon icon={Pill} size='xl' />
        </motion.div>

        <motion.div
          className='absolute bottom-40 left-24 text-purple-300/40'
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Icon icon={HeartPulse} size='xl' />
        </motion.div>

        <motion.div
          className='absolute bottom-32 right-40 text-cyan-300/40'
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <Icon icon={Syringe} size='xl' />
        </motion.div>

        <motion.div
          className='absolute top-1/3 right-16 text-blue-300/40'
          animate={{
            y: [0, 8, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <Icon icon={Microscope} size='xl' />
        </motion.div>

        <motion.div
          className='absolute bottom-1/4 left-1/3 text-indigo-300/40'
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.5,
          }}
        >
          <Icon icon={Dna} size='xl' />
        </motion.div>
      </div>

      {/* Decorative divider */}
      <div className='container-modern relative z-10 mb-16'>
        <div className='flex items-center justify-center gap-4'>
          <div className='h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent'></div>
          <motion.div
            className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/80 to-indigo-600/80 text-white shadow-glow'
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Icon icon={HeartPulse} size='sm' />
          </motion.div>
          <div className='h-0.5 flex-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent'></div>
        </div>
      </div>

      <Container size='xl' className='relative z-10'>
        <ProductCapabilitiesSection />
        <ClinicROIMetrics />
      </Container>
    </section>
  );
}
