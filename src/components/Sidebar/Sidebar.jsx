import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.css'; // Import custom styles

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Thor Sanchez</h1>
      </div>
      <nav className="sidebar-nav">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="ideas" smooth={true} duration={500}>
          Ideas
        </Link>
        <Link to="cv" smooth={true} duration={500}>
          CV
        </Link>
      </nav>
      <div className="sidebar-contact">
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:thor@example.com">Mail</a></li>
          <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
          <li><a href="https://linkedin.com/" target="_blank">LinkedIn</a></li>
          <li><a href="https://read.cv/" target="_blank">Read.cv</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
