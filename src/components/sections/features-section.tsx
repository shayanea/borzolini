'use client';

import { motion } from 'framer-motion';
import { Award, Brain, Calendar, MessageCircle, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { FeatureIcon } from '@/components/ui/icon';
import { FEATURES } from '@/constants';

const iconMap = {
  Brain,
  Calendar,
  MessageCircle,
  Award,
};

const variantMap = ['blue', 'green', 'purple', 'orange'] as const;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function FeaturesHeader() {
  return (
    <motion.div
      className='text-center mb-16 lg:mb-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-4 py-2 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm mb-6'>
        <Sparkles className='w-4 h-4 text-blue-500' />
        Features
      </div>
      <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
        Simple Smart Pet Care for{' '}
        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          All Your Pets
        </span>
      </h2>
      <p className='text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        Get personalized recommendations, easy vet scheduling, and quality clinic ratings - for dogs, cats, and all
        beloved pets
      </p>
    </motion.div>
  );
}

function FeaturesGrid() {
  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {FEATURES.map((feature, index) => {
        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
        const variant = variantMap[index % variantMap.length];

        return (
          <motion.div key={feature.id} variants={fadeInUp}>
            <FeatureCard
              icon={<FeatureIcon icon={IconComponent} variant={variant} />}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              variant={variant}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function FeaturesCTA() {
  return (
    <motion.div
      className='text-center mt-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className='bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200/50 shadow-lg'>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Ready to Get Smart Care Recommendations for Your Pet?
        </h3>
        <p className='text-slate-600 mb-8 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Join the beta to get personalized care tips, easy vet scheduling, and quality clinic ratings for any pet.
          Completely free!
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size='lg'
              className='bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
            >
              🐾 Join Beta Waitlist (Free)
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              📧 Get Updates
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className='py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50' id='features'>
      <Container size='xl'>
        <FeaturesHeader />
        <FeaturesGrid />
        <FeaturesCTA />
      </Container>
    </section>
  );
}
