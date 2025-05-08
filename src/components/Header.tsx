import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Topbar from './topbar';



const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, changeLanguage, languageOptions, currentLanguage } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsLanguageMenuOpen(false);
  };

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    setIsLanguageMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
    {/* Topbar component */}
    <Topbar />

    <header className="sticky top-0 z-40 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex-1 flex justify-start">
    <Link to="/" className="flex items-center space-x-3" onClick={closeMenus}>
      <img src="/src/images/logotrasparent.png" alt="Logo" className="h-12 w-12 rounded-full" />
      <span className="text-xl font-bold text-blue-900 leading-tight text-center">
      {t('institutionTitle')}<br />{t('institutionTitle2')}
      </span>
    </Link>
  </div>

        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-blue-700 ${isActive('/') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            {t('home')}
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-blue-700 ${isActive('/about') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            {t('about')}
          </Link>
          <Link 
            to="/services" 
            className={`text-sm font-medium transition-colors hover:text-blue-700 ${isActive('/services') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            {t('services')}
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium transition-colors hover:text-blue-700 ${isActive('/blog') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            {t('blog')}
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-blue-700 ${isActive('/contact') ? 'text-blue-700' : 'text-gray-700'}`}
          >
            {t('contact')}
          </Link>
          
          {/* Language Selector - Desktop */}
          <div className="relative">
            <button 
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              <Globe size={18} />
              <span>{currentLanguage.flag}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {languageOptions.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                        currentLanguage.code === lang.code ? 'bg-gray-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Language Selector - Mobile */}
          <button 
            onClick={toggleLanguageMenu}
            className="flex items-center text-gray-700"
          >
            <Globe size={20} />
            <span className="ml-1">{currentLanguage.flag}</span>
          </button>
          
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors hover:text-blue-700 ${isActive('/') ? 'text-blue-700' : 'text-gray-700'}`}
              onClick={closeMenus}
            >
              {t('home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium transition-colors hover:text-blue-700 ${isActive('/about') ? 'text-blue-700' : 'text-gray-700'}`}
              onClick={closeMenus}
            >
              {t('about')}
            </Link>
            <Link 
              to="/services" 
              className={`text-base font-medium transition-colors hover:text-blue-700 ${isActive('/services') ? 'text-blue-700' : 'text-gray-700'}`}
              onClick={closeMenus}
            >
              {t('services')}
            </Link>
            <Link 
              to="/blog" 
              className={`text-base font-medium transition-colors hover:text-blue-700 ${isActive('/blog') ? 'text-blue-700' : 'text-gray-700'}`}
              onClick={closeMenus}
            >
              {t('blog')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-base font-medium transition-colors hover:text-blue-700 ${isActive('/contact') ? 'text-blue-700' : 'text-gray-700'}`}
              onClick={closeMenus}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      )}
      
      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && (
        <div className="md:hidden bg-white border-t py-2 px-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {languageOptions.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`py-2 text-left flex items-center ${
                  currentLanguage.code === lang.code ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;