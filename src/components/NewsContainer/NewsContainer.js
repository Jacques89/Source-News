import React, { useState, useEffect } from 'react'

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

const NewsContainer = ({ news, topic, userInput }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(
      news
      .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
      .map((article, i) => {
        if (article.description &&
        typeof article.urlToImage === 'string' && !article.description.includes('https') && (topic === '' ||
        topic === article.topic)) {
          return (
            <div className="box" key={i}><NewsBox key={i} article={article} /></div>
          )
        } else {
          return null
        }
      })
    )
  }, [news, topic, userInput])
 

  return (
    <div className="container" >
      {articles}
    </div>
  )
}

export default NewsContainer