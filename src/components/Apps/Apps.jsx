// Apps.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './apps.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Barradas.mx",
    url: "https://github.com/rudicarrilloypr/barradas-dashboard",
    demo: "https://www.barradas.mx/",
    description:
      "Website that allows customers to browse product catalogs, view specifications, request quotes and make selected online purchases.",
    builtWith: ["JavaScript", "WordPress", "CSS", "Node.js"],
    className: "barradas",
  },
{
  name: "CEFIX Chatbot",
  url: "https://github.com/rudicarrilloypr/fisio-clinic-app",
  demo: "https://cefix.netlify.app/",
  description:
    "AI-assisted physiotherapy clinic chatbot that guides users through a rule-based triage to distinguish urgency vs appointment needs, recommends the appropriate branch based on body zone and availability, and allows booking appointments without login. Designed as an MVP focused on speed, clarity, and conversion.",
  builtWith: [
    "Next.js 14 (App Router)",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "API Routes",
    "PWA",
    "Node.js"
  ],
  className: "cefixChatbot",
},
  {
    name: "Fortnite New Cosmetics",
    url: "https://github.com/rudicarrilloypr/fortnite-api",
    demo: "https://fortnite-api-new.netlify.app/",
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
    description:
      "Official Esterito Hostel website where guests and interested people can find more information about the hostel in Baja California Sur.",
    builtWith: ["JavaScript", "CSS", "Bootstrap", "Node.js", "RSpec"],
    className: "actionsApp",
  },
  {
    name: "Book a Concert",
    url: "https://github.com/Diegogagan2587/Book-a-concert-front-end",
    demo: "https://book-a-concert.onrender.com/",
    description:
      "Prototype web app that helps independent artists create events and lets users reserve tickets. Built as a full-stack capstone for the Microverse program.",
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
    name: "Air Purity: MÉXICO",
    url: "https://github.com/rudicarrilloypr/my-air-quality-app",
    demo: "https://airpurity-mx.netlify.app/",
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
    description:
      "Basic To-Do List SPA that lets you add, edit, delete and mark tasks as done.",
    builtWith: ["Webpack", "JavaScript", "HTML", "CSS", "Node.js"],
    className: "toDoList",
  },
  {
    name: "R&B Music World Tour",
    url: "https://github.com/rudicarrilloypr/capstone-module-1",
    demo: "https://rudicarrilloypr.github.io/capstone-module-1/main.html",
    description:
      "Conference-style page for an R&B Music World Tour, built as a capstone project using HTML, CSS and basic JavaScript.",
    builtWith: ["HTML", "CSS", "JavaScript"],
    className: "worldTour",
  },
];

function NextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} ${styles.slickNext}`} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} ${styles.slickPrev}`} onClick={onClick} />;
}

function Apps() {
  const [infoVisible, setInfoVisible] = useState(
    Array(projects.length).fill(false)
  );
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleInfo = (index) => {
    const newInfoVisible = [...infoVisible];
    newInfoVisible[index] = !newInfoVisible[index];
    setInfoVisible(newInfoVisible);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    autoplay: isPlaying,
    autoplaySpeed: 2600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '8%',
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
            A selection of client work and technical projects
          </span>
        </div>

        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={project.name} className={styles.slideOuter}>
                <div
                  className={`${styles.slide} ${styles[project.className]}`}
                >
                  <div className={styles.slideGradient} />

                  <div className={styles.slideContentShell}>
                    <div className={styles.slideHeader}>
                      <h3>{project.name}</h3>

                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.chipsRow}>
                      {project.builtWith.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className={styles.infoButton}
                      onClick={() => toggleInfo(index)}
                    >
                      {infoVisible[index] ? 'Close details' : 'More details'}
                    </button>
                  </div>

                  {infoVisible[index] && (
                    <div className={styles.detailPanel}>
                      <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => toggleInfo(index)}
                      >
                        ×
                      </button>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <div className={styles.detailLinks}>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View live project
                        </a>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                  )}
                </div>
              </div>
            ))}
          </Slider>

          <button
            type="button"
            className={styles.playPause}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Apps;
