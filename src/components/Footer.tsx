import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">MicroFin</span>
              <span className="text-yellow-400 text-xl font-bold">Plus</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering communities through accessible financial services since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Financial Street, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@microfinplus.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button type="submit" className="w-full px-4 py-2 bg-yellow-500 text-blue-900 font-medium rounded hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('copyright')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;