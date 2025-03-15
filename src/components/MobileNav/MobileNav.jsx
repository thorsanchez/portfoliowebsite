import React, { useState } from 'react';
import './MobileNav.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector('.sidebar').classList.toggle('active');
  };
  
  return (
    <div className="mobile-nav">
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
    </div>
  );
};

export default MobileNav;