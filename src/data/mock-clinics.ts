import { Calendar, Globe, MessageCircle, Shield, Star, Stethoscope, Users } from 'lucide-react';

import type { Clinic, ReviewFeature, FeatureBenefit } from '@/types/clinic';

export const mockClinics: Clinic[] = [
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

export const reviewFeatures: ReviewFeature[] = [
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

export const featureBenefits: FeatureBenefit[] = [
  {
    title: 'Smart Scheduling',
    description: 'AI-powered appointment booking with real-time availability',
    icon: Calendar,
  },
  {
    title: 'Staff Management',
    description: 'Comprehensive staff profiles, roles, and specializations',
    icon: Users,
  },
  {
    title: 'Service Catalog',
    description: 'Detailed service listings with pricing and duration',
    icon: Stethoscope,
  },
  {
    title: 'Review System',
    description: 'Verified review and rating system for transparency',
    icon: Star,
  },
];
