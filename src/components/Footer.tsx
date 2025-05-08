import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../images/logotrasparent.png'; // Adjust path if needed

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Harar Microfinance Logo"
                className="h-20 w-20 mb-2"
              />
              <h2 className="text-lg font-bold text-white">{t('institutionTitle')}</h2>
              <h2 className="text-lg font-bold text-white">{t('institutionTitle2')}</h2>
            </div>

            <div className="flex space-x-4 mt-4 py-2">
              <a
                href="https://www.facebook.com/people/Harar-MicroFinance-Institution/61565622741044/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/hararmfi/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harar-microfinance-institution-s-c-420141329/"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4 py-2">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === 'home' ? '' : item}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4 py-2">{t('contactUs')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                <span>
                  {t('location') || 'Charleville Ave. ,Harar'}:<br />
                  {t('Ethiopia') || 'Ethiopia'}

                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+251256663745" className="hover:underline">+251 256 663745</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:Contacthararmfi@hararmfi.com" className="hover:underline">Contacthararmfi@hararmfi.com</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">{t('workingHours')}</h3>
            <div className="text-gray-300 mb-4">

              <p className='font-semibold pb-4'>{t('mondayToFriday') || 'Monday – Friday:'}</p>
              <p className="pb-4 pl-4">{t('morningHours') || 'Morning: 8:00 AM – 12:00 AM'}</p>
              <p className="pb-4 pl-4 ">{t('afternoonHours') || 'Afternoon: 2:00 PM – 5:30 PM'}</p>
              <p className='font-semibold pb-4'>{t('Saturday') || 'Saturday'}</p>
              <p className=" pl-4">{t('saturdayHours') || 'Saturday: 8:00 AM – 12:00 AM'}</p>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-right">©2025 {t('copyright')}</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
