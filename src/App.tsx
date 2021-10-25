import { useState, useEffect } from 'react'

import './styles/App.scss'

import Navigation from './components/Navigation/Navigation'
import NewsContainer from './containers/NewsContainer/NewsContainer'
import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchInput from './components/SearchInput/SearchInput'
import Footer from './components/Footer/Footer'

require('dotenv').config()

const App = () => {
  const [news, setNews] = useState<Array<NewsProps>>([])
  const [category, setCategory] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [userInput, setUserInput] = useState<string>('')

  const newsAPI: string = `${process.env.REACT_APP_NEWS_API}`

  const dataFetch = async () => {
    try {
      const request: Response = await fetch(newsAPI)
      let response = await request.json()
      setNews(response)
      setLoading(false)
      return response
    } catch (error: unknown) {
      console.log('ERROR:', error)
    }
  }

  const changeCategory = (category: string) => {
    setCategory(category)
    setUserInput('')
  }
  const handleSubmit = (input: string) => {
    setUserInput(input)
  }

  useEffect(() => {
    dataFetch()
    setCategory('World')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div data-testid='app'>
      <Navigation changeCategory={changeCategory} category={category} />
      <SearchInput handleSubmit={handleSubmit} />
      {news.length > 1 ? (
        <NewsContainer news={news} category={category} userInput={userInput} />
      ) : null}
      {loading ? <LoadingPage /> : null}
      {news.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App