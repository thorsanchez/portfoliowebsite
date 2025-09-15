import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import finnduImage from '../assets/finndu_mynd.svg';

function Verkefnivinnsla() {
  const { currentLanguage } = useLanguage();

  const content = {
    is: {
      title: "Verkefni í vinnslu",
      projects: {
        finndu: "Finndu Marketplace",
        weather: "Veður app",
        portfolio: "Eignasafn app"
      }
    },
    en: {
      title: "Projects in Progress",
      projects: {
        finndu: "Finndu Marketplace",
        weather: "Weather app", 
        portfolio: "Portfolio app"
      }
    },
    no: {
      title: "Prosjekter under arbeid",
      projects: {
        finndu: "Finndu Marketplace",
        weather: "Vær app",
        portfolio: "Portefølje app"
      }
    }
  };

  const text = content[currentLanguage];

    const projects = [
    {
        id: 1,
        name: text.projects.finndu,
        image: finnduImage,
    },
    {
      id: 2,
      name: text.projects.weather,
      backgroundColor: "#000000",
    },
    {
      id: 3,
      name: text.projects.portfolio,
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
        <h2 className="section-title">{text.title}</h2>
        
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
      </div>
    </div>
  );
}

export default Verkefnivinnsla;