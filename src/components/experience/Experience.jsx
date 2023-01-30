import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Check Out My</h5>
      <h2>Skills and Experience</h2>

      <div className="container experience__container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small>Beginner</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small>Beginner</small>
              </div>      
            </article>
          </div>
        </div>
        
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small>Beginner</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Express JS</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>      
            </article>
          </div>
        </div>

        <div className="experience-frontend">
          <h3>Other Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Java</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>C++</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>C#</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Dart</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Solidity</h4>
                <small>Beginner</small>
              </div>      
            </article>
          </div>
        </div>

        <div className="experience-frontend">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Figma</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Unity</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Flutter</h4>
                <small>Experienced</small>
              </div>      
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Firebase</h4>
                <small>Beginner</small>
              </div>      
            </article>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience