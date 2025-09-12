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
    <div className='relative mb-8 last:mb-0 lg:mb-0'>
      <div className='hidden lg:block absolute w-px h-full bg-slate-200 left-10 top-0 -translate-x-1/2' />
      <div className='flex items-start lg:items-center relative'>
        <div className='w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 lg:mr-8 group-hover:scale-105 transition-transform duration-200'>
          <Icon className='w-10 h-10 text-blue-600' />
        </div>
        <div className='flex-1'>
          <h3 className='text-2xl font-bold text-slate-900 mb-2'>{title}</h3>
          <p className='text-slate-600 leading-relaxed'>{description}</p>
        </div>
      </div>
    </div>
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
        <div className='absolute left-4 top-0 w-px h-full bg-slate-200' />
        {steps.map((step, index) => (
          <div key={index} className='mb-8 relative'>
            <div className='flex items-center mb-4 cursor-pointer' onClick={() => handleToggle(index)}>
              <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 z-10'>
                {index + 1}
              </div>
              <h3 className='ml-4 text-xl font-bold text-slate-900'>{step.title}</h3>
            </div>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className='pl-16 text-slate-600 leading-relaxed'
              >
                {step.description}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Grid View (existing HowItWorksFeatures content) */}
      <div className='hidden lg:grid lg:grid-cols-3 lg:gap-12'>
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
