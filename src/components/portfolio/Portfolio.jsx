import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proshop.png'
import IMG2 from '../../assets/habit_tracker3.png'
import IMG3 from '../../assets/music_player.png'
import IMG4 from '../../assets/notes.png'
import IMG5 from '../../assets/jobify.png'
import IMG6 from '../../assets/devcamper.png'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Proshop Ecommerce App </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/proshop'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://proshop-btyz.onrender.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Jobify </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/jobify'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://jobify-7qh9.onrender.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>DevCamper API </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/devcamper_api'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://devcamper-73xp.onrender.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Google Keep Clone </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/Notes'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://notes-hfhj.onrender.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Music Player - Frontend Desktop View </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/inner-Vibes-Music-App'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://inner-vibes.netlify.app/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Habit Tracker - Mini Project</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/habit-tracker'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://loop-habit-tracker.netlify.app/'
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
