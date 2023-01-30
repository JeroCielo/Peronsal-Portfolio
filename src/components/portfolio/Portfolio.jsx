import React from 'react'
import './portfolio.css'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: portfolio3,
    title: 'Nexus App',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  },
  {
    id: 2,
    image: portfolio4,
    title: 'TYJ Website',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  },
  {
    id: 3,
    image: portfolio2,
    title: 'Instagram Nonfollowback',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  },
  {
    id: 4,
    image: portfolio1,
    title: 'Computopia',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Typero',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Kineto',
    github: 'https://github.com/JeroCielo',
    demo: '#',
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="portfolio__item-image3" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio