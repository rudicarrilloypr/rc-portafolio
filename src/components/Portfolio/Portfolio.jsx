// Portfolio.jsx
import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdVerified } from "react-icons/md";
import profileImage from '../../assets/rc-white.PNG';
import styles from './portfolio.module.css';

function Portfolio() {
  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="section-inner">
        <div className={`surface ${styles.card}`}>
          <img
            src={profileImage}
            alt="Rudi Carrillo"
            className={styles.profileImage}
          />

          <div className={styles.heading}>
            <h1 className={styles.name}>Rudi Carrillo</h1>
            <MdVerified className={styles.verifiedIcon} />
          </div>

          <p className={styles.role}>Full-Stack Software Developer</p>

          <p className={styles.bio}>
            I create streamlined, maintainable solutions across front-end and
            back-end, with a strong focus on clean interfaces, performance and
            a smooth developer experience.
          </p>

          <div className="chip-row">
            <span className="chip">React · Ruby on Rails</span>
            <span className="chip">Node.js · REST APIs</span>
            <span className="chip">PostgreSQL · SQL</span>
            <span className="chip">Remote-ready</span>
            <span className="chip">Mexico (UTC−6)</span>
            <span className="chip">Bilingual: EN · ES</span>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/rudi-carrillo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://github.com/rudicarrilloypr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://twitter.com/__rudicarrillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/_rudicarrillo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
