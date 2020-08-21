import React, { useState, useEffect } from 'react'

import './App.scss'

import Navigation from './components/Navigation/Navigation'
import NewsContainer from './components/NewsContainer/NewsContainer'
import LoadingPage from './components/LoadingPage/LoadingPage'
import SearchInput from './components/SearchInput/SearchInput'
import Footer from './components/Footer/Footer'


const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState('')
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async() => {
    try {
      const serverDataSports = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd')
      const responseSports = await serverDataSports.json();
      responseSports.articles.map(el => el['topic'] = 'sport')

      const serverDataTech = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd')
      const responseTech = await serverDataTech.json();
      responseTech.articles.map(el => el['topic'] = 'technology')

      const serverDataBusiness = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd')
      const responseBusiness = await serverDataBusiness.json()
      responseBusiness.articles.map(el => el['topic'] = 'business')

      const serverDataEntertainment = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd')
      const responseEntertainment = await serverDataEntertainment.json()
      responseEntertainment.articles.map(el => el['topic'] = 'entertainment')        

      let allNews = responseSports.articles.concat(responseTech.articles, responseBusiness.articles, responseEntertainment.articles)
      const shuffleArray = array => array.sort(() => Math.random() - 0.5);
      allNews = shuffleArray(allNews)

      setNews(allNews)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const changeTopic = topic => {
    setTopic(topic)
    setUserInput('')
  } 
  const handleSubmit = input => {
    setUserInput(input)
  } 
  
 
  return (
    <div>
      <Navigation changeTopic={changeTopic} />
      <SearchInput handleSubmit={handleSubmit} />
      {news.length > 1 ? <NewsContainer news={news} topic={topic} userInput={userInput} /> : null}
      {loading ? <LoadingPage /> : null}
      {news.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default App