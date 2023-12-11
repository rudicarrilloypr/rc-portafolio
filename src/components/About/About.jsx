import React from 'react';
import { FaAward, FaReact, FaJsSquare } from 'react-icons/fa';
import { PiFileCssDuotone } from "react-icons/pi";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa6";
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
<a href="https://drive.google.com/file/d/18ePzDb0wrpynwiEKyil2uMHdhFAddWCl/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>My Resume</a>
        <p className={styles.quote}>"As a software developer, my passion is crafting seamless solutions, embracing both front and back-end challenges with a unique blend of creativity, technical expertise, and entrepreneurial spirit. My approach mirrors the dynamism of combining an aesthetic eye, problem-solving skills, and strategic drive. This fusion enables me to deliver innovative and efficient software solutions, making me a versatile and valuable asset to any team aiming to transform ideas into reality..."</p>
        <p className={styles.author}>- Rudi Carrillo</p>
      </div>
      
      <div className={styles.certificates}>
        <FaAward className={styles.certificationIcon}/>
        <h2 className={styles.certificatesTitle}>Certificates</h2>
        <div className={styles.certificatesLinks}>
        <a href="https://www.credential.net/bbffafd5-98f3-4d22-8c2e-6663a3f7a430" target="_blank" rel="noopener noreferrer"><FaRegFileCode /> Full Stack Soft Dev</a>
        <a href="https://www.credential.net/4fc09f4f-0ce4-46d9-8dd7-c94b5d3d31ac" target="_blank" rel="noopener noreferrer"><SiRubyonrails /> Ruby on Rails</a>
        <a href="https://www.credential.net/0cf3be44-0512-49a1-ad17-0ad4efe9c500" target="_blank" rel="noopener noreferrer"><DiRubyRough /> Ruby and Databases</a>
        <a href="https://www.credential.net/16792c56-1580-4733-8bbc-c66a3c80b531" target="_blank" rel="noopener noreferrer"><FaReact /><BiLogoRedux /> React and Redux</a>
        <a href="https://www.credential.net/fcd1afc0-e0b3-4726-a770-e79588228567" target="_blank" rel="noopener noreferrer"><FaJsSquare /> Javascript</a>
        <a href="https://www.credential.net/7b46e9e0-5998-485b-91de-20e8655d495f" target="_blank" rel="noopener noreferrer"><PiFileHtmlDuotone /><PiFileCssDuotone /> HTML and CSS</a>
        </div>
      </div>
    </section>
  );
}

export default About;
