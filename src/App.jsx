
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './sections/About';
import Ideas from './sections/Ideas';
import CV from './sections/CV';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        /*about = heimasíða*/
        { }
        <About />
        
        /*fela ideas og cv*/
        {}
        <section id="ideas">
          <Ideas />
        </section>
        <section id="cv">
          <CV />
        </section>
      </div>
    </div>
  );
}

export default App;