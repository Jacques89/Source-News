import React from 'react'
import SearchInput from './SearchInput'

import { render, fireEvent, cleanup } from '@testing-library/react'

describe('SearchInput', () => {
  afterEach(cleanup)
  
  const setup = () => {
    const utils = render(<SearchInput />)
    const input = utils.getByPlaceholderText('Search')
    return {
      input,
      ...utils
    }
  }

  it('renders', () => {
    const { getByTestId } = render(<SearchInput />)
    expect(getByTestId('SearchBar')).toBeTruthy()
  })

  it('changes value on user input', () => {
    const { input } = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, { 
      target: { value: 'new value' } 
    })
    expect(input.value).toBe('new value')
  })
})