import React from 'react'

export default function CTA() {
  return (
    <div className='cta'>
      <a
        href='https://drive.google.com/file/d/1aMG9RqtmzH5cq9iZ_4Sxy_cdysgmc5t4/view?usp=sharing'
        className='btn'
        target='_blank'
        rel='noopener noreferrer'
      >
        View Resume{' '}
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  )
}
