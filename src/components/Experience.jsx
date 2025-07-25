import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Frontend Developer Intern @ Jurident Valsco Technology',
    duration: 'June 2025 – Ongoing',
    description: 'Made the company portal fully responsive across all devices and optimized user experience and performance.',
  },
  {
    title: 'Technical Core Committee Member @ SCRS VIT',
    duration: 'March 2025 – Ongoing',
    description: 'Worked on web development for events and supported the tech team for organizing technical initiatives, at the Soft Computing Research Society, VIT.',
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <div className="timeline-content glass-card">
              <h3>{exp.title}</h3>
              <p className="timeline-duration">{exp.duration}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
