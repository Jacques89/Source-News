import LoadingPage from '../../../features/LoadingPage/LoadingPage'

import { render, screen, waitFor, act } from '@testing-library/react'

describe('LoadingPage', () => {
  beforeEach(() => {
    act(() => {
      render(<LoadingPage loading={true} />)
    })
  })

  it('renders correctly', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('loading-page')).toMatchSnapshot()
    })
  })

  describe('if loading is true', () => {
    it('should render a loading message with a spinner', async () => {
      await waitFor(() => {
        expect(screen.getByText('loading')).toBeInTheDocument()
        expect(screen.getByTestId('spinner')).toBeInTheDocument()
      })
    })
  })
})
