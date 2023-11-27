import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Portfolio</Link>
      <Link to="/apps">Apps</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/socials">Socials</Link>
    </nav>
  );
}

export default Navbar;
