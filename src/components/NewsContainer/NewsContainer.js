import React, { Component } from 'react'

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

export default class ContainerOfNews extends Component {
    state = ({
        news: []
    })

    componentDidMount = async () => {
      fetch('https://newscafapi.p.rapidapi.com/apirapid/news/world/?q=news', {
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
      let allArticles;
      if (news.length > 0) {
          allArticles = news.map((article, i) => {
              if (!article.description.includes('https')) {
                  return (
                    <div className="box" key={i}><NewsBox key={i} article={article} /></div>
                  )
              }
          })
        return allArticles
      }


      return (
        <div className="container" >
          {allArticles}
          {/* <div className="box box1"><NewBox /></div>
          <div className="box box2"><NewBox /></div>
          <div className="box box3"><NewBox /></div>
          <div className="box box4"><NewBox /></div>
          <div className="box box5"><NewBox /></div>
          <div className="box box6"><NewBox /></div>
          <div className="box box7"><NewBox /></div>
          <div className="box box8"><NewBox /></div> */}
        </div>
      )
  }
}