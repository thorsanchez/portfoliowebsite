
import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../common/ThemeContext';
import './Sidebar.css';
import logo from '../../assets/logo.png';

function Sidebar() {
  const { theme } = useTheme();
  
  return (
    <aside className={`sidebar ${theme === 'dark' ? 'sidebar-dark' : ''}`}>
      <div className="sidebar-header">
      <img src={logo} alt="Thor Sanchez" className="logo-image" />
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
          <Link to="verkefni" smooth={true} duration={500} offset={-50}>
            Github Verkefni
          </Link>
        </nav>
      </div>
      
      <div className="sidebar-section">
        <h2>HAFÐU SAMBAND</h2>
        <nav className="sidebar-nav">
          <a href="mailto:sanchezthor@gmail.com">Senda póst</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;