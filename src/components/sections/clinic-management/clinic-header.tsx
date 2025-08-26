import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, staggerContainer } from '@/constants';
import { Calendar } from 'lucide-react';

export const ClinicHeader = () => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
          Smart{' '}
          <span className='bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'>
            Clinic Management
          </span>{' '}
          for Modern Vets
        </h2>
        <p className='text-xl text-blue-100 leading-relaxed mb-8'>
          Streamline your veterinary practice with intelligent scheduling, patient management, and automated care
          recommendations. Focus on what matters most - your patients.
        </p>
      </motion.div>

      <motion.div variants={slideInLeft}>
        <div className='relative'>
          <div className='w-full h-96 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-xl flex items-center justify-center'>
            <div className='text-center'>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6'>
                <Calendar className='w-12 h-12 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>Smart Scheduling</h3>
              <p className='text-slate-600'>AI-powered appointment optimization</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
