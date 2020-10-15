import React from 'react'
import NewsBox from './NewsBox'

import { render, screen, act } from '@testing-library/react' 

describe('NewsBox', () => {
  const props = {
    article: 'article-title',
    image: 'news.png',
    description: 'News description'
  }

  it('renders the NewsBox component correctly', () => {
    const NewsBoxComponent = render(<NewsBox {...props} />)
    expect(NewsBoxComponent).toMatchSnapshot()
  })
  
  it('renders with an article-title', async() => {
    const { getByTestId } = render(<NewsBox {...props} />)
    expect(getByTestId('article-title')).toBeTruthy()
  })

  it('renders with a background image', () => {
    const { getByTestId } = render(<NewsBox {...props} />)
    expect(getByTestId('article-image')).toBeTruthy()
  })

  it('renders with article content', () => {
    const { getByTestId } = render(<NewsBox {...props} />)
    expect(getByTestId('article-content')).toBeTruthy()
  })
})