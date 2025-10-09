import { Container } from '@/components/ui/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Borzolini',
  description: 'Terms and Conditions for using the Borzolini AI-powered pet healthcare platform.',
  robots: {
    index: true,
    follow: true,
  },
};

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className='mb-8'>
      <h2 className='text-xl font-semibold text-gray-900 mb-4'>{title}</h2>
      {children}
    </section>
  );
}

interface TermsListProps {
  items: string[];
}

function TermsList({ items }: TermsListProps) {
  return (
    <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function ContactInfo() {
  return (
    <div className='bg-gray-50 p-6 rounded-lg mt-4'>
      <p className='text-gray-700'>
        <strong>Email:</strong> legal@borzolini.com
        <br />
        <strong>Phone:</strong> +1 (555) 123-4567
        <br />
        <strong>Address:</strong> [Your Business Address]
      </p>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <Container className='py-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Terms and Conditions</h1>
            <p className='text-gray-600'>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8'>
            <TermsSection title='1. Acceptance of Terms'>
              <p className='text-gray-700 mb-4'>
                By accessing and using the Borzolini platform ("Service"), including our website, progressive web
                application (PWA), and mobile applications, you accept and agree to be bound by the terms and provisions
                of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </TermsSection>

            <TermsSection title='2. Description of Service'>
              <p className='text-gray-700 mb-4'>Borzolini is an AI-powered pet healthcare platform that provides:</p>
              <TermsList
                items={[
                  'Pet appointment scheduling and management for in-person and home visits',
                  'Video and voice consultation services (telemedicine)',
                  'Pet health records and medical history tracking',
                  'AI-powered health monitoring and proactive alerts',
                  'Breed-specific health insights and recommendations',
                  'Communication tools between pet owners and veterinary professionals',
                  'Clinic discovery with quality-based ratings and reviews',
                  'Progressive web application functionality for mobile and desktop use',
                ]}
              />
            </TermsSection>

            <TermsSection title='3. User Accounts and Registration'>
              <p className='text-gray-700 mb-4'>
                To access certain features of the Service, you must register for an account. You agree to:
              </p>
              <TermsList
                items={[
                  'Provide accurate, current, and complete information during registration',
                  'Maintain and promptly update your account information',
                  'Maintain the security of your password and account',
                  'Accept responsibility for all activities that occur under your account',
                  'Notify us immediately of any unauthorized use of your account',
                  'Not share your account credentials with others',
                ]}
              />
            </TermsSection>

            <TermsSection title='4. Acceptable Use'>
              <p className='text-gray-700 mb-4'>You agree not to use the Service to:</p>
              <TermsList
                items={[
                  'Violate any applicable laws or regulations',
                  'Infringe upon the rights of others',
                  'Upload, transmit, or distribute harmful, offensive, or inappropriate content',
                  'Attempt to gain unauthorized access to the Service or its systems',
                  'Interfere with or disrupt the Service or servers',
                  'Use the Service for commercial purposes without authorization',
                  'Impersonate any person or entity',
                  'Provide false or misleading information about pets or medical conditions',
                ]}
              />
            </TermsSection>

            <TermsSection title='5. Veterinary Services Disclaimer'>
              <p className='text-gray-700 mb-4'>
                The Service is designed to facilitate communication and management of veterinary services but does not
                provide veterinary medical advice. Important disclaimers include:
              </p>
              <TermsList
                items={[
                  'This platform is not a substitute for professional veterinary care',
                  'Emergency situations require immediate contact with a veterinarian or emergency animal hospital',
                  'All medical decisions should be made in consultation with qualified veterinary professionals',
                  'We are not responsible for the quality or outcome of veterinary services provided by clinics',
                  'Telemedicine consultations are for informational purposes and may not be sufficient for diagnosis or treatment',
                  'Home visit and in-person appointments should be used for comprehensive care',
                ]}
              />
            </TermsSection>

            <TermsSection title='6. AI Health Monitoring and Recommendations'>
              <p className='text-gray-700 mb-4'>
                Our Service includes AI-powered features that provide health monitoring, insights, and recommendations.
                Users acknowledge that:
              </p>
              <TermsList
                items={[
                  'AI recommendations are for informational purposes only and not medical diagnoses',
                  'Human oversight and professional veterinary judgment should always prevail',
                  'AI systems may occasionally provide inaccurate or incomplete information',
                  'Users remain responsible for final decisions regarding pet care',
                  'AI health alerts should prompt consultation with veterinary professionals',
                  'Breed-specific recommendations are based on general patterns and may not apply to individual pets',
                  'Health monitoring requires accurate user input and regular updates',
                ]}
              />
            </TermsSection>

            <TermsSection title='7. Payment and Transactions'>
              <p className='text-gray-700 mb-4'>
                Currently, Borzolini operates as a booking and communication platform. Payment arrangements are handled
                directly between pet owners and veterinary clinics. Users acknowledge that:
              </p>
              <TermsList
                items={[
                  'Payment terms, pricing, and methods are determined by individual clinics',
                  'Borzolini is not responsible for payment disputes between users and clinics',
                  'Future platform features may include integrated payment processing',
                  'Cancellation and refund policies are set by individual clinics',
                  'Any future commission or subscription fees will be clearly communicated',
                ]}
              />
            </TermsSection>

            <TermsSection title='8. Telemedicine Services'>
              <p className='text-gray-700 mb-4'>
                Video and voice consultation services are subject to additional terms:
              </p>
              <TermsList
                items={[
                  'Consultations require stable internet connection and compatible devices',
                  'Recording of consultations may be subject to consent requirements',
                  'Telemedicine services may not be appropriate for all medical situations',
                  'Emergency situations require immediate in-person care',
                  'Consultations are conducted by licensed veterinary professionals',
                  'Technical issues may occasionally interrupt or prevent consultations',
                ]}
              />
            </TermsSection>

            <TermsSection title='9. Data and Privacy'>
              <p className='text-gray-700 mb-4'>
                Your privacy is important to us. Our collection and use of personal information, including pet health
                data, is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using
                the Service, you consent to our collection, use, and sharing of information as described in the Privacy
                Policy.
              </p>
            </TermsSection>

            <TermsSection title='10. Intellectual Property'>
              <p className='text-gray-700 mb-4'>
                The Service and its original content, features, and functionality are owned by Borzolini and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                laws. You may not copy, modify, distribute, or reverse engineer any part of the Service without our
                written permission.
              </p>
            </TermsSection>

            <TermsSection title='11. User-Generated Content'>
              <p className='text-gray-700 mb-4'>
                Users may submit reviews, photos, and other content. By submitting content, you grant Borzolini a
                worldwide, non-exclusive, royalty-free license to use, display, and distribute such content in
                connection with the Service. You represent that you own or have permission to share any content you
                submit.
              </p>
            </TermsSection>

            <TermsSection title='12. Limitation of Liability'>
              <p className='text-gray-700 mb-4'>
                In no event shall Borzolini, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <TermsList
                items={[
                  'Your use or inability to use the Service',
                  'Any unauthorized access to or use of our servers and/or personal information',
                  'Any interruption or cessation of transmission to or from the Service',
                  'Any bugs, viruses, or other harmful code transmitted through the Service',
                  'Any errors or omissions in content or for any loss or damage incurred from use of content',
                  'The conduct of veterinary professionals or quality of veterinary services',
                  'AI health monitoring recommendations or alerts',
                ]}
              />
            </TermsSection>

            <TermsSection title='13. Service Availability'>
              <p className='text-gray-700 mb-4'>
                While we strive to maintain high availability, the Service may be temporarily unavailable due to
                maintenance, updates, or technical issues. We do not guarantee uninterrupted access to the Service.
                Scheduled maintenance will be communicated when possible.
              </p>
            </TermsSection>

            <TermsSection title='14. Termination'>
              <p className='text-gray-700 mb-4'>
                We may terminate or suspend your account and access to the Service immediately, without prior notice or
                liability, for any reason, including breach of these Terms. Upon termination, your right to use the
                Service will immediately cease.
              </p>
            </TermsSection>

            <TermsSection title='15. Changes to Terms'>
              <p className='text-gray-700 mb-4'>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service
                after changes become effective constitutes acceptance of the revised terms.
              </p>
            </TermsSection>

            <TermsSection title='16. Governing Law'>
              <p className='text-gray-700 mb-4'>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Borzolini
                operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or use
                of the Service shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
            </TermsSection>

            <TermsSection title='17. Dispute Resolution'>
              <p className='text-gray-700 mb-4'>
                Any dispute arising from these Terms or use of the Service shall first be attempted to be resolved
                through good-faith negotiation. If negotiation fails, disputes may be resolved through binding
                arbitration in accordance with applicable laws.
              </p>
            </TermsSection>

            <TermsSection title='18. Contact Information'>
              <p className='text-gray-700 mb-4'>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ContactInfo />
            </TermsSection>
          </div>
        </div>
      </Container>
    </main>
  );
}
