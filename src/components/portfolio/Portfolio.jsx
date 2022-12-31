import React from 'react'
import './portfolio.css'
// import IMG6 from '../../assets/devcamper.png'
import calculator from "../../assets/calculator.png"
import mern from "../../assets/mern.png"
import spotify from "../../assets/spotify.png"
import superhero from "../../assets/superhero.png"
import alaram from "../../assets/alaram.png"


export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={mern} alt='' />
          </div>
          <h3>Login MERN Authentication </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Namanj413/Login_Authentication'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://celebrated-belekoy-00ae5d.netlify.app/'
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
            <img src={superhero} alt='' />
          </div>
          <h3>Super Hero Hunt </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Namanj413/superherohunt00.github.io'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://namanj413.github.io/superherohunt00.github.io/'
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
            <img src={spotify} alt='' />
          </div>
          <h3>Spotify Clone </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Namanj413/Spotifiy'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://namanj413.github.io/Spotifiy/'
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
            <img src={alaram} alt='' />
          </div>
          <h3>Alaram Clock </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Namanj413/alaramclock.github.io'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://namanj413.github.io/alaramclock.github.io/'
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
            <img src={calculator} alt='' />
          </div>
          <h3>Calculator</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Namanj413/Calculator.github.io'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <a
              href='https://namanj413.github.io/Calculator.github.io/'
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
