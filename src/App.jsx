
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MobileNav from './components/MobileNav/MobileNav';
import About from './sections/About';
import CV from './sections/CV';
import Verkefni from './sections/Verkefni';
import './App.css';
import { Analytics } from "@vercel/analytics/react";
import Verkefnivinnsla from './sections/VerkefniVinnslu';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
  <LanguageProvider>
    <div className="app-container">
      <MobileNav />
      <Sidebar />
      <div className="main-content">
      <section id="about">
          <About />
        </section>
        <section id="verkefnivinnsla">
          <Verkefnivinnsla />
        </section>
        <section id="verkefni">
          <Verkefni />
        </section>
        <section id="cv">
          <CV />
        </section>
        {/* tracka page view */}
        <Analytics />
      </div>
    </div>
  </LanguageProvider>
  );
}

export default App;