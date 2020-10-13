import React from 'react'
import NewsBox from './NewsBox'

import { shallow } from 'enzyme'
import { render, screen, act } from '@testing-library/react'

const setup = () => {
  let props = {
    article: 'article-title'
  }
  return {props}
}

describe('NewsBox', () => {
  const { wrapper } = setup()
  it('renders correctly with an article-title', async() => {
    render(<NewsBox article={setup} />)
  })  
})