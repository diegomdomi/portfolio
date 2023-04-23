import React from 'react';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <TiHtml5 size={20} className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <FaSass className="experience__details-icon" />
              <h4>SASS</h4>
            </article>
            <article className="experience__details">
              <SiMui className="experience__details-icon" />
              <h4>Material UI</h4>
            </article>
            <article className="experience__details">
              <SiStyledcomponents size={25} className="experience__details-icon" />
              <h4>Styled Components</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Node js</h4>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <SiMysql size={20} className="experience__details-icon" />
              <h4>mySQL</h4>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDb</h4>
            </article>
            <article className="experience__details">
              <BsGit className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience