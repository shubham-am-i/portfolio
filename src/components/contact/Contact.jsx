import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7t0ko3u',
        'template_okdu7m5',
        form.current,
        'arWqo-TAe1GOnyDMc'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    alert('Message Sent! Thankyou')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <a
              href='mailto:Bhopalinaman@gmail.com'
              rel='noopener noreferrer'
            >
              Email Me
            </a>
          </article>

          <article className='contact__option'>
            <RiLinkedinBoxFill className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a
              href='https://www.linkedin.com/in/namanj413/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send A Message
            </a>
          </article>

          <article className='contact__option'>
            <RiGithubFill className='contact__option-icon' />
            <h4>Github</h4>
            <a
              href='https://github.com/Namanj413'
              target='_blank'
              rel='noopener noreferrer'
            >
             Follow On Github
            </a>
          </article>
        </div>
        {/* END OF CONTACT SECTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required  />
          <input type='email' name='email' placeholder=' Email' required />
          <textarea
            name='message'
            rows='4'
            placeholder="Hey, it seems like your profile suits our requirements. Let's have a talk"
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
