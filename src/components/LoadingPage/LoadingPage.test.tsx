import LoadingPage from './LoadingPage'

import { render, screen } from '@testing-library/react'

describe('LoadingPage', () => {
  it('renders a loading page', () => {
    render(<LoadingPage loading={true} />)
    expect(screen.getByTestId('loading-page')).toMatchSnapshot()
  })

  describe('if loading is true', () => {
    it('should render a loading message with a spinner', () => {
      render(<LoadingPage loading={true} />)
      expect(screen.getByText('loading')).toBeTruthy()
      expect(screen.getByTestId('spinner')).toBeTruthy()
    })
  })
})
