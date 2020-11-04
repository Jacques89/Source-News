import React from 'react'
import Navigation from './Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory = jest.fn()
  const menuOpen = false

  const categories = ['World, Business, Sports, Entertainment, Technology']

  it('renders correctly', () => {
    const component = render(
      <Navigation />
    ) 
    expect(component).toMatchSnapshot()
  })

  it('renders a title and sub-title', () => {
    render(
      <Navigation 
        changeCategory={changeCategory}
        menuOpen={menuOpen}
      />
    )
    expect(screen.getByRole('heading', {name: /Source News/i }))
    expect(screen.getByRole('heading', {name: /Straight from the sources mouth!/i }))
  })

  it('renders news categories', () => {
    render(
      <Navigation 
        changeCategory={changeCategory}
        menuOpen={menuOpen}
      />
    )
    expect(screen.getByLabelText('news-categories'))
    expect(screen.getAllByLabelText('category')).toHaveLength(5)
  })

  it('changes category when a category is clicked', () => {
    render(
      <Navigation 
        menuOpen={!menuOpen}
        changeCategory={changeCategory}
      />
    )
    userEvent.click(screen.getByText('Business'))
    expect(changeCategory).toHaveBeenCalledTimes(1)
  })
})