'use client';

import {
  Award,
  Brain,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Search,
  Settings,
  Shield,
  Star,
  Stethoscope,
  UserCheck,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Animation variants
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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

// Mock clinic data for demonstration
const mockClinics = [
  {
    id: 1,
    name: 'Borzolini Pet Clinic',
    rating: 4.9,
    totalReviews: 127,
    location: 'Downtown Medical District',
    specializations: ['Feline Medicine', 'Preventive Care', 'Surgery'],
    verified: true,
    staff: [
      { name: 'Dr. Sarah Wilson', role: 'Lead Veterinarian', specialization: 'Feline Medicine' },
      { name: 'Dr. Michael Chen', role: 'Surgeon', specialization: 'Orthopedic Surgery' },
      { name: 'Emma Rodriguez', role: 'Veterinary Technician', specialization: 'Emergency Care' },
    ],
    services: [
      { name: 'Wellness Exams', category: 'Preventive', duration: '45 min', price: '$75' },
      { name: 'Vaccinations', category: 'Preventive', duration: '30 min', price: '$45' },
      { name: 'Dental Cleaning', category: 'Surgical', duration: '2 hours', price: '$350' },
      { name: 'Emergency Care', category: 'Emergency', duration: 'Varies', price: 'From $150' },
    ],
  },
  {
    id: 2,
    name: 'Paws & Claws Veterinary',
    rating: 4.7,
    totalReviews: 89,
    location: 'Westside Pet Care Center',
    specializations: ['Canine Medicine', 'Dermatology', 'Behavioral'],
    verified: true,
    staff: [
      { name: 'Dr. James Thompson', role: 'Veterinarian', specialization: 'Canine Medicine' },
      { name: 'Dr. Lisa Park', role: 'Dermatologist', specialization: 'Skin Conditions' },
      { name: 'Alex Johnson', role: 'Behavioral Specialist', specialization: 'Training & Behavior' },
    ],
    services: [
      { name: 'Behavioral Consultation', category: 'Behavioral', duration: '1 hour', price: '$120' },
      { name: 'Skin Treatment', category: 'Diagnostic', duration: '1 hour', price: '$95' },
      { name: 'Routine Checkup', category: 'Preventive', duration: '30 min', price: '$65' },
    ],
  },
];

// --- Section Components ---

function MultiRoleSystem() {
  const roles = [
    {
      role: 'Admin',
      icon: Settings,
      color: 'yellow',
      features: ['Clinic Management', 'Staff Oversight', 'Financial Reports', 'System Configuration'],
    },
    {
      role: 'Doctor',
      icon: Stethoscope,
      color: 'green',
      features: ['Patient Records', 'Appointment Management', 'Treatment Plans', 'Medical History'],
    },
    {
      role: 'Assistant',
      icon: UserCheck,
      color: 'purple',
      features: ['Appointment Scheduling', 'Patient Check-in', 'Basic Records', 'Communication'],
    },
  ];
  return (
    <motion.div className='mb-24' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl mb-6 shadow-lg'>
          <Building2 className='w-10 h-10 text-yellow-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>Multi-Role Clinic System</h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Role-based dashboards designed for every member of your veterinary team
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {roles.map((role) => (
          <motion.div
            key={role.role}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Card className='p-8 text-center border-2 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${role.color}-100 to-${role.color}-200 rounded-2xl mb-6 shadow-lg`}
              >
                <role.icon className={`w-8 h-8 text-${role.color}-600`} />
              </div>
              <h4 className='text-2xl font-semibold text-slate-900 mb-4 leading-tight'>{role.role} Dashboard</h4>
              <ul className='text-slate-600 space-y-3 font-medium'>
                {role.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center justify-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3' />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AdvancedSearchAndFiltering() {
  const searchFeatures = [
    { icon: MapPin, text: 'Location-based search with radius filtering' },
    { icon: Star, text: 'Rating and review-based sorting' },
    { icon: Stethoscope, text: 'Specialization and service filtering' },
    { icon: Clock, text: 'Operating hours and availability' },
    { icon: Shield, text: 'Verification status and credentials' },
  ];
  return (
    <motion.div className='mb-24' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 shadow-lg'>
            <Search className='w-10 h-10 text-green-600' />
          </div>
          <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
            Advanced Search & Filtering
          </h3>
          <p className='text-slate-600 mb-8 text-lg font-medium leading-relaxed'>
            Find the perfect veterinary clinic with our intelligent search system that considers location, ratings,
            specializations, and more.
          </p>
          <div className='space-y-5'>
            {searchFeatures.map((item, idx) => (
              <div key={idx} className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center'>
                  <item.icon className='w-4 h-4 text-green-600' />
                </div>
                <span className='text-slate-700 font-medium leading-relaxed'>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-8 border-2 border-green-200/50 shadow-lg'>
            <div className='space-y-6'>
              <div className='flex space-x-3'>
                <div className='flex-1'>
                  <input
                    type='text'
                    placeholder='Search clinics...'
                    className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent font-medium'
                  />
                </div>
                <Button className='bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl'>
                  <Search className='w-5 h-5' />
                </Button>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <select className='px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 font-medium'>
                  <option>Location</option>
                  <option>Downtown</option>
                  <option>Westside</option>
                </select>
                <select className='px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 font-medium'>
                  <option>Rating</option>
                  <option>4.5+ Stars</option>
                  <option>4.0+ Stars</option>
                </select>
                <select className='px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 font-medium'>
                  <option>Specialization</option>
                  <option>Feline Medicine</option>
                  <option>Canine Medicine</option>
                </select>
                <select className='px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 font-medium'>
                  <option>Services</option>
                  <option>Emergency Care</option>
                  <option>Surgery</option>
                </select>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StaffManagement() {
  const staffFeatures = [
    {
      title: 'Detailed Staff Profiles',
      description: 'Complete professional information including education, certifications, and experience',
      icon: UserCheck,
    },
    {
      title: 'Role-Based Access',
      description: 'Secure access control based on staff roles and responsibilities',
      icon: Shield,
    },
    {
      title: 'Specialization Tracking',
      description: 'Track staff expertise areas and specializations for better patient matching',
      icon: Award,
    },
    {
      title: 'Performance Metrics',
      description: 'Monitor staff performance and patient satisfaction ratings',
      icon: Star,
    },
  ];
  return (
    <motion.div className='mb-24' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 shadow-lg'>
          <Users className='w-10 h-10 text-purple-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Comprehensive Staff Management
        </h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Manage your veterinary team with detailed profiles, specializations, and performance tracking
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='space-y-8'>
            {staffFeatures.map((feature, idx) => (
              <div key={idx} className='flex items-start space-x-5'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-lg'>
                  <feature.icon className='w-7 h-7 text-purple-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-slate-900 mb-2 text-lg'>{feature.title}</h4>
                  <p className='text-slate-600 text-base leading-relaxed font-medium'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-8 border-2 border-purple-200/50 shadow-lg'>
            <h4 className='font-semibold text-slate-900 mb-6 text-center text-xl'>Staff Directory</h4>
            <div className='space-y-5'>
              {mockClinics[0].staff.map((member, idx) => (
                <div
                  key={idx}
                  className='flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200/50'
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center shadow-sm'>
                    <Users className='w-6 h-6 text-purple-600' />
                  </div>
                  <div className='flex-1'>
                    <div className='font-medium text-slate-900 text-lg'>{member.name}</div>
                    <div className='text-slate-600 font-medium'>{member.role}</div>
                    <div className='text-sm text-purple-600 font-semibold'>{member.specialization}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ServiceCategories() {
  const categories = [
    {
      category: 'Preventive Care',
      icon: Shield,
      color: 'green',
      services: ['Wellness Exams', 'Vaccinations', 'Parasite Prevention', 'Nutrition Counseling'],
      description: 'Routine care to keep pets healthy',
    },
    {
      category: 'Diagnostic Services',
      icon: Search,
      color: 'blue',
      services: ['Blood Tests', 'X-Rays', 'Ultrasound', 'Lab Work'],
      description: 'Advanced diagnostic testing',
    },
    {
      category: 'Surgical Procedures',
      icon: Stethoscope,
      color: 'purple',
      services: ['Spay/Neuter', 'Dental Surgery', 'Orthopedic Surgery', 'Emergency Surgery'],
      description: 'Surgical interventions and procedures',
    },
    {
      category: 'Emergency Care',
      icon: Clock,
      color: 'red',
      services: ['24/7 Emergency', 'Trauma Care', 'Critical Care', 'Emergency Surgery'],
      description: 'Urgent and emergency services',
    },
  ];
  return (
    <motion.div className='mb-24' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-6 shadow-lg'>
          <Stethoscope className='w-10 h-10 text-orange-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Comprehensive Service Categories
        </h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Organize and manage all your veterinary services with detailed categorization and pricing
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {categories.map((category) => (
          <motion.div
            key={category.category}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Card className='p-8 text-center border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 rounded-2xl mb-6 shadow-lg`}
              >
                <category.icon className={`w-8 h-8 text-${category.color}-600`} />
              </div>
              <h4 className='text-xl font-semibold text-slate-900 mb-3 leading-tight'>{category.category}</h4>
              <p className='text-slate-600 mb-5 font-medium leading-relaxed'>{category.description}</p>
              <ul className='text-slate-600 space-y-2 font-medium'>
                {category.services.map((service, idx) => (
                  <li key={idx} className='flex items-center justify-center'>
                    <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
                    {service}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ReviewAndRatingSystem() {
  const reviewFeatures = [
    {
      title: 'Verified Reviews',
      description: 'All reviews are verified to ensure authenticity and prevent fake feedback',
      icon: Shield,
    },
    {
      title: 'Comprehensive Ratings',
      description: 'Multi-category ratings including care quality, staff friendliness, and facility cleanliness',
      icon: Star,
    },
    {
      title: 'Photo Reviews',
      description: 'Pet owners can share photos and detailed experiences',
      icon: Globe,
    },
    {
      title: 'Response Management',
      description: 'Clinics can respond to reviews and address concerns professionally',
      icon: MessageCircle,
    },
  ];
  return (
    <motion.div className='mb-24' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl mb-6 shadow-lg'>
          <Star className='w-10 h-10 text-yellow-600' />
        </div>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Verified Review & Rating System
        </h3>
        <p className='text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Build trust with verified reviews and comprehensive rating systems that help pet owners make informed
          decisions
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='space-y-8'>
            {reviewFeatures.map((feature, idx) => (
              <div key={idx} className='flex items-start space-x-5'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center shadow-lg'>
                  <feature.icon className='w-7 h-7 text-yellow-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-slate-900 mb-2 text-lg'>{feature.title}</h4>
                  <p className='text-slate-600 text-base leading-relaxed font-medium'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-8 border-2 border-yellow-200/50 shadow-lg'>
            <h4 className='font-semibold text-slate-900 mb-6 text-center text-xl'>Clinic Ratings & Reviews</h4>
            <div className='space-y-5'>
              {mockClinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className='p-5 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200/50'
                >
                  <div className='flex items-center justify-between mb-3'>
                    <h5 className='font-medium text-slate-900 text-lg'>{clinic.name}</h5>
                    <div className='flex items-center space-x-2'>
                      <Star className='w-5 h-5 text-yellow-500 fill-current' />
                      <span className='font-medium text-slate-900 text-lg'>{clinic.rating}</span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-5 text-sm text-slate-600 mb-3 font-medium'>
                    <span>{clinic.totalReviews} reviews</span>
                    <span>{clinic.location}</span>
                    {clinic.verified && (
                      <span className='flex items-center text-green-600 font-semibold'>
                        <Shield className='w-4 h-4 mr-2' />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {clinic.specializations.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-medium'
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ClinicManagementCTA() {
  return (
    <motion.div
      className='text-center'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className='bg-gradient-to-r from-slate-50 to-yellow-50 rounded-3xl p-12 border border-slate-200/50 shadow-xl'>
        <h3 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
          Ready to Transform Your Veterinary Practice?
        </h3>
        <p className='text-slate-600 mb-8 max-w-3xl mx-auto text-lg font-medium leading-relaxed'>
          Join the beta to access our comprehensive clinic management system with multi-role dashboards, advanced search
          capabilities, and verified review systems. Completely free for early adopters!
        </p>
        <div className='flex justify-center'>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size='lg'
              className='bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
            >
              🏥 Join Clinic Beta (Free)
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Section (Consider splitting this into smaller files if it grows further)
export function ClinicManagementSection() {
  // WARNING: This function is large and may be difficult to maintain.
  // Consider splitting each section into its own file/component.
  return (
    <section className='py-24 bg-gradient-to-br from-purple-600 to-indigo-700' id='clinic-management'>
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

        <motion.div variants={fadeInLeft}>
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

      <motion.div
        className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <Calendar className='w-8 h-8 text-blue-600' />
            </div>
            <h4 className='font-semibold text-slate-900 text-lg mb-2'>Smart Scheduling</h4>
            <p className='text-slate-600 text-sm'>AI-optimized appointment booking</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <Users className='w-8 h-8 text-green-600' />
            </div>
            <h4 className='font-semibold text-slate-900 text-lg mb-2'>Patient Management</h4>
            <p className='text-slate-600 text-sm'>Comprehensive health records</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className='text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-shadow duration-200'>
            <div className='w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <Brain className='w-8 h-8 text-purple-600' />
            </div>
            <h4 className='font-semibold text-slate-900 text-lg mb-2'>AI Insights</h4>
            <p className='text-slate-600 text-sm'>Predictive care recommendations</p>
          </div>
        </motion.div>
      </motion.div>
      <MultiRoleSystem />
      <AdvancedSearchAndFiltering />
      <StaffManagement />
      <ServiceCategories />
      <ReviewAndRatingSystem />
      <ClinicManagementCTA />
    </section>
  );
}
