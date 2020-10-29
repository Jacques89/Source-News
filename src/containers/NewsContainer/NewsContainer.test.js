import React from 'react'
import NewsContainer from './NewsContainer'

import { render, screen, act } from '@testing-library/react'

describe('NewsContainer', () => {
  const props = {
    news: [],
    category: 'News Category',
    userInput: 'User-Input'
  }
  it('renders the NewsContainer correctly', () => {
    const NewsContainerMock = render(<NewsContainer {...props} />)
    expect(NewsContainerMock).toMatchSnapshot()
  })

  it('should render a <div>', () => {
    const { getByTestId } = render(<NewsContainer {...props} />)
    expect(getByTestId('NewsContainer')).toBeTruthy()
  })
})
