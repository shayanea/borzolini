'use client';

import { Calendar, Shield, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Smart Recommendations',
    description: "AI-powered care suggestions tailored to your pet's needs",
    icon: Sparkles,
    color: 'bg-white',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Easy Scheduling',
    description: 'Book appointments with top-rated vets in minutes',
    icon: Calendar,
    color: 'bg-white',
    iconColor: 'text-green-600',
  },
  {
    id: 3,
    title: 'Trusted Care',
    description: 'Verified clinics and vet-reviewed recommendations',
    icon: Shield,
    color: 'bg-white',
    iconColor: 'text-purple-600',
  },
];

export function CTASection() {
  return (
    <section className='section-padding bg-gradient-mesh-hero relative overflow-hidden'>
      {/* Modern Background Pattern */}
      <div className='absolute inset-0 bg-pattern-organic opacity-20' />
      <div className='absolute inset-0 bg-noise opacity-10' />

      <Container className='relative z-10'>
        <motion.div
          className='text-center max-w-6xl mx-auto'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.div variants={animations.fadeInUp}>
            <div className='badge-pet inline-flex items-center gap-2 mb-8'>
              <Sparkles className='w-4 h-4 text-cyan-500' />
              Get Started Today
            </div>
          </motion.div>

          <motion.h2 className='text-section font-bold text-white mb-6 leading-tight' variants={animations.fadeInUp}>
            Ready to Give Your Pet the Best Care Possible?
          </motion.h2>

          <motion.p className='text-body-large text-blue-100 mb-8 max-w-2xl mx-auto' variants={animations.fadeInUp}>
            Join thousands of pet owners who trust our platform for smarter, more affordable pet healthcare.
          </motion.p>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {items.map((item) => (
              <motion.div key={item.id} variants={animations.fadeInUp}>
                <div className={`text-center p-8 rounded-2xl border border-white/30 shadow-xl  ${item.color}`}>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${item.iconColor}`}
                  >
                    <item.icon className='w-8 h-8' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>{item.title}</h3>
                  <p className='text-slate-600'>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
