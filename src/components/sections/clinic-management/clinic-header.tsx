import { Calendar } from 'lucide-react';
import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

export const ClinicHeader = () => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.staggerContainer}
    >
      <motion.div variants={animations.fadeInUp} className='space-y-8'>
        <h2 className='text-section font-bold text-white leading-tight'>
          Smart <span className='text-gradient-clinic'>Clinic Management</span> for Modern Vets
        </h2>
        <p className='text-body-large text-blue-100 leading-relaxed'>
          Streamline your veterinary practice with intelligent scheduling, patient management, and automated care
          recommendations. Focus on what matters most - your patients.
        </p>
      </motion.div>

      <motion.div variants={animations.slideInLeft}>
        <div className='relative'>
          <div className='card-elevated w-full h-96 rounded-3xl bg-gradient-to-br from-white/95 to-blue-50/95 border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-sm'>
            <div className='text-center p-8'>
              <div className='w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Calendar className='w-12 h-12 text-indigo-600' />
              </div>
              <h3 className='text-subsection font-bold text-slate-900 mb-3'>Smart Scheduling</h3>
              <p className='text-slate-600 text-body'>AI-powered appointment optimization</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
