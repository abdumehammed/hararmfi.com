import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import BlogPostCard from '../components/BlogPostCard';
import { services } from '../data/services';
import { blogPosts } from '../data/blogPosts';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fadeIn">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fadeIn animation-delay-200">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
              <Link
                to="/services"
                className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
              >
                {t('getStarted')}
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-white py-10 relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">25,000+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">$15M+</h3>
              <p className="text-gray-600">Microloans Disbursed</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
            >
              View all services
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Empowering Communities Through Financial Inclusion
              </h2>
              <p className="text-gray-600 mb-6">
                At MicroFinPlus, we believe that access to financial services is a fundamental right. Our mission is to provide individuals and small businesses with the resources they need to thrive economically.
              </p>
              <p className="text-gray-600 mb-8">
                Through our comprehensive suite of financial products and education programs, we've helped thousands of entrepreneurs start or expand their businesses, families secure their financial futures, and communities build economic resilience.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              >
                Learn about our impact
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Community impact" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('blogTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('blogSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
            >
              View all articles
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let us help you achieve your financial goals with our personalized services and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;