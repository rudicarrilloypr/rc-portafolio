import React from 'react';
import { FaAward } from 'react-icons/fa';
import profileImage from '../../assets/rudicarrillo-circle.PNG';
import styles from './about.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.quoteSection}>
      <div className={styles.profileImageWrapper}>
  <img src={profileImage} alt="Rudi Carrillo" className={styles.profileImage}/>
</div>
        <p className={styles.quote}>"As a software developer, my passion is crafting seamless solutions, embracing both front and back-end challenges with a unique blend of creativity, technical expertise, and entrepreneurial spirit. My approach mirrors the dynamism of combining an aesthetic eye, problem-solving skills, and strategic drive. This fusion enables me to deliver innovative and efficient software solutions, making me a versatile and valuable asset to any team aiming to transform ideas into reality..."</p>
        <p className={styles.author}>- Rudi Carrillo</p>
      </div>
      
      <div className={styles.certificates}>
        <FaAward className={styles.certificationIcon}/>
        <div className={styles.certificatesLinks}>
        <a href="https://www.credential.net/bbffafd5-98f3-4d22-8c2e-6663a3f7a430" target="_blank" rel="noopener noreferrer">Full Stack Soft Dev</a>
        <a href="https://www.credential.net/4fc09f4f-0ce4-46d9-8dd7-c94b5d3d31ac" target="_blank" rel="noopener noreferrer">Ruby on Rails</a>
        <a href="https://www.credential.net/0cf3be44-0512-49a1-ad17-0ad4efe9c500" target="_blank" rel="noopener noreferrer">Ruby and Databases</a>
        <a href="https://www.credential.net/16792c56-1580-4733-8bbc-c66a3c80b531" target="_blank" rel="noopener noreferrer">React and Redux</a>
        <a href="https://www.credential.net/fcd1afc0-e0b3-4726-a770-e79588228567" target="_blank" rel="noopener noreferrer">Javascript</a>
        <a href="https://www.credential.net/7b46e9e0-5998-485b-91de-20e8655d495f" target="_blank" rel="noopener noreferrer">HTML and CSS</a>
        </div>
      </div>
    </section>
  );
}

export default About;
