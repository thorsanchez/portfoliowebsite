import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();

  return (
    <div className="language-toggle-minimal">
      {languages.map(lang => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;