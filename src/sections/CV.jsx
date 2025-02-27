import React from 'react';
import './Sections.css';

function CV() {
  return (
    <div className="section-container">
      <div className="content-wrapper">
        <h1>Ferilskrá</h1>
        
        <div className="cv-content">
          <div className="cv-section">
            <h2>Menntun</h2>
            <div className="cv-item">
              <h3>Háskóli Íslands</h3>
              <p className="cv-date">2022 - 2025 (Áætluð útskrift)</p>
              <p>B.Sc. í Tölvunarfræði</p>
              <p>Viðeigandi námskeið: Hugbúnaðarþróun, Gagnaskipan & Reiknirit, Gagnagrunir, Vélanámsfræði</p>
            </div>
          </div>
          
          <div className="cv-section">
            <h2>Reynsla</h2>
            <div className="cv-item">
              <h3>Skrifstofuvinna og sendill</h3>
              <p className="cv-company">Dropp</p>
              <p className="cv-date">2020 - Núverandi</p>
              <p>Unnið við skrifstofustörf og sendingar. Skipulag og afhending sendinga með skilvirkni og fagmennsku.</p>
            </div>
          </div>
          
          <div className="cv-section">
            <h2>Hæfni</h2>
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
      </div>
    </div>
  );
}

export default CV;
