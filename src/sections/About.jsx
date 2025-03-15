import headerImg from "../assets/headerimg.png";
import headerImg2 from "../assets/headerimg2.png";
import headerImg3 from "../assets/headerimg3.png";
import React from 'react';
import { useTheme } from '../common/ThemeContext';
import githubIconDark from '../assets/github-dark.svg';
import linkedinIconDark from '../assets/linkedin-dark.svg';
import githubIconLight from '../assets/github-light.svg';
import linkedinIconLight from '../assets/linkedin-light.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import './Sections.css';

function About() {
  const { toggleTheme, theme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  
  return (
    <div className="section-container">
      <div className="subtle-banner">
        Síðan er ennþá í vinnslu..
      </div>

      <div className="theme-toggle">
        <img 
          src={themeIcon} 
          alt="Toggle theme" 
          onClick={toggleTheme}
          className="theme-icon"
        />
      </div>
      
      <div className="hero-content">
        <div className="name-container">
          <h1 className="name-title">
            Thor<br />Sanchez
          </h1>
          
          <div className="social-links">
            <a href="https://github.com/thorsanchez" target="_blank" rel="noopener noreferrer">
              <img src={theme === 'light' ? githubIconLight : githubIconDark} alt="GitHub icon"/>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={theme === 'light' ? linkedinIconLight : linkedinIconDark} alt="LinkedIn icon"/>
            </a>
          </div>
        </div>
        
        <div className="image-gallery">
          <div className="image-container image-left">
            <img src={headerImg} alt="" className="gallery-image" />
          </div>
          <div className="image-container image-center">
            <img src={headerImg2} alt="" className="gallery-image" />
          </div>
          <div className="image-container image-right">
            <img src={headerImg3} alt="" className="gallery-image" />
          </div>
        </div>
      </div>
      
      <div className="info-section">
        <h2 className="section-label">UM MIG</h2>
        <div className="about-content">
          <p>
            Ég er nemandi í tölvunarfræði við Háskóla Íslands 
            og mun útskrifast vorið 2025.
          </p>
          <p>
            Ég hef lengi haft áhuga á að leysa raunveruleg vandamál með tækni og þróa notendavænar 
            lausnir sem auðvelda daglegt líf. Í námi mínu hef ég lagt áherslu á hugbúnaðarþróun, 
            gagnagreiningu og skilvirka hönnun kerfa. Það hefur alltaf heillað mig hvernig hægt er 
            að nýta forritun og gögn til að bæta ákvarðanatöku og auka skilvirkni.
          </p>
          <p>
            Ástríða mín liggur í að þróa hagnýtar og öruggar lausnir með áherslu á góða notendaupplifun. 
            Ég er sífellt að leita að nýjum áskorunum sem ýta undir vöxt og nýsköpun, og hef metnað 
            fyrir því að skapa tækni sem skiptir máli.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;