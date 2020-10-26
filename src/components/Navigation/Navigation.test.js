import React from 'react'
import Navigation from './Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory = jest.fn()
  const menuOpen = jest.fn()

  it('renders a title and sub-title', () => {
    render(
      <Navigation 
        menuOpen={false} 
        changeCategory={changeCategory} 
      />
    )
    expect(screen.getByRole('heading', {name: /Source News/i }))
    expect(screen.getByRole('heading', {name: /Straight from the sources mouth!/i }))
  })

  it('renders news categories', () => {
    render(
      <Navigation 
        menuOpen={false} 
        changeCategory={changeCategory} 
      />
    )
    expect(screen.getByTestId('news-categories')).toMatchSnapshot()
  })

  it('changes category when a category is clicked', () => {
    render(
      <Navigation 
        menuOpen={true} 
        changeCategory={changeCategory} 
      />
    )
    userEvent.click(screen.getByTestId('business'))
    expect(changeCategory).toHaveBeenCalledTimes(1)
    expect(menuOpen).toBeTruthy()
  })
})