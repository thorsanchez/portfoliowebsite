
import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../common/ThemeContext';
import './Sidebar.css';

function Sidebar() {
  const { theme } = useTheme();
  
  return (
    <aside className={`sidebar ${theme === 'dark' ? 'sidebar-dark' : ''}`}>
      <div className="sidebar-header">
        <h1>Portfolio</h1>
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
        <h2>Github</h2>
        <nav className="sidebar-nav">
          <Link to="verkefni" smooth={true} duration={500} offset={-50}>
            Verkefni
          </Link>
        </nav>
      </div>
      
      <div className="sidebar-section">
        <h2>HERBÆTAFLOTTUSTUVERK</h2>
        <nav className="sidebar-nav">
          <a href="#" target="_blank" rel="noopener noreferrer">VANTAR</a>
          <a href="#" target="_blank" rel="noopener noreferrer">VERKEFNI</a>
          <a href="#" target="_blank" rel="noopener noreferrer">TILAÐBIRTA</a>
          <a href="#" target="_blank" rel="noopener noreferrer">:(</a>
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