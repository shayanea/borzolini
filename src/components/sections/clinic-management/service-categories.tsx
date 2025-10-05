'use client';

import { Calendar, Clock, DollarSign, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

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

const serviceCategories = [
  {
    name: 'Preventive Care',
    icon: Shield,
    color: 'blue',
    services: ['Wellness Exams', 'Vaccinations', 'Dental Cleanings'],
    description: 'Essential care to keep pets healthy and prevent illness',
  },
  {
    name: 'Diagnostic Services',
    icon: Calendar,
    color: 'green',
    services: ['Blood Tests', 'X-Rays', 'Ultrasounds'],
    description: 'Advanced diagnostic tools for accurate treatment planning',
  },
  {
    name: 'Surgical Procedures',
    icon: Clock,
    color: 'purple',
    services: ['Spay/Neuter', 'Dental Surgery', 'Emergency Surgery'],
    description: 'Professional surgical care with modern equipment',
  },
  {
    name: 'Specialty Services',
    icon: DollarSign,
    color: 'orange',
    services: ['Dermatology', 'Cardiology', 'Oncology'],
    description: 'Specialized care for complex medical conditions',
  },
];

export function ServiceCategories() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Comprehensive Service Categories</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Organize and manage your veterinary services with clear categories and detailed information for clients.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {serviceCategories.map((category, _index) => {
          const IconComponent = category.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-[#3DAD8C] text-[#3DAD8C]',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
          };

          return (
            <motion.div key={category.name} variants={fadeInUp}>
              <Card className='p-6 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full'>
                <div className='text-center'>
                  <div
                    className={`w-16 h-16 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className='w-8 h-8' />
                  </div>
                  <h4 className='text-xl font-semibold text-slate-900 mb-3'>{category.name}</h4>
                  <p className='text-slate-600 text-sm mb-4'>{category.description}</p>

                  <div className='space-y-2 mb-6'>
                    {category.services.map((service, _serviceIndex) => (
                      <div key={_serviceIndex} className='text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg'>
                        {service}
                      </div>
                    ))}
                  </div>

                  <Button size='sm' className='w-full bg-[#013187] text-white hover:bg-[#0e3c92]'>
                    Manage Services
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div className='text-center mt-12' variants={fadeInUp}>
        <Button size='lg' className='bg-white text-slate-900 hover:bg-blue-50'>
          Add New Service Category
        </Button>
      </motion.div>
    </motion.div>
  );
}
