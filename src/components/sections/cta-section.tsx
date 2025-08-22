'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export function CTASection() {
  return (
    <section className='py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white'>
      <Container>
        <motion.div
          className='text-center max-w-4xl mx-auto'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2 className='text-4xl lg:text-5xl font-bold mb-6' variants={fadeInUp}>
            Ready to Transform Your Persian Cat's Healthcare?
          </motion.h2>

          <motion.p className='text-xl lg:text-2xl mb-8 text-blue-100' variants={fadeInUp}>
            Join Fariborz and be among the first to experience AI-powered predictive healthcare for Persian cats
          </motion.p>

          <motion.div className='bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm' variants={fadeInUp}>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold mb-2'>Free</div>
                <p className='text-blue-100'>Beta access for early adopters</p>
              </div>
              <div>
                <div className='text-3xl font-bold mb-2'>Persian</div>
                <p className='text-blue-100'>Specialized breed expertise</p>
              </div>
              <div>
                <div className='text-3xl font-bold mb-2'>24/7</div>
                <p className='text-blue-100'>AI health monitoring</p>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex flex-col sm:flex-row gap-4 justify-center' variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size='xl' className='bg-white text-slate-900 hover:bg-gray-50 shadow-lg'>
                🚀 Join Free Beta
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant='outline' size='xl' className='border-2 border-white text-white hover:bg-white/10'>
                📞 Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.p className='mt-6 text-blue-200 text-sm' variants={fadeInUp}>
            No credit card required • Free for Persian cat owners • HIPAA compliant
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
