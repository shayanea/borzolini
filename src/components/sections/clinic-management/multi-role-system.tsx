'use client';

import { motion } from 'framer-motion';
import { Building2, Shield, UserCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

export function MultiRoleSystem() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Multi-Role Access System</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Secure role-based access control for veterinarians, staff, and administrators. Each role has specific
          permissions and capabilities.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <motion.div variants={fadeInUp}>
          <Card className='p-8 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <Building2 className='w-8 h-8 text-blue-600' />
            </div>
            <h4 className='text-xl font-semibold text-slate-900 mb-4 text-center'>Administrator</h4>
            <ul className='space-y-3 text-slate-600'>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Full system access
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                User management
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Analytics & reporting
              </li>
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className='p-8 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <UserCheck className='w-8 h-8 text-purple-600' />
            </div>
            <h4 className='text-xl font-semibold text-slate-900 mb-4 text-center'>Veterinarian</h4>
            <ul className='space-y-3 text-slate-600'>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Patient records access
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Appointment management
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Treatment planning
              </li>
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className='p-8 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300'>
            <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <UserCheck className='w-8 h-8 text-green-600' />
            </div>
            <h4 className='text-xl font-semibold text-slate-900 mb-4 text-center'>Staff Member</h4>
            <ul className='space-y-3 text-slate-600'>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Basic patient info
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Scheduling assistance
              </li>
              <li className='flex items-center'>
                <Shield className='w-4 h-4 text-green-500 mr-2' />
                Communication tools
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>

      <motion.div className='text-center mt-12' variants={fadeInUp}>
        <Button size='lg' className='bg-white text-slate-900 hover:bg-blue-50'>
          Learn More About Roles
        </Button>
      </motion.div>
    </motion.div>
  );
}
