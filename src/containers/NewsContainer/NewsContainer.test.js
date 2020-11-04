import React from 'react'
import NewsContainer from './NewsContainer'


import { render, screen } from '@testing-library/react'

describe('NewsContainer', () => {
  const news = [
    {
      title: 'test title 1',
      category: 'technology'
    },
    {
      title: 'test title 2',
      category: 'sports'
    }
  ]

  const props = {
    news: news,
    category: '',
    userInput: ''
  }

  const noNewsCategoryProps = {
    news: [],
    category: 'technology',
    userInput: ''
  }

  const noNewsUserInputProps = {
    news: news,
    category: 'technology',
    userInput: 'Master coding in 30 mins'
  }

  it('renders the NewsContainer correctly', () => {
    const NewsContainerRerender = render(<NewsContainer {...props} />)
    expect(NewsContainerRerender).toMatchSnapshot()
    console.log(<NewsContainer {...props} />)
  })

  it('should render an error message when no news is available from user input', () => {
    const noNewsUserInputMock = `Sorry, there is no news currently available for ${noNewsUserInputProps.userInput} in ${noNewsUserInputProps.category}`
    render(<NewsContainer {...noNewsUserInputProps} />)
    expect(screen.getByText(noNewsUserInputMock)).toBeInTheDocument()
  })

  it('should render an error message when no news is available in category selection', () => {
    const noNewsCategoryMock = `Sorry, there is no news in ${noNewsCategoryProps.category} currently available`
    render(<NewsContainer {...noNewsCategoryProps} />)
    expect(screen.getByText(noNewsCategoryMock)).toBeInTheDocument()
  })
})
