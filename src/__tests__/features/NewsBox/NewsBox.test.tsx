import NewsBox from '../../../features/NewsBox/NewsBox'

import { render, screen } from '@testing-library/react'

describe('NewsBox', () => {
  const props: NewsBoxProps = {
    article: {
      title: 'article-title',
      img: 'news.png',
      content: 'News description',
      source_url: 'https://externalsource.com/'
    }
  }

  it('renders correctly', () => {
    render(<NewsBox {...props} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText(/article-title/i)).toBeInTheDocument()
    expect(screen.getByTestId('img')).toBeInTheDocument()
    expect(screen.getByText(/News description/i)).toBeInTheDocument()
    expect(screen.getByText(/Continue reading/i)).toBeInTheDocument()
  })
  describe('Continue Reading link', () => {
    it('should contain the correct external href value', () => {
      const { getByText } = render(
        <a href={props.article.source_url}>Continue reading</a>
      )
      expect(getByText('Continue reading').getAttribute('href')).toBe(
        props.article.source_url
      )
    })
  })
})
