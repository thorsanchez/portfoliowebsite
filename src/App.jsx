
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MobileNav from './components/MobileNav/MobileNav';
import About from './sections/About';
import CV from './sections/CV';
import Verkefni from './sections/Verkefni';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    
    <div className="app-container">
      <MobileNav />
      <Sidebar />
      <div className="main-content">
      <section id="about">
          <About />
        </section>
        <section id="cv">
          <CV />
        </section>
        <section id="verkefni">
          <Verkefni />
        </section>
        {/* tracka page view */}
        <Analytics />
      </div>
    </div>
  );
}

export default App;