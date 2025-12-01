// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Dos versiones del logo
import logoDark from '../../assets/RC-SD-logo(white).PNG';
import logoLight from '../../assets/RC-SD-logo(black).PNG';

import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const navRef = useRef(null);

  // Cerrar menú al hacer click fuera
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Listener para clicks fuera del navbar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Detectar si el <html> tiene la clase theme-light
  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsLightTheme(root.classList.contains('theme-light'));
    };

    // Estado inicial
    updateTheme();

    // Observar cambios en la class del <html> (cuando toggles el tema)
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navInner}>

        {/* BRAND ------------------------------------------------ */}
        <div className={styles.brand}>
          <img
            src={isLightTheme ? logoLight : logoDark}
            alt="Rudi Carrillo logo"
            className={styles.logo}
          />

          <div className={styles.brandTextBlock}>
            <span className={styles.brandText}>Rudi Carrillo</span>
            <span className={styles.brandSub}>Software Developer</span>
          </div>
        </div>

        {/* MOBILE MENU ICON ------------------------------------ */}
        <button
          className={styles.menuIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* NAV LINKS ------------------------------------------ */}
        <div className={`${styles.navItems} ${isOpen ? styles.showNav : ''}`}>
          <Link
            activeClass={styles.active}
            to="portfolio"
            spy
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link
            activeClass={styles.active}
            to="apps"
            spy
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
          >
            Work
          </Link>

          <Link
            activeClass={styles.active}
            to="about"
            spy
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
          >
            About
          </Link>

          <Link
            activeClass={styles.active}
            to="contact"
            spy
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          <Link
            activeClass={styles.active}
            to="socials"
            spy
            smooth
            offset={-80}
            duration={500}
            onClick={handleLinkClick}
          >
            More
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
