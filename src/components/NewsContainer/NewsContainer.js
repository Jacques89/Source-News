import React, { Component } from 'react'

import LoadingPage from '../LoadingPage/LoadingPage'
import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

import SearchInput from '../SearchInput/SearchInput'

export default class NewsContainer extends Component {
  state = ({
    news: [],
    loading: true
  })

  componentDidMount = async () => {
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
      allNews = this.shuffleArray(allNews)
      
      this.setState({
        news: allNews,
        loading: false
      })
    } catch (error) {
        alert(error)
    }
  }

  shuffleArray = array => array.sort(() => Math.random() - 0.5)

  filterNews = currentTopic => {
    let newState = this.state.news.filter(el => el.topic === this.props.currentTopic)
    this.setState({
      news: newState
    })
  }

  render() {
    const topic = this.props.currentTopic
    const { news } = this.state

    let articles

    if (news.length > 0) {
      articles = news.map((article, i) => {
        if (article.description && !article.description.includes('https') && !article.description.includes('%20') && topic === '') {
          return (
            <div className="box" key={i}><NewsBox key={i} article={article} /></div>
          )
        }
        else if (article.description && !article.description.includes('https') && !article.description.includes('%20') && article.topic === topic) {
          return (
            <div className="box" key={i}>
              <NewsBox key={i} article={article} />
            </div>
          )
        } 
      })
    } else {
      return <LoadingPage />
    }

    return (
      <div className="container" >
        <SearchInput passInput={this.props.passInput} />
        {articles}
      </div>
    )
  }
}