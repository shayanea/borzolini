import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Footer } from '@/components/sections/footer';
import Link from 'next/link';
import { ShareButton } from './share-button';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Pet Healthcare: AI-Powered Monitoring',
    excerpt:
      'Explore how AI-powered monitoring systems are transforming pet healthcare from reactive to proactive care. Learn about continuous health surveillance, tele-first veterinary consultations, and the future of personalized pet wellness.',
    content: `
      <h2>Revolutionizing Pet Care with AI Technology</h2>
      <p>Named after our beloved companion Borzolini, we're witnessing a paradigm shift in pet healthcare. Artificial intelligence is no longer a futuristic concept—it's actively transforming how we monitor, understand, and care for our furry, feathered, and scaled family members.</p>

      <p>The pet healthcare industry has traditionally relied on reactive care models, where issues are addressed after they become apparent. However, AI-powered monitoring systems are ushering in a new era of proactive, personalized pet care that can detect health anomalies before they become serious problems.</p>

      <h3>The Borzolini Approach: Smart Care for All Pets</h3>
      <p>Our platform represents a comprehensive approach to AI-powered pet healthcare, designed to serve all pets—from dogs and cats to birds, reptiles, and exotic companions. The core philosophy centers around three fundamental principles:</p>

      <ul>
        <li><strong>Continuous Monitoring:</strong> 24/7 AI surveillance of vital signs, behavior patterns, and activity levels</li>
        <li><strong>Breed-Specific Intelligence:</strong> Tailored recommendations based on species and breed characteristics</li>
        <li><strong>Predictive Analytics:</strong> Early detection systems that identify potential health issues before they manifest</li>
      </ul>

      <h3>AI Monitoring: Beyond Basic Tracking</h3>
      <p>Modern AI systems go far beyond simple activity tracking. Advanced machine learning algorithms can analyze complex behavioral patterns, detect subtle changes in eating habits, monitor sleep quality, and even identify early signs of stress or anxiety. These systems provide veterinarians with unprecedented insight into each pet's unique health profile.</p>

      <p>For example, our AI can detect changes in a cat's litter box usage patterns that might indicate urinary tract issues, or monitor a dog's gait for early signs of arthritis. This level of detail was previously impossible without constant human observation.</p>

      <h3>Tele-First Veterinary Care</h3>
      <p>The integration of AI monitoring with telemedicine has created a powerful combination. When AI systems detect anomalies, they can automatically schedule virtual consultations with qualified veterinarians. This tele-first approach reduces stress for pets (and their owners) while providing immediate access to professional care.</p>

      <p>Our platform includes sophisticated triage systems that can assess the urgency of detected issues and route them to appropriate care levels—from AI-guided home care recommendations to immediate in-person veterinary visits.</p>

      <h3>Security and Privacy in Pet Healthcare</h3>
      <p>With sensitive health data being continuously monitored, security is paramount. Our platform implements enterprise-grade encryption, HIPAA-aligned privacy protocols, and comprehensive audit trails. Pet owners can trust that their companions' health information is protected with the same rigor as human medical data.</p>

      <h3>Real-World Impact: Stories from the Field</h3>
      <p>The impact of AI-powered pet healthcare is already evident. Early detection systems have helped identify conditions ranging from diabetes in cats to heart murmurs in dogs, often months before traditional methods would have caught them. This early intervention has not only improved health outcomes but also reduced overall veterinary costs.</p>

      <p>Veterinarians report that AI-generated insights help them provide more targeted care, while pet owners appreciate the peace of mind that comes from continuous monitoring and proactive health management.</p>

      <h3>Looking Forward: The Future of Pet Healthcare</h3>
      <p>As AI technology continues to evolve, we can expect even more sophisticated capabilities. Computer vision analysis for wound healing, predictive nutrition planning based on individual metabolism, and advanced behavioral analysis for mental health monitoring are all on the horizon.</p>

      <p>The future of pet healthcare isn't just about treating illness—it's about preventing it, optimizing wellness, and ensuring that every pet receives the personalized care they deserve. Through AI-powered monitoring and tele-first care models, we're building a world where every pet can live their healthiest, happiest life.</p>

      <p>At Borzolini, we believe that technology should enhance the human-animal bond, not replace it. AI serves as a powerful tool that empowers pet owners and veterinarians to provide the best possible care for our beloved companions.</p>
    `,
    author: 'Shayan Araghi',
    publishedAt: '2025-08-17',
    readTime: '12 min read',
    category: 'Technology',
    image: '/images/blog/ai-pet-health.jpg',
    slug: 'future-pet-healthcare-ai-monitoring',
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Borzolini Blog',
    };
  }

  return {
    title: `${post.title} | Borzolini Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <ErrorBoundary>
      <main className='min-h-screen bg-white'>
        {/* Article Header */}
        <section className='pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
          <Container>
            <div className='max-w-4xl mx-auto'>
              <div className='flex items-center justify-between mb-8'>
                <Link
                  href='/blog'
                  className='inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200'
                >
                  <ArrowLeft className='w-4 h-4' />
                  Back to Blog
                </Link>

                <div className='flex items-center gap-3'>
                  <ShareButton
                    title={post.title}
                    excerpt={post.excerpt}
                    className='border-slate-200'
                    size='sm'
                    variant='outline'
                  />
                </div>
              </div>

              <div className='mb-12'>
                <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block'>
                  {post.category}
                </span>

                <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight'>
                  {post.title}
                </h1>

                <p className='text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl'>{post.excerpt}</p>

                {/* Article Meta */}
                <div className='flex flex-wrap items-center gap-6 text-slate-500'>
                  <div className='flex items-center gap-2'>
                    <User className='w-5 h-5' />
                    <span className='font-medium'>{post.author}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Calendar className='w-5 h-5' />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className='py-12'>
          <Container>
            <div className='max-w-4xl mx-auto'>
              {/* Featured Image */}
              <div className='aspect-video rounded-2xl mb-16 relative overflow-hidden shadow-lg'>
                <img
                  src='https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt='Cat receiving AI-powered healthcare monitoring'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20' />
              </div>

              {/* Article Body */}
              <div
                className='prose prose-lg max-w-none
                  prose-headings:text-slate-900 prose-headings:font-bold prose-headings:leading-tight
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:font-bold prose-h2:tracking-tight
                  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:font-semibold
                  prose-ul:mb-6 prose-li:mb-2 prose-li:leading-relaxed
                  prose-strong:text-slate-900 prose-strong:font-semibold text-'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Footer */}
              <div className='mt-20 pt-12 border-t border-slate-200'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                  <div className='flex items-center gap-4'>
                    <ShareButton
                      title={post.title}
                      excerpt={post.excerpt}
                      className='border-slate-200'
                      variant='outline'
                    >
                      Share Article
                    </ShareButton>
                  </div>

                  <Link href='/blog'>
                    <Button variant='primary'>Back to Blog</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </ErrorBoundary>
  );
}
