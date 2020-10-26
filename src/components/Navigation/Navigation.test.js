import React from 'react'
import Navigation from './Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory = jest.fn()

  beforeEach(() => {
    render(<Navigation changeCategory={changeCategory} />)
  })

  it('renders a title and sub-title', () => {
    expect(screen.getByRole('heading', {name: /Source News/i }))
    expect(screen.getByRole('heading', {name: /Straight from the sources mouth!/i }))
  })

  it('renders news categories', () => {
    expect(screen.getByTestId('news-categories')).toMatchSnapshot()
  })

  it('changes category when a category is clicked', () => {
    const handleClick = changeCategory
    render(<li onClick={handleClick}>Business</li>)
    userEvent.click(screen.getByTestId('business'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})