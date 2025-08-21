
import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../common/ThemeContext';
import './Sidebar.css';
import logoDark from '../../assets/logo.png';  // For dark mode
import logoLight from '../../assets/logo-whitemode.png';

function Sidebar() {
  const { theme } = useTheme();
  
  return (
    <aside className={`sidebar ${theme === 'dark' ? 'sidebar-dark' : ''}`}>
      <div className="sidebar-header">
      <img 
          src={theme === 'dark' ? logoDark : logoLight} 
          alt="Thor Sanchez" 
          className="logo-image" 
        />
      </div>

      <nav className="sidebar-nav">
        <Link to="about" smooth={true} duration={500} offset={-50}>
          About
        </Link>
        <Link to="cv" smooth={true} duration={500} offset={-50}>
          CV
        </Link>
      </nav>
      
      <div className="sidebar-section">
        <h2>Verkefni</h2>
        <nav className="sidebar-nav">
          {/* vill bæta við Finndu í þetta section */}
          <Link to="verkefnivinnsla" smooth={true} duration={500} offset={-50}>
              Verkefni í vinnslu
            </Link>
          <Link to="verkefni" smooth={true} duration={500} offset={-50}>
            Github Verkefni
          </Link>
        </nav>
      
      </div>
      
      <div className="sidebar-section">
        <h2>HAFÐU SAMBAND</h2>
        <nav className="sidebar-nav">
          <a href="mailto:sanchezthor@gmail.com">Senda póst</a>
          <a href="https://github.com/thorsanchez" target="_blank" rel="noopener noreferrer">Github</a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;