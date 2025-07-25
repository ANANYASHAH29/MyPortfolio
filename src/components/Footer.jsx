import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Contact Me</h2>
      <div className="contact-left">
        <div className="contact-row">
          <span className="label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/ananya-h-shah-20730823b/"
            target="_blank"
            rel="noopener noreferrer"
            className="value"
          >
            linkedin.com/in/ananya-shah
          </a>
        </div>
        <div className="contact-row">
          <span className="label">Phone:</span>
          <span className="value">+91-7045591219</span>
        </div>
        <div className="contact-row">
          <span className="label">Email:</span>
          <a href="mailto:ananyashah2908@gmail.com" className="value">
            ananyashah2908@gmail.com
          </a>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Ananya Shah. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
