import React from 'react'
import App, { dataFetch } from './App'

import { render, screen, wait } from '@testing-library/react'

describe('App', () => {
  describe('when the fetch operation is pending', () => {
    it('should render', () => {
      const { getByTestId } = render(<App />)

      expect(getByTestId('app')).toBeTruthy()
    })
  })

  describe('MockAPI', () => {
    const mockUrl = '/api/news'
    const mockNews = [{ 
      name: 'world-news', 
      name: 'sports-news' 
    }]
    const getNews = jest.fn(url => mockNews)
    it('returns news from an api call', () => {
      expect(getNews(mockUrl)).toBe(mockNews)
      console.log(getNews)
    })
    it('called getNews with a mockUrl', () => {
      expect(getNews).toHaveBeenCalledWith(mockUrl)
    })
  })
})