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
            Skrifstofuvinna og sendill at Dropp ↗
          </div>
          <div className="experience-location">Reykjavík, ísland</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2018 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
            Skrifstofuvinna hjá Cosan ↗
          </div>
          <div className="experience-location">Reykjavík, ísland</div>
        </div>
      </div>
      
      <h2 className="section-title education-title">Menntun</h2>
      
      <div className="experience-item">
        <div className="experience-period">2022 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
            B.Sc. í tölvunarfræði í Háskóla íslands ↗
          </div>
          <div className="experience-location">Reykjavík, ísland</div>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Skills</h2>
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