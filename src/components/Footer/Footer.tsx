import { ReactElement } from 'react'

import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../../styles/Footer.scss'

const Footer = (): ReactElement => {
  return (
    <footer data-testid='footer'>
      <p className='copyright'>Jacques Nalletamby, 2021</p>
      <div className='icons'>
        <a
          data-testid='githubLink'
          href='https://github.com/jacques89'
          className='icon'
        >
          <FaGithubSquare data-testid='githubIcon' />
        </a>{' '}
        <a
          data-testid='linkedinLink'
          href='https://www.linkedin.com/in/jacquesnalletamby/'
          className='icon'
        >
          <FaLinkedin data-testid='linkedinIcon' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
