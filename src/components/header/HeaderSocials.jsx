import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/shubham-patil-a06743213/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <BsLinkedin />{' '}
      </a>
      <a
        href='https://github.com/shubham-am-i'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <BsGithub />{' '}
      </a>
    </div>
  )
}
