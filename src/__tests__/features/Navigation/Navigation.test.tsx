import Navigation from '../../../features/Navigation/Navigation'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NavigationBar', () => {
  const changeCategory: () => void = jest.fn()
  const menuOpen: boolean = false

  it('renders correctly', () => {
    render(<Navigation changeCategory={changeCategory} />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  describe('Heading and Sub-Heading', () => {
    beforeEach(() => {
      render(<Navigation changeCategory={changeCategory} menuOpen={menuOpen} />)
    })

    it('displays a heading', () => {
      expect(screen.getByRole('heading', { name: /Source News/i }))
    })

    it('displays a sub-heading', () => {
      expect(
        screen.getByRole('heading', {
          name: /Straight from the sources mouth!/i
        })
      )
    })
  })
  describe('News Categories', () => {
    const categories: Array<string> = [
      'World',
      'Business',
      'Sports',
      'Entertainment',
      'Technology'
    ]
    it('displays news categories', () => {
      render(<Navigation changeCategory={changeCategory} menuOpen={menuOpen} />)
      expect(screen.getByLabelText('news-categories'))
      expect(screen.getAllByLabelText('category')).toHaveLength(5)
      categories.map((category) =>
        expect(screen.getByText(category).textContent).toBe(category)
      )
    })

    it('changes category when a category in the menu is clicked', () => {
      render(
        <Navigation menuOpen={!menuOpen} changeCategory={changeCategory} />
      )
      userEvent.click(screen.getByText('Business'))
      expect(changeCategory).toHaveBeenCalledTimes(1)
    })
  })
})
