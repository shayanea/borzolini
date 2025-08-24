'use client';

import {
  Award,
  Building2,
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
import { Container } from '@/components/ui/container';
import { gradients } from '@/lib/design-system';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
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

function ClinicManagementHeader() {
  return (
    <motion.div
      className='text-center mb-16'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>Comprehensive Clinic Management System</h2>
      <p className='text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4'>
        Our advanced clinic management platform provides everything you need to run a successful veterinary practice.
        From multi-role dashboards to comprehensive service management, we've got you covered.
      </p>
    </motion.div>
  );
}

function MultiRoleSystem() {
  const roles = [
    {
      role: 'Admin',
      icon: Settings,
      color: 'blue',
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
    <motion.div className='mb-20' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
          <Building2 className='w-8 h-8 text-blue-600' />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Multi-Role Clinic System</h3>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Role-based dashboards designed for every member of your veterinary team
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {roles.map((role) => (
          <motion.div
            key={role.role}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Card className='p-6 text-center border-2 hover:border-blue-200 transition-colors'>
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-${role.color}-100 rounded-full mb-4`}
              >
                <role.icon className={`w-6 h-6 text-${role.color}-600`} />
              </div>
              <h4 className='text-xl font-semibold text-gray-900 mb-3'>{role.role} Dashboard</h4>
              <ul className='text-sm text-gray-600 space-y-2'>
                {role.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center justify-center'>
                    <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
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
    <motion.div className='mb-20' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
            <Search className='w-8 h-8 text-green-600' />
          </div>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>Advanced Search & Filtering</h3>
          <p className='text-gray-600 mb-6'>
            Find the perfect veterinary clinic with our intelligent search system that considers location, ratings,
            specializations, and more.
          </p>
          <div className='space-y-4'>
            {searchFeatures.map((item, idx) => (
              <div key={idx} className='flex items-start space-x-3'>
                <div className='flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center'>
                  <item.icon className='w-4 h-4 text-green-600' />
                </div>
                <span className='text-gray-700'>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-6 border-2 border-green-200'>
            <div className='space-y-4'>
              <div className='flex space-x-2'>
                <div className='flex-1'>
                  <input
                    type='text'
                    placeholder='Search clinics...'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  />
                </div>
                <Button className='bg-green-600 hover:bg-green-700'>
                  <Search className='w-4 h-4' />
                </Button>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <select className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500'>
                  <option>Location</option>
                  <option>Downtown</option>
                  <option>Westside</option>
                </select>
                <select className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500'>
                  <option>Rating</option>
                  <option>4.5+ Stars</option>
                  <option>4.0+ Stars</option>
                </select>
                <select className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500'>
                  <option>Specialization</option>
                  <option>Feline Medicine</option>
                  <option>Canine Medicine</option>
                </select>
                <select className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500'>
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
    <motion.div className='mb-20' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4'>
          <Users className='w-8 h-8 text-purple-600' />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Comprehensive Staff Management</h3>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Manage your veterinary team with detailed profiles, specializations, and performance tracking
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='space-y-6'>
            {staffFeatures.map((feature, idx) => (
              <div key={idx} className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                  <feature.icon className='w-6 h-6 text-purple-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>{feature.title}</h4>
                  <p className='text-gray-600 text-sm'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-6 border-2 border-purple-200'>
            <h4 className='font-semibold text-gray-900 mb-4 text-center'>Staff Directory</h4>
            <div className='space-y-4'>
              {mockClinics[0].staff.map((member, idx) => (
                <div key={idx} className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                  <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center'>
                    <Users className='w-5 h-5 text-purple-600' />
                  </div>
                  <div className='flex-1'>
                    <div className='font-medium text-gray-900'>{member.name}</div>
                    <div className='text-sm text-gray-600'>{member.role}</div>
                    <div className='text-xs text-purple-600'>{member.specialization}</div>
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
    <motion.div className='mb-20' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4'>
          <Stethoscope className='w-8 h-8 text-orange-600' />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Comprehensive Service Categories</h3>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Organize and manage all your veterinary services with detailed categorization and pricing
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map((category) => (
          <motion.div
            key={category.category}
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <Card className='p-6 text-center border-2 hover:border-orange-200 transition-colors'>
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color}-100 rounded-full mb-4`}
              >
                <category.icon className={`w-6 h-6 text-${category.color}-600`} />
              </div>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>{category.category}</h4>
              <p className='text-sm text-gray-600 mb-4'>{category.description}</p>
              <ul className='text-xs text-gray-600 space-y-1'>
                {category.services.map((service, idx) => (
                  <li key={idx} className='flex items-center justify-center'>
                    <CheckCircle className='w-3 h-3 text-green-500 mr-1' />
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
    <motion.div className='mb-20' initial='initial' whileInView='animate' viewport={{ once: true }} variants={fadeInUp}>
      <div className='text-center mb-12'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4'>
          <Star className='w-8 h-8 text-yellow-600' />
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Verified Review & Rating System</h3>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Build trust with verified reviews and comprehensive rating systems that help pet owners make informed
          decisions
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div variants={slideInLeft}>
          <div className='space-y-6'>
            {reviewFeatures.map((feature, idx) => (
              <div key={idx} className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
                  <feature.icon className='w-6 h-6 text-yellow-600' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>{feature.title}</h4>
                  <p className='text-gray-600 text-sm'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Card className='p-6 border-2 border-yellow-200'>
            <h4 className='font-semibold text-gray-900 mb-4 text-center'>Clinic Ratings & Reviews</h4>
            <div className='space-y-4'>
              {mockClinics.map((clinic) => (
                <div key={clinic.id} className='p-4 bg-gray-50 rounded-lg'>
                  <div className='flex items-center justify-between mb-2'>
                    <h5 className='font-medium text-gray-900'>{clinic.name}</h5>
                    <div className='flex items-center space-x-1'>
                      <Star className='w-4 h-4 text-yellow-500 fill-current' />
                      <span className='font-medium text-gray-900'>{clinic.rating}</span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4 text-sm text-gray-600 mb-2'>
                    <span>{clinic.totalReviews} reviews</span>
                    <span>{clinic.location}</span>
                    {clinic.verified && (
                      <span className='flex items-center text-green-600'>
                        <Shield className='w-3 h-3 mr-1' />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className='flex flex-wrap gap-1'>
                    {clinic.specializations.slice(0, 2).map((spec, idx) => (
                      <span key={idx} className='px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full'>
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
      <div className={`${gradients.primary} rounded-3xl p-8 border border-blue-100`}>
        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Ready to Transform Your Veterinary Practice?</h3>
        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
          Join the beta to access our comprehensive clinic management system with multi-role dashboards, advanced search
          capabilities, and verified review systems. Completely free for early adopters!
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size='lg'
              className='bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-colors'
            >
              🏥 Join Clinic Beta (Free)
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-slate-800 text-slate-800 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors'
            >
              📋 Request Demo
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
    <section className='py-20 bg-gray-50' id='clinic-management'>
      <Container size='xl'>
        <ClinicManagementHeader />
        <MultiRoleSystem />
        <AdvancedSearchAndFiltering />
        <StaffManagement />
        <ServiceCategories />
        <ReviewAndRatingSystem />
        <ClinicManagementCTA />
      </Container>
    </section>
  );
}
