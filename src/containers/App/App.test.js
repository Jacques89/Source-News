import React from 'react'
import App from './App'

import { shallow } from 'enzyme'
import { render, screen, act } from '@testing-library/react'

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    news: [
      {
        category: 'World', 
        content: 'Squirrel becomes President',
        img: 'some Image URL',
        title: 'Squirrel has now become President of the World'
      },
      {
        category: 'Sports',
        content: 'Messi wins World Cup with Argentina',
        img: 'some url image',
        title: 'Messi finally wins a World Cup'
      }
    ]
  })
}))

describe('App', () => {
  it('should render', async() => {
    await act(async() => render(<App />))

    expect(screen.getByTestId('app')).toBeTruthy()
  })
  
  it('fetches data from server when server returns a successful response', done => {
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
    done()
  })
})