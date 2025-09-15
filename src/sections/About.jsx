import React from 'react';
import { useTheme } from '../common/ThemeContext';
import headerImg from "../assets/headerimg.png";
import headerImg2 from "../assets/headerimg2.png";
import headerImg3 from "../assets/headerimg3.png";
import githubIconDark from '../assets/github-dark.svg';
import linkedinIconDark from '../assets/linkedin-dark.svg';
import githubIconLight from '../assets/github-light.svg';
import linkedinIconLight from '../assets/linkedin-light.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import {useLanguage} from '../contexts/LanguageContext';

function About() {
  const { toggleTheme, theme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const { currentLanguage } = useLanguage();
  
  const content = {
    is: {
      banner: "Síðan er ennþá í vinnslu..",
      sectionLabel: "UM MIG",
      paragraph1: "Ég er 24 ára tölvunarfræðingur með BS-gráðu frá Háskóla Íslands. Ég bjó í Osló í Noregi frá 2 til 18 ára aldurs og tala því norsku jafnt sem íslensku. Ég hef gaman af því að fikta í nýrri tækni og forrita eitthvað sem ekki bara virkar vel, heldur gerir upplifun notenda betri.",
      paragraph2: "Ég hef mest verið að vinna í framendaforritun, en markmiðið er að verða fullstack forritari. Í náminu vann ég í nokkrum fullstack verkefnum, bæði einn og í teymi, þar sem ég hef tekist á við allt frá því að hanna flott viðmót yfir í að gera bakenda með gagnagrunnum og API-um.",
      paragraph3: "Í gegnum námið hef ég alltaf verið forvitinn um gervigreind og hvernig hún getur nýst í ólíkum verkefnum. Ég fékk tækifæri til að vinna aðferðir eins og textaflokkun, málfræðigreiningu og transformer-líkön, og það vakti áhuga minn á því hvernig slíkar lausnir geta verið notaðar til að skilja texta, greina viðbrögð notenda og jafnvel skapa nýtt efni. Þetta er eitthvað sem ég er að halda áfram að læra og bæta mig í.",
      paragraph4: "Þegar ég er ekki að kóða, þá fylgist ég með fótboltanum, hlutabréfamörkuðunum og tækniheiminum. Ég hef alltaf verið forvitinn um hvernig tölvur og gögn geta verið nýtt til að bæta ákvarðanatöku, hvort sem það er í fjármálum, heilsu eða íþróttum. Ég nýt þess að kafa ofan í nýja hluti, fylgjast með þróun markaða og greina hvernig tækni getur haft áhrif á framtíðina, og ef ég er ekki að því, þá er líklegt að ég sé að horfa á Liverpool leik."
      },
      en: {
      banner: "The page is still a work in progress..",
      sectionLabel: "ABOUT ME",
      paragraph1: "I’m a 24-year-old computer scientist with a BSc from the University of Iceland. I lived in Oslo, Norway from ages 2 to 18, so I speak Norwegian as well as Icelandic. I enjoy exploring new technology and programming things that not only work well, but also improve the user experience.",
      paragraph2: "I’ve mostly worked in frontend development, but my goal is to become a fullstack developer. During my studies, I worked on several fullstack projects, both individually and in teams, where I handled everything from designing attractive user interfaces to building backends with databases and APIs.",
      paragraph3: "Throughout my studies, I’ve always been curious about artificial intelligence and how it can be applied in different projects. I had the chance to work with methods like text classification, syntactic analysis, and transformer models, which sparked my interest in how such solutions can be used to understand text, analyze user responses, and even generate new content. This is something I’m continuing to learn and improve on.",
      paragraph4: "When I’m not coding, I follow football, the stock markets, and the tech world. I’ve always been curious about how computers and data can be used to improve decision-making, whether in finance, health, or sports. I enjoy diving into new topics, keeping up with market trends, and analyzing how technology can shape the future, and if I’m not doing that, there’s a good chance I’m watching a Liverpool game."
      },
      no: {
      banner: "Siden er fortsatt under arbeid..",
      sectionLabel: "OM MEG",
      paragraph1: "Jeg er 24 år gammel informatikkstudent med BSc fra Universitetet på Island. Jeg bodde i Oslo, Norge fra jeg var 2 til 18 år, så jeg snakker både norsk og islandsk. Jeg liker å utforske ny teknologi og programmere ting som ikke bare fungerer godt, men som også forbedrer brukeropplevelsen.",
      paragraph2: "Jeg har mest erfaring med frontend-utvikling, men målet mitt er å bli fullstack-utvikler. Under studiene har jeg jobbet med flere fullstack-prosjekter, både alene og i team, hvor jeg har håndtert alt fra å designe attraktive brukergrensesnitt til å bygge backends med databaser og API-er.",
      paragraph3: "Gjennom studiene har jeg alltid vært nysgjerrig på kunstig intelligens og hvordan det kan brukes i ulike prosjekter. Jeg fikk muligheten til å jobbe med metoder som tekstklassifisering, syntaktisk analyse og transformermodeller, noe som vekket interessen min for hvordan slike løsninger kan brukes til å forstå tekst, analysere brukerrespons og til og med generere nytt innhold. Dette er noe jeg fortsatt jobber med å lære mer om og bli bedre i.",
      paragraph4: "Når jeg ikke koder, følger jeg med på fotball, aksjemarkedet og teknologiverdenen. Jeg har alltid vært nysgjerrig på hvordan datamaskiner og data kan brukes til å forbedre beslutningstaking, enten det er innen finans, helse eller sport. Jeg liker å dykke ned i nye temaer, følge med på markedstrender og analysere hvordan teknologi kan påvirke fremtiden, og hvis jeg ikke gjør det, er det stor sjanse for at jeg ser på Liverpool kamp."
    },

  };

  const text = content[currentLanguage];

  return (
    <div className="section-container">
      <div className="subtle-banner">
        {text.banner}
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
        <h2 className="section-label">{text.sectionLabel}</h2>
        <div className="about-content">
          <p>
          {text.paragraph1}
          </p>
          <p>
          {text.paragraph2}
          </p>
          <p>
          {text.paragraph3}
          </p>
          <p>
          {text.paragraph4}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;