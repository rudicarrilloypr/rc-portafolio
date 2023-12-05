// Apps.jsx
import React from 'react';
import Slider from 'react-slick';
import styles from './apps.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Fortnite new Cosmetics",
    url: "https://github.com/rudicarrilloypr/fortnite-api",
    demo: "https://fortnite-api-new.netlify.app/",
    description: "Web application that receives updated data from the official Fortnite API and shows the upcoming cosmetics into the game.",
    builtWith: "JavaScript, Webpack, HTML, CSS, Node.js, Fortnite API."
  },
  {
    name: "Air Purity: MÉXICO",
    url: "https://github.com/rudicarrilloypr/my-air-quality-app",
    demo: "https://airpurity-mx.netlify.app/",
    description: "Mobile web application to check and provide Mexico's current air pollution quality and beautiful pictures of iconic Mexico places, coming from OpenWeather and Unsplash API.",
    builtWith: "React, Webpack, JavaScript, HTML, CSS, Node.js, Unsplash API, OpenWeather API."
  },
  {
    name: "Actions App",
    url: "https://github.com/rudicarrilloypr/actions-app",
    demo: "https://actions-app.onrender.com/",
    description: "Mobile web application where you can manage your budget; you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    builtWith: "ROR, Javascript, CSS, Bootstrap, Node.js."
  },
  {
    name: "Math Magicians",
    url: "https://github.com/rudicarrilloypr/math-magicians",
    demo: "https://magos-matematicos.netlify.app/",
    description: "Website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and get motivational quotes.",
    builtWith: "React, JavaScript, Webpack, HTML, CSS, Node.js."
  },
  {
    name: "To Do List",
    url: "https://github.com/rudicarrilloypr/todo-list",
    demo: "https://rudicarrilloypr.github.io/todo-list/dist/",
    description: "A basic To-Do List app. SPA that allows you to add, edit, and delete tasks. It also allows you to mark tasks as done.",
    builtWith: "Webpack, JavaScript, HTML, CSS."
  },
  {
    name: "R&B Music World Tour",
    url: "https://github.com/rudicarrilloypr/capstone-module-1",
    demo: "https://rudicarrilloypr.github.io/capstone-module-1/main.html",
    description: "Capstone project to test the learned skills into a conference page, module based on HTML, CSS and basic JavaScript. This project is part of the Microverse curriculum. The project contains a full description of an R&B Music World Tour.",
    builtWith: "HTML, CSS, JavaScript."
  },
  {
    name: "Book a Concert",
    url: "https://github.com/Diegogagan2587/Book-a-concert-front-end",
    demo: "https://book-a-concert.onrender.com/",
    description: "Prototype website where the user can reserve concert tickets and also create their own concert or live event; This project was created to test the learned skills for the final full-stack capstone project of the Microverse program.",
    builtWith: "Front-end: React, Redux, JavaScript, HTML, CSS, Bootstrap, Node.js. Back-end: Ruby on Rails, PostgreSQL, RSpec."
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, // Centra el slide actual
    centerPadding: '12%', // Ajusta este valor para controlar cuánto de los slides adyacentes se muestra
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
      <h1>Apps</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className={styles.slide}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <p>Built With: {project.builtWith}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Apps;