import { Feature, PricingPlan, Testimonial, Language } from "@/types";

/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: "Borzolini",
  description: "AI-Powered Predictive Healthcare for Pets - Transform your pet's healthcare from reactive to predictive with 24/7 AI monitoring and breed-specific insights. Named after Fariborz, our Persian cat pioneer.",
  url: "https://borzolini.com",
  ogImage: "https://borzolini.com/og.jpg",
  links: {
    twitter: "https://twitter.com/borzolini",
    instagram: "https://instagram.com/borzolini",
    facebook: "https://facebook.com/borzolini",
  },
} as const;

export const NAVIGATION_ITEMS = [
  { title: "Features", href: "#features" },
  { title: "How it Works", href: "#how-it-works" },
  { title: "Pricing", href: "#pricing" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "FAQ", href: "#faq" },
] as const;

export const FEATURES: Feature[] = [
  {
    id: "ai-monitoring",
    title: "24/7 AI Health Monitoring",
    description: "AI continuously analyzes your pet's health patterns, detecting subtle changes that humans might miss.",
    icon: "Clock",
    benefits: [
      "Daily health pattern analysis",
      "Breed-specific monitoring",
      "Early warning system"
    ]
  },
  {
    id: "predictive-analytics",
    title: "Predictive Health Analytics",
    description: "Forecast health issues 6-18 months before symptoms appear, enabling preventive care.",
    icon: "TrendingUp",
    benefits: [
      "Disease risk predictions",
      "Treatment outcome forecasting",
      "Personalized prevention plans"
    ]
  },
  {
    id: "ai-vet-assistant",
    title: "AI Veterinary Assistant",
    description: "Get instant health consultations and triage recommendations from our AI vet assistant.",
    icon: "MessageCircle",
    benefits: [
      "Instant symptom analysis",
      "Urgency level assessment",
      "Care recommendations"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision Analysis",
    description: "AI analyzes photos and videos to detect skin conditions, eye problems, and behavioral changes.",
    icon: "Camera",
    benefits: [
      "Skin condition detection",
      "Eye health monitoring",
      "Gait analysis"
    ]
  },
  {
    id: "nutrition-optimization",
    title: "AI Nutrition Optimization",
    description: "Personalized nutrition plans based on breed, age, health conditions, and activity level.",
    icon: "Apple",
    benefits: [
      "Breed-specific meal plans",
      "Health-optimized nutrition",
      "Supplement recommendations"
    ]
  },
  {
    id: "smart-clinic-matching",
    title: "Smart Clinic Matching",
    description: "AI matches you with the best veterinarians based on your pet's specific needs and conditions.",
    icon: "MapPin",
    benefits: [
      "Breed specialization matching",
      "Success rate optimization",
      "Real-time availability"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Monitoring",
    price: 0,
    currency: "USD",
    interval: "month",
    description: "Perfect for getting started",
    features: [
      "Basic health tracking",
      "Weekly health summaries",
      "Vaccination reminders",
      "Basic vet clinic matching"
    ]
  },
  {
    id: "ai-premium",
    name: "AI Premium",
    price: 19.99,
    currency: "USD",
    interval: "month",
    description: "Advanced AI health intelligence",
    popular: true,
    features: [
      "Everything in Basic",
      "24/7 AI health monitoring",
      "Predictive health analytics",
      "AI veterinary assistant",
      "Computer vision analysis",
      "Personalized nutrition plans",
      "Priority vet matching"
    ]
  },
  {
    id: "pro",
    name: "Pro Health",
    price: 39.99,
    currency: "USD",
    interval: "month",
    description: "For serious pet health optimization",
    features: [
      "Everything in AI Premium",
      "Advanced predictive modeling",
      "Genetic health analysis",
      "Unlimited AI consultations",
      "Family pet monitoring",
      "Priority support"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-luna",
    name: "Sarah M.",
    role: "Luna's Mom",
    petName: "Luna",
    petBreed: "Persian Cat",
    avatar: "/images/testimonial-1.jpg",
    content: "The AI detected Luna's kidney issues 4 months before any symptoms appeared. We started preventive treatment early and saved over $3,000 in emergency costs. Luna is healthy and happy!",
    rating: 5,
    savings: 3200
  },
  {
    id: "mike-max",
    name: "Mike R.",
    role: "Max's Dad",
    petName: "Max",
    petBreed: "Maine Coon",
    avatar: "/images/testimonial-2.jpg",
    content: "The AI noticed subtle changes in Max's eating patterns and predicted stress-related issues. We made environmental changes before any problems developed. Max is the happiest he's ever been!",
    rating: 5
  },
  {
    id: "emma-milo",
    name: "Emma L.",
    role: "Milo's Mom",
    petName: "Milo",
    petBreed: "Siamese",
    avatar: "/images/testimonial-3.jpg",
    content: "AI recommendations helped us prevent Milo's dental disease with simple daily care routines. No expensive dental surgery needed! The personalized nutrition plan has improved his overall health dramatically.",
    rating: 5,
    savings: 1500
  }
];

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export const STATS = {
  earlyDetectionAccuracy: 98,
  averageAnnualSavings: 2400,
  emergencyVisitReduction: 75,
  continuousMonitoring: "24/7"
} as const;

export const FAQ_ITEMS = [
  {
    id: "accuracy",
    question: "How accurate is the AI in predicting health issues?",
    answer: "Our AI has achieved 98% accuracy in early detection of common pet health conditions. It's trained on over 100,000 pet health records and continuously learns from veterinary outcomes. However, AI recommendations should always be confirmed with a licensed veterinarian."
  },
  {
    id: "replacement",
    question: "Is this a replacement for veterinary care?",
    answer: "No, our AI is designed to enhance, not replace, veterinary care. We help you detect issues early and connect you with qualified veterinarians for proper diagnosis and treatment. Think of it as having a health-conscious friend watching over your pet 24/7."
  },
  {
    id: "breeds",
    question: "What breeds does the AI specialize in?",
    answer: "We're starting with Persian cats (like Fariborz!) and expanding to other breeds. Our AI has specialized knowledge of breed-specific health patterns, genetic predispositions, and optimal care routines. We'll be adding more breeds based on user demand."
  },
  {
    id: "savings",
    question: "How much can I really save with preventive care?",
    answer: "Our users save an average of $2,400 annually through early detection and prevention. For example, catching kidney disease early costs $200-500 for treatment, while advanced kidney disease can cost $3,000-8,000. Prevention is always more affordable than treatment."
  },
  {
    id: "privacy",
    question: "Is my pet's data secure and private?",
    answer: "Yes, we take privacy seriously. All pet health data is encrypted and stored securely. We never share individual pet information without your explicit consent. We may use anonymized, aggregated data to improve our AI models and contribute to veterinary research."
  }
] as const;
