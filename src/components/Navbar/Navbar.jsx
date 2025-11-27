// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/RC-SD-logo(white).PNG';
import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navInner}>
        <div className={styles.brand}>
          <img src={logo} alt="Rudi Carrillo logo" className={styles.logo} />
          <span className={styles.brandText}>Rudi Carrillo</span>
        </div>

        <button
          className={styles.menuIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className={`${styles.navItems} ${isOpen ? styles.showNav : ''}`}
        >
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
