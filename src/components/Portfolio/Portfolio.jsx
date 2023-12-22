// Portfolio.jsx
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdVerified } from "react-icons/md";
import profileImage from '../../assets/rc-white.PNG';
import styles from './portfolio.module.css';

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <img src={profileImage} alt="Rudi Carrillo" className={styles.profileImage}/>
      <h1>Rudi Carrillo <MdVerified className={styles.verifiedIcon} /></h1> 
      <h2>Full-Stack Software Developer</h2>
      <p>My enthusiasm as a software developer lies in creating streamlined solutions for front and back-end projects.</p>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/rudi-carrillo/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/rudicarrilloypr" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://twitter.com/__rudicarrillo" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/_rudicarrillo/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
