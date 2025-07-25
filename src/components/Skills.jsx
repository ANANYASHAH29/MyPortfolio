import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Programming',
    items: ['Java (DSA)', 'C/C++', 'Python', 'Dart (Flutter)', 'Assembly Language', 'Shell Programming (OS)'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Three.js', 'Vite'],
  },
  {
    category: 'Databases',
    items: ['MongoDB (Node.js)'],
  },
  {
    category: 'Version Control & Deployment',
    items: ['Git', 'GitHub', 'Vercel'],
  },
  {
    category: 'Software Tools',
    items: ['Figma', 'Node.js', 'Flutter', 'Firebase'],
  },
  {
    category: 'Software Engineering',
    items: ['Agile', 'Scrum', 'Gantt Charts', 'WBS', 'COCOMO', 'UML', 'DFD', 'Test Design', 'SRS'],
  },
  {
    category: 'AI Algorithms',
    items: ['BFS', 'DFS', 'A*', 'Minimax', 'Alpha-Beta', 'Bayesian Network', 'State-Space Planning'],
  },
  {
    category: 'Academic Tools',
    items: ['Verilog HDL', 'MATLAB', 'OrCAD', 'Keil µVision'],
  },
];

const Skills = () => {
  return (
    <section className="skills-strip-section">
      <h2 className="skills-strip-title">Technical Skills</h2>
      <div className="skills-strip">
        {skills.map(({ category, items }) => (
          <div key={category} className="skill-chip-group">
            <h3>{category}</h3>
            <div className="skill-chips">
              {items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
