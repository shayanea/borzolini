import { Brain, Calendar, Search } from 'lucide-react';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const HowItWorksFeatures = () => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.staggerContainer}
    >
      <motion.div className='text-center group' variants={animations.fadeInUp}>
        <div className='w-20 h-20 bg-[#013187] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
          <Search className='w-10 h-10 text-white' />
        </div>
        <h3 className='text-2xl font-bold text-slate-900 mb-4'>Find Your Perfect Vet</h3>
        <p className='text-slate-600 leading-relaxed'>
          Search through our curated list of top-rated veterinary clinics, filtered by location, specialty, and pet
          type.
        </p>
      </motion.div>

      <motion.div className='text-center group' variants={animations.fadeInUp}>
        <div className='w-20 h-20 bg-[#3DAD8C] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
          <Calendar className='w-10 h-10 text-white' />
        </div>
        <h3 className='text-2xl font-bold text-slate-900 mb-4'>Book Appointments Instantly</h3>
        <p className='text-slate-600 leading-relaxed'>
          Schedule visits with real-time availability, get reminders, and manage your pet's care calendar effortlessly.
        </p>
      </motion.div>

      <motion.div className='text-center group' variants={animations.fadeInUp}>
        <div className='w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200'>
          <Brain className='w-10 h-10 text-white' />
        </div>
        <h3 className='text-2xl font-bold text-slate-900 mb-4'>Get Smart Care Tips</h3>
        <p className='text-slate-600 leading-relaxed'>
          Receive personalized health recommendations, nutrition advice, and preventive care reminders tailored to your
          pet.
        </p>
      </motion.div>
    </motion.div>
  );
};
