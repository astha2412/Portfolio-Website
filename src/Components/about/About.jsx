import React from 'react';
import './about.css';
import ME from '../../assets/Kumari Astha Ranijjk.jpeg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaFolder} from 'react-icons/fa';

const About = () => {
  return (
    <>
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="About Image" />
          </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FaFolder className="about__icon" />
                <h5>Projects</h5>
                <small>50+ Projects</small>
              </article>
            </div>

           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus corrupti neque, quos quibusdam reiciendis sit soluta delectus optio quod explicabo error vero distinctio aspernatur voluptate consequuntur, repellat ipsam modi facere accusantium pariatur! Molestias labore voluptas minus sit nesciunt, eveniet atque?</p>

          
        </div>
      </div>
    </section>
    </>
  )
}

export default About;