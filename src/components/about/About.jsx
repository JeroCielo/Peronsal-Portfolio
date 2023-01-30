import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiStarsStack} from 'react-icons/gi'
import {FaAward} from'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiStarsStack className='about__icon'/>
              <h5>Experience</h5>
              <small>10+ Month Programming</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Awards</h5>
              <small>3+ National Awards</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem minus tenetur 
            cum id cumque ea sunt facere quasi optio nulla maxime amet eius, reiciendis voluptatibus 
            consequatur repellat mollitia odio?
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About