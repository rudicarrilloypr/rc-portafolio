import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Socials';
import ResumeFab from './components/ResumeFab/ResumeFab';
import './App.css';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  return 'dark';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light');
    root.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const nextLabel =
    theme === 'dark' ? 'Activate light mode' : 'Activate dark mode';

  return (
    <div className="App">
      <Navbar />

      <button
        type="button"
        className={`theme-toggle ${theme === 'light' ? 'theme-toggle--light' : ''}`}
        onClick={toggleTheme}
        aria-label={nextLabel}
      >
        <span className="theme-toggle-track" aria-hidden="true">
          <span className="theme-toggle-thumb">
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
          </span>
        </span>
        <span className="theme-toggle-label">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      </button>

      <main className="App-main">
        <Portfolio />
        <Apps />
        <About />
        <Contact />
        <Socials />
      </main>

      <ResumeFab />
    </div>
  );
}

export default App;
