import Footer from '../../../features/Footer/Footer'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })
  it('renders correctly', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
  describe('Github Link and Icon', () => {
    it('displays GitHub icon', () => {
      expect(screen.getByTestId('githubIcon')).toBeInTheDocument()
    })
    it('contains correct href value', () => {
      const githubHref: string = 'https://github.com/jacques89'
      expect(screen.getByTestId('githubLink').getAttribute('href')).toBe(
        githubHref
      )
    })
  })
  describe('LinkedIn Link and Icon', () => {
    it('displays LinkedIn Icon', () => {
      expect(screen.getByTestId('linkedinIcon')).toBeInTheDocument()
    })
    it('contains correct href value', () => {
      const linkedinHref: string =
        'https://www.linkedin.com/in/jacquesnalletamby/'
      expect(screen.getByTestId('linkedinLink').getAttribute('href')).toBe(
        linkedinHref
      )
    })
  })
})
