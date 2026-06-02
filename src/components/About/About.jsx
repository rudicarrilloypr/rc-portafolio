import React from 'react';
import {
  FaAward,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaTerminal,
  FaStackOverflow,
} from 'react-icons/fa';
import { PiFileCssDuotone, PiFileHtmlDuotone } from "react-icons/pi";
import { DiRubyRough, DiRuby } from "react-icons/di";
import {
  SiRubyonrails,
  SiRubygems,
  SiSelenium,
  SiNextdotjs,
  SiAngular,
} from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { GiCapybara } from "react-icons/gi";
import { FaRegFileCode } from "react-icons/fa6";
import { TbKeyframes } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import profileImage from '../../assets/rudicarrillo-circle.PNG';
import styles from './about.module.css';

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="section-inner">

        {/* STACK */}
        <div className={styles.stackSection}>
          <div className="section-header">
            <h2 className="section-title">My stack</h2>
            <span className="section-subtitle">
              Languages, frameworks and core skills
            </span>
          </div>

          <div className={styles.skillsGrid}>
            <div className={`surface ${styles.skillBox}`}>
              <div className={styles.skillHeader}>
                <FaStackOverflow className={styles.skillIcon} />
                <h3>Languages</h3>
              </div>
              <ul>
                <li>
                  <span>JavaScript</span>
                  <FaJsSquare />
                </li>
                <li>
                  <span>Ruby</span>
                  <DiRuby />
                </li>
                <li>
                  <span>HTML</span>
                  <FaHtml5 />
                </li>
                <li>
                  <span>CSS</span>
                  <FaCss3 />
                </li>
              </ul>
            </div>

            <div className={`surface ${styles.skillBox}`}>
              <div className={styles.skillHeader}>
                <TbKeyframes className={styles.skillIcon} />
                <h3>Frameworks</h3>
              </div>
              <ul>
                <li>
                  <span>React</span>
                  <FaReact />
                </li>
                <li>
                  <span>Next.js</span>
                  <SiNextdotjs />
                </li>
                <li>
                  <span>Angular</span>
                  <SiAngular />
                </li>
                <li>
                  <span>Ruby on Rails</span>
                  <SiRubyonrails />
                </li>
                <li>
                  <span>RSpec</span>
                  <SiRubygems />
                </li>
                <li>
                  <span>Capybara</span>
                  <GiCapybara />
                </li>
                <li>
                  <span>Selenium</span>
                  <SiSelenium />
                </li>
              </ul>
            </div>

            <div className={`surface ${styles.skillBox}`}>
              <div className={styles.skillHeader}>
                <FaTerminal className={styles.skillIcon} />
                <h3>Skills</h3>
              </div>
              <ul>
                <li>
                  <span>Database management</span>
                  <IoIosCheckmarkCircle />
                </li>
                <li>
                  <span>Version control</span>
                  <IoIosCheckmarkCircle />
                </li>
                <li>
                  <span>CLI workflow</span>
                  <IoIosCheckmarkCircle />
                </li>
                <li>
                  <span>Web development</span>
                  <IoIosCheckmarkCircle />
                </li>
                <li>
                  <span>API design / integration</span>
                  <IoIosCheckmarkCircle />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ABOUT + RESUME */}
        <div className={styles.aboutLayout}>
          <div className={styles.profileCol}>
            <div className={styles.profileImageWrapper}>
              <img
                src={profileImage}
                alt="Rudi Carrillo"
                className={styles.profileImage}
              />
            </div>
          </div>

          <div className={styles.aboutTextCol}>
            <h2 className="section-title">About me</h2>
            <p className={styles.aboutBody}>
              I&apos;m a software developer who enjoys working across both
              front-end and back-end, with a strong focus on clean interfaces,
              performance and readable code. I approach projects with a mix of
              creativity, technical depth and an entrepreneurial mindset, always
              looking for ways to ship value and keep the experience smooth for
              both users and developers.
            </p>
            <p className={styles.aboutBody}>
              I&apos;m currently based in Mexico and open to remote roles where I can
              contribute to product teams, help refine architecture and own
              features from idea to production.
            </p>

            <a
              href="https://drive.google.com/file/d/11a6KbTfssd-YEaHvd0nnURNM4vwidcok/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeButton}
            >
              Get my resume
            </a>
          </div>
        </div>

        {/* CERTIFICATES */}
        <div className={styles.certificatesSection}>
          <div className={styles.certHeader}>
            <FaAward className={styles.certificationIcon} />
            <div>
              <h3 className={styles.certTitle}>Certificates</h3>
              <p className="text-muted">Formal training and specialization</p>
            </div>
          </div>

          <div className={styles.certGrid}>
            <a
              href="https://www.credential.net/bbffafd5-98f3-4d22-8c2e-6663a3f7a430"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFileCode />
              <span>Full Stack Software Development</span>
            </a>
            <a
              href="https://www.credential.net/4fc09f4f-0ce4-46d9-8dd7-c94b5d3d31ac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiRubyonrails />
              <span>Ruby on Rails</span>
            </a>
            <a
              href="https://www.credential.net/0cf3be44-0512-49a1-ad17-0ad4efe9c500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiRubyRough />
              <span>Ruby & Databases</span>
            </a>
            <a
              href="https://www.credential.net/16792c56-1580-4733-8bbc-c66a3c80b531"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact />
              <BiLogoRedux />
              <span>React & Redux</span>
            </a>
            <a
              href="https://www.credential.net/fcd1afc0-e0b3-4726-a770-e79588228567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaJsSquare />
              <span>JavaScript</span>
            </a>
            <a
              href="https://www.credential.net/7b46e9e0-5998-485b-91de-20e8655d495f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiFileHtmlDuotone />
              <PiFileCssDuotone />
              <span>HTML & CSS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
