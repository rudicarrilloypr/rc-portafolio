// About.jsx
import React from 'react';
import styles from './about.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>About Me</h1>
      <p>As a software developer, my passion is crafting seamless solutions, embracing both front and back-end challenges with a unique blend of creativity, technical expertise, and entrepreneurial spirit. My approach mirrors the dynamism of combining an aesthetic eye, problem-solving skills, and strategic drive. This fusion enables me to deliver innovative and efficient software solutions, making me a versatile and valuable asset to any team aiming to transform ideas into reality...</p>
      {/* Insert about content here */}
    </section>
  );
}

export default About;
