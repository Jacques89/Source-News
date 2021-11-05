import { useState, useEffect } from 'react'

import './styles/App.scss'

import Navigation from './features/Navigation/Navigation'
import NewsContainer from './pages/NewsPage/NewsPage'
import LoadingPage from './features/LoadingPage/LoadingPage'
import SearchInput from './features/SearchInput/SearchInput'
import Footer from './features/Footer/Footer'

require('dotenv').config()

type NewsProps = {
  category: string
  content: string
  img: string
  title: string
}

const App = () => {
  const [news, setNews] = useState<Array<NewsProps>>([])
  const [category, setCategory] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [userInput, setUserInput] = useState<string>('')

  const newsAPI: string = `${process.env.REACT_APP_NEWS_API}`

  const dataFetch = async () => {
    try {
      // const request: Response = await fetch(newsAPI)
      // const response = await request.json()
      // setNews(response)
      setLoading(false)
      // return response
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
