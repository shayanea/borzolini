'use client';

import { Calendar, Shield, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants';

const items = [
  {
    id: 1,
    title: 'Smart Recommendations',
    description: "AI-powered care suggestions tailored to your pet's needs",
    icon: Sparkles,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Easy Scheduling',
    description: 'Book appointments with top-rated vets in minutes',
    icon: Calendar,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    id: 3,
    title: 'Trusted Care',
    description: 'Verified clinics and vet-reviewed recommendations',
    icon: Shield,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export function CTASection() {
  return (
    <section className='section-padding bg-gradient-pet relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern-dots opacity-10' />

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
          <motion.div variants={fadeInUp}>
            <div className='badge-pet inline-flex items-center gap-2 mb-8'>
              <Sparkles className='w-4 h-4 text-cyan-500' />
              Get Started Today
            </div>
          </motion.div>

          <motion.h2 className='text-section font-bold text-white mb-6 leading-tight' variants={fadeInUp}>
            Ready to Give Your Pet the Best Care Possible?
          </motion.h2>

          <motion.p className='text-body-large text-blue-100 mb-8 max-w-2xl mx-auto' variants={fadeInUp}>
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
              <motion.div key={item.id} variants={fadeInUp}>
                <div
                  className={`card-elevated text-center p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${item.color}`}
                >
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
