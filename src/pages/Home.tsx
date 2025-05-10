import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

import ServiceCard from '../components/ServiceCard';
import BlogPostCard from '../components/BlogPostCard';
import Carousel from '../components/Carousel';
import FactStats from '../components/FactStats';
import WhyUsSection from '../components/WhyUsSection';

import { services } from '../data/services';
import { blogPosts } from '../data/blogPosts';
import servicess from '../components/servicess';
const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Carousel />
      {/* Why Us Section */}
      <WhyUsSection />
      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
                {t('whyus')}
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                {t('whyusparagraph1')}
              </p>
              <p className="text-gray-600 mb-8 text-justify">
                {t('whyusparagraph2')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              >
                {t('More')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="src/images/HMFI_cover.jpg"
                alt={t('whyusImageAlt')} // Add alt text translation
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FactStats />
      {/* Services Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl  font-bold text-blue-900 mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.slice(0, 4).map(service => 
            (
              <ServiceCard key={service.id} service={service} />
            )
          )
            }
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
            >
              {t('ViewAllServices')}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section> */}


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
              {t('ViewAllArticles')}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      <servicess></servicess>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('ReadyToGetStarted')}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('CTASubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              {t('ExploreOurServices')}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {t('ContactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;