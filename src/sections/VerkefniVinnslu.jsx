import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import finnduImage from '../assets/finndu_mynd.svg';

function Verkefnivinnsla() {
  const { currentLanguage } = useLanguage();

  const content = {
    is: {
      title: "Verkefni í vinnslu",
      projects: {
        finndu: {
          tag: "Finndu",
          description: "í þessu verkefni endurhannaði ég bland.is. Markmiðið var að sýna hvernig ég myndi endurhanna síðuna og bæta notendaupplifunina. Ég gerði bæði framendann og bakendann, þannig að allt virkar. Þetta er bara beta útgáfa af síðunni. Notaðu þessar upplýsingar til að skrá þig inn: Tölvupóstur: test@user.com Lykilorð: Test123"
        },
        weather: {
          tag: "Liverpool FC Chatbot",
          description: ""
        }
      }
    },
    en: {
      title: "Projects in Progress",
      projects: {
        finndu: {
          tag: "WEB APPLICATION",
          description: "My redesign approach for the popular Icelandic marketplace bland.is. I built both the front-end and back-end, creating a fully functional site. Use test@user.com with password Test123 to try it out (currently in beta mode)."
        },
        weather: {
          tag: "Liverpool FC Chatbot",
          description: ""
        }
      }
    },
    no: {
      title: "Prosjekter under arbeid",
      projects: {
        finndu: {
          tag: "Liverpool FC Chatbot",
          description: "Min tilnærming til redesign av den populære islandske markedsplassen bland.is. Jeg bygde både front-end og back-end, og skapte et fullstendig funksjonelt nettsted. Bruk test@user.com med passord Test123 for å prøve det (for øyeblikket i beta-modus)."
        },
        weather: {
          tag: "MOBILAPP",
          description: ""
        }
      }
    }
  };

  const text = content[currentLanguage];

  const projects = [
    {
      id: 1,
      tag: text.projects.finndu.tag,
      description: text.projects.finndu.description,
      image: finnduImage,
      link: "https://finnd2-0.vercel.app"
    },
    {
      id: 2,
      tag: text.projects.weather.tag,
      description: text.projects.weather.description,
      backgroundColor: "#f5f5f5",
      link: null
    }
  ];

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="section-container verkefnivinnsla-section">
      <div className="content-wrapper">
        <h2 className="section-title verkefni-main-title">{text.title}</h2>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-item"
              onClick={() => handleProjectClick(project.link)}
              style={{ cursor: project.link ? 'pointer' : 'default' }}
            >
              <div className="project-text">
                <p className="project-tag">{project.tag}</p>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={project.tag} />
                ) : (
                  <div 
                    className="project-placeholder"
                    style={{ backgroundColor: project.backgroundColor }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Verkefnivinnsla;