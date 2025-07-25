import React from 'react';
import './Hackathons.css';

const hackathons = [
  "Gemini API Competition (Worldwide) - Google",
  "DevJams - Google Developers Students Club, VIT",
  "SharkTech - Advanced Developers Group, VIT",
  "HackBattle - IEEE Computer Society, VIT",
  "Ideathon - Institute of Innovative Council, VIT",
  "Futurepreneurs - E-Cell, VIT",
];

const Hackathons = () => {
  return (
    <section className="hackathons-section">
      <h2 className="section-title">Hackathons</h2>
     
      <div className="hackathon-timeline">
        {hackathons.map((item, index) => (
          <div className="hackathon-card" key={index}>
            <div className="glow-circle" />
            <div className="hackathon-content">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
