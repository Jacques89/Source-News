import React, { Component } from 'react'

import axios from "axios";

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss";

export default class ContainerOfNews extends Component {
  state = ({
      news: []
  })

  componentDidMount = async () => {
    axios('https://newscafapi.p.rapidapi.com/apirapid/news/world/?q=news', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "newscafapi.p.rapidapi.com",
        "x-rapidapi-key": "5fc79354damshc76091ac5b0282cp1a5221jsn2ab34185811c"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
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