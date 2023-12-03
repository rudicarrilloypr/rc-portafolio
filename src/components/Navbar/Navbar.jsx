// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${styles.navItems} ${isOpen ? styles.showNav : ''}`}>
        <Link activeClass={styles.active} to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
          Portfolio
        </Link>
        <Link activeClass={styles.active} to="apps" spy={true} smooth={true} offset={-70} duration={500}>
          Apps
        </Link>
        <Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About Me
        </Link>
        <Link activeClass={styles.active} to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          Contact
        </Link>
        <Link activeClass={styles.active} to="socials" spy={true} smooth={true} offset={-70} duration={500}>
          Socials
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
