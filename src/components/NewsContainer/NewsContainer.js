import React, { Component } from 'react'

import axios from 'axios'

import LoadingPage from '../LoadingPage/LoadingPage'
import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

export default class NewsContainer extends Component {
    state = ({
      news: [],
      loading: true
    })

    componentDidMount = async () => {
      try {
        const serverDataSports = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd');
        const responseSports = await serverDataSports.json();
        const serverDataTech = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd');
        const responseTech = await serverDataTech.json();
        const serverDataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=gb&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd');
        const responseBusiness = await serverDataBusiness.json();
        const serverDataEntertainment = await fetch('http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd');
        const responseEntertainment = await serverDataEntertainment.json();

        let allNews = responseSports.articles.concat(responseTech.articles, responseBusiness.articles, responseEntertainment.articles);
        allNews = this.shuffleArray(allNews)
        this.setState({
          news: allNews,
          loading: false
        })
      } catch (error) {
          alert(error)
      }
    }

    shuffleArray = array => array.sort(() => Math.random() - 0.5);

    render() {
      const { news } = this.state
      let articles
      if (news.length > 0) {
          articles = news.map((article, i) => {
              if (article.description && !article.description.includes('http') && !article.description.includes('%20')) {
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
          {articles}
        </div>
      )
  }
}