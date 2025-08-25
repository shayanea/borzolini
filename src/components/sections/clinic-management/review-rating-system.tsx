'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Star, ThumbsUp, TrendingUp } from 'lucide-react';

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

const mockReviews = [
  {
    id: 1,
    patientName: 'Max (Golden Retriever)',
    ownerName: 'Sarah Johnson',
    rating: 5,
    comment: 'Excellent care and very professional staff. Max recovered quickly from his surgery.',
    date: '2 days ago',
    verified: true,
  },
  {
    id: 2,
    patientName: 'Luna (Persian Cat)',
    ownerName: 'Michael Chen',
    rating: 5,
    comment: 'Dr. Wilson was amazing with Luna. Very gentle and thorough examination.',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 3,
    patientName: 'Buddy (Labrador)',
    ownerName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great service overall. The waiting time was a bit long but worth it.',
    date: '2 weeks ago',
    verified: true,
  },
];

export function ReviewAndRatingSystem() {
  return (
    <motion.div
      className='mt-24'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div className='text-center mb-16' variants={fadeInUp}>
        <h3 className='text-3xl sm:text-4xl font-bold text-white mb-4'>Review & Rating System</h3>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
          Build trust with potential clients through verified reviews and ratings from satisfied pet owners.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
        <motion.div variants={fadeInUp}>
          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <Star className='w-6 h-6 text-blue-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Verified Reviews</h4>
                <p className='text-blue-100'>
                  All reviews are verified to ensure authenticity and build genuine trust with your community.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <TrendingUp className='w-6 h-6 text-green-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Performance Analytics</h4>
                <p className='text-blue-100'>
                  Track your clinic's performance metrics and identify areas for improvement based on client feedback.
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                <ThumbsUp className='w-6 h-6 text-purple-600' />
              </div>
              <div>
                <h4 className='text-xl font-semibold text-white mb-2'>Response Management</h4>
                <p className='text-blue-100'>
                  Respond to reviews professionally and address any concerns to show your commitment to client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className='p-6 bg-white/90 backdrop-blur-sm border-white/20 shadow-xl'>
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <h4 className='text-xl font-semibold text-slate-900'>Recent Reviews</h4>
                <Button size='sm' variant='outline' className='border-slate-300'>
                  View All
                </Button>
              </div>

              <div className='space-y-4'>
                {mockReviews.map((review) => (
                  <div key={review.id} className='border-b border-slate-200 pb-4 last:border-b-0'>
                    <div className='flex items-start justify-between mb-2'>
                      <div>
                        <h5 className='font-medium text-slate-900'>{review.patientName}</h5>
                        <p className='text-sm text-slate-600'>Owner: {review.ownerName}</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className='text-slate-700 text-sm mb-2'>{review.comment}</p>
                    <div className='flex items-center justify-between'>
                      <span className='text-xs text-slate-500'>{review.date}</span>
                      {review.verified && <span className='text-xs text-green-600 font-medium'>✓ Verified</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className='pt-4 border-t border-slate-200'>
                <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'>
                  <MessageCircle className='w-4 h-4 mr-2' />
                  Respond to Reviews
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
