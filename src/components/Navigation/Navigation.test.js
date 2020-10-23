import React from 'react'
import Navigation from './Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory = jest.fn()

  beforeEach(() => {
    render(<Navigation changeCategory={changeCategory} />)
  })

  it('renders news categories', () => {
    expect(screen.getByTestId('news-categories')).toMatchSnapshot()
  })

  it('should change category when a category is clicked', () => {
    const handleClick = changeCategory
    render(<li onClick={handleClick}>Business</li>)
    userEvent.click(screen.getByTestId('business'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})