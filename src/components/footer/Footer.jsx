import React from 'react'
import './footer.css'
import { RiArrowUpSLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href='#'>
        <RiArrowUpSLine className='rocket-top' />
        <p>Back to Top</p>
      </a>
    </footer>
  )
}
