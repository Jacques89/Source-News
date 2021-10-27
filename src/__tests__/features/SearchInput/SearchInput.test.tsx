import SearchInput from '../../../features/SearchInput/SearchInput'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchInput', () => {
  const handleSubmit: () => void = jest.fn()
  const searchInputInit = () => {
    const utils = render(<SearchInput handleSubmit={handleSubmit} />)
    const input = utils.getByPlaceholderText('Search')
    return {
      input,
      ...utils
    }
  }
  it('renders correctly', () => {
    render(<SearchInput handleSubmit={handleSubmit} />)
  })

  it('displays the correct placeholder text', () => {
    searchInputInit()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('successfully changes back to the placeholder text onSubmit', () => {
    const getInput: () => void = jest.fn()
    const { queryByPlaceholderText, getByRole } = render(
      <SearchInput handleSubmit={getInput} />
    )
    const searchInput = queryByPlaceholderText('Search') as HTMLInputElement
    userEvent.click(searchInput)
    expect(searchInput?.value).toBe('')
    userEvent.type(searchInput, 'test')
    expect(searchInput?.value).toBe('test')
    userEvent.click(getByRole('button'))
    expect(getInput).toHaveBeenCalledTimes(1)
    expect(searchInput?.value).toBe('')
  })
})
