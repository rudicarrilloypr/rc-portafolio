import React from 'react';
import styles from './socials.module.css';
import blogCover from '../../assets/rc-ai-cover.png';
import logo from '../../assets/rc-sd-logo.PNG';

function Socials() {
  return (
    <section id="socials" className={styles.socials}>
      <h1 className={styles.title}>More Insights</h1>
      <p className={styles.subtitle}>Exploring the Intersection of Technology and Humanity</p>
      
      <div className={styles.blogPreview}>
        <h2 className={styles.blogTitle}>The Impact of AI on Software Development</h2>
        <h3 className={styles.blogAuthor}>by Rudi Carrillo</h3>
        <a href="https://medium.com/@rudicarrilloypr/the-impact-of-ai-on-software-development-and-the-advent-of-futuristic-technologies-5653ee26d753" target="_blank" rel="noopener noreferrer">
          <img src={blogCover} alt="Blog Preview" className={styles.blogImage} />
        </a>
      </div>

      <footer className={styles.footer}>
        <a href="https://lnk.bio/rudicarrillo_softdev" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Rudi Carrillo Software Developer Logo" className={styles.footerLogo} />
        </a>
      </footer>
    </section>
  );
}

export default Socials;
