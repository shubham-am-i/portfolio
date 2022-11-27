import './portfolio.css'
import IMG1 from '../../assets/proshop.png'
import IMG2 from '../../assets/habit_tracker3.png'
import IMG3 from '../../assets/music_player.png'

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
          <h3>Proshop eCommerce App </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/proshop'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://proshop-btyz.onrender.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Music Player - Frontend </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/shubham-am-i/inner-Vibes-Music-App'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://inner-vibes.netlify.app/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
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
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://loop-habit-tracker.netlify.app/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
