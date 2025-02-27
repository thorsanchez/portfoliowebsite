import React from 'react';
import { useTheme } from '../common/ThemeContext';
import twitterIcon from '../assets/twitter-light.svg';
import githubIcon from '../assets/github-light.svg';
import linkedinIcon from '../assets/linkedin-light.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import './Sections.css';

function About() {
  const { toggleTheme, theme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="theme-toggle">
          <img 
            src={themeIcon} 
            alt="Toggle theme" 
            onClick={toggleTheme}
            className="theme-icon"
          />
        </div>
        
        <div className="content-wrapper">
          <h1 className="name-title">
            Thor Sanchez 
          </h1>

          
          <div className="social-links">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter icon"/>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub icon"/>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn icon"/>
            </a>
          </div>
          
          <div className="about-content">
            <h2>INFO</h2>
            <p>
                Ég er nemandi í tölvunarfræði við Háskóla Íslands 
                og mun útskrifast vorið 2025.
            </p>
            <p>
                Ég hef lengi haft áhuga á að leysa raunveruleg vandamál með tækni og þróa notendavænar 
                lausnir sem auðvelda daglegt líf. Í námi mínu hef ég lagt áherslu á hugbúnaðarþróun, 
                gagnagreiningu og skilvirka hönnun kerfa. Mig hefur alltaf heillað hvernig hægt er 
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
    </div>
  );
}

export default About;