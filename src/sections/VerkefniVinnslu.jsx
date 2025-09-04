import React from 'react';
import finnduImage from '../assets/finndu_mynd.svg';

function Verkefnivinnsla() {
  const projects = [
    {
        id: 1,
        name: "Finndu Marketplace",
        image: finnduImage,
    },
    {
      id: 2,
      name: "Veður app",
      backgroundColor: "#000000",
    },
    {
      id: 3,
      name: "Eignasafn app",
      backgroundColor: "#000000",
    }
  ];

  const renderProjectContent = (project) => {
    if (project.name === "Finndu Marketplace") {
      return (
        <div
          className="project-card-background"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      );
    } else if (project.backgroundColor) {
      return (
        <div
          className="project-card-background"
          style={{
            backgroundColor: project.backgroundColor
          }}
        />
      );
    } else {
      return (
        <div
          className="project-card-background"
          style={{
            backgroundImage: `${project.gradient}, url(${project.image})`,
            backgroundBlendMode: 'overlay'
          }}
        />
      );
    }
  };

  return (
    <div className="section-container verkefnivinnsla-section">
      <div className="content-wrapper">
        <h2 className="section-title">Verkefni í vinnslu</h2>
        
        <div className="projects-horizontal-scroll">
            {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.name === "Finndu Marketplace" ? "finndu-card" : ""}`}>
                {renderProjectContent(project)}
                {project.name !== "Finndu Marketplace" && (
                <div className="project-card-overlay">
                    <div className="project-name-badge">
                    {project.name}
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
        
        <div className="scroll-hint">
          <span>← Scrollaðu til hliðar til að sjá fleiri verkefni →</span>
        </div>
      </div>
    </div>
  );
}

export default Verkefnivinnsla;