import React, { Component } from 'react'

import axios from "axios";

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss";

export default class ContainerOfNews extends Component {
  state = ({
      news: []
  })

  componentDidMount = async () => {
      try {
          const serverData = await axios('https://newscafapi.p.rapidapi.com/apirapid/news/world/?q=news&apikey=5fc79354damshc76091ac5b0282cp1a5221jsn2ab34185811c');
          const response = await serverData.json();
          this.setState({
              news: response.articles
          })
      } catch (error) {
          alert(error)
      }
  }

  render() {
      const { news } = this.state
      let articles;
      if (news.length > 0) {
          articles = news.map((article, i) => {
              if (!article.description.includes('https')) {
                  return (
                      <div className="box" key={i}><NewsBox key={i} article={article} /></div>
                  )
              }
          })
      }
    return (
        <div className="container" >
            {articles}

        </div>
    )
  } 
}