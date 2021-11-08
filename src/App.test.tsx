// import App from './App'
// import {
//   render,
//   screen,
//   act,
//   waitFor,
//   waitForElementToBeRemoved
// } from '@testing-library/react'

import 'isomorphic-fetch'
import { fetchStub } from './test-utils/helpers/Fetch'

type NewsProps = {
  category: string
  content: string
  img: string
  title: string
}

describe('App', () => {
  //TODO reinitialise
  // it('renders correctly', async () => {
  //   act(() => {
  //     render(<App />)
  //   })
  //   await act(async () => {
  //     await waitForElementToBeRemoved(() => expect(screen.queryByText(/loading/i)))
  //   })
  //   waitFor(() => expect(screen.getByTestId('app')).toBeInTheDocument())
  // })
  describe('API Request', () => {
    beforeEach(() => {
      global.fetch = jest
        .fn()
        .mockImplementation(fetchStub(mockNewsResponse))
      // Clear
      const fetchSpy = jest.spyOn(global, 'fetch')
      fetchSpy.mockClear()
    })
    const url: string = `${process.env.REACT_APP_TEST_URL}`
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

    describe('Success', () => {
      it('fetches data from API successfully', async () => {
        const fakeData: Array<NewsProps> = mockNewsResponse
        const fetchSpy = jest
          .spyOn(global, 'fetch')
          .mockImplementation(fetchStub(fakeData))

        const res: Response = await fetch(url)
        const json: Array<NewsProps> = await res.json()
        console.log(json)
        expect(json).toEqual({ news: fakeData })
        expect(fetchSpy).toHaveBeenCalledTimes(1)
      })
    })
    describe('Failure', () => {
      it('returns an empty array if no data is available from API', async () => {
        const emptyData: Array<NewsProps> = []
        const fetchSpy = jest
          .spyOn(global, 'fetch')
          .mockImplementation(fetchStub(emptyData))

        const res: Response = await fetch(url)
        const json: Array<NewsProps> = await res.json()
        expect(json).toEqual({ news: emptyData })
        expect(fetchSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
