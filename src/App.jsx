
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './sections/About';
import CV from './sections/CV';
import Verkefni from './sections/Verkefni';
import './App.css';

function App() {
  return (
    <div className="app-container">
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
      </div>
    </div>
  );
}

export default App;