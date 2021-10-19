import React from "react"
import App from "./App"
import { setupFetchStub } from "../__mocks__/Fetch"

import { render, screen, act } from "@testing-library/react"

describe("App", () => {
  it("should render", async () => {
    await act(async () => render(<App />))
    expect(screen.getByTestId("app")).toMatchSnapshot()
  })
})

describe("API call", () => {
  const data = [
    {
      category: "World",
      content: "Squirrel becomes President",
      img: "some Image URL",
      title: "Squirrel has now become President of the World",
    },
    {
      category: "Sports",
      content: "Messi wins World Cup with Argentina",
      img: "some url image",
      title: "Messi finally wins a World Cup",
    },
  ]

  it("fetches data from server when server returns a successful response", async () => {
    const url = process.env.REACT_APP_NEWS_API
    const fakeData = { news: data }
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData))

    const res = await fetch(url)
    const json = await res.json()
    expect(json).toEqual({ news: fakeData })

    global.fetch.mockClear()
  })
})
