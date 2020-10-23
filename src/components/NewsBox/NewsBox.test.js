import React from 'react'
import NewsBox from './NewsBox'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NewsBox', () => {
  const props = {
    article: 'article-title',
    image: 'news.png',
    description: 'News description',
    source: 'https://externalsource.com'
  }

  it('renders the NewsBox component', () => {
    const { getByTestId } = render(<NewsBox {...props} />)
    expect(screen.getByTestId('article')).toMatchSnapshot()
  })

  it('should navigate to an external site when link is clicked', () => {
    const { getByText } = render(<a href="https://sourcetest.com/">Continue reading</a>)
    const link = getByText('Continue reading')
    userEvent.click(link)
    expect(getByText('Continue reading').href).toBe('https://sourcetest.com/')
  })
})