import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myimg.png'
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

    <>
    <div style={{
       backgroundImage: `url("https://wallpaperaccess.com/full/39655.jpg")` ,
       backgroundSize: 'cover',
       height:"120vh"

    }}>
      <br/>
    <header className='headerbg' style={{
      marginTop:"2%"
    }}>
   
      <div className='container header__container'>
        <h3 style={{
          color:"white",
          fontSize:"100px"
        }}> I'm</h3>
        <h1 className='gradient-text'>Naman Jain</h1>
        <h5 className='text-light'>
          <span className='tag'></span>
        </h5>

        <div className='me'>
     
        
        <div className='header__socials'>
   </div>
       

       
      </div>
      </div>
    </header>
    </div></>
  )
}
