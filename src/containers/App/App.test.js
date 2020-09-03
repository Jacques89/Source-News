import React from 'react'
import App from './App'

import { render } from '@testing-library/react'

describe('App', () => {
  describe('when the fetch operation is pending', () => {
    it('should render', () => {
      const { getByTestId } = render(<App />)

      expect(getByTestId('app')).toBeTruthy()
    })
  })

  describe('MockAPI', () => {
    const mockUrl = '/api/news'
    const mockNews = [
      { 
        name: 'world-news',
      },
      { 
      name: 'sports-news'
      }
    ]
    const dataFetch = jest.fn(url => mockNews)
    it('returns news from an api call', () => {
      expect(dataFetch(mockUrl)).toBe(mockNews)
      console.log(dataFetch)
    })
    it('called getNews with a mockUrl', () => {
      expect(dataFetch).toHaveBeenCalledWith(mockUrl)
    })
  })
})