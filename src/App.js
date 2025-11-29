// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Socials';
import ResumeFab from './components/ResumeFab/ResumeFab';
import './App.css';

// Lee el tema inicial (localStorage o prefers-color-scheme)
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  // Si no hay en storage, respeta el tema del sistema
  if (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sincroniza el theme con <html> (documentElement) y localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light');

    const nextClass = theme === 'light' ? 'theme-light' : 'theme-dark';
    root.classList.add(nextClass);

    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const nextLabel = theme === 'dark' ? 'Activate light mode' : 'Activate dark mode';

  return (
    <div className="App">
      <Navbar />

      {/* Toggle flotante para Dark / Light */}
      <button
        type="button"
        className={`theme-toggle ${theme === 'light' ? 'theme-toggle--light' : ''}`}
        onClick={toggleTheme}
        aria-label={nextLabel}
      >
        <span className="theme-toggle-icon" aria-hidden="true">
          {theme === 'dark' ? '☀️' : '🌙'}
        </span>
        <span className="theme-toggle-label">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      </button>

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
