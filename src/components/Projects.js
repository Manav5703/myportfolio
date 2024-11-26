// src/components/Project.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>This portfolio website is built using React, showcasing my skills and projects.</p>
        <a href="https://github.com/Manav5703/myportfolio" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
      {/* Add more project sections */}
    </section>
  );
}

export default Projects;
