import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import HeroScene from '../HeroScene/HeroScene';
import styles from './portfolio.module.css';

function Portfolio() {
  return (
    <section id="portfolio" className={styles.hero}>
      <HeroScene />
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.scanline} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.signal}>
            <span aria-hidden="true" />
            Full-stack software developer / Available remotely
          </div>

          <h1 className={styles.name}>Rudi Carrillo</h1>
          <p className={styles.role}>
            I create modern web experiences that combine clean code, thoughtful
            design, and real functionality. My work lives at the intersection
            of technology and creativity, where ideas become interactive,
            responsive, and user-friendly digital products.
          </p>

          <div className={styles.actions}>
            <Link
              to="apps"
              smooth
              offset={-72}
              duration={500}
              className={styles.primaryAction}
            >
              View projects
              <FaArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="contact"
              smooth
              offset={-72}
              duration={500}
              className={styles.secondaryAction}
            >
              Start a project
            </Link>
          </div>

          <div className={styles.techRail} aria-label="Core technology stack">
            <span>React</span>
            <span>Next.js</span>
            <span>Ruby on Rails</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>AI-assisted UX</span>
          </div>

          <div className={styles.metrics} aria-label="Profile highlights">
            <div>
              <strong>EN/ES</strong>
              <span>Bilingual collaboration</span>
            </div>
            <div>
              <strong>UTC-6</strong>
              <span>Mexico based</span>
            </div>
            <div>
              <strong>Full-stack</strong>
              <span>Product ownership</span>
            </div>
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
          </div>
        </motion.div>

        <motion.aside
          className={styles.telemetry}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.24, duration: 0.7, ease: 'easeOut' }}
          aria-label="Developer profile summary"
        >
          <div className={styles.telemetryHeader}>
            <span>RC-SD/2026</span>
            <span>ONLINE</span>
          </div>
          <div className={styles.telemetryBody}>
            <p>Interface systems</p>
            <strong>Clean architecture, fast delivery, modern UX.</strong>
          </div>
          <div className={styles.telemetryBars}>
            <span style={{ '--level': '88%' }} />
            <span style={{ '--level': '76%' }} />
            <span style={{ '--level': '94%' }} />
          </div>
        </motion.aside>
      </div>

      <div className={styles.scrollCue}>Featured work below</div>
    </section>
  );
}

export default Portfolio;
