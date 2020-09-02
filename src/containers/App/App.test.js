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

  const dataFetch = jest.fn()

  const mockData = [
    {
      id: 1,
      title: 'world-news'
    },
    {
      id: 2,
      title: 'sports-news'
    }
  ]

  it('fetches data from server when server returns a successful response', async () => {
    dataFetch.mockResolvedValueOnce(
      mockData
    )
    const response = await dataFetch()
    expect(response).toEqual(mockData)
    render(<App />)
  })
})