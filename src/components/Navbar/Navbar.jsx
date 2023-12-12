// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/RC-SD-logo(white).PNG';
import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

    // Función para manejar clics fuera del navbar
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
      // Agregar listener para clics fuera del navbar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Limpiar el listener al desmontar el componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    

  return (
    <nav className={styles.navbar} ref={navRef}>
      <img src={logo} alt="Logo" className={styles.logo} />
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
          More
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
