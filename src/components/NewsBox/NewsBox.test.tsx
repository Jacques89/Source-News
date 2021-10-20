import NewsBox from './NewsBox'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NewsBox', () => {
  const props = {
    article: {
      title: 'article-title',
      img: 'news.png',
      content: 'News description',
      source_url: 'https://externalsource.com/'
    }
  }

  it('renders the NewsBox component', () => {
    render(<NewsBox {...props} />)
    expect(screen.getByRole('article')).toMatchSnapshot()
  })

  it('should navigate to an external site when link is clicked', () => {
    const { getByText } = render(
      <a href={props.article.source_url}>Continue reading</a>
    )
    const link = getByText('Continue reading')
    userEvent.click(link)
    expect(getByText('Continue reading').getAttribute('href')).toBe(
      props.article.source_url 
    )
  })
})
