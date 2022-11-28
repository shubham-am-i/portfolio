import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-modified.jpg'
import HeaderSocials from './HeaderSocials'
import Typed from 'typed.js'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        'a programmer',
        'Fullstack Developer',
        'UI/UX Enthusiast',
        'Spiritual Seeker',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <header>
      <div className='container header__container'>
        <h3> I'm</h3>
        <h1 className='gradient-text'>Shubham</h1>
        <h5 className='text-light'>
          <span className='tag'></span>
        </h5>

        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <HeaderSocials />
        <CTA />

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}
