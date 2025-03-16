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
          <div className="image-container image-center">
            <img src={headerImg2} alt="" className="gallery-image" />
          </div>
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
          Ég er 24 ára tölvunarfræðinemi við Háskóla Íslands. 
          Ég hef gaman af því að fikta í nýrri tækni og forrita
          eitthvað sem ekki bara virkar vel, heldur gerir upplifun notenda betri.
          </p>
          <p>
          Ég hef mest verið að vinna í framendaforritun, en markmiðið er að verða fullstack forritari. 
          Í náminu hef ég unnið í nokkrum fullstack verkefnum, bæði einn og í teymi, 
          þar sem ég hef tekist á við allt frá því að hanna flott viðmót yfir í að gera 
          bakenda með gagnagrunnum og API-um. 
          </p>
          <p>
          Þegar ég er ekki að kóða, þá fylgist ég með fótboltanum, hlutabréfamarkaðina og 
          tækniheiminum. Ég hef alltaf verið forvitinn um hvernig tölvur og gögn geta 
          verið nýtt til að bæta ákvarðanatöku, hvort sem það er í fjármálum, heilsu eða 
          íþróttum. Ég nýt þess að kafa ofan í nýja hluti, fylgjast með þróun 
          markaða og greina hvernig tækni getur haft áhrif á framtíðina – og ef ég er 
          ekki að því, þá er líklegt að ég sé að horfa á Liverpool spila.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;