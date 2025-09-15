import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import './MobileNav.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  const menuText = {
    is: { menu: "Valmynd" },
    en: { menu: "Menu" },
    no: { menu: "Meny" }
  };

  const text = menuText[currentLanguage];
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector('.sidebar').classList.toggle('active');
  };
  
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-controls">
        <LanguageToggle />
      </div>
      
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
        aria-label={text.menu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
    </div>
  );
};

export default MobileNav;