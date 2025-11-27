import React from 'react';
import styles from './socials.module.css';
import blogCover from '../../assets/rc-ai-cover.png';
import logo from '../../assets/rc-sd-logo.PNG';

function Socials() {
  return (
    <section id="socials" className={`section ${styles.socials}`}>
      <div className="section-inner">
        <div className={styles.header}>
          <h2 className="section-title">More insights</h2>
          <p className={styles.subtitle}>
            Articles and thoughts beyond the code.
          </p>
        </div>

        <div className={styles.blogCard}>
          <div className={styles.blogText}>
            <h3 className={styles.blogTitle}>
              The impact of AI on software development
            </h3>
            <p className={styles.blogMeta}>Written by Rudi Carrillo · Medium</p>
            <p className={styles.blogExcerpt}>
              A look at how AI tooling is changing the way developers design,
              ship and maintain software — and why the human side still matters.
            </p>
            <a
              href="https://medium.com/@rudicarrilloypr/the-impact-of-ai-on-software-development-and-the-advent-of-futuristic-technologies-5653ee26d753"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogLink}
            >
              Read the article
            </a>
          </div>

          <a
            href="https://medium.com/@rudicarrilloypr/the-impact-of-ai-on-software-development-and-the-advent-of-futuristic-technologies-5653ee26d753"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageWrapper}
          >
            <img
              src={blogCover}
              alt="The Impact of AI on Software Development"
              className={styles.blogImage}
            />
          </a>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <a
              href="https://lnk.bio/rudicarrillo_softdev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img
                src={logo}
                alt="Rudi Carrillo Software Developer"
                className={styles.footerLogo}
              />
            </a>
            <div className={styles.footerText}>
              <span>© {new Date().getFullYear()} Rudi Carrillo.</span>
              <span>Available for remote opportunities.</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Socials;
