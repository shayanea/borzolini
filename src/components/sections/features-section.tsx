'use client';

import { motion } from 'framer-motion';
import { Award, Brain, Calendar, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { FeatureIcon } from '@/components/ui/icon';
import { FEATURES } from '@/constants';
import { gradients } from '@/lib/design-system';

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
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function FeaturesHeader() {
  return (
    <motion.div
      className='text-center mb-12 lg:mb-16'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-6'>
        Simple Smart Pet Care for All Your Pets
      </h2>
      <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
        Get personalized recommendations, easy vet scheduling, and quality clinic ratings - for dogs, cats, and all
        beloved pets
      </p>
    </motion.div>
  );
}

function FeaturesGrid() {
  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
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
      className='text-center mt-16'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className={`${gradients.secondary} rounded-3xl p-8 border border-blue-100`}>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Get Smart Care Recommendations for Your Pet?</h3>
        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
          Join the beta to get personalized care tips, easy vet scheduling, and quality clinic ratings for any pet.
          Completely free!
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size='lg'
              className='bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-colors'
            >
              🐾 Join Beta Waitlist (Free)
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-slate-800 text-slate-800 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors'
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
    <section className='py-20 bg-white' id='features'>
      <Container size='xl'>
        <FeaturesHeader />
        <FeaturesGrid />
        <FeaturesCTA />
      </Container>
    </section>
  );
}
