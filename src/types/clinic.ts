export interface ClinicStaff {
  name: string;
  role: string;
  specialization: string;
}

export interface ClinicService {
  name: string;
  category: string;
  duration: string;
  price: string;
}

export interface Clinic {
  id: number;
  name: string;
  rating: number;
  totalReviews: number;
  location: string;
  specializations: string[];
  verified: boolean;
  staff: ClinicStaff[];
  services: ClinicService[];
}

export interface ReviewFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FeatureBenefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ClinicRating {
  clinic: Clinic;
  rating: number;
  reviewCount: number;
}
