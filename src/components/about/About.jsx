import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import { FaAward, FaFolderOpen } from 'react-icons/fa'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <a
              href='https://charitism-campaigns.s3.ap-south-1.amazonaws.com/charitism-v2/campaign-details/fd84ae5b-a23b-40af-8d56-ad34aff45ca6'
              target='_blank'
              rel='noopener noreferrer'
            >
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Internship Experience</h5>
                <small>2+ months</small>
              </article>
            </a>

            {/* <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Not yet. You have the chance to be the first</small>
            </article> */}

            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>5+ &nbsp; Completed Projects</small>
            </article>
          </div>
          <p>
            A Web Developer specializing in JavaScript stack. I love developing
            websites and applications which are cross browser compatible, fully
            responsive, scalable and optimized for performance. Impatient to
            learn new technologies which bring efficiency and productivity to my
            workflow. I spend most of the day working on{' '}
            <strong>web projects</strong> as well as studying sanskrit
            literature and philosophy.
          </p>
        </div>
      </div>
    </section>
  )
}
