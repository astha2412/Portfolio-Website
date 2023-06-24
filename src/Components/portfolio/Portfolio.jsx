import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/port1.png';
import IMG2 from '../../assets/rishi.png';
import IMG3 from '../../assets/debugger.png';
import IMG4 from '../../assets/slot.png';
import IMG5 from '../../assets/learning.png';
import IMG6 from '../../assets/travel.png';



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Training and Placement Cell, MMMUT Gorakhpur',
    github: "https://github.com/TnP-MMMUT/Official-Website",
    demo: "https://tnpmmmut.tech/#/"
  },
  {
    id: 2,
    image: IMG6,
    title: 'Travel Sync App',
    github: "https://github.com/astha2412/travel-sync-app",
    demo: "https://travel-sync-app.netlify.app/"
  },
  {
    id: 3,
    image: IMG2,
    title: 'Fashion designer portfolio',
    github: "https://github.com/astha2412/Fashion_Designer_Portfolio",
    demo: "https://rishikesh-singh-portfolio.netlify.app/"
  },
  {
    id: 4,
    image: IMG3,
    title: 'DeBugger King - Event Website',
    github: "https://github.com/astha2412/Event_DeBugger_King",
    demo: "https://debuggerking-ces.netlify.app/"
  },
  {
    id: 5,
    image: IMG4,
    title: 'Slot Machine Game',
    github: "https://github.com/astha2412/Slot-Machine-Game",
    demo: "https://astha2412.github.io/Slot-Machine-Game/"
  },
  {
    id: 6,
    image: IMG5,
    title: 'Learning Platforms',
    github: "https://github.com/astha2412/Learning-platforms",
    demo: "https://astha2412.github.io/Learning-platforms/"
  }
]

const Portfolio = () => {
  return (
    <>
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo})  => {
            return (
              <article key ={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src = {image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn" targets="_blank">Github</a>
              <a href={demo} className="btn btn-primary" targets="_blank">Live</a>
              </div>
            </article> 
            )
          })
        }
          
      </div>
    </section>
    </>
          )
        }

export default Portfolio;