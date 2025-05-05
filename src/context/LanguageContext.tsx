import React, { createContext, useState, useContext, ReactNode } from 'react';
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
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const langData = translations[language as keyof typeof translations];
    return langData[key as keyof typeof langData] || key;
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