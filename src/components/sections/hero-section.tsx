'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Award, Brain, DollarSign, Heart, Shield } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useScrollTo } from '@/hooks/use-scroll-to';
import { gradients } from '@/lib/design-system';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const slideUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section Components
function HeroBadge() {
  return (
    <motion.div initial='initial' animate='animate' variants={fadeInUp}>
      <Badge
        variant='info'
        className='bg-orange-50 text-orange-600 px-6 py-3 rounded-full border border-orange-200 text-base font-semibold'
      >
        🐾 Smart Pet Healthcare Platform for All Pets
      </Badge>
    </motion.div>
  );
}

function HeroTitle() {
  return (
    <motion.h1
      className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      Smart Pet Care Made <span className='text-blue-600'>Simple</span> for{' '}
      <span className='text-orange-500'>All Pets</span>
    </motion.h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      className='text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      Get personalized care recommendations, easily schedule vet appointments, and find the best clinics for any pet.
      Starting with Borzolini!
    </motion.p>
  );
}

function CostSavingsHighlight() {
  return (
    <motion.div initial='initial' animate='animate' variants={fadeInUp}>
      <Card className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
        <div className='flex items-center gap-4'>
          <div className='bg-green-100 p-3 rounded-full'>
            <DollarSign className='w-8 h-8 text-green-600' />
          </div>
          <div>
            <p className='text-2xl font-bold text-green-600'>Better Care, Less Stress</p>
            <p className='text-gray-600'>Find the right vet and get smart care tips instantly</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function HeroCTAButtons() {
  return (
    <motion.div className='flex flex-col sm:flex-row gap-4' initial='initial' animate='animate' variants={fadeInUp}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size='lg'
          className='bg-slate-800 hover:bg-slate-900 text-white shadow-lg text-base sm:text-lg px-6 py-3'
        >
          🐾 Get Care Tips for My Pet
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant='outline'
          size='lg'
          className='border-2 border-slate-800 text-slate-800 hover:bg-slate-50 text-base sm:text-lg px-6 py-3'
        >
          📅 Find a Vet Nearby
        </Button>
      </motion.div>
    </motion.div>
  );
}

function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Award, text: 'Vet Approved' },
    { icon: Heart, text: 'All Pet Breeds Supported' },
  ];

  return (
    <motion.div
      className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-500'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      {indicators.map(({ icon: Icon, text }, index) => (
        <div key={index} className='flex items-center gap-2'>
          <Icon className='w-5 h-5 flex-shrink-0' />
          <span>{text}</span>
        </div>
      ))}
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div className='relative' initial='initial' animate='animate' variants={slideUp}>
      <Card className='relative bg-white rounded-3xl shadow-2xl p-8'>
        <HeroImage />
        <AIHealthDashboard />
      </Card>
      <FloatingStats />
    </motion.div>
  );
}

function HeroImage() {
  return (
    <div
      className='w-full h-96 rounded-2xl bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'
      style={{
        backgroundImage: `url('/images/borzolini-hero.webp')`,
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent'></div>
      <div className='absolute bottom-4 left-4 text-white'>
        <p className='text-lg font-bold drop-shadow-lg'>Borzolini 😎</p>
        <p className='text-sm opacity-90 drop-shadow-md'>Our Pet Hero</p>
      </div>
    </div>
  );
}

function AIHealthDashboard() {
  return (
    <motion.div
      className='absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-xs'
      initial='initial'
      animate='animate'
      variants={scaleIn}
    >
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center'>
          <Brain className='w-6 h-6 text-slate-700' />
        </div>
        <div>
          <p className='font-semibold text-slate-900'>Borzolini's Care Dashboard</p>
          <p className='text-sm text-slate-500'>Smart recommendations</p>
        </div>
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between items-center'>
          <span className='text-sm text-slate-600'>Early Detection Rate</span>
          <span className='text-lg font-bold text-green-600'>98%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div className='bg-green-500 h-2 rounded-full w-full' />
        </div>
      </div>

      <div className='mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200'>
        <p className='text-sm text-orange-700 font-medium'>
          💡 Care Tip: Water intake increased 15% - excellent for pet health!
        </p>
      </div>
    </motion.div>
  );
}

function FloatingStats() {
  return (
    <motion.div
      className='absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4'
      initial='initial'
      animate='animate'
      variants={scaleIn}
    >
      <div className='text-center'>
        <p className='text-2xl font-bold text-orange-500'>98%</p>
        <p className='text-sm text-gray-600'>Early Detection Rate</p>
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  const { scrollToSection } = useScrollTo();

  return (
    <motion.div
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      <button
        onClick={() => scrollToSection('features')}
        className='text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-white/20'
        aria-label='Scroll to features'
      >
        <ArrowDown className='w-6 h-6 animate-bounce' />
      </button>
    </motion.div>
  );
}

// Main Hero Section Component
export function HeroSection() {
  return (
    <section className={`relative pt-20 pb-20 ${gradients.hero} flex items-center overflow-hidden`}>
      <Container size='xl' className='relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <motion.div className='space-y-8' initial='initial' animate='animate' variants={staggerContainer}>
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <CostSavingsHighlight />
            <HeroCTAButtons />
            <TrustIndicators />
          </motion.div>

          {/* Right Column - Hero Visual */}
          <HeroVisual />
        </div>
      </Container>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
