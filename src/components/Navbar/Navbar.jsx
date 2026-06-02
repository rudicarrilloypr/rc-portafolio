import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoDark from '../../assets/RC-SD-logo(white).PNG';
import logoLight from '../../assets/RC-SD-logo(black).PNG';
import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => {
      setIsLightTheme(root.classList.contains('theme-light'));
    };

    updateTheme();
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

        <button
          className={styles.menuIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          type="button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

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
