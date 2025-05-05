import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { getBlogPost, blogPosts } from '../data/blogPosts';
import { useLanguage } from '../context/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const post = getBlogPost(slug || '');
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div className="max-w-3xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-100 hover:text-white mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-blue-100 text-sm">
              <div className="flex items-center mr-6">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Microfinance</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Financial Inclusion</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Community Development</span>
            </div>
          </div>
          
          {/* Author */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600 text-sm">
                  Content Writer at MicroFinPlus
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation between posts */}
        <div className="max-w-3xl mx-auto mt-8 flex justify-between">
          {previousPost ? (
            <Link 
              to={`/blog/${previousPost.slug}`}
              className="flex items-center text-blue-700 hover:text-blue-900"
            >
              <ArrowLeft size={16} className="mr-2" />
              Previous Article
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextPost ? (
            <Link 
              to={`/blog/${nextPost.slug}`}
              className="flex items-center text-blue-700 hover:text-blue-900"
            >
              Next Article
              <ArrowRight size={16} className="ml-2" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;