import React from 'react'

import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <p className='copyright'>Jacques Nalletamby, 2020</p>
      <div className='icons'>
        <a href='https://github.com/jacques89' className='icon'>
          <FaGithubSquare />
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/jacquesnalletamby/'
          className='icon'
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
