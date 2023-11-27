import React from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
}

export default Navbar;
