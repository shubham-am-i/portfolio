import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
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
              href='mailto:shubhampatil.dev@gmail.com'
              rel='noopener noreferrer'
            >
              Email Me
            </a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <a
              href='https://m.me/profile.php?id=100012652503558'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send A Message
            </a>
          </article>

          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a
              href='https://api.whatsapp.com/send?text=Hey shubham, I had recently gone through your portfolio...&phone=918767598584'
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp Me
            </a>
          </article>
        </div>
        {/* END OF CONTACT SECTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
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
