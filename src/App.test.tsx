import App from './App'
import { setupFetchStub } from './test-utils/helpers/Fetch'

import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('should render', () => {
    render(<App />)
    expect(screen.getByTestId('app')).toMatchSnapshot()
  })
})

describe('API call', () => {
  const mockNewsResponse: Array<Object> = [
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

  it('fetches data from server successfully', async () => {
    const url: string = `${process.env.REACT_APP_NEWS_API}`
    const fakeData: Object[] = mockNewsResponse
    const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(setupFetchStub(fakeData))
    
    const res = await fetch(url)
    const json = await res.json()
    expect(json).toEqual({ news: fakeData })
    expect(fetchSpy).toHaveBeenCalledTimes(1)
    // Clear 
    fetchSpy.mockClear()
  })
})