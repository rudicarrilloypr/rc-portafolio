import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import HeroScene from '../HeroScene/HeroScene';
import styles from './portfolio.module.css';

const telemetryCards = [
  {
    status: 'ONLINE',
    label: 'Interface systems',
    headline: 'Clean architecture, fast delivery, modern UX.',
    bars: ['88%', '76%', '94%'],
    trace: ['38%', '72%', '48%', '86%', '58%'],
  },
  {
    status: 'MEASURING',
    label: 'Product signal',
    headline: 'Responsive flows, clear data, reliable interactions.',
    bars: ['82%', '91%', '74%'],
    trace: ['52%', '84%', '44%', '76%', '68%'],
  },
  {
    status: 'SYNCED',
    label: 'Full-stack delivery',
    headline: 'APIs, UI systems, and product logic working together.',
    bars: ['93%', '79%', '88%'],
    trace: ['44%', '66%', '92%', '56%', '78%'],
  },
];

function Portfolio() {
  const [activeTelemetry, setActiveTelemetry] = useState(0);
  const telemetry = telemetryCards[activeTelemetry];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTelemetry((current) => (current + 1) % telemetryCards.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

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
            <span>{telemetry.status}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={telemetry.label}
              className={styles.telemetryBody}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <p>{telemetry.label}</p>
              <strong>{telemetry.headline}</strong>
            </motion.div>
          </AnimatePresence>
          <div className={styles.telemetryBars}>
            {telemetry.bars.map((level, index) => (
              <span
                key={`${telemetry.label}-${level}`}
                style={{
                  '--level': level,
                  '--delay': `${index * 0.18}s`,
                }}
              />
            ))}
          </div>
          <div className={styles.telemetryTrace} aria-hidden="true">
            {telemetry.trace.map((height, index) => (
              <span
                key={`${telemetry.label}-${height}-${index}`}
                style={{
                  '--height': height,
                  '--delay': `${index * 0.12}s`,
                }}
              />
            ))}
          </div>
        </motion.aside>
      </div>

      <div className={styles.scrollCue}>Featured work below</div>
    </section>
  );
}

export default Portfolio;
