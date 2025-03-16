import React from 'react';
import './Sections.css';

function CV() {
    const handleViewCV = () => {
      // Open the PDF in a new tab
      window.open('/cv-thor.pdf');
  };
  return (
    <div className="section-container cv-container">
      <h2 className="section-title">Starfsreynsla</h2>
      
      <div className="experience-item">
        <div className="experience-period">2020 — </div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://dropp.is" target="_blank" rel="noopener noreferrer">
                Skrifstofuvinna og sendill hjá Dropp ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2018 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://cosan.info" target="_blank" rel="noopener noreferrer">
            Skrifstofuvinna hjá Cosan ↗
          </a>
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2018</div>
        <div className="experience-details">
          <div className="experience-title">
            Byggingarvinnu hjá Fimir ehf ↗
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>
      
      <h2 className="section-title education-title">Menntun</h2>
      
      <div className="experience-item">
        <div className="experience-period">2022 —</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://hi.is/tolvunarfraedi" target="_blank" rel="noopener noreferrer">
            B.Sc. í tölvunarfræði í Háskóla íslands ↗
          </a>
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-period">2018 — 2021</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://www.kvenno.is/is/nam-kennsla/namsbrautir-1/natturuvisindabraut-1" target="_blank" rel="noopener noreferrer">
            Náttúruvísindabraut í Kvennaskólanum í Reykjavík ↗
          </a>
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-period">2018-2018</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://www.fg.is/is/nam-kennsla/namsbraut/natturufraedibraut" target="_blank" rel="noopener noreferrer">
            Náttúrufræðibraut í Fjölbrautaskóla Garðabæjar ↗
          </a>
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-period">2017-2017</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://afk.no/stabekk-vgs/utdanningstilbud/studiespesialisering/" target="_blank" rel="noopener noreferrer">
          Stabekk videregående skole ↗
          </a>
          </div>
          <div className="experience-location">Stabekk, Noregur</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2014-2017</div>
        <div className="experience-details">
          <div className="experience-title">
          <a href="https://www.ramstadskole.no" target="_blank" rel="noopener noreferrer">
          Ramstad ungdomsskole ↗
          </a>
          </div>
          <div className="experience-location">Stabekk, Noregur</div>
        </div>
      </div>

      <h2 className="section-title skills-title">Annað</h2>
      
      <div className="experience-item">
        <div className="experience-period"><strong>Tungumál</strong> </div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://dropp.is" target="_blank" rel="noopener noreferrer">
            Íslenska, Norska og Enska
            </a>
          </div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period"> <strong>Ég hef ágætis<br/> reynslu í</strong> </div>
        <div className="experience-details">
          <div className="experience-title">
            <strong>Forritun:</strong> Java, Python, Kotlin, Flutter, JavaScript, R, Morpho
            <p><strong>Bakendi:</strong> Node.js, Express, PostgreSQL, REST API, JWT</p>
            <p><strong>Vefforritun:</strong> React, HTML, CSS</p>
            <p><strong>Blockchain:</strong> Grunnskilningur á snjallsamningum og dApps</p>
          </div>
        </div>
      </div>

      
      <div className="experience-item">
  <div className="experience-period"><strong>Áhugamál</strong></div>
  <div className="experience-details">
    <ul className="cv-skills">
      <li>Tækni og nýsköpun</li>
      <li>Fótbolti, hlaup og líkamsrækt</li>
      <li>Öpp og vefsíðugerð</li>
      <li>Fjármál</li>
      <li>Forritun</li>
      <li>Gervigreind og LLM-módel</li>
    </ul>
  </div>
</div>

      
<div className="download-cv">
        <button 
          className="download-button"
          onClick={handleViewCV}
        >
          Skoða ferilskrá
        </button>
      </div>
    </div>
  );
}

export default CV;