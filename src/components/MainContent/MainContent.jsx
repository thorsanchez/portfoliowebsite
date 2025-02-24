import React from 'react';
import Hero from '../../sections/Hero';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <Hero />
      <section id="about">
        <h2>About</h2>
        <p>I am a developer with a passion for creating modern web applications using React.</p>
      </section>
      <section id="ideas">
        <h2>Ideas</h2>
        <p>Here I share my thoughts on web development, design, and productivity.</p>
      </section>
      <section id="cv">
        <h2>CV</h2>
        <a href="/assets/cv.pdf" download>
          Download Resume
        </a>
      </section>
    </main>
  );
}

export default MainContent;
