import React from 'react'
import SearchInput from './SearchInput'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchInput', () => {
  const setup = () => {
    const utils = render(<SearchInput />)
    const input = utils.getByPlaceholderText('Search')
    return {
      input,
      ...utils
    }
  }

  it('changes value on user input', () => {
    const { input } = setup()
    expect(input.value).toBe('')
    userEvent.type(input, 'new value')
    expect(input.value).toBe('new value')
  })
})