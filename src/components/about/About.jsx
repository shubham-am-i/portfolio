import React from 'react'
import './about.css'
import ME from '../../assets/myimg.png'
import { FaAward, FaFolderOpen } from 'react-icons/fa'

export default function About() {
  return (
    <section id='about'>
      <h5 className="about_discp">Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
            <br/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <a
              href='https://files.codingninjas.in/taship-journey-1779443-1672529734-3ab6bb34e15316b121d6a53f77056e9a.jpg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Internship Experience</h5>
                <h3 className="about_discp">3+ months</h3>
              </article>
            </a>

            {/* <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <h3>Not yet. You have the chance to be the first</h3>
            </article> */}
            <a
              href='https://github.com/Namanj413?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            >
            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <h3 className="about_discp">15+ &nbsp;Projects</h3>
            </article>
            </a>
          </div>
          <p className='about_discp'>
            A Full Stack Web Developer haveing a knowledge in  <strong> Java,Html,Css,Node js, 
              React js, Next js & MongoDB. I love developing  </strong>
               websites and applications which are cross browser compatible, fully
            responsive, scalable and optimized for performance. Impatient to
            learn new technologies which bring efficiency and productivity to my
            workflow. I spend most of the day working on 
            <strong> web projects</strong> as well as learning new technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
