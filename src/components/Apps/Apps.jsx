import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaPause,
  FaPlay,
  FaTimes,
} from 'react-icons/fa';
import styles from './apps.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Barradas.mx",
    url: "https://github.com/rudicarrilloypr/barradas-dashboard",
    demo: "https://www.barradas.mx/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1763483080/Captura_de_pantalla_2025-11-18_a_la_s_10.24.10_a.m._vlyj2w.png",
    description:
      "Website that allows customers to browse product catalogs, view specifications, request quotes and make selected online purchases.",
    builtWith: ["JavaScript", "WordPress", "CSS", "Node.js"],
    className: "barradas",
  },
  {
    name: "CEFIX Chatbot",
    url: "https://github.com/rudicarrilloypr/fisio-clinic-app",
    demo: "https://cefix.netlify.app/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1767368700/Captura_de_pantalla_2026-01-02_a_la_s_9.27.38_a.m._v7ofjl.png",
    description:
      "AI-assisted physiotherapy clinic chatbot that guides users through rule-based triage, recommends the right branch and supports appointment booking without login.",
    builtWith: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API Routes",
      "PWA",
      "Node.js",
    ],
    className: "cefixChatbot",
  },
  {
    name: "Fortnite New Cosmetics",
    url: "https://github.com/rudicarrilloypr/fortnite-api",
    demo: "https://fortnite-api-new.netlify.app/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846969/Captura_de_pantalla_2023-12-06_a_la_s_1.08.38_s2n0ez.png",
    description:
      "Web application that pulls updated data from the official Fortnite API and displays upcoming cosmetics for the game.",
    builtWith: [
      "JavaScript",
      "Webpack",
      "HTML",
      "CSS",
      "Node.js",
      "Fortnite API",
    ],
    className: "fortnite",
  },
  {
    name: "Esterito Hostel",
    url: "https://github.com/rudicarrilloypr/landingpage",
    demo: "https://esteritohostel.com/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1763482569/Captura_de_pantalla_2025-11-18_a_la_s_10.14.36_a.m._bgpbfw.png",
    description:
      "Official Esterito Hostel website where guests can find practical information about the hostel in Baja California Sur.",
    builtWith: ["JavaScript", "CSS", "Bootstrap", "Node.js", "RSpec"],
    className: "actionsApp",
  },
  {
    name: "Book a Concert",
    url: "https://github.com/Diegogagan2587/Book-a-concert-front-end",
    demo: "https://book-a-concert.onrender.com/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846969/Captura_de_pantalla_2023-12-06_a_la_s_1.15.24_ufmzn5.png",
    description:
      "Prototype web app that helps independent artists create events and lets users reserve tickets.",
    builtWith: [
      "React",
      "Redux",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Ruby on Rails",
      "PostgreSQL",
      "RSpec",
    ],
    className: "bookAConcert",
  },
  {
    name: "Air Purity: Mexico",
    url: "https://github.com/rudicarrilloypr/my-air-quality-app",
    demo: "https://airpurity-mx.netlify.app/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846969/Captura_de_pantalla_2023-12-06_a_la_s_1.09.34_twiex8.png",
    description:
      "Mobile-first web app to check Mexico's current air quality and browse photos of iconic locations, using OpenWeather and Unsplash APIs.",
    builtWith: [
      "React",
      "Webpack",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Unsplash API",
      "OpenWeather API",
    ],
    className: "airPurity",
  },
  {
    name: "Math Magicians",
    url: "https://github.com/rudicarrilloypr/math-magicians",
    demo: "https://magos-matematicos.netlify.app/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846969/Captura_de_pantalla_2023-12-06_a_la_s_1.12.58_edfcyy.png",
    description:
      "Single Page App for math fans. Users can make simple calculations and generate motivational quotes.",
    builtWith: [
      "React",
      "JavaScript",
      "Webpack",
      "HTML",
      "CSS",
      "Node.js",
      "Ninjas API",
    ],
    className: "mathMagicians",
  },
  {
    name: "To Do List",
    url: "https://github.com/rudicarrilloypr/todo-list",
    demo: "https://rudicarrilloypr.github.io/todo-list/dist/",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846970/Captura_de_pantalla_2023-12-06_a_la_s_1.13.50_yd2wmq.png",
    description:
      "Basic To-Do List SPA that lets you add, edit, delete and mark tasks as done.",
    builtWith: ["Webpack", "JavaScript", "HTML", "CSS", "Node.js"],
    className: "toDoList",
  },
  {
    name: "R&B Music World Tour",
    url: "https://github.com/rudicarrilloypr/capstone-module-1",
    demo: "https://rudicarrilloypr.github.io/capstone-module-1/main.html",
    image: "https://res.cloudinary.com/dqjfp50zr/image/upload/v1701846970/Captura_de_pantalla_2023-12-06_a_la_s_1.14.47_usoykg.png",
    description:
      "Conference-style page for an R&B Music World Tour, built as a capstone project using HTML, CSS and basic JavaScript.",
    builtWith: ["HTML", "CSS", "JavaScript"],
    className: "worldTour",
  },
];

