import { Container } from '@/components/ui/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Borzolini',
  description: 'Privacy Policy for the Borzolini AI-powered pet healthcare platform.',
  robots: {
    index: true,
    follow: true,
  },
};

interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

function PrivacySection({ title, children }: PrivacySectionProps) {
  return (
    <section className='mb-8'>
      <h2 className='text-xl font-semibold text-gray-900 mb-4'>{title}</h2>
      {children}
    </section>
  );
}

interface PrivacySubsectionProps {
  title: string;
  children: React.ReactNode;
}

function PrivacySubsection({ title, children }: PrivacySubsectionProps) {
  return (
    <div className='mt-4 ml-4'>
      <h3 className='text-lg font-medium text-gray-900 mb-3'>{title}</h3>
      {children}
    </div>
  );
}

interface PrivacyListProps {
  items: string[];
}

function PrivacyList({ items }: PrivacyListProps) {
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
        <strong>Email:</strong> privacy@borzolini.com
        <br />
        <strong>Phone:</strong> +1 (555) 123-4567
        <br />
        <strong>Address:</strong> [Your Business Address]
        <br />
        <strong>Data Protection Officer:</strong> dpo@borzolini.com
      </p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <Container className='py-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
            <p className='text-gray-600'>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8'>
            <PrivacySection title='1. Introduction'>
              <p className='text-gray-700'>
                Borzolini ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our AI-powered pet healthcare
                platform ("Service"), including our website, progressive web application (PWA), and mobile applications.
                We prioritize transparency and give you control over your personal data.
              </p>
            </PrivacySection>

            <PrivacySection title='2. Information We Collect'>
              <PrivacySubsection title='2.1 Personal Information'>
                <p className='text-gray-700 mb-3'>We collect personal information that you provide to us, including:</p>
                <PrivacyList
                  items={[
                    'Name, email address, and phone number',
                    'Mailing address for home visit services',
                    'Pet information (name, species, breed, age, weight, photos)',
                    'Pet medical history, vaccination records, and health conditions',
                    'Veterinary appointment details and preferences',
                    'Payment and billing information (when applicable)',
                    'Communication preferences and history',
                    'User account credentials',
                  ]}
                />
              </PrivacySubsection>

              <PrivacySubsection title='2.2 Technical Information'>
                <p className='text-gray-700 mb-3'>
                  We automatically collect certain technical information when you use our Service:
                </p>
                <PrivacyList
                  items={[
                    'Device information (IP address, browser type, operating system, device identifiers)',
                    'Usage data (pages visited, features used, time spent, click patterns)',
                    'PWA-specific data (installation status, offline usage patterns, service worker activity)',
                    'Performance metrics and error logs',
                    'Cookie data and local storage information',
                    'Location data (with your permission) for clinic discovery and home visits',
                  ]}
                />
              </PrivacySubsection>

              <PrivacySubsection title='2.3 Health Monitoring and AI Data'>
                <p className='text-gray-700 mb-3'>To provide AI-powered health monitoring and insights, we collect:</p>
                <PrivacyList
                  items={[
                    'Daily health logs (eating, drinking, activity, sleep patterns)',
                    'Symptom reports and health observations',
                    'Medication tracking and adherence data',
                    'Veterinary consultation notes and recommendations',
                    'Health trend data and pattern analysis',
                    'Breed-specific health information',
                    'User feedback on AI recommendations',
                  ]}
                />
              </PrivacySubsection>

              <PrivacySubsection title='2.4 Telemedicine Data'>
                <p className='text-gray-700 mb-3'>During video and voice consultations, we may collect:</p>
                <PrivacyList
                  items={[
                    'Video and audio recordings (with consent)',
                    'Consultation transcripts and summaries',
                    'Visual health assessments shared during calls',
                    'Follow-up notes and recommendations',
                  ]}
                />
              </PrivacySubsection>
            </PrivacySection>

            <PrivacySection title='3. How We Use Your Information'>
              <p className='text-gray-700 mb-4'>We use the collected information for the following purposes:</p>
              <PrivacyList
                items={[
                  'Providing and maintaining the pet healthcare platform',
                  'Processing appointments and managing pet health records',
                  'Delivering AI-powered health monitoring, alerts, and recommendations',
                  'Facilitating telemedicine consultations and home visits',
                  'Personalizing your experience with breed-specific insights',
                  'Communicating with you about services, appointments, and updates',
                  'Improving our AI algorithms and service quality',
                  'Ensuring platform security and preventing fraud',
                  'Complying with legal obligations and veterinary regulations',
                  'Conducting analytics to understand user behavior and preferences',
                  'Sending promotional communications (with your consent)',
                ]}
              />
            </PrivacySection>

            <PrivacySection title='4. Information Sharing and Disclosure'>
              <PrivacySubsection title='4.1 Veterinary Professionals'>
                <p className='text-gray-700 mb-3'>
                  We share your information with veterinary professionals and clinic staff to:
                </p>
                <PrivacyList
                  items={[
                    'Schedule and manage appointments (in-person, home visits, and telemedicine)',
                    'Provide veterinary care and treatment',
                    'Maintain accurate pet health records',
                    'Coordinate follow-up care, medications, and recommendations',
                    'Enable continuity of care across different veterinary professionals',
                  ]}
                />
              </PrivacySubsection>

              <PrivacySubsection title='4.2 Service Providers'>
                <p className='text-gray-700 mb-3'>
                  We may share information with trusted third-party service providers who assist us in:
                </p>
                <PrivacyList
                  items={[
                    'Cloud hosting and infrastructure services',
                    'Payment processing and transaction management',
                    'AI and machine learning services (OpenAI, analytics platforms)',
                    'Video conferencing for telemedicine (e.g., Daily.co)',
                    'Email and SMS communication services',
                    'Analytics and performance monitoring',
                    'Customer support and help desk services',
                  ]}
                />
                <p className='text-gray-700 mt-3'>
                  All service providers are bound by confidentiality agreements and use data only for specified
                  purposes.
                </p>
              </PrivacySubsection>

              <PrivacySubsection title='4.3 Legal Requirements'>
                <p className='text-gray-700 mb-3'>We may disclose your information when required by law or to:</p>
                <PrivacyList
                  items={[
                    'Comply with legal processes, court orders, or government requests',
                    'Protect our rights, property, or safety, and that of our users',
                    'Investigate potential violations of our Terms of Service',
                    'Respond to veterinary regulatory requirements',
                    'Prevent fraud, security breaches, or illegal activities',
                  ]}
                />
              </PrivacySubsection>

              <PrivacySubsection title='4.4 Business Transfers'>
                <p className='text-gray-700'>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                  acquiring entity. We will notify you via email and/or prominent notice on our Service of any change in
                  ownership or use of your personal information.
                </p>
              </PrivacySubsection>
            </PrivacySection>

            <PrivacySection title='5. Data Security'>
              <p className='text-gray-700 mb-4'>
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              <PrivacyList
                items={[
                  'Encryption of data in transit (TLS/SSL) and at rest',
                  'Secure authentication with password hashing and JWT tokens',
                  'Role-based access controls for clinic staff and administrators',
                  'Regular security assessments and vulnerability testing',
                  'Employee training on data protection and confidentiality',
                  'Incident response and breach notification procedures',
                  'Secure cloud infrastructure with redundancy and backups',
                  'HIPAA-compliant practices for veterinary health data',
                ]}
              />
              <p className='text-gray-700 mt-4'>
                While we strive to protect your information, no method of transmission over the Internet or electronic
                storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </PrivacySection>

            <PrivacySection title='6. PWA-Specific Privacy Features'>
              <p className='text-gray-700 mb-4'>
                As a Progressive Web Application, we implement additional privacy measures:
              </p>
              <PrivacyList
                items={[
                  'Offline data storage with user consent and encryption',
                  'Local caching for improved performance (automatically cleared periodically)',
                  'Push notification preferences management and opt-out options',
                  'Service worker data handling with strict access controls',
                  'Installation and usage analytics (anonymized)',
                  'Clear data controls for users to manage offline storage',
                ]}
              />
            </PrivacySection>

            <PrivacySection title='7. AI and Machine Learning Privacy'>
              <p className='text-gray-700 mb-4'>Our AI services are designed with privacy in mind:</p>
              <PrivacyList
                items={[
                  'Data anonymization for AI model training and improvement',
                  'User consent required for AI-powered features',
                  'Transparency about AI decision-making and recommendations',
                  'Options to opt-out of AI recommendations while maintaining core service',
                  'Regular AI model privacy and bias assessments',
                  'Breed-specific data aggregation without identifying individual pets',
                  'AI health alerts based on patterns, not shared with third parties',
                ]}
              />
            </PrivacySection>

            <PrivacySection title='8. Your Privacy Rights'>
              <p className='text-gray-700 mb-4'>Depending on your location, you may have the following rights:</p>
              <PrivacyList
                items={[
                  'Access: Request a copy of your personal information',
                  'Correction: Request correction of inaccurate or incomplete data',
                  'Deletion: Request deletion of your personal information (subject to legal obligations)',
                  'Objection: Object to certain processing activities',
                  'Portability: Request transfer of your data to another service',
                  'Consent Withdrawal: Withdraw consent for specific processing',
                  'Opt-Out: Unsubscribe from marketing communications',
                  'AI Opt-Out: Disable AI-powered features while maintaining basic services',
                ]}
              />
              <p className='text-gray-700 mt-4'>
                To exercise these rights, please contact us using the information provided below. We will respond within
                30 days of receiving your request.
              </p>
            </PrivacySection>

            <PrivacySection title='9. Data Retention'>
              <p className='text-gray-700 mb-4'>We retain your information for as long as necessary to:</p>
              <PrivacyList
                items={[
                  'Provide our services and maintain your account',
                  'Comply with veterinary record retention requirements (typically 3-7 years)',
                  'Meet legal and regulatory obligations',
                  'Resolve disputes and enforce agreements',
                  'Improve our services and AI capabilities',
                  'Maintain backup and disaster recovery systems',
                ]}
              />
              <p className='text-gray-700 mt-4'>
                When you delete your account, we will delete or anonymize your personal information within 90 days,
                except where retention is required by law or legitimate business interests.
              </p>
            </PrivacySection>

            <PrivacySection title="10. Children's Privacy">
              <p className='text-gray-700'>
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately. We will take steps to delete such
                information from our systems.
              </p>
            </PrivacySection>

            <PrivacySection title='11. International Data Transfers'>
              <p className='text-gray-700'>
                Your information may be transferred to and processed in countries other than your own, including the
                United States, where data protection laws may differ. We ensure appropriate safeguards are in place to
                protect your information in accordance with this Privacy Policy and applicable data protection laws,
                including GDPR for European users.
              </p>
            </PrivacySection>

            <PrivacySection title='12. Cookies and Tracking Technologies'>
              <p className='text-gray-700 mb-4'>
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <PrivacyList
                items={[
                  'Essential Cookies: Required for basic service functionality',
                  'Analytics Cookies: Help us understand how users interact with the Service',
                  'Preference Cookies: Remember your settings and preferences',
                  'Marketing Cookies: Deliver relevant advertisements (with consent)',
                ]}
              />
              <p className='text-gray-700 mt-4'>
                You can control cookies through your browser settings. Note that disabling certain cookies may limit
                Service functionality.
              </p>
            </PrivacySection>

            <PrivacySection title='13. Third-Party Links'>
              <p className='text-gray-700'>
                Our Service may contain links to third-party websites, including social media platforms and veterinary
                clinic websites. We are not responsible for the privacy practices of these third parties. We encourage
                you to review their privacy policies before providing any personal information.
              </p>
            </PrivacySection>

            <PrivacySection title='14. Changes to This Privacy Policy'>
              <p className='text-gray-700'>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
                legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this
                page and updating the "Last updated" date. For significant changes, we will provide prominent notice or
                seek your consent where required by law. We encourage you to review this Privacy Policy periodically.
              </p>
            </PrivacySection>

            <PrivacySection title='15. California Privacy Rights (CCPA)'>
              <p className='text-gray-700 mb-4'>
                If you are a California resident, you have additional rights under the California Consumer Privacy Act
                (CCPA):
              </p>
              <PrivacyList
                items={[
                  'Right to know what personal information is collected, used, and shared',
                  'Right to delete personal information (subject to exceptions)',
                  'Right to opt-out of the sale of personal information (we do not sell your data)',
                  'Right to non-discrimination for exercising your CCPA rights',
                ]}
              />
            </PrivacySection>

            <PrivacySection title='16. European Privacy Rights (GDPR)'>
              <p className='text-gray-700 mb-4'>
                If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the
                General Data Protection Regulation (GDPR), including those listed in Section 8. We process your data
                based on the following legal grounds:
              </p>
              <PrivacyList
                items={[
                  'Consent: You have given clear consent for specific processing',
                  'Contract: Processing is necessary to fulfill our service agreement',
                  'Legal Obligation: Processing is required to comply with the law',
                  'Legitimate Interests: Processing is necessary for our legitimate business interests',
                ]}
              />
            </PrivacySection>

            <PrivacySection title='17. Contact Us'>
              <p className='text-gray-700 mb-4'>
                If you have any questions about this Privacy Policy, want to exercise your privacy rights, or have
                concerns about how we handle your information, please contact us:
              </p>
              <ContactInfo />
            </PrivacySection>
          </div>
        </div>
      </Container>
    </main>
  );
}
