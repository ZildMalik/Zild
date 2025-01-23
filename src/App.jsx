import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <header className="header1">
        <h1>Welcome to</h1>
        <h2>My Portfolio</h2>
      </header>

      <header className="header">
        <p>Zild John Lloyd M. Abule</p>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </header>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>I am a creative and results-driven software engineer with expertise in full-stack development. I have a passion for crafting seamless user experiences and delivering high-quality, scalable solutions. In my free time, I enjoy contributing to open-source projects and staying up-to-date with emerging technologies.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>E-Commerce Platform</h3>
          <p><strong>:</strong> React, PHP and SQL</p>
          <p>A fully functional e-commerce platform featuring user authentication, dynamic product filtering, and a secure checkout process.</p>
        </div>
        <div className="project">
          <h3>Weather Dashboard</h3>
          <p><strong>:</strong> React and  API</p>
          <p>A responsive weather dashboard that displays real-time weather data and forecasts for multiple locations.</p>
        </div>
        <div className="project">
          <h3>Portfolio Showcase</h3>
          <p><strong>:</strong> React and CSS</p>
          <p>A sleek and modern portfolio website designed to highlight my skills, projects, and contact details with an emphasis on responsive design.</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Let’s connect! Feel free to reach out through email or connect with me on LinkedIn.</p>
        <div className="contact-links">
          <a href="mailto:abule443@gmail.com" className="contact-link">Email Me</a>
          <a href="https://www.facebook.com/zildjiandesu/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;
