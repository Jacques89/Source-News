import SearchInput from './SearchInput'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchInput', () => {
  const setup = () => {
    const utils = render(<SearchInput handleSubmit={() => {}}/>)
    const input = utils.getByPlaceholderText('Search')
    return {
      input,
      ...utils
    }
  }
  it('displays the correct placeholder text', () => {
    setup()
    expect(screen.getByPlaceholderText('Search')).toBeTruthy()
  })

  it('successfully changes back to the placeholder text onSubmit', () => {
    const getInput = jest.fn()
    const { queryByPlaceholderText, getByRole } = render(
      <SearchInput handleSubmit={getInput} />
    )
    const searchInput = queryByPlaceholderText('Search') as HTMLInputElement
    userEvent.click(searchInput)
    expect(searchInput?.value ).toBe('')
    userEvent.type(searchInput, 'test')
    expect(searchInput?.value).toBe('test')
    userEvent.click(getByRole('button'))
    expect(getInput).toHaveBeenCalledTimes(1)
    expect(searchInput?.value).toBe('')
  })
})
