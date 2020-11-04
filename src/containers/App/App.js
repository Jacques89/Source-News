import React, { useState, useEffect } from 'react'

import '../../styles/App.scss'

import Navigation from '../../components/Navigation/Navigation'
import NewsContainer from '../NewsContainer/NewsContainer'
import LoadingPage from '../../components/LoadingPage/LoadingPage'
import SearchInput from '../../components/SearchInput/SearchInput'
import Footer from '../../components/Footer/Footer'


const App = () => {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [userInput, setUserInput] = useState('')

  const newsAPI = process.env.REACT_APP_NEWS_API

  const dataFetch = async() => {
    try {
      const request = await fetch(
        newsAPI
      )
      let response = await request.json()
      setNews(response)
      setLoading(false)
      return response
    } catch (error) {
      console.log('ERROR:', error)
    }
  }

  const changeCategory = category => {
    setCategory(category)
    setUserInput('')
  } 
  const handleSubmit = input => {
    setUserInput(input)
  } 
  
  useEffect(() => {
    dataFetch()
    setCategory('World')
  }, [])
 
  return (
    <div data-testid='app'>
      <Navigation changeCategory={changeCategory} category={category} />
      <SearchInput handleSubmit={handleSubmit} />
      {news.length > 1 ? <NewsContainer news={news} category={category} userInput={userInput} /> : null}
      {loading ? <LoadingPage /> : null}
      {news.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App