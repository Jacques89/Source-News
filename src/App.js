import React, { useState, useEffect } from 'react'

import './App.scss'

import Navigation from './components/Navigation/Navigation'
import NewsContainer from './components/NewsContainer/NewsContainer'
import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchInput from './components/SearchInput/SearchInput'
import Footer from './components/Footer/Footer'


const App = () => {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  
  const [userInput, setUserInput] = useState('')

  const dataFetch = async() => {
    try {
      const request = await fetch("https://newscafapi.p.rapidapi.com/apirapid/news/", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "newscafapi.p.rapidapi.com",
          "x-rapidapi-key": "5fc79354damshc76091ac5b0282cp1a5221jsn2ab34185811c"
        }
      });
      let response = await request.json()
      console.log(response)
      setNews(response)
      setLoading(false)
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
    dataFetch();
    setCategory('Business');
  }, [])
 
  return (
    <div>
      <Navigation changeCategory={changeCategory} category={category} />
      <SearchInput handleSubmit={handleSubmit} />
      {news.length > 1 ? <NewsContainer news={news} category={category} userInput={userInput} /> : null}
      {loading ? <LoadingPage /> : null}
      {news.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App