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
    <section id='cta' className='py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white'>
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
          <motion.h2 className='text-4xl lg:text-5xl text-white font-bold mb-6' variants={fadeInUp}>
            Ready to Simplify Your Pet's Care?
          </motion.h2>

          <motion.p className='text-xl lg:text-2xl mb-8 text-blue-100' variants={fadeInUp}>
            Get smart care recommendations, find great vets, and schedule appointments - all in one simple app for any pet
          </motion.p>

          <motion.div className='bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm' variants={fadeInUp}>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold mb-2'>Free</div>
                <p className='text-blue-100'>Beta access for early adopters</p>
              </div>
              <div>
                <div className='text-3xl font-bold mb-2'>Simple</div>
                <p className='text-blue-100'>Easy vet scheduling & tips</p>
              </div>
              <div>
                <div className='text-3xl font-bold mb-2'>Smart</div>
                <p className='text-blue-100'>Intelligent care recommendations</p>
              </div>
            </div>
          </motion.div>

          <motion.div className='flex flex-col sm:flex-row gap-4 justify-center' variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size='xl' className='bg-white text-slate-900 hover:bg-white/10 shadow-lg'>
                🐾 Get Care Tips for My Pet
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant='outline' size='xl' className='bg-white text-slate-900 hover:bg-white/10 shadow-lg'>
                📅 Find Pet Care Vets
              </Button>
            </motion.div>
          </motion.div>

          <motion.p className='mt-6 text-blue-200 text-sm' variants={fadeInUp}>
            No credit card required • Free for all pet owners • HIPAA compliant
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
