import React from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Hack from './components/Hackathons';
import Edu from './components/Education';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <OpenSource />
      <Hack />
      <Edu />
      <Footer />
    </div>
  );
};

export default App;
