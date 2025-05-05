import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Calendar } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-block bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
        >
          {t('readMore')}
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;