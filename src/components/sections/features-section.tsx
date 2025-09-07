'use client';

import { Award, Brain, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { animations, commonAnimationProps } from '@/lib/animations';

import { Container } from '@/components/ui/container';
import { FEATURES } from '@/constants';
import { FeatureCard } from '@/components/ui/card';
import { FeatureIcon } from '@/components/ui/icon';
import { motion } from 'framer-motion';

const iconMap = {
  Brain,
  Calendar,
  MessageCircle,
  Award,
};

const variantMap = ['blue', 'green', 'purple', 'orange'] as const;

const FeaturesHeader = () => {
  return (
    <motion.div className='text-center mb-16 lg:mb-20' {...commonAnimationProps} variants={animations.fadeInUp}>
      <div className='badge-modern inline-flex items-center gap-2 mb-8'>
        <Sparkles className='w-4 h-4 text-blue-500' />
        Features
      </div>
      <h2 className='text-section font-bold text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight'>
        Simple Smart Pet Care for <span className='text-gradient-primary'>All Your Pets</span>
      </h2>
      <p className='text-body-large text-slate-600 max-w-4xl mx-auto px-4 font-medium leading-relaxed'>
        Get personalized recommendations, easy vet scheduling, and quality clinic ratings - for dogs, pets, and all
        beloved pets
      </p>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10'
      {...commonAnimationProps}
      variants={animations.staggerContainer}
    >
      {FEATURES.map((feature, index) => {
        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
        const variant = variantMap[index % variantMap.length];

        return (
          <motion.div key={feature.id} variants={animations.fadeInUp}>
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
};

export const FeaturesSection = () => {
  return (
    <section className='section-padding bg-slate-50 relative overflow-hidden' id='features'>
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 bg-pattern-dots opacity-20' />

      <Container size='xl' className='relative z-10'>
        <FeaturesHeader />
        <FeaturesGrid />
      </Container>
    </section>
  );
};
