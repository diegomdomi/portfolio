import React from 'react';
import IMG1 from '../../assets/hotelmiranda.png';
import IMG2 from '../../assets/db.png';
import IMG3 from '../../assets/imgsurfing.png';
import IMG4 from '../../assets/dashboard.png';
import IMG5 from '../../assets/oxygen.png';
import IMG6 from '../../assets/store.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Hotel Miranda web Page',
      img: IMG1,
      description:
        'Luxury Hotel web page under contruction',
      technologies: 'HTML | CSS | SASS | JavaScript',
      link: 'https://diegomdomi.github.io/hotel_Miranda/',
      github: 'https://github.com/diegomdomi/hotel_Miranda',
    },
    {
      id: 2,
      title: 'Hotel Miranda Dashboard',
      img: IMG4,
      description:
        "This project allows to manage the hotel's back office, reservations and even employees",
      technologies: 'React | Redux | Styled Components',
      link: 'https://diegomdomi.github.io/hotel-miranda-dashboard/login/',
      github: 'https://github.com/diegomdomi/hotel-miranda-dashboard',
    },
    {
      id: 3,
      title: 'Hotel Miranda Backend',
      img: IMG2,
      description: 'API REST made with Node  and Express to manage de data base connected with the Dashboard ',
      technologies: 'Node | Express | Mongo | JWT | TypeScript',
      github: 'https://github.com/diegomdomi/hotel-backend',
    },
    {
      id: 4,
      title: 'image_surfing',
      img: IMG3,
      description:
        'SPA to find and download free image connected with "unsplash API". Fully responsive interactive website built based on Figma design',
      technologies: 'React | Redux | MUI',
      link: 'https://diegomdomi.github.io/image_in/',
      github: 'https://github.com/diegomdomi/image_in',
    },
    {
      id: 5,
      title: 'Oxygen Shop',
      img: IMG5,
      description:
        'Fully responsive interactive website built in HTML, CSS, SASS and Javascript',
      technologies: 'HTML | CSS |SASS | JavaScript ',
      link: 'https://diegomdomi.github.io/oxygenshop/',
      github: 'https://github.com/diegomdomi/oxygenshop',
    },
    {
      id: 6,
      title: 'e-Store web',
      img: IMG6,
      description:
        'FakeStore app that provides information about available products and their details ',
      technologies: 'React | Redux  | Materialize scc ',
      link: 'https://webstore-nine.vercel.app/',
      github: 'https://github.com/diegomdomi/eStore',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {pro.link && 
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
