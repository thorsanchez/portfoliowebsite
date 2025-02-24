import styles from "./HeroStyles.module.css"
import heroImg from "../assets/hero.png"
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"
import twitterIcon from "../assets/twitter-light.svg"
import githubIcon from "../assets/github-light.svg"
import linkedinIcon from "../assets/linkedin-light.svg"
import CV from  "../assets/cv.pdf"
import { useTheme } from "../common/ThemeContext"

function Hero() {
  const {toggleTheme, theme} =useTheme();
  //const {themeIcon} = theme === 'light' ? sun : moon;
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={`${styles.container} ml-64 p-10 min-h-screen flex flex-col justify-center items-center`}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.Hero} 
        src={heroImg} 
        alt="profile picture of Haaland" 
        />
        <img 
          className={styles.colorMode}
          src={themeIcon} alt= "color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div class={styles.info}>
        <h1>
          Thor 
          <br/>
          Sanchez
        </h1>
        <h2>Forritari</h2>
        <span>
          <a href= "https://twitter.com/" target= "_blank">
            <img
            src={twitterIcon}
            alt="Twitter icon"/>
          </a>
          <a href= "https://github.com/" target= "_blank">
            <img
            src={githubIcon}
            alt="github icon"/>
          </a>
          <a href= "https://linkedin.com/" target= "_blank">
            <img
            src={linkedinIcon}
            alt="linkedin icon"/>
          </a>
        </span>
        <p>
          Med en lidenskap for a utvikle moderne React-nettapper for bedrifter
        </p>
        <a href={CV} download>
          <button className="hover">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero