import React from 'react';
import './Projects.css';
import verbagenImage from '../assets/verbagen.png'; // Place image in /src/assets/
import spaceInt from '../assets/spaceInt.png';
import usecase from '../assets/usecase.png';
import portfolio from '../assets/portfolio.png';
import review from '../assets/review.png';
import pcms from '../assets/pcms.png';
const projectData = [
  {
    title: 'VerbaGen',
    image: verbagenImage,
    description: 'VerbaGen is an AI-powered app for content creators that generates culturally relevant scripts from video links. It tailors tone, language, and audience style using Google’s Gemini API.',
    techStack: ['Flutter', 'Firebase', 'Gemini API'],
    github: 'https://github.com/ANANYASHAH29/VERBAGEN_REPOSITORY',
    demo: 'https://ai.google.dev/competition/projects/verbagen',
  },
  {
    title: 'Space Integration',
    image: spaceInt,
    description: 'Space Integration is an interactive web app that lets users visualize interior design ideas in 3D. It features a rotating 3D model of customizable spaces, floor texture options, inspirational image sliders, and a responsive preference form.',
    techStack: ['React.js', 'Three.js', 'Vite'],
    github: 'https://github.com/your-username/pantrypuzzle',
    demo: 'https://pantrypuzzle.web.app',
  },
  {
    title: 'Automated Retail Store',
    image: usecase,
    description: 'A Software Engineering project that improves in-store shopping through automated checkout, inventory tracking, and customer flow management, with a strong focus on design, documentation, and testing.',
    techStack: ['UML Diagrams', 'Agile/Scrum Methodology', 'SRS Documentation', 'Test Case Design'],
    github: 'https://github.com/your-username/chatmit',
    demo: 'https://chatmit.web.app',
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    description: 'A personal portfolio showcasing key projects, skills, and experiences. Built with a clean layout and smooth animations to offer an engaging and user-friendly experience.',
    techStack: ['React.js', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/your-username/chatmit',
    demo: 'https://chatmit.web.app',
  },
  {
    title: 'ReviewGuard (Ongoing)',
    image: review,
    description: 'Using NLP techniques on Amazon and Yelp reviews to detect fake ones by spotting patterns like overuse of praise or repeated words.',
    techStack: ['Pandas (Python)', 'Scikit-learn', 'BERT (Hugging Face Transformers)'],
    github: 'https://github.com/your-username/chatmit',
    demo: 'https://chatmit.web.app',
  },
  {
    title: 'Quantum Route Optimization (Research Work)',
    image: pcms,
    description: 'Working on a research paper using quantum computing to optimize routing problems. Exploring QAOA and quantum annealing to solve real-world logistics.',
    techStack: ['Python', 'Qiskit', 'Optimization Algorithms'],
    github: 'https://github.com/your-username/chatmit',
    demo: 'https://chatmit.web.app',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>💼 Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              <strong>Tech Stack:</strong> {project.techStack.join(', ')}
            </div>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
