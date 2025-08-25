'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Award, Brain, DollarSign, Heart, Shield, Sparkles } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useScrollTo } from '@/hooks/use-scroll-to';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const slideUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Hero Section Components
function HeroBadge() {
  return (
    <motion.div initial='initial' animate='animate' variants={fadeInUp}>
      <Badge
        variant='info'
        className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 px-6 py-3 rounded-full border border-blue-200/50 text-sm font-semibold shadow-sm'
      >
        <Sparkles className='w-4 h-4 text-blue-500' />
        Smart Pet Healthcare Platform for All Pets
      </Badge>
    </motion.div>
  );
}

function HeroTitle() {
  return (
    <motion.h1
      className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      Smart Pet Care Made{' '}
      <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Simple</span> for{' '}
      <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>All Pets</span>
    </motion.h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      className='text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium'
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
      <Card className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300'>
        <div className='flex items-center gap-4'>
          <div className='bg-green-100 p-3 rounded-xl'>
            <DollarSign className='w-8 h-8 text-green-600' />
          </div>
          <div>
            <p className='text-2xl font-bold text-green-700'>Better Care, Less Stress</p>
            <p className='text-green-600 font-medium'>Find the right vet and get smart care tips instantly</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function HeroCTAButtons() {
  return (
    <motion.div className='flex flex-col sm:flex-row gap-4' initial='initial' animate='animate' variants={fadeInUp}>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          size='lg'
          className='bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl text-base sm:text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1'
        >
          🐾 Get Care Tips for My Pet
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant='outline'
          size='lg'
          className='border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-base sm:text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'
        >
          📅 Find a Vet Nearby
        </Button>
      </motion.div>
    </motion.div>
  );
}

function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: 'HIPAA Compliant', color: 'text-blue-600' },
    { icon: Award, text: 'Vet Approved', color: 'text-green-600' },
    { icon: Heart, text: 'All Pet Breeds Supported', color: 'text-pink-600' },
  ];

  return (
    <motion.div
      className='flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 text-sm text-slate-500'
      initial='initial'
      animate='animate'
      variants={fadeInUp}
    >
      {indicators.map(({ icon: Icon, text, color }, index) => (
        <div key={index} className='flex items-center gap-3'>
          <div className={`p-2 rounded-lg bg-slate-100 ${color}`}>
            <Icon className='w-5 h-5' />
          </div>
          <span className='font-medium'>{text}</span>
        </div>
      ))}
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div className='relative' initial='initial' animate='animate' variants={slideUp}>
      <Card className='relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-200/50'>
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
      className='w-full h-96 rounded-2xl bg-cover bg-center bg-no-repeat relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200'
      style={{
        backgroundImage: `url('/images/borzolini-hero.webp')`,
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent'></div>
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
      className='absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-200/50 max-w-xs'
      initial='initial'
      animate='animate'
      variants={scaleIn}
    >
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center'>
          <Brain className='w-6 h-6 text-blue-600' />
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
        <div className='w-full bg-slate-200 rounded-full h-2'>
          <div className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full' />
        </div>
      </div>

      <div className='mt-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200/50'>
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
      className='absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-slate-200/50'
      initial='initial'
      animate='animate'
      variants={scaleIn}
    >
      <div className='text-center'>
        <p className='text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>
          98%
        </p>
        <p className='text-sm text-slate-600 font-medium'>Early Detection Rate</p>
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
        className='text-slate-400 hover:text-slate-600 transition-colors p-3 rounded-full hover:bg-white/20 backdrop-blur-sm'
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
    <section className='relative pt-24 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center overflow-hidden'>
      <Container size='xl' className='relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Content */}
          <motion.div className='space-y-10' initial='initial' animate='animate' variants={staggerContainer}>
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
