import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Navigation from './Navigation'

afterEach(cleanup)

// const links = [
//   { text: 'World', location: '/World' },
//   { text: 'Business', location: '/Business' },
//   { text: 'Sports', location: '/Sports' },
//   { text: 'Entertainment', location: '/Entertainment' },
//   { text: 'Technology', location: '/Technology' }
// ]

describe('NavigationBar', () => {
  const changeCategory = jest.fn()

  beforeEach(() => {
    render(<Navigation changeCategory={changeCategory} /> )
  })

  it('renders a World news option', () => {
    expect(screen.getByText(/World/)).toBeInTheDocument()
  })

  it('should change category when a category is clicked', () => {
    const handleClick = changeCategory
    render(<li onClick={handleClick}>World</li>)
    fireEvent.click(screen.getByTestId('world'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})