function NextArrow(props) {
  const { className, onClick } = props;
  return <button type="button" className={`${className} ${styles.slickNext}`} onClick={onClick} aria-label="Next project" />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <button type="button" className={`${className} ${styles.slickPrev}`} onClick={onClick} aria-label="Previous project" />;
}

const handleCardPointerMove = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  const rotateY = (x - 0.5) * 12;
  const rotateX = (0.5 - y) * 10;

  card.style.setProperty('--mx', `${x * 100}%`);
  card.style.setProperty('--my', `${y * 100}%`);
  card.style.setProperty('--rx', `${rotateX}deg`);
  card.style.setProperty('--ry', `${rotateY}deg`);
};

const handleCardPointerLeave = (event) => {
  const card = event.currentTarget;
  card.style.setProperty('--mx', '50%');
  card.style.setProperty('--my', '50%');
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
};

function Apps() {
  const [infoVisible, setInfoVisible] = useState(
    Array(projects.length).fill(false)
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const hasOpenDetails = infoVisible.some(Boolean);
  const sliderIsPlaying = isPlaying && !hasOpenDetails;

  const toggleInfo = (index) => {
    const nextInfoVisible = [...infoVisible];
    const willShowDetails = !nextInfoVisible[index];
    nextInfoVisible[index] = !nextInfoVisible[index];
    setInfoVisible(nextInfoVisible);

    if (willShowDetails) {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    autoplay: sliderIsPlaying,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '7%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="apps" className={`section ${styles.apps}`}>
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Featured web apps</h2>
          <span className="section-subtitle">
            Client work, product experiments and technical builds
          </span>
        </div>

        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={project.name} className={styles.slideOuter}>
                <article
                  className={`${styles.slide} ${styles[project.className]}`}
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={handleCardPointerLeave}
                >
                  <div className={styles.slideGradient} />
                  <div className={styles.cardLight} aria-hidden="true" />
                  <div className={styles.cardSheen} aria-hidden="true" />

                  <div className={styles.slideContentShell}>
                    <div className={styles.slideMeta}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span>Project</span>
                    </div>

                    <div className={styles.slideHeader}>
                      <h3>{project.name}</h3>
                    </div>

                    <div className={styles.chipsRow}>
                      {project.builtWith.slice(0, 6).map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.slideActions}>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        Live
                      </a>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub aria-hidden="true" />
                        Source
                      </a>
                      <button
                        type="button"
                        className={styles.infoButton}
                        onClick={() => toggleInfo(index)}
                      >
                        <FaInfoCircle aria-hidden="true" />
                        {infoVisible[index] ? 'Hide details' : 'Details'}
                      </button>
                    </div>
                  </div>

                  {infoVisible[index] && (
                    <div className={styles.detailPanel}>
                      <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => toggleInfo(index)}
                        aria-label="Close project details"
                      >
                        <FaTimes aria-hidden="true" />
                      </button>
                      <div className={styles.detailImageFrame}>
                        <img
                          src={project.image}
                          alt={`${project.name} project screenshot`}
                        />
                      </div>
                      <div className={styles.detailContent}>
                        <span className={styles.detailEyebrow}>Project profile</span>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <div className={styles.detailLinks}>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt aria-hidden="true" />
                            View live project
                          </a>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub aria-hidden="true" />
                            View source code
                          </a>
                        </div>
                        <div className={styles.detailTech}>
                          {project.builtWith.map((tech) => (
                            <span key={tech} className="chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </div>
            ))}
          </Slider>

          <button
            type="button"
            className={styles.playPause}
            onClick={togglePlay}
            aria-label={sliderIsPlaying ? 'Pause slider' : 'Play slider'}
          >
            {sliderIsPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Apps;
