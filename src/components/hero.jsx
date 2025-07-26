import React, { useEffect, useState } from 'react';
import './hero.css';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✨ Smoke cursor trail logic
  useEffect(() => {
    const smokeContainer = document.getElementById('smoke-container');
    const createSmoke = (x, y) => {
      const smoke = document.createElement('div');
      smoke.className = 'smoke-trail';
      smoke.style.left = `${x}px`;
      smoke.style.top = `${y}px`;
      smokeContainer.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1000);
    };

    const move = (e) => createSmoke(e.clientX, e.clientY);
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div id="smoke-container"></div>

      <section className="hero-container">
        <div className="email-vertical">
          {
            "ananyashah2908@gmail.com".split("").map((char, idx) => (
              <span key={idx}>{char}</span>
            ))
          }
        </div>

        <div className="hero-content">
          <h1 className="glow-name">ANANYA SHAH</h1>
          <p className="tagline">Aspiring Full Stack Developer focused on scalable, AI-augmented web solutions</p>
          <div className="hero-buttons">
  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <button className="glow-button">GitHub</button>
  </a>

  <a href="#projects">
    <button className="glow-button">View Projects</button>
  </a>

  <a href="/resume (7).pdf" download>
    <button className="glow-button">Download Resume</button>
  </a>
</div>

        </div>
      </section>
    </>
  );
};

export default Hero;
