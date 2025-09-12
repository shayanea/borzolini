import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta-section';
import { Container } from '@/components/ui/container';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Footer } from '@/components/sections/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Borzolini',
  description:
    'Stay updated with the latest insights on pet healthcare, veterinary technology, and smart pet care tips from Borzolini.',
};

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Pet Healthcare: AI-Powered Monitoring',
    excerpt:
      'Explore how AI-powered monitoring systems are transforming pet healthcare from reactive to proactive care. Learn about continuous health surveillance, tele-first veterinary consultations, and the future of personalized pet wellness.',
    content: 'Artificial intelligence is transforming the way we care for our pets...',
    author: 'Shayan Araghi',
    publishedAt: '2025-08-17',
    readTime: '12 min read',
    category: 'Technology',
    image: '/images/blog/ai-pet-health.jpg',
    slug: 'future-pet-healthcare-ai-monitoring',
  },
];

export default function BlogPage() {
  return (
    <ErrorBoundary>
      <main className='min-h-screen bg-gradient-to-b from-white to-slate-50/50'>
        {/* Blog Header */}
        <section className='pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
          <Container>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='flex items-center justify-center mb-6'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200'
                >
                  <ArrowLeft className='w-4 h-4' />
                  Back to Home
                </Link>
              </div>

              <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>Pet Care Insights</h1>
              <p className='text-xl text-slate-600 mb-8 max-w-2xl mx-auto'>
                Stay informed with the latest trends, tips, and innovations in pet healthcare. Expert insights to help
                you provide the best care for your furry companions.
              </p>
            </div>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <section className='py-16'>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
                >
                  {/* Post Image */}
                  <div className='aspect-video relative overflow-hidden'>
                    <img
                      src='https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      alt='Cat receiving AI-powered healthcare monitoring'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20' />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className='p-8'>
                    <h2 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200'>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className='text-slate-600 mb-6 leading-relaxed text-sm'>{post.excerpt}</p>

                    {/* Post Meta */}
                    <div className='flex items-center gap-4 text-sm text-slate-500 mb-6'>
                      <div className='flex items-center gap-2'>
                        <User className='w-4 h-4' />
                        <span className='text-xs'>{post.author}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        <span className='text-xs'>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='w-4 h-4' />
                        <span className='text-xs'>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant='outline'
                        className='w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300'
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
