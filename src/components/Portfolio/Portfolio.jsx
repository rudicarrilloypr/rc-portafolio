// Portfolio.jsx
import React from 'react';
import styles from './portfolio.module.css';

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h1>My Portfolio</h1>
      <p>Here you will find my work and projects that I've been involved with.</p>
      {/* Insert portfolio items here */}
    </section>
  );
}

export default Portfolio;
