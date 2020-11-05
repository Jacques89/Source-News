import React from 'react'
import App from './App'
import '../../../__mocks__/Fetch'

import { render, screen, act } from '@testing-library/react'

describe('App', () => {
  it('should render', async() => {
    await act(async() => render(<App />))
    expect(screen.getByTestId('app')).toMatchSnapshot()
  })
})
  
describe('API call', () => {
  it('fetches data from server when server returns a successful response', () => {
    const url = process.env.REACT_APP_NEWS_API
    const mockSuccessResponse = {}
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise, 
    })
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(url)

    global.fetch.mockClear()
  })
})