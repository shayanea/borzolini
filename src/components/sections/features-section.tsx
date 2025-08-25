'use client';

import { motion } from 'framer-motion';
import { Award, Brain, Calendar, MessageCircle, Sparkles } from 'lucide-react';

import { FeatureCard } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { FeatureIcon } from '@/components/ui/icon';
import { FEATURES } from '@/constants';
import { animations, commonAnimationProps } from '@/lib/animations';

const iconMap = {
  Brain,
  Calendar,
  MessageCircle,
  Award,
};

const variantMap = ['blue', 'green', 'purple', 'orange'] as const;

const FeaturesHeader = (): React.JSX.Element => {
  return (
    <motion.div className='text-center mb-16 lg:mb-20' {...commonAnimationProps} variants={animations.fadeInUp}>
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
        Get personalized recommendations, easy vet scheduling, and quality clinic ratings - for dogs, pets, and all
        beloved pets
      </p>
    </motion.div>
  );
};

const FeaturesGrid = (): React.JSX.Element => {
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

export const FeaturesSection = (): React.JSX.Element => {
  return (
    <section className='py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50' id='features'>
      <Container size='xl'>
        <FeaturesHeader />
        <FeaturesGrid />
      </Container>
    </section>
  );
};
