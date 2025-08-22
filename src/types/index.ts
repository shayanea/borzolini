/**
 * Common types used throughout the application
 */

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: "month" | "year";
  features: string[];
  popular?: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  petName: string;
  petBreed: string;
  avatar: string;
  content: string;
  rating: number;
  savings?: number;
}

export interface HealthMetric {
  label: string;
  value: string | number;
  status: "excellent" | "good" | "warning" | "critical";
  trend?: "up" | "down" | "stable";
}

export interface AIInsight {
  id: string;
  type: "positive" | "warning" | "info";
  title: string;
  description: string;
  icon: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}
