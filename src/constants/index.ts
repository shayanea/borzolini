import { Feature, Language, PricingPlan, Testimonial } from '@/types';

/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Borzolini',
  description:
    'Smart Pet Healthcare Platform - Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Named after Borzolini, our beloved companion.',
  url: 'https://borzolini.com',
  ogImage: 'https://borzolini.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/borzolini',
    instagram: 'https://instagram.com/borzolini',
    facebook: 'https://facebook.com/borzolini',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { title: 'Features', href: '#features' },
  { title: 'How it Works', href: '#how-it-works' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' },
] as const;

export const FEATURES: Feature[] = [
  {
    id: 'care-recommendations',
    title: 'Smart Care Recommendations',
    description:
      "Get personalized health tips and care recommendations based on your pet's daily patterns and breed-specific needs.",
    icon: 'Brain',
    benefits: ['Daily care recommendations', 'Breed-specific care tips', 'Health pattern insights'],
  },
  {
    id: 'appointment-scheduling',
    title: 'Easy Appointment Scheduling',
    description:
      "Simple scheduling with local veterinarians who understand your pet's specific needs, with smart timing suggestions.",
    icon: 'Calendar',
    benefits: ['One-click vet booking', 'Pet specialist matching', 'Smart timing suggestions'],
  },
  {
    id: 'vet-consultations',
    title: 'Video Vet Consultations',
    description:
      'Connect with qualified veterinarians through secure video calls for quick health assessments and advice for any pet.',
    icon: 'MessageCircle',
    benefits: ['Instant vet access', 'Secure video calls', 'Quick health assessments'],
  },
  {
    id: 'clinic-scoring',
    title: 'Clinic Quality Scores',
    description:
      'See ratings and reviews of local veterinary clinics with focus on various pet care expertise and success rates.',
    icon: 'Award',
    benefits: ['Verified clinic ratings', 'Pet care expertise scores', 'Real owner reviews'],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Monitoring',
    price: 0,
    currency: 'USD',
    interval: 'month',
    description: 'Perfect for getting started',
    features: [
      'Basic health tracking',
      'Weekly health summaries',
      'Vaccination reminders',
      'Basic vet clinic matching',
    ],
  },
  {
    id: 'ai-premium',
    name: 'AI Premium',
    price: 19.99,
    currency: 'USD',
    interval: 'month',
    description: 'Advanced AI health intelligence',
    popular: true,
    features: [
      'Everything in Basic',
      '24/7 AI health monitoring',
      'Predictive health analytics',
      'AI veterinary assistant',
      'Computer vision analysis',
      'Personalized nutrition plans',
      'Priority vet matching',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Health',
    price: 39.99,
    currency: 'USD',
    interval: 'month',
    description: 'For serious pet health optimization',
    features: [
      'Everything in AI Premium',
      'Advanced predictive modeling',
      'Genetic health analysis',
      'Unlimited AI consultations',
      'Family pet monitoring',
      'Priority support',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-luna',
    name: 'Sarah M.',
    role: "Luna's Mom",
    petName: 'Luna',
    petBreed: 'Persian Cat',
    avatar: '/images/testimonial-1.jpg',
    content:
      "The AI detected Luna's kidney issues 4 months before any symptoms appeared. We started preventive treatment early and saved over $3,000 in emergency costs. Luna is healthy and happy!",
    rating: 5,
    savings: 3200,
  },
  {
    id: 'mike-max',
    name: 'Mike R.',
    role: "Max's Dad",
    petName: 'Max',
    petBreed: 'Maine Coon',
    avatar: '/images/testimonial-2.jpg',
    content:
      "The AI noticed subtle changes in Max's eating patterns and predicted stress-related issues. We made environmental changes before any problems developed. Max is the happiest he's ever been!",
    rating: 5,
  },
  {
    id: 'emma-milo',
    name: 'Emma L.',
    role: "Milo's Mom",
    petName: 'Milo',
    petBreed: 'Siamese',
    avatar: '/images/testimonial-3.jpg',
    content:
      "AI recommendations helped us prevent Milo's dental disease with simple daily care routines. No expensive dental surgery needed! The personalized nutrition plan has improved his overall health dramatically.",
    rating: 5,
    savings: 1500,
  },
];

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export const STATS = {
  earlyDetectionAccuracy: 98,
  averageAnnualSavings: 2400,
  emergencyVisitReduction: 75,
  continuousMonitoring: '24/7',
} as const;

export const FAQ_ITEMS = [
  {
    id: 'accuracy',
    question: 'How accurate is the AI in predicting health issues?',
    answer:
      "Our AI has achieved 98% accuracy in early detection of common pet health conditions. It's trained on over 100,000 pet health records and continuously learns from veterinary outcomes. However, AI recommendations should always be confirmed with a licensed veterinarian.",
  },
  {
    id: 'replacement',
    question: 'Is this a replacement for veterinary care?',
    answer:
      'No, our AI is designed to enhance, not replace, veterinary care. We help you detect issues early and connect you with qualified veterinarians for proper diagnosis and treatment. Think of it as having a health-conscious friend watching over your pet 24/7.',
  },
  {
    id: 'breeds',
    question: 'What breeds does the AI specialize in?',
    answer:
      "We're starting with Persian cats (like Borzolini!) and expanding to other breeds. Our AI has specialized knowledge of breed-specific health patterns, genetic predispositions, and optimal care routines. We'll be adding more breeds based on user demand.",
  },
  {
    id: 'savings',
    question: 'How much can I really save with preventive care?',
    answer:
      'Our users save an average of $2,400 annually through early detection and prevention. For example, catching kidney disease early costs $200-500 for treatment, while advanced kidney disease can cost $3,000-8,000. Prevention is always more affordable than treatment.',
  },
  {
    id: 'privacy',
    question: "Is my pet's data secure and private?",
    answer:
      'Yes, we take privacy seriously. All pet health data is encrypted and stored securely. We never share individual pet information without your explicit consent. We may use anonymized, aggregated data to improve our AI models and contribute to veterinary research.',
  },
] as const;
