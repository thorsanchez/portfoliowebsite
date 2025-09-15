import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function CV() {
  const { currentLanguage } = useLanguage();

  const handleViewCV = () => {
    // opna mismunandi cv eftir tungumal
    const cvFiles = {
      is: '/cv-thor-is.pdf',
      en: '/cv-thor-en.pdf',
      no: '/cv-thor-en.pdf' // a eftir að bua til norskt cv
    };
    // pdf i new tab
    window.open(cvFiles[currentLanguage]);
  };

  const content = {
    is: {
      workExperience: "Starfsreynsla",
      education: "Menntun",
      other: "Annað",
      languages: "Tungumál",
      experience: "Ég hef ágætis reynslu í",
      interests: "Áhugamál",
      downloadCV: "Skoða ferilskrá",
      languagesList: "Íslenska, Norska og Enska",
      
      jobs: {
        dropp: "Skrifstofuvinna og sendill hjá Dropp",
        cosan: "Skrifstofuvinna hjá Cosan",
        fimir: "Byggingarvinnu hjá Fimir ehf"
      },
      
      educationList: {
        university: "B.Sc. í tölvunarfræði í Háskóla Íslands",
        kvenno: "Náttúruvísindabraut í Kvennaskólanum í Reykjavík",
        gardabaer: "Náttúrufræðibraut í Fjölbrautaskóla Garðabæjar",
        stabekk: "Stabekk videregående skole",
        ramstad: "Ramstad ungdomsskole"
      },
      
      skills: {
        webDev: "Vefþróun:",
        webDevList: "React, Next.js, HTML, CSS, Tailwind CSS, JavaScript",
        backend: "Bakendi og API:",
        backendList: "Node.js, Express, PostgreSQL, REST API, JWT, .NET",
        programming: "Forritunarmál:",
        programmingList: "Java, Python, Kotlin, JavaScript, TypeScript, Morpho",
        ai: "Gervigreind / Gögn:",
        aiList: "Reynsla af Python NLP bókasöfnum, textaflokkun og transformer-líkönum.",
        blockchain: "Bálkakeðja:",
        blockchainList: "Grunnskilningur á snjallsamningum og dApps"
      },
      
      interestsList: [
        "Tækni og nýsköpun",
        "Fótbolti, hlaup og líkamsrækt",
        "Öpp og vefsíðugerð",
        "Fjármál",
        "Forritun",
        "Gervigreind og LLM-módel"
      ]
    },
    
    en: {
      workExperience: "Work Experience",
      education: "Education",
      other: "Other",
      languages: "Languages",
      experience: "I have decent experience in",
      interests: "Interests",
      downloadCV: "View CV",
      languagesList: "Icelandic, Norwegian and English",
      
      jobs: {
        dropp: "Office work and delivery at Dropp",
        cosan: "Office work at Cosan",
        fimir: "Construction work at Fimir ehf"
      },
      
      educationList: {
        university: "B.Sc. in Computer Science at University of Iceland",
        kvenno: "Natural Sciences at Kvennaskólinn in Reykjavík",
        gardabaer: "Natural Sciences at Fjölbrautaskóli Garðabæjar",
        stabekk: "Stabekk Upper Secondary School",
        ramstad: "Ramstad Lower Secondary School"
      },
      
      skills: {
        webDev: "Web Development:",
        webDevList: "React, Next.js, HTML, CSS, Tailwind CSS, JavaScript",
        backend: "Backend and API:",
        backendList: "Node.js, Express, PostgreSQL, REST API, JWT, .NET",
        programming: "Programming Languages:",
        programmingList: "Java, Python, Kotlin, JavaScript, TypeScript, Morpho",
        ai: "AI / Data:",
        aiList: "Experience with Python NLP libraries, text classification, and transformer models.",
        blockchain: "Blockchain:",
        blockchainList: "Basic understanding of smart contracts and dApps"
      },
      
      interestsList: [
        "Technology and innovation",
        "Football, running and fitness",
        "App and web development",
        "Finance",
        "Programming",
        "Exploring AI and language model applications"
      ]
    },
    
    no: {
      workExperience: "Arbeidserfaring",
      education: "Utdanning",
      other: "Annet",
      languages: "Språk",
      experience: "Jeg har god erfaring med",
      interests: "Interesser",
      downloadCV: "Se CV",
      languagesList: "Islandsk, Norsk og Engelsk",
      
      jobs: {
        dropp: "Kontorarbeid og leveranse hos Dropp",
        cosan: "Kontorarbeid hos Cosan",
        fimir: "Byggearbeid hos Fimir ehf"
      },
      
      educationList: {
        university: "B.Sc. i Informatikk ved Universitetet på Island",
        kvenno: "Naturvitenskap ved Kvennaskólinn i Reykjavík",
        gardabaer: "Naturvitenskap ved Fjölbrautaskóli Garðabæjar",
        stabekk: "Stabekk videregående skole",
        ramstad: "Ramstad ungdomsskole"
      },
      
      skills: {
        webDev: "Webutvikling:",
        webDevList: "React, Next.js, HTML, CSS, Tailwind CSS, JavaScript",
        backend: "Backend og API:",
        backendList: "Node.js, Express, PostgreSQL, REST API, JWT, .NET",
        programming: "Programmeringsspråk:",
        programmingList: "Java, Python, Kotlin, JavaScript, TypeScript, Morpho",
        ai: "Kunstig intelligens / Data:",
        aiList: "Erfaring med Python NLP-biblioteker, tekstklassifisering og transformermodeller.",
        blockchain: "Blockchain:",
        blockchainList: "Grunnleggende forståelse av smart contracts og dApps"
      },
      
      interestsList: [
        "Teknologi og innovasjon",
        "Fotball, løping og trening",
        "App- og webutvikling",
        "Finans",
        "Programmering",
        "Kunstig intelligens og LLM-modeller"
      ]
    }
  };

  const text = content[currentLanguage];
  return (
    <div className="section-container cv-container">
      <h2 className="section-title">{text.workExperience}</h2>
      
      <div className="experience-item">
        <div className="experience-period">2020 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://dropp.is" target="_blank" rel="noopener noreferrer">
              {text.jobs.dropp} ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2018 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://cosan.info" target="_blank" rel="noopener noreferrer">
              {text.jobs.cosan} ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2018</div>
        <div className="experience-details">
          <div className="experience-title">
            {text.jobs.fimir} ↗
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>
      
      <h2 className="section-title education-title">{text.education}</h2>
      
      <div className="experience-item">
        <div className="experience-period">2022 — 2025</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://hi.is/tolvunarfraedi" target="_blank" rel="noopener noreferrer">
              {text.educationList.university} ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-period">2018 — 2021</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://www.kvenno.is/is/nam-kennsla/namsbrautir-1/natturuvisindabraut-1" target="_blank" rel="noopener noreferrer">
              {text.educationList.kvenno} ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-period">2018-2018</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://www.fg.is/is/nam-kennsla/namsbraut/natturufraedibraut" target="_blank" rel="noopener noreferrer">
              {text.educationList.gardabaer} ↗
            </a>
          </div>
          <div className="experience-location">Reykjavík, {currentLanguage === 'is' ? 'Ísland' : currentLanguage === 'en' ? 'Iceland' : 'Island'}</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2017-2017</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://afk.no/stabekk-vgs/utdanningstilbud/studiespesialisering/" target="_blank" rel="noopener noreferrer">
              {text.educationList.stabekk} ↗
            </a>
          </div>
          <div className="experience-location">Stabekk, {currentLanguage === 'is' ? 'Noregur' : currentLanguage === 'en' ? 'Norway' : 'Norge'}</div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period">2014-2017</div>
        <div className="experience-details">
          <div className="experience-title">
            <a href="https://www.ramstadskole.no" target="_blank" rel="noopener noreferrer">
              {text.educationList.ramstad} ↗
            </a>
          </div>
          <div className="experience-location">Stabekk, {currentLanguage === 'is' ? 'Noregur' : currentLanguage === 'en' ? 'Norway' : 'Norge'}</div>
        </div>
      </div>

      <h2 className="section-title skills-title">{text.other}</h2>
      
      <div className="experience-item">
        <div className="experience-period"><strong>{text.languages}</strong></div>
        <div className="experience-details">
          <div className="experience-title">
            {text.languagesList}
          </div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period"><strong>{text.experience}</strong></div>
        <div className="experience-details">
          <div className="experience-title">
            <strong>{text.skills.webDev}</strong> {text.skills.webDevList}
            <p><strong>{text.skills.backend}</strong> {text.skills.backendList}</p>
            <p><strong>{text.skills.programming}</strong> {text.skills.programmingList}</p>
            <p><strong>{text.skills.ai}</strong> {text.skills.aiList}</p>
            <p><strong>{text.skills.blockchain}</strong> {text.skills.blockchainList}</p>
          </div>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-period"><strong>{text.interests}</strong></div>
        <div className="experience-details">
          <ul className="cv-skills">
            {text.interestsList.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="download-cv">
        <button 
          className="download-button"
          onClick={handleViewCV}
        >
          {text.downloadCV}
        </button>
      </div>
    </div>
  );
}

export default CV;