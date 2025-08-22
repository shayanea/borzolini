'use client';

import { Award, Brain, Calendar, Check, MessageCircle } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { FEATURES } from '@/constants';
import { motion } from 'framer-motion';

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

const iconMap = {
  Brain,
  Calendar,
  MessageCircle,
  Award,
};

export function FeaturesSection() {
  return (
    <section className='py-20 bg-white' id='features'>
      <Container>
        <motion.div className='text-center mb-16' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>Simple Smart Pet Care for All Your Pets</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Get personalized recommendations, easy vet scheduling, and quality clinic ratings - for dogs, cats, and all beloved pets</p>
        </motion.div>

        <motion.div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8' initial='initial' whileInView='animate' viewport={{ once: true }} variants={staggerContainer}>
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const gradients = ['from-blue-50 to-blue-100 border-blue-200', 'from-green-50 to-green-100 border-green-200', 'from-purple-50 to-purple-100 border-purple-200', 'from-orange-50 to-orange-100 border-orange-200'];
            const iconColors = ['text-blue-600 bg-blue-600', 'text-green-600 bg-green-600', 'text-purple-600 bg-purple-600', 'text-orange-600 bg-orange-600'];

            return (
              <motion.div key={feature.id} className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-8 border`} variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
                <div className={`w-16 h-16 ${iconColors[index].split(' ')[1]} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>

                <p className='text-gray-600 mb-6'>{feature.description}</p>

                <ul className='space-y-2 text-sm text-gray-600'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className='flex items-center gap-2'>
                      <Check className='w-4 h-4 text-green-500 flex-shrink-0' />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div className='text-center mt-16' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Get Smart Care Recommendations for Your Pet?</h3>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>Join the beta to get personalized care tips, easy vet scheduling, and quality clinic ratings for any pet. Completely free!</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button className='bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-colors' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                🐾 Join Beta Waitlist (Free)
              </motion.button>
              <motion.button className='border-2 border-slate-800 text-slate-800 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                📧 Get Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
