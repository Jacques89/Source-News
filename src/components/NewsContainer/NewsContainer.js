import React, { Component } from 'react'

import LoadingPage from '../LoadingPage/LoadingPage'
import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

import SearchInput from '../SearchInput/SearchInput'

export default class NewsContainer extends Component {
  state = ({
    news: [],
    loading: true,
    input: '',
    topic: this.props.currentTopic
  })

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
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

  passInput = input => {
    this.setState({
        input: input
    })
    console.log(this.state.input);
  }

  render() {
    const topic = this.props.currentTopic
    const { news } = this.state

    let articles

    // !article.description.includes('https') &&
    // !article.description.includes('%20') &&
    // article.urlToImage.includes('https') &&

    if (news.length > 0) {
      articles = news
        .filter(article => article.title.toLocaleLowerCase().indexOf(this.state.input.toLocaleLowerCase()) !== -1)
        .map((article, i) => {
          if (article.description &&
            (topic === '' ||  topic === article.topic )) {
              return (
                <div className="box" key={i}><NewsBox key={i} article={article} /></div>
              )
            }
        })
    } else {
      return <LoadingPage />
    }

    return (
      <div className="container" >
        <SearchInput passInput={this.passInput} />
        {articles}
      </div>
    )
  }
}