import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-item">
        <p><strong>Currently:</strong> 3rd year BTech in Computer Science and Engineering at VIT, Vellore</p>
        <p><strong>School:</strong> Hiranandani Foundation School, Thane (Classes 1-12)</p>
      </div>
      <h2>Achievements</h2>
      <div className="achievement-item">CGPA: 9.42/10 (VIT Vellore)</div>
      <div className="achievement-item">12th Boards (ISC): 97.5% – 1st in School, Subject Prizes in Physics and Chemistry</div>
      <div className="achievement-item">CISCE Scholarship for 12th Performance</div>
      <div className="achievement-item">10th Boards (ICSE): 98%</div>
      <div className="achievement-item">JEE MAINS: 96.65 percentile, JEE ADV: AIR 21,385, VITEEE: AIR 7259</div>
    </section>
  );
};

export default Education;
