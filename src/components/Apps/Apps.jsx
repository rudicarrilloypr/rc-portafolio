// Apps.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './apps.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Fortnite New Cosmetics",
    url: "https://github.com/rudicarrilloypr/fortnite-api",
    demo: "https://fortnite-api-new.netlify.app/",
    description: "Web application that receives updated data from the official Fortnite API and shows the upcoming cosmetics into the game.",
    builtWith: ["JavaScript", "Webpack", "HTML", "CSS", "Node.js", "Fortnite API"],
    className: "fortnite"
  },
  {
    name: "Book a Concert",
    url: "https://github.com/Diegogagan2587/Book-a-concert-front-end",
    demo: "https://book-a-concert.onrender.com/",
    description: "Prototype website where the goal is to help independent artists create their concerts or live events and people can reserve concert tickets with their own user; This project was created to test the learned skills for the final full-stack capstone project of the Microverse program.",
    builtWith: ["React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Node.js", "Ruby on Rails", "PostgreSQL", "RSpec"],
    className: "bookAConcert"
  },
  {
    name: "Air Purity: MÉXICO",
    url: "https://github.com/rudicarrilloypr/my-air-quality-app",
    demo: "https://airpurity-mx.netlify.app/",
    description: "Mobile web application to check and provide Mexico's current air pollution quality and beautiful pictures of iconic Mexico places, coming from OpenWeather and Unsplash API.",
    builtWith: ["React", "Webpack", "JavaScript", "HTML", "CSS", "Node.js", "Unsplash API", "OpenWeather API"],
    className: "airPurity"
  },
  {
    name: "Actions App",
    url: "https://github.com/rudicarrilloypr/actions-app",
    demo: "https://actions-app.onrender.com/",
    description: "Mobile web application where you can manage your budget; you can create a list of transactions associated with a category, so you can see how much money you spent and on what.",
    builtWith: ["Ruby on Rails", "PostgreSQL", "Javascript", "CSS", "Bootstrap", "Node.js", "RSpec"],
    className: "actionsApp"
  },
  {
    name: "Math Magicians",
    url: "https://github.com/rudicarrilloypr/math-magicians",
    demo: "https://magos-matematicos.netlify.app/",
    description: "Website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and get motivational quotes.",
    builtWith: ["React", "JavaScript", "Webpack", "HTML", "CSS", "Node.js", "Ninjas API"],
    className: "mathMagicians"
  },
  {
    name: "To Do List",
    url: "https://github.com/rudicarrilloypr/todo-list",
    demo: "https://rudicarrilloypr.github.io/todo-list/dist/",
    description: "A basic To-Do List app. SPA that allows you to add, edit, and delete tasks. It also allows you to mark tasks as done.",
    builtWith: ["Webpack", "JavaScript", "HTML", "CSS", "Node.js"],
    className: "toDoList"
  },
  {
    name: "R&B Music World Tour",
    url: "https://github.com/rudicarrilloypr/capstone-module-1",
    demo: "https://rudicarrilloypr.github.io/capstone-module-1/main.html",
    description: "Capstone project to test the learned skills into a conference page, module based on HTML, CSS and basic JavaScript. This project is part of the Microverse curriculum. The project contains a full description of an R&B Music World Tour.",
    builtWith: ["HTML", "CSS", "JavaScript"],
    className: "worldTour"
  }
];

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickNext}`}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slickPrev}`}
      onClick={onClick}
    />
  );
}

function Apps() {
  // Estado para manejar la visibilidad de la información
  const [infoVisible, setInfoVisible] = useState(Array(projects.length).fill(false));

  // Función para manejar el clic en el botón More Info
  const toggleInfo = (index) => {
    const newInfoVisible = [...infoVisible];
    newInfoVisible[index] = !newInfoVisible[index];
    setInfoVisible(newInfoVisible);
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, // Centra el slide actual
    centerPadding: '2%', // Ajusta este valor para controlar cuánto de los slides adyacentes se muestra
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section id="apps" className={styles.apps}>
      <h1>Featured Web Apps</h1>
      <Slider {...settings}>
      {projects.map((project, index) => (
  <div key={index} className={`${styles.slide} ${styles[project.className]}`}>
    <div className={styles.slideOverlay}>
      <button className={styles.infoButton} onClick={() => toggleInfo(index)}>More Info</button>
      {infoVisible[index] && (
  <div className={styles.slideContent}>
    <button className={styles.closeButton} onClick={() => toggleInfo(index)}>X</button>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={styles.linksContainer}>
  <a href={project.url} target="_blank" rel="noopener noreferrer">Source Code</a>
  <span> | </span>
  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>
</div>
          <p>Built With: {project.builtWith.map((tech, idx) => (
  <span key={idx} className={styles.techBadge}>{tech}</span>
))}</p>
        </div>
      )}
    </div>
  </div>
))}
      </Slider>
    </section>
  );
}

export default Apps;