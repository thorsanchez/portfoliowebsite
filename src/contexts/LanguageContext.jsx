import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
    //hafa default is
  const [currentLanguage, setCurrentLanguage] = useState('is');

  const languages = [
    { code: 'is', name: 'IS', flag: '🇮🇸' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'no', name: 'NO', flag: '🇳🇴' }
  ];

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('selectedLanguage', languageCode);
  };

  // sækja saved þegar loada
  React.useEffect(() => {
    const saved = localStorage.getItem('selectedLanguage');
    if (saved) {
      setCurrentLanguage(saved);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      languages, 
      changeLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};