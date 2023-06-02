import React from 'react';
import './about.css';
import ME from '../../assets/edited.png';
import {MdLocationPin} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';
import {BsFillWebcamFill} from 'react-icons/bs';

const About = () => {
  return (
    <>
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="About-pic" />
          </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <MdLocationPin className="about__icon" />
                <h5>From Ranchi,</h5>
                <small>Jharkhand</small>
              </article>

              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>B.Tech.</h5>
                <small>Computer Science & Engineering</small>
              </article>

              <article className="about__card">
                <BsFillWebcamFill className="about__icon" />
                <h5>Web</h5>
                <small>Developer</small>
              </article>
            </div>

           <p>
           Hola Friends!
           I am a passionate open source enthusiast and a firm believer in the power of collaboration and knowledge sharing.
           With my broad expertise in web technologies and my unwavering passion for open source, I am constantly seeking innovative solutions and pushing the boundaries of what's possible. I am excited to continue exploring the ever-evolving tech landscape, facing challenges head-on, and contributing to meaningful projects that have a positive impact.

Please feel free to explore my portfolio and join me on this exhilarating journey. I am eager to connect, collaborate, and bring exceptional ideas to life. Together, let's shape the future with the boundless potential of technology.

           </p>

          
        </div>
      </div>
    </section>
    </>
  )
}

export default About;