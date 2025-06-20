import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, languages } from '../i18n/translations';
import { LanguageOption } from '../types';

interface LanguageContextType {
  language: string;
  t: (key: string) => string;
  changeLanguage: (code: string) => void;
  languageOptions: LanguageOption[];
  currentLanguage: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: () => '',
  changeLanguage: () => {},
  languageOptions: languages,
  currentLanguage: languages[0],
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
  }, [language]);

  const t = (key: string): string => {
    const langData = translations[language as keyof typeof translations];
    const value = langData[key as keyof typeof langData];
    
    // If translation doesn't exist, try English as fallback
    if (value === undefined && language !== 'en') {
      const englishData = translations.en;
      return englishData[key as keyof typeof englishData] || key;
    }
    
    return value || key;
  };

  const changeLanguage = (code: string) => {
    if (translations[code as keyof typeof translations]) {
      setLanguage(code);
    }
  };

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        t, 
        changeLanguage, 
        languageOptions: languages,
        currentLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};