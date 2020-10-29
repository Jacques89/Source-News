import React from 'react'
import Navigation from './Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory = jest.fn()
  const menuOpen = false
  const mockCategory = {
    world: {
      name: 'World',
      isSelected: true
    },
    business: {
      name: 'Business',
      isSelected: false
    },
    sports: {
      name: 'Sports',
      isSelected: false
    },
    entertainment: {
      name: 'Entertainment',
      isSelected: false
    },
    technology: {
      name: 'Technology',
      isSelected: false
    }
  }

  it('renders correctly', () => {
    const component = render(
      <Navigation 
        category={mockCategory}
        changeCategory={changeCategory}
        menuOpen={menuOpen}
      />
    ) 
    expect(component).toMatchSnapshot()
  })

  it('renders a title and sub-title', () => {
    render(
      <Navigation 
        category={mockCategory}
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
        category={mockCategory}
        changeCategory={changeCategory}
        menuOpen={menuOpen}
      />
    )
    expect(screen.getByLabelText('news-categories'))
  })

  it('changes category when a category is clicked', () => {
    render(
      <Navigation 
        category={mockCategory}
        menuOpen={!menuOpen}
        changeCategory={changeCategory}
      />
    )
    userEvent.click(screen.getByText('Business'))
    expect(changeCategory).toHaveBeenCalledTimes(1)
  })
})