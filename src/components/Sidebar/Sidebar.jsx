
import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../common/ThemeContext';
import './Sidebar.css';
import logoDark from '../../assets/logo.png';  // For dark mode
import logoLight from '../../assets/logo-whitemode.png';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../LanguageToggle';

function Sidebar() {
  const { theme } = useTheme();
  const {currentLanguage} = useLanguage()

  const navText = {
    is: { 
      about: "Um mig", 
      cv: "Ferilskrá",
      listening: "Hlusta",
      projects: "Verkefni",
      inProgress: "Verkefni í vinnslu",
      githubProjects: "Github Verkefni",
      contact: "HAFÐU SAMBAND",
      sendEmail: "Senda póst"
    },
    en: { 
      about: "About", 
      cv: "CV",
      listening: "Listening",
      projects: "Projects",
      inProgress: "Projects in Progress",
      githubProjects: "Github Projects",
      contact: "GET IN TOUCH",
      sendEmail: "Send Email"
    },
    no: { 
      about: "Om meg", 
      cv: "CV",
      listening: "Nylig spilt",
      projects: "Prosjekter",
      inProgress: "Prosjekter under arbeid",
      githubProjects: "Github Prosjekter",
      contact: "TA KONTAKT",
      sendEmail: "Send e-post"
    }
  };

  const text = navText[currentLanguage];
  
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
          {text.about}
        </Link>
        <Link to="verkefnivinnsla" smooth={true} duration={500} offset={-50}>
          {text.inProgress}
        </Link>
        <Link to="verkefni" smooth={true} duration={500} offset={-50}>
          {text.githubProjects}
        </Link>
        <Link to="cv" smooth={true} duration={500} offset={-50}>
          {text.cv}
        </Link>
        <Link to="listening" smooth={true} duration={500} offset={-50}>
          {text.listening}
        </Link>
        <a href="mailto:sanchezthor@gmail.com">{text.sendEmail}</a>
        <a href="https://github.com/thorsanchez" target="_blank" rel="noopener noreferrer">Github</a>
      </nav>

      <div className="language-toggle-container">
        <LanguageToggle />
      </div>
    </aside>
  );
}

export default Sidebar;