// src/App.js
import React from 'react';
import './App.css';
import { capitalizeWords } from './utils/utils'; // Correct path to utils
import { headerText, footerText } from './constants/constants'; // Correct path to constants
import Header from './components/Header'; // Correct path to Header component
import About from './components/About'; // Correct path to About component
import Projects from './components/Projects'; // Correct path to Project component
import Skills from './components/Skills'; // Correct path to Skills component
import Contact from './components/Contact'; // Correct path to Contact component
import Footer from './components/Footer'; // Correct path to Footer component

function App() {
  return (
    <div className="App">
      <Header title={capitalizeWords(headerText)} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer footerText={footerText} />
    </div>
  );
}

export default App;
