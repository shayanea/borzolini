import { Brain, Calendar, Search } from 'lucide-react';
import { useState } from 'react';

import { animations } from '@/lib/animations';
import { motion } from 'framer-motion';

interface HowItWorksStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  icon: Icon,
  title,
  description,
  index: _index,
  isExpanded: _isExpanded,
  onToggle: _onToggle,
}) => {
  return (
    <motion.div className='relative mb-8 last:mb-0 lg:mb-0' variants={animations.fadeInUp}>
      <div className='hidden lg:block absolute w-px h-full bg-gradient-to-b from-blue-200 to-purple-200 left-12 top-0 -translate-x-1/2' />
      <div className='flex items-start lg:items-center relative group'>
        <div className='w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center flex-shrink-0 mr-8 shadow-lg group-hover:scale-105 transition-all duration-300 border border-white/50'>
          <Icon className='w-12 h-12 text-blue-600' />
        </div>
        <div className='flex-1'>
          <h3 className='text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-slate-600 leading-relaxed text-lg'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const HowItWorksTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const steps = [
    {
      icon: Search,
      title: 'Find Your Perfect Vet',
      description:
        'Search through our curated list of top-rated veterinary clinics, filtered by location, specialty, and pet type.',
    },
    {
      icon: Calendar,
      title: 'Book Appointments Instantly',
      description:
        "Schedule visits with real-time availability, get reminders, and manage your pet's care calendar effortlessly.",
    },
    {
      icon: Brain,
      title: 'Get Smart Care Tips',
      description:
        'Receive personalized health recommendations, nutrition advice, and preventive care reminders tailored to your pet.',
    },
  ];

  return (
    <motion.div
      className='lg:grid lg:grid-cols-3 lg:gap-12 block'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={animations.staggerContainer}
    >
      {/* Mobile Timeline View */}
      <div className='relative lg:hidden'>
        <div className='absolute left-6 top-0 w-px h-full bg-gradient-to-b from-blue-200 to-purple-200' />
        {steps.map((step, index) => (
          <motion.div key={index} className='mb-8 relative' variants={animations.fadeInUp}>
            <div className='flex items-center mb-4 cursor-pointer group' onClick={() => handleToggle(index)}>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold flex-shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform duration-300'>
                {index + 1}
              </div>
              <h3 className='ml-6 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300'>
                {step.title}
              </h3>
            </div>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className='pl-20 text-slate-600 leading-relaxed text-lg'
              >
                {step.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Desktop Grid View */}
      <div className='hidden lg:grid lg:grid-cols-3 lg:gap-16'>
        {steps.map((step, index) => (
          <HowItWorksStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            index={index}
            isExpanded={false}
            onToggle={() => {}}
          />
        ))}
      </div>
    </motion.div>
  );
};
