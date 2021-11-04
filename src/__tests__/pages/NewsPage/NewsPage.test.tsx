import NewsPage from '../../../pages/NewsPage/NewsPage'

import { render, screen } from '@testing-library/react'

describe('NewsPage', () => {
  const news: Array<NewsTitleCategory> = [
    {
      title: 'test title 1',
      category: 'technology'
    },
    {
      title: 'test title 2',
      category: 'sports'
    }
  ]

  const props: NewsPageProps = {
    news: news,
    category: '',
    userInput: ''
  }

  const noNewsCategoryProps: NewsPageProps = {
    news: [],
    category: 'technology',
    userInput: ''
  }

  const noNewsUserInputProps: NewsPageProps = {
    news: news,
    category: 'technology',
    userInput: 'Master coding in 30 mins'
  }

  it('renders correctly', () => {
    render(<NewsPage {...props} />)
    expect(screen.getByTestId('newsPage')).toBeInTheDocument()
  })

  describe('User Input', () => {
    describe('User Input Search', () => {
      it('should render a message when no news is available from user input within a category', () => {
        const noNewsUserInputMock = `Sorry, there is no news currently available for ${noNewsUserInputProps.userInput} in ${noNewsUserInputProps.category}`
        render(<NewsPage {...noNewsUserInputProps} />)
        expect(screen.getByText(noNewsUserInputMock)).toBeInTheDocument()
      })
    })
  })
  describe('Category Selection', () => {
    describe('No news within category', () => {
      it('should render a message when no news is available in category', () => {
        const noNewsCategoryMock = `Sorry, there is no news in ${noNewsCategoryProps.category} currently available`
        render(<NewsPage {...noNewsCategoryProps} />)
        expect(screen.getByText(noNewsCategoryMock)).toBeInTheDocument()
      })
    })
  })
})
