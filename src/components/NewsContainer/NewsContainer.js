import React, { Component } from 'react'

import LoadingPage from '../LoadingPage/LoadingPage'
import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

const proxyUrl  = "https://cors-anywhere.herokuapp.com/"
const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&apiKey=a9c32aed281e41fdbd5a02a8bbc61cfd`

export default class NewsContainer extends Component {
    state = ({
      news: [],
      loading: false
    })

    componentDidMount = async () => {
      try {
        const serverData = await fetch(url)
        const response = await serverData.json();
        this.setState({
          news: response.articles,
          loading: false
        })
      } catch (error) {
          alert(error)
      }
  }

    render() {
      const { news } = this.state
      let allArticles;
      if (news.length > 0) {
          allArticles = news.map((article, i) => {
              if (!article.description.includes('https')) {
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
          {allArticles}
        </div>
      )
  }
}