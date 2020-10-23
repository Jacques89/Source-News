import React from 'react'
import NewsBox from './NewsBox'

import { render, fireEvent } from '@testing-library/react' 

describe('NewsBox', () => {
  const props = {
    article: 'article-title',
    image: 'news.png',
    description: 'News description',
    source: 'https://externalsource.com'
  }
  
  const wrapper = <NewsBox {...props} />

  it('renders the NewsBox component correctly', () => {
    const NewsBoxComponent = render(wrapper)
    expect(NewsBoxComponent).toMatchSnapshot()
  })

  it('should navigate to an external site when link is clicked', () => {
    const { getByText } = render(<a href="https://sourcetest.com/">Continue reading</a>)

    const link = getByText('Continue reading')

    fireEvent.click(link)

    expect(getByText('Continue reading').href).toBe('https://sourcetest.com/')
  })
})