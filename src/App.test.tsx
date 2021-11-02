import App from './App'
import { setupFetchStub } from './test-utils/helpers/Fetch'

import { render, screen } from '@testing-library/react'

type NewsProps = {
  category: string
  content: string
  img: string
  title: string
}

describe('App', () => {
  it('renders correctly', () => {
    render(<App />)
    expect(screen.getByTestId('app')).toMatchSnapshot()
  })
})

describe('API Request', () => {
  // TODO refactor
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(() => {}))
    // Clear
    const fetchSpy = jest.spyOn(global, 'fetch')
    fetchSpy.mockClear()
  })

  const mockNewsResponse: Array<NewsProps> = [
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

  const url: string = `${process.env.REACT_APP_NEWS_API}`

  it('fetches data from API successfully', async () => {
    const fakeData: Array<NewsProps> = mockNewsResponse
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockImplementation(setupFetchStub(fakeData))

    const res: Response = await fetch(url)
    const json: Array<NewsProps> = await res.json()
    expect(json).toEqual({ news: fakeData })
    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })
  it('returns an empty array if no data is available from API', async () => {
    const emptyData: Array<NewsProps> = []
    const fetchSpy = jest
      .spyOn(global, 'fetch')
      .mockImplementation(setupFetchStub(emptyData))

    const res: Response = await fetch(url)
    const json: Array<NewsProps> = await res.json()
    expect(json).toEqual({ news: emptyData })
    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })
})
