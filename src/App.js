// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Socials';
import ResumeFab from './components/ResumeFab/ResumeFab';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <Portfolio />
        <Apps />
        <About />
        <Contact />
        <Socials />
      </main>

      {/* Botón flotante de CV */}
      <ResumeFab />
    </div>
  );
}

export default App;
