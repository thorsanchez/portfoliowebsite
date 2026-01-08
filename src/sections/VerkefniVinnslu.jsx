import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import finnduImage from '../assets/finndu_mynd.svg';
import diceImage from '../assets/pricediceui.png';
import haettaIamge from '../assets/haettahomescreen.png';

function Verkefnivinnsla() {
  const { currentLanguage } = useLanguage();
  const [expandedProject, setExpandedProject] = useState(null);

  const content = {
    is: {
      title: "Nýleg verkefni",
      projects: {
        finndu: {
          tag: "Finndu",
          summary: "Min endurhannaðar útgáfa af bland.is með bæði framenda og bakenda",
          description: "í þessu verkefni endurhannaði ég bland.is. Markmiðið var að sýna hvernig ég myndi endurhanna síðuna og bæta notendaupplifunina. Ég gerði bæði framendann og bakendann. Þetta er bara beta útgáfa af síðunni. Notaðu þessar upplýsingar til að skrá þig inn: Tölvupóstur: test@user.com Lykilorð: Test123"
        },
        primeDice: {
          tag: "Primedice remake",
          summary: "Full-stack blockchain gambling app með React framenda og Python bakenda",
          description: [
            "Full-stack vefsíða byggð með **React + TypeScript** framenda og **FastAPI (Python)** bakenda, keyrandi á **Vercel** og **Render**. Forritið tengist beint við Ethereum blockchain (Sepolia testnet) með **Web3** og **MetaMask**, og meðhöndlar blockchain færslur, innborganir, sjálfvirkar útborganir og tékkar á innistæðu.",
            "Gerði örugga færsluundirritun með private keys, CORS uppsetningu fyrir API samskipti milli þjóna. Í leiknum höfum við stillanleg target (1-95), krafta með 2% house edge, og sendir ETH útborganir beint á blockchain.",
            "**Staða:** Enn í þróun á testnet. Athugið: Hægt er að nota sömu færsluna oft til að fá inneign (til að prófa) - vinsamlegast ekki tæma primedice veskið.",
            "**Tækni:** React, TypeScript, Python, FastAPI, Web3.py, Ethereum, Vite, TailwindCSS, MetaMask, Vercel, Render"
          ]
        },
        haetta: {
          tag: "Hætta",
          summary: "React Native app til að hjálpa íslenskum notendum að hætta að reykja",
          description: [
            "Hætta er app hannað til að hjálpa íslenskum notendum að hætta að reykja, veipa og/eða nota nikótínpúða.",
            "Forritið fylgist með hversu lengi notendur hafa verið hættir, reiknar út sparaðan pening og fjölda eininga sem þeir hafa forðast,",
            "sýnir hvetjandi afrek með \"badges\" og áföngum, sendir hvetjandi tilkynningar og veitir ráð og stuðning til að halda sér reyk og nikótínlausum.",
            "Notendur geta fylgst með tölfræði um árangur sinn, deilt afrekum og fengið hjálp þegar þeir eiga erfitt með löngun eða fráhvörf.",
            "Tæknistafli: React Native, Expo, TypeScript, AsyncStorage"
          ]
        },
        automation: {
          tag: "Automation",
          summary: "AI workflows",
          description: "Repo af AI workflows til að automatisera incident responses, greina feedback og vinna úr data."
        },
        arionbanki: {
          tag: "Banka eyðsluyfirlit",
          summary: "AI-drifið greinartól fyrir bankayfirlit frá Arion banka",
          description: [
            "Forrit sem greinir bankaútgjöld frá Arion banka. Notendur geta hlaðið upp bankayfirlitum og fengið ítarlega innsýn í útgjöld sín, með sjálfvirkri flokkun og tölfræðigreiningu.",
            "Bakendinn notar FastAPI og Pandas fyrir gagnaúrvinnslu, með Gemma 2 líkani til að flokka færslur sjálfkrafa. Framendinn er byggður á React og TypeScript með Vite.",
            "**Staða:** Í vinnslu",
            "**Tækni:** React, TypeScript, Python, FastAPI, Pandas, Gemma 2, Vite"
          ]
        }
      }
    },
    en: {
      title: "Recent Work",
      projects: {
        finndu: {
          tag: "Finndu",
          summary: "My redesigned version of bland.is with full front-end and back-end",
          description: "My redesign approach for the popular Icelandic marketplace bland.is. I built both the front-end and back-end, creating a fully functional site. Use test@user.com with password Test123 to try it out (currently in beta mode)."
        },
        primeDice: {
          tag: "Primedice remake",
          summary: "Full-stack blockchain gambling app with React frontend and Python backend",
          description: [
            "Full-stack web application built with **React + TypeScript** frontend and **FastAPI (Python)** backend, deployed on **Vercel** and **Render**. The application connects directly to the Ethereum blockchain (Sepolia testnet) using **Web3** and **MetaMask**, handling blockchain transactions, deposits, automatic payouts, and balance checking.",
            "Implemented secure transaction signing with private keys and CORS configuration for API communication between servers. The game features adjustable targets (1-95), multipliers with 2% house edge, and sends ETH payouts directly on the blockchain.",
            "**Status:** Still in development on testnet. Note: The same transaction can be used multiple times to get balance (for testing purposes) - please don't drain my primedice wallet.",
            "**Tech Stack:** React, TypeScript, Python, FastAPI, Web3.py, Ethereum, Vite, TailwindCSS, MetaMask, Vercel, Render"
          ]
        },
        haetta: {
          tag: "Hætta",
          summary: "React Native app to help Icelandic users quit smoking",
          description: [
            "Hætta is an app designed to help Icelandic users quit smoking, vaping, and/or using nicotine pouches.",
            "The app tracks how long users have stayed quit and calculates money saved and the number of units avoided.",
            "It displays motivational achievements with badges and milestones, sends encouraging notifications, and provides tips and support to stay smoke- and nicotine-free.",
            "Users can view progress statistics, share achievements, and get help when struggling with cravings or withdrawal.",
            "Tech stack: React Native, Expo, TypeScript, AsyncStorage"
          ]
        },
        automation: {
          tag: "Automation",
          summary: "AI workflows",
          description: ["Collection of AI workflows I built for automating incident responses, analyzing feedback, and processing data"]
        },
        arionbanki: {
          tag: "Bank Analyzer",
          summary: "AI-powered spending analysis tool for Arion Bank statements",
          description: [
            "Application that analyzes bank spending from Arion Bank. Users can upload bank statements and receive detailed insights into their expenses, with automatic categorization and statistical analysis.",
            "The backend uses **FastAPI** and **Pandas** for data processing, with **Gemma 2 AI** model (running locally) to automatically categorize transactions. The frontend is built with **React + TypeScript** and **Vite**.",
            "**Status:** Work in Progress",
            "**Tech Stack:** React, TypeScript, Python, FastAPI, Pandas, Gemma 2 AI, Vite"
          ]
        }
    }
    },
    no: {
      title: "Nylige prosjekter",
      projects: {
        finndu: {
          tag: "Finndu",
          summary: "Min redesignede versjon av bland.is med full front-end og back-end",
          description: "Min tilnærming til redesign av den populære islandske markedsplassen bland.is. Jeg bygde både front-end og back-end, og skapte et fullstendig funksjonelt nettsted. Bruk test@user.com med passord Test123 for å prøve det (for øyeblikket i beta-modus)."
        },
        primeDice: {
          tag: "Primedice remake",
          summary: "Full-stack blockchain gambling app med React frontend og Python backend",
          description: [
            "Full-stack nettapplikasjon bygget med **React + TypeScript** frontend og **FastAPI (Python)** backend, kjørende på **Vercel** og **Render**. Applikasjonen kobler seg direkte til Ethereum blockchain (Sepolia testnet) ved hjelp av **Web3** og **MetaMask**, og håndterer blockchain-transaksjoner, innskudd, automatiske utbetalinger og saldosjekking.",
            "Implementerte sikker transaksjonssignering med private keys og CORS-konfigurasjon for API-kommunikasjon mellom servere. Spillet har justerbare mål (1-95), multiplikatorer med 2% house edge, og sender ETH-utbetalinger direkte på blockchain.",
            "**Status:** Fortsatt under utvikling på testnet. Merk: Samme transaksjon kan brukes flere ganger for å få saldo (for testing) - vennligst ikke tøm primedice-lommeboken min.",
            "**Tech Stack:** React, TypeScript, Python, FastAPI, Web3.py, Ethereum, Vite, TailwindCSS, MetaMask, Vercel, Render"
          ]
        },
        haetta: {
          tag: "Hætta",
          summary: "React Native app for å hjelpe islandske brukere å slutte å røyke",
          description: [
            "Hætta er en app laget for å hjelpe norske brukere med å slutte å røyke, vape og/eller bruke nikotin snus.",
            "Appen lagrer hvor lenge brukerne har vært røykfrie, beregner hvor mye penger de har spart og hvor mange enheter de har unngått.",
            "Den viser motiverende prestasjoner med «badges» og milepæler, sender oppmuntrende varsler og gir tips og støtte for å holde seg røyk- og nikotinfri.",
            "Brukerne kan se statistikk over fremgangen sin, dele prestasjoner og få hjelp når de sliter med cravings eller abstinenser.",
            "Teknologistack: React Native, Expo, TypeScript, AsyncStorage"
          ]
        },
        automation: {
          tag: "Automation",
          summary: "AI workflows",
          description: ["Repo av AI workflows jeg bygde",
          "for å automatisere hendelsesrespons, analysere tilbakemeldinger og behandle data"]
        },
        arionbanki: {
          tag: "Bank Analysator",
          summary: "AI-drevet forbruksanalyseverktøy for Arion Bank-utskrifter",
          description: [
            "Applikasjon som analyserer bankforbruk fra Arion Bank. Brukere kan laste opp kontoutskrifter og få detaljert innsikt i utgiftene sine, med automatisk kategorisering og statistisk analyse.",
            "Backend bruker **FastAPI** og **Pandas** for databehandling, med **Gemma 2 AI** modell (kjører lokalt) for å automatisk kategorisere transaksjoner. Frontend er bygget med **React + TypeScript** og **Vite**.",
            "**Status:** Under utvikling",
            "**Tech Stack:** React, TypeScript, Python, FastAPI, Pandas, Gemma 2 AI, Vite"
          ]
        }
      }
    }
  };

  const text = content[currentLanguage];

  // Helper function til þess að rendera texta með bold (er að nota fyrir primedice des)
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Helper function til að gera description (bæði string og array (paragraphs))
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((paragraph, index) => (
        <p key={index} className="project-description" style={{ marginBottom: index < description.length - 1 ? '0.75rem' : '0' }}>
          {renderFormattedText(paragraph)}
        </p>
      ));
    }
    return <p className="project-description">{description}</p>;
  };

  const projects = [
    {
      id: 1,
      tag: text.projects.automation.tag,
      summary: text.projects.automation.summary,
      description: text.projects.automation.description,
      link: "https://github.com/thorsanchez/automation"
    },
    {
      id: 2,
      tag: text.projects.arionbanki.tag,
      summary: text.projects.arionbanki.summary,
      description: text.projects.arionbanki.description,
      link: "https://github.com/thorsanchez/arionbanki-eydsluyfirlit"
    },
    {
      id: 3,
      tag: text.projects.haetta.tag,
      summary: text.projects.haetta.summary,
      description: text.projects.haetta.description,
      image: haettaIamge,

    },
    {
      id: 4,
      tag: text.projects.finndu.tag,
      summary: text.projects.finndu.summary,
      description: text.projects.finndu.description,
      image: finnduImage,
      link: "https://finnd2-0.vercel.app/login?next=/profile"
    },
    {
      id: 5,
      tag: text.projects.primeDice.tag,
      summary: text.projects.primeDice.summary,
      description: text.projects.primeDice.description,
      image: diceImage,
      link: "https://primedice-remake.vercel.app"
    }
  ];

  const handleProjectClick = (projectId, link) => {
    if (expandedProject === projectId) {
      // If clicking the expanded project, go to link if available
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    } else {
      // Otherwise, expand the project
      setExpandedProject(projectId);
    }
  };

  return (
    <div className="section-container verkefnivinnsla-section">
      <div className="content-wrapper">
        <h2 className="section-title verkefni-main-title">{text.title}</h2>

        <div className="projects-list">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;

            return (
              <div
                key={project.id}
                className={`project-item ${isExpanded ? 'expanded' : ''}`}
                onClick={() => handleProjectClick(project.id, project.link)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-text">
                  <p className="project-tag">{project.tag}</p>
                  <p className="project-summary">{project.summary}</p>
                  {isExpanded && (
                    <div className="project-details">
                      {renderDescription(project.description)}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.id === 1 || project.id === 2 ? 'Repo →' : 'Vefsíða →'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                {isExpanded && (
                  <div className={`project-visual ${project.id === 1 ? 'phone-mockup-container' : ''}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.tag}
                        className={project.id === 1 ? 'phone-mockup' : ''}
                      />
                    ) : (
                      <div
                        className="project-placeholder"
                        style={{ backgroundColor: project.backgroundColor }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Verkefnivinnsla;