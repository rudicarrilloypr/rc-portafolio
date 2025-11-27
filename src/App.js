// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Socials';
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
      </main>

      <Socials />
    </div>
  );
}

export default App;
