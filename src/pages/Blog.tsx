import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('blogTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('blogSubtitle')}</p>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-blue-100">
                Subscribe to our newsletter to receive the latest news, updates, and insights about microfinance and financial inclusion.
              </p>
            </div>
            
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                />
                <button type="submit" className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;