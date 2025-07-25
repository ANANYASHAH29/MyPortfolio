import React from 'react';
import './OpenSource.css';

const contributions = [
  {
    project: 'Modular PSU - eez-open',
    link: 'https://github.com/eez-open/modular-psu/pull/126',
    description: 'Made a contribution to the Modular PSU project, a community-driven open-source hardware initiative. The enhancement involved refining a shell script to improve cross-platform compatibility and readability. This experience deepened familiarity with open-source development practices, version control, and collaborative contribution workflows.',
    date: 'July 2025',
    prLink: 'https://github.com/eez-open/modular-psu/pull/126',
  },
];

const OpenSource = () => {
  return (
    <section className="open-source-section">
      <h2 className="section-title">🌐 Open Source Contribution</h2>
      <div className="contribution-timeline">
        {contributions.map((c, i) => (
          <div className="contribution-item" key={i}>
            <div className="contribution-marker" />
            <div className="contribution-card">
              <h3>
                <a href={c.link} target="_blank" rel="noopener noreferrer">{c.project}</a>
              </h3>
               <div className="contribution-date">{c.date}</div>
              <p>{c.description}</p>
              <a
                className="pr-link"
                href={c.prLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Pull Request
              </a>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
