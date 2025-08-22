import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Placeholder for other sections */}
      <div className="py-20 text-center text-gray-500">
        <p>More sections coming soon...</p>
        <p className="text-sm mt-2">Features • Fariborz Case Study • Pricing • Testimonials • FAQ</p>
      </div>
    </main>
  );
}