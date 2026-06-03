// src/components/ResumeFab/ResumeFab.jsx
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import styles from './resumeFab.module.css';

const RESUME_URL =
  'https://drive.google.com/file/d/11a6KbTfssd-YEaHvd0nnURNM4vwidcok/view?usp=sharing';

function ResumeFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > 280);
    };

    handleScroll(); // set inicial por si entra ya scrolleado
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.fab} ${visible ? styles.visible : styles.hidden}`}
      aria-label="Open resume PDF"
    >
      <span className={styles.iconWrap}>
        <FaDownload />
      </span>
      <span className={styles.label}>Download my resume (PDF)</span>
    </button>
  );
}

export default ResumeFab;
