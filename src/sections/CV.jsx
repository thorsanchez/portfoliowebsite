import React from 'react';
import './Sections.css';

function CV() {
  return (
    <div className="section-container cv-container">
      <h2 className="section-title">Starfsreynsla</h2>
      
      <div className="experience-item">
        <div className="experience-period">2020 — </div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://dropp.is" target="_blank" rel="noopener noreferrer">
                Skrifstofuvinna og sendill at Dropp ↗
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
        <div className="experience-period">Maí - ágúst 2018</div>
        <div className="experience-details">
          <div className="experience-title">
            Byggingarvinnu hjá Fimir ehf heilt sumar ↗
          </div>
          <div className="experience-location">Reykjavík, Ísland</div>
        </div>
      </div>
      
      <h2 className="section-title education-title">Menntun</h2>
      
      <div className="experience-item">
        <div className="experience-period">2022 — 2025</div>
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
      
      <h2 className="section-title skills-title">Skills</h2>
      <div className="skills-section">
        <ul className="cv-skills">
          <li>Hugbúnaðarþróun</li>
          <li>JavaScript (React, Node.js)</li>
          <li>PostgreSQL & NoSQL Gagnagrunir</li>
          <li>API Hönnun & Þróun</li>
          <li>Skýjalausnir</li>
          <li>Gagnagreining</li>
        </ul>
      </div>
      
      <div className="download-cv">
        <a href="/assets/cv.pdf" download>
          <button className="download-button">
            Hlaða niður ferilskrá
          </button>
        </a>
      </div>
    </div>
  );
}

export default CV;