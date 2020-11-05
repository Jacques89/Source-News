import React from 'react'
import SearchInput from './SearchInput'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchInput', () => {
  const setup = () => {
    const utils = render(<SearchInput />)
    const input = utils.getByPlaceholderText('Search')
    return {
      input,
      ...utils,
    }
  }
  it('displays the correct placeholder text', () => {
    setup()
    expect(screen.getByPlaceholderText('Search')).toBeTruthy()
  })

  it('successfully changes back to the placeholder text onSubmit', () => {
    const handleSubmit = jest.fn()
    const { queryByPlaceholderText, getByRole } = render(<SearchInput handleSubmit={handleSubmit} />)
    const searchInput = queryByPlaceholderText('Search')
    userEvent.click(searchInput, 'Search')
    expect(searchInput.value).toBe('')
    userEvent.type(searchInput, 'test')
    expect(searchInput.value).toBe('test')
    userEvent.click(getByRole('button'))
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(searchInput.value).toBe('')
  })

  it('changes value on user input', () => {
    const { input } = setup()
    expect(input.value).toBe('')
    userEvent.type(input, 'new value')
    expect(input.value).toBe('new value')
  })
})