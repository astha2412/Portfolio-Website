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
           Passionate open source enthusiast with broad expertise in web technologies. Believer in collaboration and knowledge sharing. Continuously seeking innovative solutions and pushing boundaries. Eager to connect, collaborate, and bring exceptional ideas to life. Let's shape the future together with the boundless potential of technology. Explore my portfolio and join the journey.

           </p>

          
        </div>
      </div>
    </section>
    </>
  )
}

export default About;