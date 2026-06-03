import React from 'react';
import styles from './socials.module.css';

// Image imports
import aiCover from '../../assets/rc-ai-cover.png';
import juniorDevsCover from '../../assets/junior-devs-2025-cover.png';
import logo from '../../assets/rc-sd-logo.PNG';

// Article data
const articles = [
  {
    id: 'ai-impact',
    title: 'The impact of AI on software development',
    excerpt:
      'A look at how AI tooling is changing the way developers design, ship and maintain software - and why the human side still matters.',
    url: 'https://medium.com/@rudicarrilloypr/the-impact-of-ai-on-software-development-and-the-advent-of-futuristic-technologies-5653ee26d753',
    cover: aiCover,
    source: 'Medium',
    date: '2024-10-10',
  },
  {
    id: 'junior-devs-2025',
    title: 'What Companies Actually Expect from Junior Developers in 2025',
    excerpt:
      'A realistic breakdown of the hidden expectations companies have for junior developers today - from code readability and communication to debugging, AI-assisted work, and the mindset modern teams truly value.',
    url: 'https://medium.com/@rudicarrilloypr/what-companies-really-expect-from-junior-developers-in-2025-and-why-most-applicants-miss-the-mark-e6291bb5f8af',
    cover: juniorDevsCover,
    source: 'Medium',
    date: '2025-11-29',
  },
];

function Socials() {
  return (
    <section id="socials" className={`section ${styles.socials}`}>
      <div className="section-inner">
        {/* Header global */}
        <div className="section-header">
          <div>
            <h2 className="section-title">More insights</h2>
            <p className="section-subtitle">
              Articles and thoughts beyond the code.
            </p>
          </div>
        </div>

        {/* GRID PREMIUM */}
        <div className={styles.blogGrid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.blogCard}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageWrapper}
              >
                <img
                  src={article.cover}
                  alt={article.title}
                  className={styles.blogImage}
                />
              </a>

              <div className={styles.blogText}>
                <h3 className={styles.blogTitle}>{article.title}</h3>
                <p className={styles.blogMeta}>
                  Written by Rudi Carrillo / {article.source}
                </p>
                <p className={styles.blogExcerpt}>{article.excerpt}</p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogLink}
                >
                  Read the article
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
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
              <span>Copyright {new Date().getFullYear()} Rudi Carrillo.</span>
              <span>Available for remote opportunities.</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Socials;
