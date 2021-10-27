import NewsBox from '../../../features/NewsBox/NewsBox'

import { render, screen } from '@testing-library/react'

describe('NewsBox', () => {
  const mockProps: NewsBoxProps = {
    article: {
      title: 'article-title',
      img: 'news.png',
      content: 'News description',
      source_url: 'https://externalsource.com/'
    }
  }

  it('renders correctly', () => {
    render(<NewsBox {...mockProps} />)
    expect(screen.getByRole('article')).toMatchSnapshot()
  })
  describe('Continue Reading link', () => {
    it('should contain the correct href value', () => {
      const { getByText } = render(
        <a href={mockProps.article.source_url}>Continue reading</a>
      )
      expect(getByText('Continue reading').getAttribute('href')).toBe(
        mockProps.article.source_url
      )
    })
  })
})
