import LoadingPage from '../../../features/LoadingPage/LoadingPage'

import { render, screen } from '@testing-library/react'

describe('LoadingPage', () => {
  beforeEach(() => {
    render(<LoadingPage loading={true} />)
  })
  
  it('renders correctly', () => {
    expect(screen.getByTestId('loading-page')).toMatchSnapshot()
  })

  describe('if loading is true', () => {
    it('should render a loading message with a spinner', () => {
      expect(screen.getByText('loading')).toBeInTheDocument()
      expect(screen.getByTestId('spinner')).toBeInTheDocument()
    })
  })
})
